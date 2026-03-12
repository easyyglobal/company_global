import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Phone, Mail, MapPin, ChevronDown, ChevronUp, CheckCircle2 } from 'lucide-react';
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
    answer: "단순 예약 대행을 넘어, 기업의 인사총무 실무자의 업무를 0(Zero)으로 만드는 'Zero-Task' 솔루션을 지향합니다. 또한 글로벌 파트너십을 통한 법인 특가로 비용 절감 효과가 큽니다."
  },
  {
    question: "결제 및 정산 방식은 어떻게 되나요?",
    answer: "법인카드 결제, 세금계산서 발행 등 기업이 선호하는 모든 정산 방식을 지원합니다. 행사 종료 후 투명한 정산 리포트를 함께 제공해드립니다."
  }
];

export default function Contact() {
  const [openFaq, setOpenFaq] = React.useState<number | null>(0);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [showSuccessModal, setShowSuccessModal] = React.useState(false);
  const [submitError, setSubmitError] = React.useState('');

  const [formData, setFormData] = React.useState({
    companyName: '',
    name: '',
    phone: '',
    email: '',
    headcount: '10명 미만',
    inquiryType: 'VIP 비즈니스 출장',
    message: '',
    privacy: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.privacy) {
      alert('개인정보 수집 및 이용에 동의해주세요.');
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');

    try {
      // 구글 앱스 스크립트 웹앱 URL을 여기에 입력하세요.
      const scriptUrl = 'YOUR_GOOGLE_APPS_SCRIPT_URL'; 
      
      // 임시 URL인 경우 성공한 것처럼 처리 (미리보기 환경용)
      if (scriptUrl === 'YOUR_GOOGLE_APPS_SCRIPT_URL') {
        await new Promise(resolve => setTimeout(resolve, 1000)); // 로딩 시뮬레이션
        setShowSuccessModal(true);
        setFormData({
          companyName: '',
          name: '',
          phone: '',
          email: '',
          headcount: '10명 미만',
          inquiryType: 'VIP 비즈니스 출장',
          message: '',
          privacy: false
        });
        setIsSubmitting(false);
        return;
      }

      const response = await fetch(scriptUrl, {
        method: 'POST',
        // 보안 정책상 application/json이 막힐 수 있으므로 text/plain 사용
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setShowSuccessModal(true);
        setFormData({
          companyName: '',
          name: '',
          phone: '',
          email: '',
          headcount: '10명 미만',
          inquiryType: 'VIP 비즈니스 출장',
          message: '',
          privacy: false
        });
      } else {
        throw new Error('Network response was not ok.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError('상담 신청 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-bg">
      {/* Page Header */}
      <section className="relative pt-48 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-bg to-bg" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-primary/5 blur-[120px] rounded-full" />
        
        <div className="container-custom relative">
          <div className="flex items-center justify-between">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                Contact Us
              </span>
              <h1 className="text-4xl md:text-5xl font-black text-dark tracking-tight leading-[1.1] mb-8">
                당신의 비즈니스 파트너,<br />
                <span className="text-primary italic">지금 시작하세요</span>
              </h1>
              <p className="text-lg text-dark/60 font-medium leading-relaxed">
                귀사의 비즈니스 여행을 위한 최고의 제안을 준비하겠습니다.<br />
                지금 바로 전문가와 상담하세요.
              </p>
            </motion.div>
            <div className="hidden md:block">
              <img src="/images/3d-icon.png" alt="3D Icon" className="w-64 h-64 opacity-50" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-16">
              <motion.div {...fadeIn}>
                <h2 className="text-3xl font-black text-dark mb-10 tracking-tight">연락처 정보</h2>
                <div className="space-y-8">
                  <div className="flex items-start space-x-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-primary flex-shrink-0 shadow-xl group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-dark/30 uppercase tracking-widest mb-1">Call Us</p>
                      <p className="text-xl font-black text-dark tracking-tight">02-000-0000</p>
                      <p className="text-xs text-dark/40 font-bold">평일 09:00 - 18:00</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-primary flex-shrink-0 shadow-xl group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-dark/30 uppercase tracking-widest mb-1">Email Us</p>
                      <p className="text-xl font-black text-dark tracking-tight">contact@easyglobal.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-primary flex-shrink-0 shadow-xl group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-dark/30 uppercase tracking-widest mb-1">Visit Us</p>
                      <p className="text-lg font-bold text-dark leading-snug">서울특별시 강남구 테헤란로 000, 00층</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="bg-dark p-10 rounded-[3rem] text-white shadow-2xl">
                <h3 className="text-xl font-black mb-6 tracking-tight">기업 전용 혜택</h3>
                <ul className="space-y-4 text-sm font-medium text-white/50">
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-primary rounded-full mr-3" /> 법인 전용 특가 상시 적용</li>
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-primary rounded-full mr-3" /> 전담 매니저 1:1 매칭</li>
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-primary rounded-full mr-3" /> 연간 계약 시 추가 할인 혜택</li>
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-primary rounded-full mr-3" /> 맞춤형 정산 리포트 무료 제공</li>
                </ul>
              </motion.div>
            </div>

            {/* Inquiry Form */}
            <div className="lg:col-span-2">
              <motion.div 
                {...fadeIn}
                className="bg-white p-10 md:p-16 rounded-[4rem] shadow-2xl shadow-dark/5 border border-dark/5"
              >
                <h2 className="text-3xl font-black text-dark mb-12 tracking-tight">1:1 맞춤 견적 요청</h2>
                <form className="space-y-8" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-dark/30 uppercase tracking-widest ml-1">Company Name</label>
                      <input 
                        type="text" 
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="예: (주)이지글로벌" 
                        className="w-full px-6 py-4 rounded-2xl bg-bg border-none focus:ring-2 focus:ring-primary/20 outline-none transition-all font-bold text-dark placeholder:text-dark/20"
                        required
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-dark/30 uppercase tracking-widest ml-1">Your Name</label>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="성함을 입력해주세요" 
                        className="w-full px-6 py-4 rounded-2xl bg-bg border-none focus:ring-2 focus:ring-primary/20 outline-none transition-all font-bold text-dark placeholder:text-dark/20"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-dark/30 uppercase tracking-widest ml-1">Phone Number</label>
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="010-0000-0000" 
                        className="w-full px-6 py-4 rounded-2xl bg-bg border-none focus:ring-2 focus:ring-primary/20 outline-none transition-all font-bold text-dark placeholder:text-dark/20"
                        required
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-dark/30 uppercase tracking-widest ml-1">Email Address</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="example@company.com" 
                        className="w-full px-6 py-4 rounded-2xl bg-bg border-none focus:ring-2 focus:ring-primary/20 outline-none transition-all font-bold text-dark placeholder:text-dark/20"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-dark/30 uppercase tracking-widest ml-1">Expected Headcount</label>
                      <select 
                        name="headcount"
                        value={formData.headcount}
                        onChange={handleChange}
                        className="w-full px-6 py-4 rounded-2xl bg-bg border-none focus:ring-2 focus:ring-primary/20 outline-none transition-all font-bold text-dark appearance-none"
                      >
                        <option>10명 미만</option>
                        <option>10명 - 30명</option>
                        <option>30명 - 50명</option>
                        <option>50명 - 100명</option>
                        <option>100명 이상</option>
                      </select>
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-dark/30 uppercase tracking-widest ml-1">Inquiry Type</label>
                      <select 
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleChange}
                        className="w-full px-6 py-4 rounded-2xl bg-bg border-none focus:ring-2 focus:ring-primary/20 outline-none transition-all font-bold text-dark appearance-none"
                      >
                        <option>VIP 비즈니스 출장</option>
                        <option>팀빌딩 워크샵</option>
                        <option>ESG 연계 연수</option>
                        <option>기타 문의</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-dark/30 uppercase tracking-widest ml-1">Message</label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5} 
                      placeholder="희망 일정, 예산 범위, 목적지 등 상세 내용을 적어주시면 더 정확한 제안이 가능합니다." 
                      className="w-full px-6 py-4 rounded-2xl bg-bg border-none focus:ring-2 focus:ring-primary/20 outline-none transition-all font-bold text-dark placeholder:text-dark/20 resize-none"
                    />
                  </div>

                  <div className="flex items-center space-x-3 py-2">
                    <input 
                      type="checkbox" 
                      id="privacy" 
                      name="privacy"
                      checked={formData.privacy}
                      onChange={handleChange}
                      className="w-5 h-5 text-primary rounded-lg border-none bg-bg focus:ring-primary/20" 
                    />
                    <label htmlFor="privacy" className="text-xs font-bold text-dark/40 underline cursor-pointer">개인정보 수집 및 이용에 동의합니다.</label>
                  </div>

                  {submitError && (
                    <div className="text-red-500 text-sm font-bold text-center">
                      {submitError}
                    </div>
                  )}

                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-6 btn-primary text-xl flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <div className="w-6 h-6 border-2 border-white/20 border-t-white rounded-full animate-spin mr-3" />
                        처리 중...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <Send className="w-6 h-6 mr-3" />
                        제안서 요청하기
                      </span>
                    )}
                  </button>
                </form>
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

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccessModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowSuccessModal(false)}
              className="absolute inset-0 bg-dark/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white rounded-[2rem] p-10 max-w-md w-full shadow-2xl text-center"
            >
              <div className="w-20 h-20 bg-emerald-100 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-black text-dark mb-4 tracking-tight">접수 완료</h3>
              <p className="text-dark/60 font-medium leading-relaxed mb-8">
                상담 신청이 성공적으로 접수되었습니다.<br />
                담당자가 내용을 확인한 후<br />
                입력해주신 연락처로 곧 연락드리겠습니다.
              </p>
              <button
                onClick={() => setShowSuccessModal(false)}
                className="btn-primary w-full py-4 rounded-xl"
              >
                확인
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
