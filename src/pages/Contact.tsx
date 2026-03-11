import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Phone, Mail, MapPin, ChevronDown, Loader2, FileText } from 'lucide-react';
import { fadeIn } from '../constants';
import { cn } from '../lib/utils';

const faqs = [
  {
    question: "상담 신청 후 제안서를 받기까지 얼마나 걸리나요?",
    answer: "영업일 기준 24시간 이내에 전담 매니저가 기초 상담을 위해 연락을 드립니다. 상세 제안서는 상담 후 1~2일 내에 받아보실 수 있습니다."
  },
  {
    question: "소규모 인원(10명 미만)도 서비스 이용이 가능한가요?",
    answer: "네, 가능합니다. 기업여행연구소는 소규모 팀 빌딩부터 대규모 전사 워크샵까지 인원수에 관계없이 최적화된 맞춤형 솔루션을 제공합니다."
  },
  {
    question: "기존에 이용하던 여행사가 있는데, 무엇이 다른가요?",
    answer: "단순 예약 대행을 넘어, 기업의 인사총무 실무자의 업무를 0(Zero)으로 만드는 'Zero-Task' 솔루션을 지향합니다. 또한 직영 네트워크를 통한 법인 특가로 비용 절감 효과가 큽니다."
  },
  {
    question: "결제 및 정산 방식은 어떻게 되나요?",
    answer: "법인카드 결제, 세금계산서 발행 등 기업이 선호하는 모든 정산 방식을 지원합니다. 행사 종료 후 투명한 정산 리포트를 함께 제공해드립니다."
  }
];

export default function Contact() {
  const [openFaq, setOpenFaq] = React.useState<number | null>(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [aiResult, setAiResult] = useState(""); // AI 답변 저장

  // 폼 제출 핸들러 (진짜 백엔드 API 호출)
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const payload = {
      company: formData.get('company'),
      name: formData.get('name'),
      type: formData.get('type'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/generate-proposal', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      
      if (response.ok && data.result) {
        setAiResult(data.result);
        setIsSuccess(true);
      } else {
        throw new Error(data.error || '실패');
      }
    } catch (error) {
      console.error(error);
      alert("제안서 생성 중 오류가 발생했습니다. Vercel에서 API Key 설정을 확인해주세요.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-bg">
      {/* Header 생략 (기존과 동일) */}
      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div {...fadeIn}>
            <h1 className="text-4xl md:text-6xl font-black text-dark mb-6 tracking-tighter">문의 및 AI 제안서 신청</h1>
            <p className="text-xl text-dark/60 font-medium">실시간 AI 분석을 통해 맞춤형 제안서를 즉시 생성합니다.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
            {/* Info Section (기존 유지) */}
            <div className="lg:col-span-1 space-y-8">
               <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-dark/5">
                 <h3 className="text-xl font-black mb-4 flex items-center"><Phone className="mr-2 text-primary" /> 고객센터</h3>
                 <p className="text-dark/60 font-bold text-2xl">02-000-0000</p>
               </div>
            </div>

            {/* Inquiry Form & AI Result Area */}
            <div className="lg:col-span-2">
              <motion.div {...fadeIn} className="bg-white p-10 md:p-16 rounded-[4rem] shadow-2xl border border-dark/5">
                {!isSuccess ? (
                  <form className="space-y-8" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="text-[10px] font-black text-dark/30 uppercase ml-1">Company Name</label>
                        <input required name="company" type="text" placeholder="(주)이지글로벌" className="w-full px-6 py-4 rounded-2xl bg-bg border-none font-bold text-dark" />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] font-black text-dark/30 uppercase ml-1">Your Name</label>
                        <input required name="name" type="text" placeholder="홍길동" className="w-full px-6 py-4 rounded-2xl bg-bg border-none font-bold text-dark" />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-dark/30 uppercase ml-1">Inquiry Type</label>
                      <select name="type" className="w-full px-6 py-4 rounded-2xl bg-bg border-none font-bold text-dark appearance-none">
                        <option>팀빌딩 워크샵</option>
                        <option>VIP 비즈니스 출장</option>
                        <option>ESG 연계 연수</option>
                      </select>
                    </div>

                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-dark/30 uppercase ml-1">Message</label>
                      <textarea required name="message" rows={4} placeholder="상세 요청사항을 적어주세요." className="w-full px-6 py-4 rounded-2xl bg-bg border-none font-bold text-dark resize-none" />
                    </div>

                    <button disabled={isSubmitting} className="w-full py-6 btn-primary text-xl flex items-center justify-center disabled:opacity-50">
                      {isSubmitting ? <Loader2 className="animate-spin mr-3" /> : <Send className="w-6 h-6 mr-3" />}
                      {isSubmitting ? "AI 제안서 생성 중..." : "AI 제안서 무료 신청하기"}
                    </button>
                  </form>
                ) : (
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8 text-left">
                    <div className="flex items-center text-primary mb-4">
                      <FileText className="w-8 h-8 mr-3" />
                      <h2 className="text-3xl font-black">맞춤 제안서 초안</h2>
                    </div>
                    <div className="bg-bg p-8 rounded-[2rem] text-dark/80 leading-relaxed font-medium whitespace-pre-wrap border border-primary/10">
                      {aiResult}
                    </div>
                    <button onClick={() => setIsSuccess(false)} className="w-full py-4 bg-dark text-white rounded-2xl font-black hover:bg-dark/90 transition-all">
                      다시 문의하기
                    </button>
                  </motion.div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeIn} className="text-center mb-20">
            <span className="text-primary font-black uppercase tracking-widest text-xs mb-4 block">FAQ</span>
            <h2 className="text-3xl md:text-5xl font-black text-dark tracking-tighter">자주 묻는 질문</h2>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <motion.div 
                key={i}
                {...fadeIn}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-[2rem] border border-dark/5 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-10 py-8 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="text-lg font-black text-dark tracking-tight">{faq.question}</span>
                  <div className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500",
                    openFaq === i ? "bg-primary text-white rotate-180" : "bg-bg text-dark/20"
                  )}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: "circOut" }}
                    >
                      <div className="px-10 pb-10 text-lg text-dark/50 font-medium leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
