import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, X, ChevronRight, ChevronLeft, Send, FileText, Loader2, PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';

type Step = 'start' | 'destination' | 'purpose' | 'duration' | 'budget' | 'loading' | 'result';

export default function AIRecommendation() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<Step>('start');
  const [formData, setFormData] = useState({
    destination: '',
    purpose: '',
    duration: '',
    budget: '',
  });
  const [proposal, setProposal] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  React.useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open-ai-modal', handleOpen);
    return () => window.removeEventListener('open-ai-modal', handleOpen);
  }, []);

  const handleNext = (field: string, value: string, nextStep: Step) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setStep(nextStep);
  };

  const generateProposal = async () => {
    setStep('loading');
    setIsLoading(true);
    try {
      const response = await fetch('/api/ai/recommend-schedule', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          destination: formData.destination,
          purpose: formData.purpose,
          duration: formData.duration,
          budget: formData.budget,
          preferences: "기업 맞춤형 전문 제안서 형식으로 작성해주세요."
        }),
      });
      const data = await response.json();
      if (data.proposal) {
        setProposal(data.proposal);
        setStep('result');
      } else {
        throw new Error(data.error || "제안서 생성 실패");
      }
    } catch (error) {
      console.error(error);
      alert("제안서 생성 중 오류가 발생했습니다. 다시 시도해주세요.");
      setStep('start');
    } finally {
      setIsLoading(false);
    }
  };

  const reset = () => {
    setStep('start');
    setFormData({ destination: '', purpose: '', duration: '', budget: '' });
    setProposal('');
  };

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-24 right-6 z-40 flex flex-col items-end space-y-4">
        <motion.button
          whileHover={{ scale: 1.05, y: -5 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(true)}
          className="relative group"
        >
          {/* Animated Glow Backdrop */}
          <div className="absolute -inset-1 bg-gradient-to-r from-primary via-purple-500 to-blue-500 rounded-full blur-md opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse" />
          
          <div className="relative bg-dark/90 text-white pl-2 pr-6 py-2 rounded-full shadow-2xl flex items-center space-x-4 overflow-hidden border border-white/10 backdrop-blur-xl">
            {/* Icon with background */}
            <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-primary to-purple-600 shadow-lg shadow-primary/20">
              <Sparkles className="w-6 h-6 text-white animate-pulse" />
              
              {/* Particle effect simulation */}
              <div className="absolute inset-0 rounded-full border border-white/20 animate-ping opacity-20" />
            </div>
            
            <div className="flex flex-col items-start">
              <div className="flex items-center space-x-2">
                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-primary/80">Smart Assistant</span>
                <span className="flex h-1.5 w-1.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary"></span>
                </span>
              </div>
              <span className="font-bold text-sm tracking-tight">AI 맞춤 제안서 받기</span>
            </div>
            
            {/* Hover Arrow */}
            <div className="ml-1 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
              <ChevronRight className="w-4 h-4 text-primary" />
            </div>
          </div>
        </motion.button>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-dark/60 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden"
            >
              {/* Header */}
              <div className="p-8 border-b border-dark/5 flex justify-between items-center bg-bg/50">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-dark">AI 맞춤형 일정 제안</h3>
                    <p className="text-xs text-dark/40 font-medium">몇 가지 선택만으로 전문 제안서를 생성합니다.</p>
                  </div>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="w-10 h-10 rounded-full hover:bg-dark/5 flex items-center justify-center transition-colors"
                >
                  <X className="w-6 h-6 text-dark/40" />
                </button>
              </div>

              {/* Content */}
              <div className="p-8 min-h-[400px] flex flex-col">
                <AnimatePresence mode="wait">
                  {step === 'start' && (
                    <motion.div
                      key="start"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="flex flex-col items-center justify-center text-center space-y-8 py-10"
                    >
                      <div className="w-20 h-20 rounded-3xl bg-primary/5 flex items-center justify-center">
                        <FileText className="w-10 h-10 text-primary" />
                      </div>
                      <div className="space-y-4">
                        <h4 className="text-2xl font-bold text-dark">지금 바로 제안서를 확인해보세요</h4>
                        <p className="text-dark/60 leading-relaxed">
                          복잡한 입력 없이 선택만으로<br />
                          우리 회사에 딱 맞는 일정을 AI가 설계해드립니다.
                        </p>
                      </div>
                      <button 
                        onClick={() => setStep('destination')}
                        className="btn-primary w-full max-w-xs group relative overflow-hidden"
                      >
                        <span className="relative z-10 flex items-center justify-center">
                          AI 제안서 생성 시작
                          <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                      </button>
                    </motion.div>
                  )}

                  {step === 'destination' && (
                    <motion.div key="destination" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                      <h4 className="text-lg font-bold text-dark">어디로 떠나시나요?</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {['국내 (제주, 부산 등)', '해외 (동남아, 일본 등)', '해외 (유럽, 미주 등)', '미정 (추천 필요)'].map((opt) => (
                          <button
                            key={opt}
                            onClick={() => handleNext('destination', opt, 'purpose')}
                            className="p-6 rounded-2xl border-2 border-dark/5 hover:border-primary hover:bg-primary/5 text-left transition-all group"
                          >
                            <span className="font-bold text-dark group-hover:text-primary">{opt}</span>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {step === 'purpose' && (
                    <motion.div key="purpose" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                      <h4 className="text-lg font-bold text-dark">방문 목적이 무엇인가요?</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {['팀빌딩 워크샵', 'VIP 비즈니스 출장', '신입사원 해외 연수', '포상 휴가 (Incentive)'].map((opt) => (
                          <button
                            key={opt}
                            onClick={() => handleNext('purpose', opt, 'duration')}
                            className="p-6 rounded-2xl border-2 border-dark/5 hover:border-primary hover:bg-primary/5 text-left transition-all group"
                          >
                            <span className="font-bold text-dark group-hover:text-primary">{opt}</span>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {step === 'duration' && (
                    <motion.div key="duration" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                      <h4 className="text-lg font-bold text-dark">예상 기간은 어떻게 되나요?</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {['1박 2일', '2박 3일', '3박 4일', '4박 5일 이상'].map((opt) => (
                          <button
                            key={opt}
                            onClick={() => handleNext('duration', opt, 'budget')}
                            className="p-6 rounded-2xl border-2 border-dark/5 hover:border-primary hover:bg-primary/5 text-left transition-all group"
                          >
                            <span className="font-bold text-dark group-hover:text-primary">{opt}</span>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {step === 'budget' && (
                    <motion.div key="budget" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                      <h4 className="text-lg font-bold text-dark">선호하시는 예산 수준은?</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {['실속형 (가성비 중심)', '표준형 (가장 인기)', '프리미엄 (고품격 서비스)', '상관없음'].map((opt) => (
                          <button
                            key={opt}
                            onClick={() => {
                              setFormData(prev => ({ ...prev, budget: opt }));
                              generateProposal();
                            }}
                            className="p-6 rounded-2xl border-2 border-dark/5 hover:border-primary hover:bg-primary/5 text-left transition-all group"
                          >
                            <span className="font-bold text-dark group-hover:text-primary">{opt}</span>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {step === 'loading' && (
                    <motion.div
                      key="loading"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex flex-col items-center justify-center text-center space-y-6 py-20"
                    >
                      <div className="relative">
                        <Loader2 className="w-16 h-16 text-primary animate-spin" />
                        <Sparkles className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 text-primary animate-pulse" />
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-xl font-bold text-dark">AI가 제안서를 작성 중입니다</h4>
                        <p className="text-dark/40">잠시만 기다려주세요. 약 5~10초 정도 소요됩니다.</p>
                      </div>
                    </motion.div>
                  )}

                  {step === 'result' && (
                    <motion.div
                      key="result"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-6"
                    >
                      <div className="bg-bg p-6 rounded-3xl max-h-[400px] overflow-y-auto custom-scrollbar">
                        <div className="prose prose-sm max-w-none text-dark/80 whitespace-pre-wrap font-medium leading-relaxed">
                          {proposal}
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <button 
                          onClick={reset}
                          className="btn-glass flex-1 py-4 text-dark"
                        >
                          다시 만들기
                        </button>
                        <Link 
                          to="/contact" 
                          onClick={() => setIsOpen(false)}
                          className="btn-primary flex-1 flex items-center justify-center group relative overflow-hidden"
                        >
                          <Sparkles className="w-4 h-4 mr-2 text-white/80 group-hover:text-white transition-colors animate-pulse" />
                          상세 상담 신청하기
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Footer Progress */}
              {['destination', 'purpose', 'duration', 'budget'].includes(step) && (
                <div className="px-8 py-6 bg-bg/30 border-t border-dark/5 flex items-center justify-between">
                  <div className="flex space-x-2">
                    {['destination', 'purpose', 'duration', 'budget'].map((s, i) => (
                      <div 
                        key={s} 
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          ['destination', 'purpose', 'duration', 'budget'].indexOf(step) >= i 
                            ? 'w-8 bg-primary' 
                            : 'w-4 bg-dark/10'
                        }`} 
                      />
                    ))}
                  </div>
                  <button 
                    onClick={() => {
                      const steps: Step[] = ['destination', 'purpose', 'duration', 'budget'];
                      const idx = steps.indexOf(step);
                      if (idx > 0) setStep(steps[idx - 1]);
                      else setStep('start');
                    }}
                    className="text-sm font-bold text-dark/40 hover:text-dark flex items-center"
                  >
                    <ChevronLeft className="w-4 h-4 mr-1" /> 이전으로
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
