import { motion } from 'motion/react';
import { Zap, ShieldCheck, Globe, BarChart3, Clock, Headphones } from 'lucide-react';
import { fadeIn } from '../constants';
import { cn } from '../lib/utils';

export default function Features() {
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
                Core Value & Services
              </span>
              <h1 className="text-4xl md:text-5xl font-black text-dark tracking-tight leading-[1.1] mb-8">
                비즈니스 여행의<br />
                <span className="text-primary italic">새로운 패러다임</span>
              </h1>
              <p className="text-lg text-dark/60 font-medium leading-relaxed">
                기업여행연구소만의 차별화된 기술력과 글로벌 파트너십으로<br />
                비즈니스 여행의 본질적인 가치를 실현합니다.
              </p>
            </motion.div>
            <div className="hidden md:block">
              <img src="/images/3d-icon2.png" alt="3D Icon" className="w-64 h-64 opacity-50" />
            </div>
          </div>
        </div>
      </section>

      {/* Zero-Task Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div {...fadeIn}>
              <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-8">
                <Zap className="w-8 h-8" />
              </div>
              <h2 className="text-4xl font-black text-dark mb-8 tracking-tight">기업 여행 연구소만의 특장점</h2>
              <p className="text-lg text-dark/60 mb-12 leading-relaxed">
                우리는 단순한 예약을 넘어 기업의 성공적인 행사를 연구합니다. 
                기획부터 디자인, 전문 인력 섭외까지 원스톱으로 지원하며 
                ESG 가치 실현과 전세기 이벤트 등 차별화된 경험을 선사합니다.
              </p>
              
              <div className="bg-white p-10 rounded-[2.5rem] border border-dark/5 shadow-xl">
                <h4 className="font-bold text-dark mb-8">도입 전/후 업무 시간 비교</h4>
                <div className="space-y-8">
                  <div>
                    <div className="flex justify-between text-xs font-bold uppercase tracking-widest mb-3">
                      <span className="text-dark/40">기존 방식 (직접 기획)</span>
                      <span className="text-dark">40시간+</span>
                    </div>
                    <div className="w-full h-4 bg-bg rounded-full overflow-hidden">
                      <div className="w-full h-full bg-dark/10" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs font-bold uppercase tracking-widest mb-3">
                      <span className="text-primary">기업여행연구소 도입 후</span>
                      <span className="text-primary">3시간 이내</span>
                    </div>
                    <div className="w-full h-4 bg-bg rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "7.5%" }}
                        transition={{ duration: 1, delay: 0.5, ease: "circOut" }}
                        className="h-full bg-primary" 
                      />
                    </div>
                  </div>
                </div>
                <p className="mt-8 text-[10px] text-dark/30 font-bold uppercase tracking-widest text-center">* 100인 규모 워크샵 기준 평균 수치</p>
              </div>
            </motion.div>
            
            <div className="grid grid-cols-2 gap-6">
              {[
                { title: "실시간 대응", sub: "24/7 핫라인", icon: Clock },
                { title: "비용 절감", sub: "평균 15% 절감", icon: BarChart3, dark: true },
                { title: "글로벌망", sub: "글로벌 파트너십", icon: Globe, primary: true },
                { title: "안전 보장", sub: "위기 대응 매뉴얼", icon: ShieldCheck }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  {...fadeIn}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.05, rotate: i % 2 === 0 ? 2 : -2 }}
                  className={cn(
                    "p-10 rounded-[2.5rem] text-center shadow-xl flex flex-col items-center justify-center",
                    item.dark ? "bg-dark text-white" : item.primary ? "bg-primary text-white" : "bg-white text-dark"
                  )}
                >
                  <item.icon className={cn("w-10 h-10 mb-6", !item.dark && !item.primary ? "text-primary" : "text-white")} />
                  <h4 className="font-black mb-2 tracking-tight">{item.title}</h4>
                  <p className={cn("text-xs font-bold uppercase tracking-widest", item.dark || item.primary ? "opacity-60" : "text-dark/40")}>{item.sub}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cost Structure */}
      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeIn} className="text-center mb-24">
            <span className="text-primary font-black uppercase tracking-widest text-xs mb-4 block">Structure</span>
            <h2 className="text-3xl md:text-5xl font-black text-dark tracking-tighter">어떻게 비용을 절감하나요?</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "글로벌 파트너십", 
                desc: "검증된 현지 랜드사 및 파트너십을 통해 최적의 동선과 안정적인 현지 케어를 보장합니다.",
                icon: Globe
              },
              { 
                title: "법인 전용 특가", 
                desc: "이지글로벌의 대규모 물량을 바탕으로 일반 예약 사이트보다 낮은 법인 전용 요금을 적용합니다.",
                icon: BarChart3
              },
              { 
                title: "스마트 정산", 
                desc: "불필요한 지출 항목을 분석하고 최적화된 예산 집행 가이드를 제공합니다.",
                icon: Zap
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                {...fadeIn}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-12 rounded-[3rem] shadow-xl border border-dark/5 text-center group"
              >
                <div className="w-20 h-20 rounded-3xl bg-bg flex items-center justify-center mx-auto mb-10 group-hover:bg-primary transition-colors duration-500">
                  <item.icon className="w-10 h-10 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-dark mb-6">{item.title}</h3>
                <p className="text-dark/60 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Concierge */}
      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-dark rounded-[4rem] p-16 md:p-24 text-white overflow-hidden relative">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <motion.div {...fadeIn}>
                <h2 className="text-3xl md:text-5xl font-black mb-10 tracking-tighter leading-tight">24/7 글로벌 컨시어지</h2>
                <p className="text-xl text-white/50 mb-12 leading-relaxed font-medium">
                  시차 걱정 없는 전담 매니저 매칭 시스템. 
                  해외 현지에서 발생하는 항공 지연, 수하물 분실, 건강 문제 등 
                  모든 돌발 상황에 즉각적으로 대응합니다.
                </p>
                <div className="flex items-center space-x-8">
                  <div className="flex -space-x-4">
                    {[1, 2, 3, 4].map(i => (
                      <img 
                        key={i} 
                        src={`/images/manager-${i}.jpg`} 
                        className="w-14 h-14 rounded-full border-4 border-dark" 
                        alt="Manager"
                        onError={(e) => {
                          e.currentTarget.src = `https://i.pravatar.cc/100?img=${i+10}`;
                        }}
                      />
                    ))}
                  </div>
                  <p className="text-xs font-black uppercase tracking-widest text-primary">50+ Expert Managers</p>
                </div>
              </motion.div>
              <motion.div {...fadeIn} className="grid grid-cols-1 gap-8">
                <div className="glass-dark p-8 rounded-3xl flex items-start space-x-6">
                  <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center flex-shrink-0">
                    <Headphones className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">실시간 위기 대응</h4>
                    <p className="text-sm text-white/40">현지 네트워크를 통한 즉각적인 현장 조치</p>
                  </div>
                </div>
                <div className="glass-dark p-8 rounded-3xl flex items-start space-x-6">
                  <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">스마트 일정 관리</h4>
                    <p className="text-sm text-white/40">모바일 앱을 통한 실시간 일정 알림 및 변경</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
