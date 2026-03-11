import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Users, ShieldCheck, Zap, BarChart3, Globe, Sparkles, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { fadeIn } from '../constants';

export default function Main() {
  const openAI = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent('open-ai-modal'));
  };

  return (
    <div className="overflow-hidden bg-bg">
      {/* Hero Section */}
      <section className="relative h-[95vh] flex items-center px-4">
        <div className="absolute inset-4 z-0 rounded-[2.5rem] overflow-hidden">
          <img 
            src="/images/hero-bg.jpg" 
            alt="Hero Background" 
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1600";
            }}
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/60 via-dark/20 to-dark/80" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <motion.span 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-block px-5 py-2 rounded-full glass-button text-white text-xs font-bold mb-8 uppercase tracking-[0.2em]"
            >
              Corporate Travel Lab
            </motion.span>
            <h1 className="text-4xl md:text-6xl font-black text-white leading-[1.1] mb-10 tracking-tighter">
              귀찮은 출장 품의,<br />
              <span className="text-primary">전문가가 0원</span>으로<br />
              대행합니다.
            </h1>
            <p className="text-lg md:text-xl text-white/70 mb-12 leading-relaxed max-w-xl font-medium">
              인사총무팀 업무량 70% 감소. 직영 네트워크 특가 적용.<br />
              실무자는 목적지만 말씀하세요. 나머지는 저희가 책임집니다.
            </p>
            <div className="flex flex-wrap gap-5">
              <button onClick={openAI} className="btn-primary flex items-center group relative overflow-hidden">
                <Sparkles className="mr-2 w-5 h-5 text-white/80 group-hover:text-white transition-colors animate-pulse" />
                무료 제안서 받기
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </button>
              <Link to="/features" className="btn-glass flex items-center">
                서비스 알아보기
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div {...fadeIn}>
              <span className="text-primary font-black uppercase tracking-widest text-xs mb-4 block">Problem</span>
              <h2 className="text-3xl md:text-5xl font-black text-dark mb-8 leading-tight tracking-tighter">
                아직도 엑셀과 씨름하며<br />최저가를 찾고 계신가요?
              </h2>
              <p className="text-lg text-dark/60 mb-12 leading-relaxed">
                항공권 비교, 호텔 예약, 영수증 처리까지...<br />
                인사총무팀의 소중한 시간이 단순 반복 업무에 낭비되고 있습니다.
              </p>
              <div className="space-y-6">
                {[
                  { title: "복잡한 품의 절차", icon: Zap },
                  { title: "불투명한 예산 집행", icon: BarChart3 },
                  { title: "현지 돌발 상황 대응", icon: ShieldCheck }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ x: 10 }}
                    className="flex items-center space-x-4 p-4 rounded-2xl bg-white border border-dark/5 shadow-sm"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <span className="font-bold text-dark">{item.title}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="relative"
            >
              <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
                <img 
                  src="/images/pain-point.jpg" 
                  alt="Stressed worker" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800";
                  }}
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 glass p-8 rounded-3xl max-w-[280px] shadow-2xl">
                <p className="text-sm font-bold text-dark leading-relaxed">
                  "기존에는 워크샵 한 번 가려면 한 달 전부터 야근이었죠. 이젠 전화 한 통이면 끝납니다."
                </p>
                <div className="mt-4 flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-primary" />
                  <span className="text-xs font-bold text-dark/40">K사 인사팀장</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-32 px-4 bg-dark relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary rounded-full blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-24">
            <motion.span {...fadeIn} className="text-primary font-black uppercase tracking-widest text-xs mb-4 block">Solution</motion.span>
            <motion.h2 {...fadeIn} className="text-3xl md:text-6xl font-black text-white mb-8 tracking-tighter">
              Zero-Task 솔루션으로<br />업무의 질을 바꾸세요.
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "업무량 70% 감소", 
                desc: "기획부터 정산까지 전담 매니저가 1:1로 밀착 대행합니다.",
                icon: Zap 
              },
              { 
                title: "비용 15% 절감", 
                desc: "이지글로벌 직영 네트워크를 통해 법인 전용 특가를 제공합니다.",
                icon: BarChart3 
              },
              { 
                title: "24/7 실시간 케어", 
                desc: "현지에서 발생하는 모든 돌발 상황에 즉각 대응합니다.",
                icon: Globe 
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass-dark p-10 rounded-[2.5rem] group"
              >
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:bg-primary transition-colors duration-500">
                  <item.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-white/50 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Feature Section */}
      <section className="py-32 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="glass-dark bg-dark rounded-[3.5rem] p-12 md:p-24 flex flex-col md:flex-row items-center gap-16 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary rounded-full blur-[120px]" />
            </div>
            
            <div className="flex-1 relative z-10">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-primary animate-pulse" />
                </div>
                <span className="text-primary font-black uppercase tracking-widest text-xs">AI Technology</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-8 tracking-tighter leading-tight">
                10초 만에 완성되는<br />
                <span className="text-primary">AI 맞춤형 제안서</span>
              </h2>
              <p className="text-lg text-white/60 mb-12 leading-relaxed">
                더 이상 제안서 작성을 위해 며칠씩 기다리지 마세요.<br />
                이지글로벌의 AI가 목적지, 인원, 예산에 맞춘 최적의 일정을<br />
                지금 즉시 설계해 드립니다.
              </p>
              <button onClick={openAI} className="btn-primary py-5 px-10 text-lg flex items-center group">
                지금 바로 생성하기
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            <div className="flex-1 relative z-10 w-full md:w-auto">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
                <div className="space-y-4">
                  <div className="h-4 w-3/4 bg-white/10 rounded-full animate-pulse" />
                  <div className="h-4 w-full bg-white/10 rounded-full animate-pulse delay-75" />
                  <div className="h-4 w-5/6 bg-white/10 rounded-full animate-pulse delay-150" />
                  <div className="pt-6 space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <div className="h-3 w-1/2 bg-white/20 rounded-full" />
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <div className="h-3 w-2/3 bg-white/20 rounded-full" />
                    </div>
                  </div>
                </div>
                <div className="mt-10 flex justify-center">
                  <div className="px-4 py-2 rounded-lg bg-primary/20 border border-primary/30 text-primary text-[10px] font-bold uppercase tracking-widest">
                    Generating Proposal...
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <motion.div {...fadeIn} className="max-w-2xl">
              <span className="text-primary font-black uppercase tracking-widest text-xs mb-4 block">Services</span>
              <h2 className="text-3xl md:text-5xl font-black text-dark tracking-tighter">
                기업의 모든 여정을<br />전문적으로 설계합니다.
              </h2>
            </motion.div>
            <motion.div {...fadeIn}>
              <Link to="/details" className="btn-primary">전체 서비스 보기</Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "VIP 비즈니스 출장", 
                img: "/images/service-vip.jpg",
                fallback: "https://images.unsplash.com/photo-1540339832862-47452993c66e?auto=format&fit=crop&q=80&w=600"
              },
              { 
                title: "팀빌딩 워크샵", 
                img: "/images/service-workshop.jpg",
                fallback: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600"
              },
              { 
                title: "ESG 연계 연수", 
                img: "/images/service-esg.jpg",
                fallback: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=600"
              }
            ].map((service, i) => (
              <motion.div 
                key={i}
                {...fadeIn}
                transition={{ delay: i * 0.1 }}
                className="group relative h-[500px] rounded-[3rem] overflow-hidden shadow-xl"
              >
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  onError={(e) => {
                    e.currentTarget.src = service.fallback;
                  }}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-transparent to-transparent" />
                <div className="absolute bottom-10 left-10 right-10">
                  <h3 className="text-3xl font-bold text-white mb-6">{service.title}</h3>
                  <Link to="/details" className="btn-glass py-3 px-6 text-sm inline-flex items-center">
                    자세히 보기 <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="bg-primary rounded-[4rem] p-16 md:p-32 text-center relative overflow-hidden shadow-2xl shadow-primary/30"
          >
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <div className="absolute -top-20 -left-20 w-80 h-80 bg-white rounded-full blur-[80px]" />
              <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white rounded-full blur-[80px]" />
            </div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-6xl font-black text-white mb-10 tracking-tighter leading-tight">
                지금 바로 우리 회사 맞춤형<br />무료 제안서를 받아보세요.
              </h2>
              <p className="text-xl text-white/70 mb-16 max-w-2xl mx-auto font-medium">
                상담 신청은 1분이면 충분합니다. 전문가가 24시간 이내에<br />최적의 솔루션을 들고 연락드립니다.
              </p>
              <button onClick={openAI} className="btn-glass bg-white text-primary hover:bg-white/90 py-6 px-12 text-xl group relative overflow-hidden">
                <span className="relative z-10 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 mr-3 text-primary animate-pulse" />
                  AI 맞춤 제안서 무료 신청하기
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
