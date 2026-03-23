import { motion } from 'motion/react';
import { Award, Target, Heart, Users, ShieldCheck } from 'lucide-react';
import { fadeIn } from '../constants';

export default function About() {
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
                About Us
              </span>
              <h1 className="text-4xl md:text-5xl font-black text-dark tracking-tight leading-[1.1] mb-8">
                기업 여행의<br />
                <span className="text-primary italic">새로운 기준</span>을 만듭니다
              </h1>
              <p className="text-lg text-dark/60 font-medium leading-relaxed">
                이지글로벌은 단순한 여행사를 넘어, 기업의 성장을 돕는<br />
                최고의 비즈니스 파트너로서 전문적인 솔루션을 제공합니다.
              </p>
            </motion.div>
            <div className="hidden md:block">
              <img src="/images/3d-icon3.png" alt="3D Icon" className="w-64 h-64 " />
            </div>
          </div>
        </div>
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

      {/* History Section */}
      <section className="py-32 bg-[#0F1115] relative overflow-hidden border-b border-white/5">
        <div className="container-custom relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="text-primary font-black uppercase tracking-widest text-[10px] block">Our History</span>
                <h2 className="text-4xl font-black text-white tracking-tight">이지글로벌이<br />걸어온 길</h2>
              </div>
              <p className="text-white/40 font-medium leading-relaxed max-w-md">
                2015년 설립 이후, 수많은 기업들과 함께하며 쌓아온 신뢰와 전문성은 이지글로벌의 가장 큰 자산입니다.
              </p>
            </div>

            <div className="space-y-12">
              {[
                { year: "2024", title: "AI 기반 맞춤 제안 시스템 도입", desc: "업계 최초 생성형 AI를 활용한 실시간 기업 여행 설계 서비스 런칭" },
                { year: "2022", title: "누적 고객사 500개 돌파", desc: "글로벌 대기업 및 공공기관 전담 파트너십 체결 확대" },
                { year: "2019", title: "해외 법인 설립 및 네트워크 확장", desc: "동남아시아 및 유럽 주요 거점 현지 네트워크 구축 완료" },
                { year: "2015", title: "이지글로벌 설립", desc: "기업 전문 여행 컨설팅 서비스 시작" },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-8 group">
                  <div className="flex-shrink-0">
                    <span className="text-3xl font-black text-primary/40 group-hover:text-primary transition-colors duration-500">{item.year}</span>
                  </div>
                  <div className="space-y-2 pt-1">
                    <h4 className="text-xl font-bold text-white group-hover:text-primary transition-colors duration-500">{item.title}</h4>
                    <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
