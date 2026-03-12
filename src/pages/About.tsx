import { motion } from 'motion/react';
import { Award, Target, Heart, Users, History, ShieldCheck, Zap } from 'lucide-react';
import { fadeIn } from '../constants';

export default function About() {
  return (
    <div className="bg-bg">
      {/* Page Header */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-bg/50 z-0" />
        <div className="absolute top-0 left-0 w-full h-full z-0 opacity-30">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[100px]" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div {...fadeIn} className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-[10px] font-black tracking-widest uppercase mb-6 border border-primary/10">
              <Users className="w-3 h-3" />
              <span>About Us</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-dark mb-8 tracking-tighter leading-none">
              회사 소개
            </h1>
            <p className="text-lg text-dark/60 leading-relaxed font-medium max-w-2xl">
              이지글로벌의 전문성을 바탕으로 탄생한 기업여행연구소는 
              비즈니스 여행의 새로운 기준을 만들어갑니다.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-dark/5 to-transparent" />
      </section>

      {/* Company Philosophy */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div {...fadeIn}>
              <h2 className="text-3xl md:text-5xl font-black text-dark mb-10 tracking-tighter leading-tight">
                "우리는 기업 여행의<br /><span className="text-primary">새로운 표준</span>을 연구합니다."
              </h2>
              <div className="space-y-8 text-lg text-dark/60 leading-relaxed font-medium">
                <p>
                  기업여행연구소는 '왜 기업 출장은 항상 복잡하고 번거로워야 할까?'라는 
                  단순한 의문에서 시작되었습니다.
                </p>
                <p>
                  우리는 기존의 관행적인 여행 대행 서비스에서 벗어나, 
                  IT 기술과 전문 큐레이션을 결합하여 인사총무팀의 업무 효율을 
                  극대화하는 'Zero-Task' 솔루션을 제안합니다.
                </p>
                <p>
                  신규 업체로서 우리는 규모보다 깊이를, 경력보다 혁신을 믿습니다. 
                  귀사의 성장을 지원하는 가장 젊고 스마트한 파트너가 되겠습니다.
                </p>
              </div>
            </motion.div>
            <motion.div {...fadeIn} className="relative">
              <div className="glass p-12 rounded-[3rem] border border-primary/10 shadow-xl">
                <div className="space-y-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Target className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-dark mb-2">젊은 감각, 빠른 대응</h4>
                      <p className="text-sm text-dark/50">관행에 얽매이지 않는 유연한 사고로 가장 효율적인 경로를 찾아냅니다.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-dark mb-2">1:1 전담 매니저제</h4>
                      <p className="text-sm text-dark/50">모든 고객사에는 숙련된 전담 매니저가 배정되어 끝까지 책임집니다.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <ShieldCheck className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-dark mb-2">투명한 비용 정산</h4>
                      <p className="text-sm text-dark/50">숨겨진 수수료 없이 모든 비용을 투명하게 공개하고 정산합니다.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Values */}
      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeIn} className="text-center mb-24">
            <span className="text-primary font-black uppercase tracking-widest text-xs mb-4 block">Vision</span>
            <h2 className="text-3xl md:text-5xl font-black text-dark tracking-tighter">우리의 핵심 가치</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "Innovation", 
                desc: "전통적인 방식을 거부하고, 효율적인 프로세스와 기술로 업무의 질을 높입니다.",
                icon: Target
              },
              { 
                title: "Agility", 
                desc: "스타트업만의 빠른 피드백과 유연한 대응으로 고객의 니즈에 즉각 반응합니다.",
                icon: Award
              },
              { 
                title: "User-Centric", 
                desc: "예약자부터 여행자까지, 모든 사용자의 경험을 최우선으로 설계합니다.",
                icon: Heart
              }
            ].map((value, i) => (
              <motion.div 
                key={i}
                {...fadeIn}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white p-12 rounded-[3rem] shadow-xl border border-dark/5 text-center group"
              >
                <div className="w-20 h-20 rounded-3xl bg-bg flex items-center justify-center mx-auto mb-10 group-hover:bg-primary transition-colors duration-500">
                  <value.icon className="w-10 h-10 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-dark mb-6">{value.title}</h3>
                <p className="text-dark/60 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-32 px-4 bg-dark text-white overflow-hidden relative">
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div {...fadeIn} className="text-center mb-24">
            <span className="text-primary font-black uppercase tracking-widest text-xs mb-4 block">Our Journey</span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter">우리의 발걸음</h2>
          </motion.div>

          <div className="space-y-16">
            {[
              { year: "2024", event: "기업여행연구소 B2B 전용 플랫폼 런칭 및 법인화" },
              { year: "2023", event: "이지글로벌 사내 벤처 프로젝트 'Zero-Task' 시작" },
              { year: "2022", event: "기업 출장 프로세스 혁신 연구 착수" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                {...fadeIn}
                className="flex items-start space-x-12 group"
              >
                <div className="text-4xl font-black text-primary w-24 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">{item.year}</div>
                <div className="pt-3 border-l-4 border-white/10 pl-12 pb-8">
                  <p className="text-2xl font-bold text-white/80 group-hover:text-white transition-colors">{item.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-32 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-[10px] font-black text-dark/20 uppercase tracking-[0.5em]">Global Partners</h2>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 items-center opacity-20 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-700">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} className="flex justify-center">
                <img 
                  src="/images/partner-logo.png" 
                  alt="Partner" 
                  className="h-6 md:h-8 object-contain"
                  onError={(e) => {
                    e.currentTarget.src = "https://logo.clearbit.com/google.com";
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
