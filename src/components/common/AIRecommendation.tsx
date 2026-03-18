import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, X, ChevronRight, ChevronLeft, FileText, Loader2, PhoneCall, Printer, RefreshCw, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { GoogleGenAI } from "@google/genai";

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
  const [customDestination, setCustomDestination] = useState('');
  const [customPurpose, setCustomPurpose] = useState('');
  const [showCustomDest, setShowCustomDest] = useState(false);
  const [showCustomPurpose, setShowCustomPurpose] = useState(false);
  const [proposalData, setProposalData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  React.useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open-ai-modal', handleOpen);
    
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('open-ai-modal', handleOpen);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNext = (field: string, value: string, nextStep: Step) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setStep(nextStep);
  };

  const generateProposal = async () => {
    setStep('loading');
    setIsLoading(true);
    try {
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      if (!apiKey) {
        throw new Error("Gemini API key is not configured.");
      }

      const ai = new GoogleGenAI({ apiKey });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        config: {
          responseMimeType: "application/json",
        },
        contents: `
          당신은 기업여행연구소의 전문 AI 매니저입니다. 다음 정보를 바탕으로 '기업 맞춤 제안 보고서'를 JSON 형식으로 작성해주세요.
          
          목적지: ${formData.destination === '직접 입력' ? customDestination : formData.destination}
          기간: ${formData.duration}
          목적: ${formData.purpose === '기타' ? customPurpose : formData.purpose}
          예산: ${formData.budget}
          
          반드시 다음 구조의 JSON으로 응답하세요:
          {
            "title": "제안서 제목",
            "summary": "핵심 요약 (3문장)",
            "schedule": [
              {"day": 1, "activity": "활동 내용"},
              {"day": 2, "activity": "활동 내용"},
              {"day": 3, "activity": "활동 내용"}
            ],
            "budget_guide": "1인당 예상 비용 및 포함 사항",
            "expert_tip": "전문가 팁",
            "expected_effect": "기대 효과"
          }
        `,
      });

      if (response.text) {
        const data = JSON.parse(response.text);
        setProposalData(data);
        setStep('result');
      } else {
        throw new Error("제안서 생성 실패");
      }
    } catch (error) {
      console.error(error);
      alert("제안서 생성 중 오류가 발생했습니다. 다시 시도해주세요.");
      setStep('start');
    } finally {
      setIsLoading(false);
    }
  };

  const printProposal = () => {
    window.print();
  };

  const reset = () => {
    setStep('start');
    setFormData({ destination: '', purpose: '', duration: '', budget: '' });
    setCustomDestination('');
    setCustomPurpose('');
    setShowCustomDest(false);
    setShowCustomPurpose(false);
    setProposalData(null);
  };

  return (
    <>
      {/* Floating Button - Always visible in bottom right */}
      <div className={`fixed right-6 md:right-10 z-40 transition-all duration-300 ${isScrolled ? 'bottom-24 md:bottom-28' : 'bottom-6 md:bottom-10'}`}>
        <motion.button
          whileHover={{ scale: 1.05, y: -5 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(true)}
          className="relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-secondary rounded-full blur-md opacity-40 group-hover:opacity-100 transition duration-1000 animate-pulse" />
          
          <div className="relative bg-dark text-white w-14 h-14 md:w-auto md:h-auto md:px-6 md:py-4 rounded-full shadow-2xl flex items-center justify-center md:space-x-3 border border-white/10 backdrop-blur-xl">
            <Sparkles className="w-6 h-6 md:w-5 md:h-5 text-primary flex-shrink-0" />
            <span className="hidden md:block font-bold text-sm tracking-tight whitespace-nowrap">AI 맞춤 제안서 받기</span>
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
              className="absolute inset-0 bg-dark/80 backdrop-blur-md no-print"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-[3rem] shadow-2xl overflow-hidden print-only print:shadow-none print:rounded-none print:max-w-none print:fixed print:inset-0 print:z-[9999] flex flex-col max-h-[90vh] print:max-h-screen print:h-screen print:overflow-hidden print:bg-white"
            >
              {/* Header */}
              <div className="p-8 border-b border-dark/5 flex justify-between items-center bg-bg/50 no-print">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-dark tracking-tight">AI 매니저 맞춤 제안</h3>
                    <p className="text-xs text-dark/40 font-bold uppercase tracking-widest">Corporate Travel Lab AI</p>
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
              <div className="p-8 min-h-[450px] flex flex-col print:p-0 overflow-y-auto flex-1 print:overflow-hidden">
                <AnimatePresence mode="wait">
                  {step === 'start' && (
                    <motion.div
                      key="start"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="flex flex-col items-center justify-center text-center space-y-8 py-10"
                    >
                      <div className="w-24 h-24 rounded-[2rem] bg-primary/5 flex items-center justify-center relative">
                        <FileText className="w-12 h-12 text-primary" />
                        <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold animate-bounce">
                          NEW
                        </div>
                      </div>
                      <div className="space-y-4">
                        <h4 className="text-2xl font-black text-dark tracking-tight">10초 만에 완성되는 기업 맞춤 제안</h4>
                        <p className="text-dark/60 leading-relaxed font-medium">
                          이지글로벌의 전문 데이터와 AI 기술이 만나<br />
                          귀사만을 위한 최적의 일정을 즉시 설계해 드립니다.
                        </p>
                      </div>
                      <button 
                        onClick={() => setStep('destination')}
                        className="btn-primary w-full max-w-xs group whitespace-nowrap"
                      >
                        <span className="flex items-center">
                          제안서 생성 시작하기
                          <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                        </span>
                      </button>
                    </motion.div>
                  )}

                  {step === 'destination' && (
                    <motion.div key="destination" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-8">
                      <div className="space-y-2">
                        <span className="text-primary font-black text-xs uppercase tracking-widest">Step 01</span>
                        <h4 className="text-2xl font-black text-dark tracking-tight">어디로 떠나시나요?</h4>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {['국내 (제주, 부산 등)', '해외 (동남아, 일본 등)', '해외 (유럽, 미주 등)', '미정 (추천 필요)', '직접 입력'].map((opt) => (
                          <button
                            key={opt}
                            onClick={() => {
                              if (opt === '직접 입력') {
                                setShowCustomDest(true);
                              } else {
                                handleNext('destination', opt, 'purpose');
                              }
                            }}
                            className="p-6 rounded-3xl border-2 border-dark/5 hover:border-primary hover:bg-primary/5 text-left transition-all group"
                          >
                            <span className="font-bold text-dark group-hover:text-primary block mb-1">{opt}</span>
                            <span className="text-[10px] text-dark/30 font-bold uppercase tracking-wider">Select Destination</span>
                          </button>
                        ))}
                      </div>
                      {showCustomDest && (
                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
                          <input 
                            type="text" 
                            value={customDestination}
                            onChange={(e) => setCustomDestination(e.target.value)}
                            placeholder="목적지를 입력해주세요"
                            className="w-full px-6 py-4 rounded-2xl bg-bg border-2 border-primary/20 focus:border-primary outline-none font-bold"
                          />
                          <button 
                            onClick={() => handleNext('destination', '직접 입력', 'purpose')}
                            disabled={!customDestination}
                            className="btn-primary w-full py-4"
                          >
                            확인
                          </button>
                        </motion.div>
                      )}
                    </motion.div>
                  )}

                  {step === 'purpose' && (
                    <motion.div key="purpose" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-8">
                      <div className="space-y-2">
                        <span className="text-primary font-black text-xs uppercase tracking-widest">Step 02</span>
                        <h4 className="text-2xl font-black text-dark tracking-tight">방문 목적이 무엇인가요?</h4>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {['팀빌딩 워크샵', 'VIP 비즈니스 출장', '신입사원 해외 연수', '포상 휴가 (Incentive)', '기타'].map((opt) => (
                          <button
                            key={opt}
                            onClick={() => {
                              if (opt === '기타') {
                                setShowCustomPurpose(true);
                              } else {
                                handleNext('purpose', opt, 'duration');
                              }
                            }}
                            className="p-6 rounded-3xl border-2 border-dark/5 hover:border-primary hover:bg-primary/5 text-left transition-all group"
                          >
                            <span className="font-bold text-dark group-hover:text-primary block mb-1">{opt}</span>
                            <span className="text-[10px] text-dark/30 font-bold uppercase tracking-wider">Select Purpose</span>
                          </button>
                        ))}
                      </div>
                      {showCustomPurpose && (
                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
                          <input 
                            type="text" 
                            value={customPurpose}
                            onChange={(e) => setCustomPurpose(e.target.value)}
                            placeholder="목적을 입력해주세요"
                            className="w-full px-6 py-4 rounded-2xl bg-bg border-2 border-primary/20 focus:border-primary outline-none font-bold"
                          />
                          <button 
                            onClick={() => handleNext('purpose', '기타', 'duration')}
                            disabled={!customPurpose}
                            className="btn-primary w-full py-4"
                          >
                            확인
                          </button>
                        </motion.div>
                      )}
                    </motion.div>
                  )}

                  {step === 'duration' && (
                    <motion.div key="duration" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-8">
                      <div className="space-y-2">
                        <span className="text-primary font-black text-xs uppercase tracking-widest">Step 03</span>
                        <h4 className="text-2xl font-black text-dark tracking-tight">예상 기간은 어떻게 되나요?</h4>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {['1박 2일', '2박 3일', '3박 4일', '4박 5일 이상'].map((opt) => (
                          <button
                            key={opt}
                            onClick={() => handleNext('duration', opt, 'budget')}
                            className="p-6 rounded-3xl border-2 border-dark/5 hover:border-primary hover:bg-primary/5 text-left transition-all group"
                          >
                            <span className="font-bold text-dark group-hover:text-primary block mb-1">{opt}</span>
                            <span className="text-[10px] text-dark/30 font-bold uppercase tracking-wider">Select Duration</span>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {step === 'budget' && (
                    <motion.div key="budget" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-8">
                      <div className="space-y-2">
                        <span className="text-primary font-black text-xs uppercase tracking-widest">Step 04</span>
                        <h4 className="text-2xl font-black text-dark tracking-tight">선호하시는 예산 수준은?</h4>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {['실속형 (가성비 중심)', '표준형 (가장 인기)', '프리미엄 (고품격 서비스)', '상관없음'].map((opt) => (
                          <button
                            key={opt}
                            onClick={() => {
                              setFormData(prev => ({ ...prev, budget: opt }));
                              generateProposal();
                            }}
                            className="p-6 rounded-3xl border-2 border-dark/5 hover:border-primary hover:bg-primary/5 text-left transition-all group"
                          >
                            <span className="font-bold text-dark group-hover:text-primary block mb-1">{opt}</span>
                            <span className="text-[10px] text-dark/30 font-bold uppercase tracking-wider">Select Budget Range</span>
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
                      className="flex flex-col items-center justify-center text-center space-y-8 py-20"
                    >
                      <div className="relative">
                        <div className="w-24 h-24 rounded-full border-4 border-primary/10 border-t-primary animate-spin" />
                        <Sparkles className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-primary animate-pulse" />
                      </div>
                      <div className="space-y-3">
                        <h4 className="text-2xl font-black text-dark tracking-tight">기업여행연구소만의 AI 매니저가<br />분석 중입니다...</h4>
                        <p className="text-dark/40 font-medium">최적의 동선과 견적을 산출하고 있습니다. 잠시만 기다려주세요.</p>
                      </div>
                    </motion.div>
                  )}

                  {step === 'result' && proposalData && (
                    <motion.div
                      key="result"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="space-y-8 print:space-y-6"
                    >
                      <div className="flex justify-between items-start no-print mb-8">
                        <div className="space-y-2">
                          <span className="text-primary font-black text-xs uppercase tracking-widest">Analysis Complete</span>
                          <h4 className="text-2xl font-black text-dark tracking-tight">맞춤 제안서가 도착했습니다</h4>
                        </div>
                        <div className="flex space-x-2">
                          <button 
                            onClick={printProposal}
                            className="w-12 h-12 rounded-2xl bg-dark text-white flex items-center justify-center hover:bg-dark/90 transition-colors"
                            title="인쇄 / PDF 저장"
                          >
                            <Printer className="w-5 h-5" />
                          </button>
                          <button 
                            onClick={reset}
                            className="w-12 h-12 rounded-2xl bg-bg text-dark flex items-center justify-center hover:bg-dark/5 transition-colors"
                            title="다시 시작"
                          >
                            <RefreshCw className="w-5 h-5" />
                          </button>
                        </div>
                      </div>

                      {/* Proposal Template */}
                      <div className="bg-bg/50 rounded-[2rem] p-8 border border-dark/5 space-y-8 print:bg-white print:border-none print:p-0 print:space-y-4">
                        <div className="text-center space-y-2 pb-8 border-b border-dark/5">
                          <h2 className="text-2xl font-black text-dark">{proposalData.title}</h2>
                          <p className="text-sm text-dark/40 font-bold tracking-widest uppercase">Corporate Travel Lab AI Report</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 print:gap-4">
                          <div className="space-y-6 print:space-y-4">
                            <section className="space-y-3">
                              <h5 className="text-sm font-black text-primary uppercase tracking-wider flex items-center">
                                <Sparkles className="w-4 h-4 mr-2" /> 핵심 요약
                              </h5>
                              <p className="text-dark/70 leading-relaxed font-medium text-sm">
                                {proposalData.summary}
                              </p>
                            </section>

                            <section className="space-y-3">
                              <h5 className="text-sm font-black text-primary uppercase tracking-wider flex items-center">
                                <FileText className="w-4 h-4 mr-2" /> 추천 일정
                              </h5>
                              <div className="space-y-3">
                                {proposalData.schedule.map((item: any, idx: number) => (
                                  <div key={idx} className="flex space-x-3">
                                    <span className="text-xs font-black text-dark/30 mt-1">D{item.day}</span>
                                    <p className="text-sm text-dark/70 font-medium">{item.activity}</p>
                                  </div>
                                ))}
                              </div>
                            </section>
                          </div>

                          <div className="space-y-6 print:space-y-4">
                            <section className="space-y-3 p-6 bg-white rounded-2xl border border-dark/5 print:p-4">
                              <h5 className="text-sm font-black text-dark uppercase tracking-wider">예상 견적 가이드</h5>
                              <p className="text-sm text-dark/70 font-medium leading-relaxed">
                                {proposalData.budget_guide}
                              </p>
                            </section>

                            <section className="space-y-3 p-6 bg-primary/5 rounded-2xl border border-primary/10 print:p-4">
                              <h5 className="text-sm font-black text-primary uppercase tracking-wider">전문가 팁</h5>
                              <p className="text-sm text-primary/80 font-medium leading-relaxed italic">
                                "{proposalData.expert_tip}"
                              </p>
                            </section>

                            <section className="space-y-3">
                              <h5 className="text-sm font-black text-dark uppercase tracking-wider">기대 효과</h5>
                              <p className="text-sm text-dark/70 font-medium">
                                {proposalData.expected_effect}
                              </p>
                            </section>
                          </div>
                        </div>

                        <div className="pt-8 border-t border-dark/5 text-center print:pt-4">
                          <p className="text-[10px] text-dark/30 font-bold uppercase tracking-[0.2em]">
                            본 제안서는 AI에 의해 생성되었으며, 실제 견적은 상담을 통해 확정됩니다.
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4 pt-4 no-print">
                        <button 
                          onClick={reset}
                          className="btn-glass flex-1 py-4 text-dark rounded-2xl"
                        >
                          다시 만들기
                        </button>
                        <Link 
                          to="/contact" 
                          onClick={() => setIsOpen(false)}
                          className="btn-primary flex-1 flex items-center justify-center group relative overflow-hidden rounded-2xl"
                        >
                          <PhoneCall className="w-4 h-4 mr-2" />
                          상세 상담 신청하기
                          <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Footer Progress */}
              {['destination', 'purpose', 'duration', 'budget'].includes(step) && (
                <div className="px-8 py-6 bg-bg/30 border-t border-dark/5 flex items-center justify-between">
                  <div className="flex space-x-3">
                    {['destination', 'purpose', 'duration', 'budget'].map((s, i) => (
                      <div 
                        key={s} 
                        className={`h-2 rounded-full transition-all duration-500 ${
                          ['destination', 'purpose', 'duration', 'budget'].indexOf(step) >= i 
                            ? 'w-12 bg-primary' 
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
                    className="text-sm font-bold text-dark/40 hover:text-dark flex items-center transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4 mr-1" /> 이전 단계
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
