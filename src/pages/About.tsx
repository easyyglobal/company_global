import { motion } from 'motion/react';
import { Award, Target, Heart, Users, History } from 'lucide-react';
import { fadeIn } from '../constants';

export default function About() {
  return (
    <div className="bg-bg">
      {/* Page Header */}
      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeIn} className="max-w-3xl">
            <span className="text-primary font-black uppercase tracking-widest text-xs mb-4 block">About Us</span>
            <h1 className="text-4xl md:text-6xl font-black text-dark mb-10 tracking-tighter leading-none">
              회사 소개
            </h1>
            <p className="text-xl text-dark/60 leading-relaxed font-medium">
              이지글로벌의 전문성을 바탕으로 탄생한 기업여행연구소는 
              비즈니스 여행의 새로운 기준을 만들어갑니다.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CEO Message */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div {...fadeIn} className="relative">
              <div className="rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/5]">
                <img 
                  src="/images/ceo.jpg" 
                  alt="CEO" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800";
                  }}
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 glass p-10 rounded-3xl shadow-2xl">
                <p className="text-3xl font-black text-primary mb-1 tracking-tight">홍길동</p>
                <p className="text-xs font-black text-dark/30 uppercase tracking-[0.2em]">Founder & CEO</p>
              </div>
            </motion.div>
            <motion.div {...fadeIn}>
              <h2 className="text-3xl md:text-5xl font-black text-dark mb-10 tracking-tighter leading-tight">
                "우리는 기업 여행의<br /><span className="text-primary">새로운 표준</span>을 연구합니다."
              </h2>
              <div className="space-y-8 text-lg text-dark/60 leading-relaxed font-medium">
                <p>
                  안녕하십니까, 기업여행연구소 대표 홍길동입니다. 
                  우리는 '왜 기업 출장은 항상 복잡하고 번거로워야 할까?'라는 
                  단순한 의문에서 시작한 스타트업입니다.
                </p>
                <p>
                  기존의 관행적인 여행 대행 서비스에서 벗어나, 
                  IT 기술과 전문 큐레이션을 결합하여 인사총무팀의 업무 효율을 
                  극대화하는 'Zero-Task' 솔루션을 제안합니다.
                </p>
                <p>
                  우리는 규모보다 깊이를, 경력보다 혁신을 믿습니다. 
                  귀사의 성장을 지원하는 가장 젊고 스마트한 파트너가 되겠습니다.
                </p>
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
