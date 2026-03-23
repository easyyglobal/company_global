import { motion } from 'motion/react';
import { CheckCircle2, Star, Quote, Users, Globe } from 'lucide-react';
import { fadeIn } from '../constants';

export default function Details() {
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
                Premium Services
              </span>
              <h1 className="text-4xl md:text-5xl font-black text-dark tracking-tight leading-[1.1] mb-8">
                세밀한 기획이 만드는<br />
                <span className="text-primary italic">완벽한 경험</span>
              </h1>
              <p className="text-lg text-dark/60 font-medium leading-relaxed">
                기업여행연구소가 제공하는 프리미엄 서비스의 구체적인 내용과<br />
                실제 진행 사례를 확인해보세요.
              </p>
            </motion.div>
            <div className="hidden md:block">
              <img src="/images/3d-icon1.png" alt="3D Icon" className="w-64 h-64 " />
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto space-y-40">
          {/* VIP Business Trip */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div {...fadeIn}>
              <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-8">
                <Star className="w-8 h-8" />
              </div>
              <h2 className="text-4xl font-black text-dark mb-8 tracking-tight">기업 여행 특화 솔루션</h2>
              <p className="text-lg text-dark/60 mb-10 leading-relaxed">
                기업여행연구소는 단순한 여행사가 아닙니다. 기업의 문화와 목적을 이해하고, 
                기획부터 디자인, 운영까지 모든 과정을 전문적으로 지원하는 비즈니스 파트너입니다.
              </p>
              <ul className="space-y-5 mb-12">
                {[
                  "기업 문화에 최적화된 맞춤형 일정 기획",
                  "행사 컨셉에 맞는 전문 디자인 지원 (배너, 굿즈 등)",
                  "전문 MC 및 레크리에이션 강사 섭외 지원",
                  "ESG 가치를 담은 친환경 연계 연수 프로그램"
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-4">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-dark font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div {...fadeIn} className="rounded-[3rem] overflow-hidden shadow-2xl">
              <img 
                src="/images/service-vip.jpg" 
                alt="VIP Service" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1540339832862-47452993c66e?auto=format&fit=crop&q=80&w=800";
                }}
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>

          {/* Team Building Workshop */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div {...fadeIn} className="order-2 lg:order-1 rounded-[3rem] overflow-hidden shadow-2xl">
              <img 
                src="/images/service-workshop.jpg" 
                alt="Workshop" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800";
                }}
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <motion.div {...fadeIn} className="order-1 lg:order-2">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-8">
                <Users className="w-8 h-8" />
              </div>
              <h2 className="text-4xl font-black text-dark mb-8 tracking-tight">프리미엄 전세기 & 이벤트</h2>
              <p className="text-lg text-dark/60 mb-10 leading-relaxed">
                이동 수단을 넘어선 특별한 경험을 제공합니다. 
                우리 기업만을 위한 전세기를 통해 비행기 안에서부터 
                설레는 이벤트를 시작할 수 있습니다.
              </p>
              <ul className="space-y-5 mb-12">
                {[
                  "기업 전용 전세기(Charter) 수급 및 운영",
                  "기내 커스텀 브랜딩 및 특별 이벤트 기획",
                  "글로벌 네트워크를 통한 유니크 베뉴 섭외",
                  "행사 기록 영상 및 사진 촬영 서비스 제공"
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-4">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-dark font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* ESG Training Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div {...fadeIn}>
              <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-8">
                <Globe className="w-8 h-8" />
              </div>
              <h2 className="text-4xl font-black text-dark mb-8 tracking-tight">ESG 연계 기업 연수</h2>
              <p className="text-lg text-dark/60 mb-10 leading-relaxed">
                단순한 관광을 넘어 기업의 사회적 책임을 실천하는 연수 프로그램을 제안합니다. 
                현지 커뮤니티 기여, 탄소 중립 실천 등 ESG 가치를 직접 체험하고 
                조직의 철학을 내재화할 수 있는 특별한 여정을 만듭니다.
              </p>
              <ul className="space-y-5 mb-12">
                {[
                  "탄소 중립 실천을 위한 친환경 이동 및 숙박 큐레이션",
                  "현지 사회적 기업 및 비영리 단체 연계 봉사 활동",
                  "지속 가능한 발전을 위한 전문가 초빙 세미나",
                  "제로 웨이스트(Zero-Waste) 컨셉의 행사 운영"
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-4">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-dark font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div {...fadeIn} className="rounded-[3rem] overflow-hidden shadow-2xl">
              <img 
                src="/images/service-esg.jpg" 
                alt="ESG Training" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800";
                }}
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeIn} className="text-center mb-24">
            <span className="text-primary font-black uppercase tracking-widest text-xs mb-4 block">Case Study</span>
            <h2 className="text-3xl md:text-5xl font-black text-dark tracking-tighter">성공 레퍼런스</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                company: "IT 대기업 K사",
                title: "전사 임직원 500명 제주 워크샵",
                result: "업무량 80% 절감, 만족도 4.8/5.0",
                quote: "복잡한 항공권 발권부터 숙소 배정까지 알아서 척척 해주셔서 인사팀이 정말 편했습니다."
              },
              {
                company: "글로벌 제조사 S사",
                title: "유럽 비즈니스 연수 및 컨퍼런스",
                result: "예산 20% 최적화, 무사고 운영",
                quote: "까다로운 일정 변경에도 실시간으로 대응해주시는 전담 매니저님 덕분에 안심하고 다녀왔습니다."
              }
            ].map((caseStudy, i) => (
              <motion.div 
                key={i}
                {...fadeIn}
                whileHover={{ y: -10 }}
                className="bg-white p-12 rounded-[3rem] shadow-xl border border-dark/5"
              >
                <div className="flex items-center space-x-1 mb-8">
                  {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-5 h-5 text-primary fill-primary" />)}
                </div>
                <h4 className="text-xs font-black text-primary uppercase tracking-widest mb-2">{caseStudy.company}</h4>
                <h3 className="text-2xl font-bold text-dark mb-6">{caseStudy.title}</h3>
                <p className="text-lg text-dark/60 mb-10 italic leading-relaxed">
                  "{caseStudy.quote}"
                </p>
                <div className="pt-8 border-t border-dark/5 text-sm font-bold text-dark uppercase tracking-widest">
                  Result: {caseStudy.result}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
