import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Users, ShieldCheck, Zap, BarChart3, Globe, Sparkles, ChevronRight, PhoneCall, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { fadeIn } from '../constants';
import PromotionPopup from '../components/common/PromotionPopup';

export default function Main() {
  const openAI = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent('open-ai-modal'));
  };

  return (
    <div className="overflow-hidden bg-bg">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-bg.jpg" 
            alt="Hero Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-dark/40 backdrop-blur-[2px]" />
        </div>

        <div className="container-custom mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 bg-primary/20 text-white px-4 py-2 rounded-full text-[10px] font-black tracking-widest uppercase mb-8 backdrop-blur-md border border-white/10">
                <Sparkles className="w-4 h-4 text-primary" />
                <span>Corporate Travel Lab</span>
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-8 tracking-tight leading-[1.1]">
                귀찮은 출장 품의,<br />
                <span className="text-primary italic">전문가가 0원</span>으로<br />
                대행합니다.
              </h1>
              <p className="text-lg md:text-xl text-white/80 mb-12 max-w-xl font-medium leading-relaxed">
                인사총무팀 업무량 70% 감소. 글로벌 파트너십 특가 적용.<br />
                실무자는 목적지만 말씀하세요. 나머지는 저희가 책임집니다.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Link to="/contact" className="btn-primary px-10 py-5 text-lg rounded-full w-full sm:w-auto flex items-center justify-center group">
                  상담 신청하기
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/features" className="btn-glass px-10 py-5 text-lg rounded-full text-white w-full sm:w-auto">
                  서비스 둘러보기
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-10 text-white/50 flex flex-col items-start"
        >
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase mb-4">Scroll to explore</span>
          <div className="w-12 h-[1px] bg-gradient-to-r from-white/50 to-transparent" />
        </motion.div>
      </section>

      {/* Pain Points Section */}
      <section className="py-32 bg-white">
        <div className="container-custom mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div {...fadeIn}>
              <span className="text-primary font-black uppercase tracking-widest text-[10px] mb-4 block">Problem</span>
              <h2 className="text-2xl md:text-4xl font-black text-dark mb-8 leading-tight tracking-tight">
                아직도 엑셀과 씨름하며<br />최저가를 찾고 계신가요?
              </h2>
              <p className="text-lg text-dark/60 mb-12 leading-relaxed font-medium">
                항공권 비교, 호텔 예약, 영수증 처리까지...<br />
                인사총무팀의 소중한 시간이 단순 반복 업무에 낭비되고 있습니다.
              </p>
              <div className="space-y-6">
                {[
                  { title: "복잡한 품의 절차", icon: Zap, color: "bg-blue-500/10 text-blue-500" },
                  { title: "불투명한 예산 집행", icon: BarChart3, color: "bg-emerald-500/10 text-emerald-500" },
                  { title: "현지 돌발 상황 대응", icon: ShieldCheck, color: "bg-orange-500/10 text-orange-500" }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ x: 10 }}
                    className="flex items-center space-x-6 p-6 rounded-3xl bg-bg border border-dark/5 shadow-sm group transition-all"
                  >
                    <div className={`w-12 h-12 rounded-2xl ${item.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <item.icon className="w-6 h-6" />
                    </div>
                    <span className="font-black text-dark text-lg tracking-tight">{item.title}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-8 border-bg">
                <img 
                  src="/images/stressed-worker.jpg" 
                  alt="Stressed worker" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-white p-10 rounded-[2.5rem] max-w-[320px] shadow-2xl border border-dark/5">
                <div className="text-primary mb-4"><Zap className="w-8 h-8 fill-primary" /></div>
                <p className="text-sm font-bold text-dark leading-relaxed mb-6">
                  "기존에는 워크샵 한 번 가려면 한 달 전부터 야근이었죠. 이젠 전화 한 통이면 끝납니다."
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-black text-xs">K</div>
                  <div>
                    <div className="text-xs font-black text-dark">K사 인사팀장</div>
                    <div className="text-[10px] font-bold text-dark/30 uppercase tracking-widest">Client Review</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-32 bg-dark relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary rounded-full blur-[120px]" />
        </div>

        <div className="container-custom mx-auto px-6 relative z-10">
          <div className="text-center mb-24">
            <motion.span {...fadeIn} className="text-primary font-black uppercase tracking-widest text-[10px] mb-4 block">Solution</motion.span>
            <motion.h2 {...fadeIn} className="text-2xl md:text-5xl font-black text-white mb-8 tracking-tight">
              Zero-Task 솔루션으로<br />업무의 질을 바꾸세요.
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "업무량 70% 감소", 
                desc: "기획부터 정산까지 전담 매니저가 1:1로 밀착 대행합니다.",
                icon: Zap,
                color: "text-blue-400"
              },
              { 
                title: "비용 15% 절감", 
                desc: "이지글로벌 글로벌 파트너십을 통해 법인 전용 특가를 제공합니다.",
                icon: BarChart3,
                color: "text-emerald-400"
              },
              { 
                title: "24/7 실시간 케어", 
                desc: "현지에서 발생하는 모든 돌발 상황에 즉각 대응합니다.",
                icon: Globe,
                color: "text-orange-400"
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-12 rounded-[3rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all group"
              >
                <div className={`w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform ${item.color}`}>
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-white mb-4 tracking-tight">{item.title}</h3>
                <p className="text-white/50 font-medium leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Gallery Slider */}
      <section className="py-32 bg-bg overflow-hidden">
        <div className="container-custom mx-auto mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="space-y-4">
              <span className="text-primary font-black uppercase tracking-widest text-[10px] block">Our Portfolio</span>
              <h2 className="text-4xl font-black text-dark tracking-tight">실제 진행 프로젝트</h2>
            </div>
            <p className="text-dark/40 font-medium max-w-md">
              국내외 유수 기업들과 함께한 성공적인 비즈니스 여행 및 연수 사례입니다.
            </p>
          </div>
        </div>

        <div className="relative">
          <motion.div 
            className="flex space-x-6 px-6"
            animate={{ x: [0, -1000] }}
            transition={{ 
              repeat: Infinity, 
              duration: 30, 
              ease: "linear" 
            }}
          >
            {[
              { title: "글로벌 IT 기업 팀빌딩", location: "제주도", img: "/images/service-workshop.jpg" },
              { title: "금융사 우수 임직원 포상", location: "다낭", img: "/images/service-vip.jpg" },
              { title: "제조사 신입사원 연수", location: "일본", img: "/images/service-esg.jpg" },
              { title: "대기업 임원진 워크샵", location: "하와이", img: "/images/hero-bg.jpg" },
              { title: "스타트업 전사 워크샵", location: "강원도", img: "/images/service-workshop.jpg" },
              { title: "글로벌 IT 기업 팀빌딩", location: "제주도", img: "/images/service-workshop.jpg" },
              { title: "금융사 우수 임직원 포상", location: "다낭", img: "/images/service-vip.jpg" },
              { title: "제조사 신입사원 연수", location: "일본", img: "/images/service-esg.jpg" },
            ].map((item, idx) => (
              <div key={idx} className="flex-shrink-0 w-80 group cursor-pointer">
                <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden mb-6">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                  <div className="absolute bottom-8 left-8">
                    <span className="text-primary font-black text-[10px] uppercase tracking-widest mb-2 block">{item.location}</span>
                    <h4 className="text-white font-bold text-lg leading-tight">{item.title}</h4>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-white relative overflow-hidden border-t border-dark/5">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="container-custom mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-black text-dark mb-8 tracking-tight leading-tight">
              당신의 비즈니스 여행을 <br />
              <span className="text-primary italic">연구합니다.</span>
            </h2>
            <p className="text-lg text-dark/60 mb-12 max-w-2xl mx-auto font-medium">
              지금 바로 전문가와 상담하고 최적의 기업 여행 솔루션을 받아보세요.
            </p>
            <Link to="/contact" className="btn-primary px-12 py-6 text-lg rounded-full inline-flex items-center group">
              상담 신청하기
              <ChevronRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
      <PromotionPopup />
    </div>
  );
}
