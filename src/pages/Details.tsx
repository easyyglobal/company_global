import { motion } from 'motion/react';
import { CheckCircle2, Star, Quote, Users } from 'lucide-react';
import { fadeIn } from '../constants';

export default function Details() {
  return (
    <div className="bg-bg">
      {/* Page Header */}
      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeIn} className="max-w-3xl">
            <span className="text-primary font-black uppercase tracking-widest text-xs mb-4 block">Services</span>
            <h1 className="text-4xl md:text-6xl font-black text-dark mb-10 tracking-tighter leading-none">
              서비스 상세 정보
            </h1>
            <p className="text-xl text-dark/60 leading-relaxed font-medium">
              기업여행연구소가 제공하는 프리미엄 서비스의 구체적인 내용과 
              실제 진행 사례를 확인해보세요.
            </p>
          </motion.div>
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
              <h2 className="text-4xl font-black text-dark mb-8 tracking-tight">VIP 비즈니스 출장 컨시어지</h2>
              <p className="text-lg text-dark/60 mb-10 leading-relaxed">
                임원 및 핵심 인력의 출장은 단순한 이동이 아닌 비즈니스의 연장선입니다. 
                최상의 컨디션을 유지할 수 있도록 항공, 숙박, 현지 의전까지 
                A to Z 밀착 케어를 제공합니다.
              </p>
              <ul className="space-y-5 mb-12">
                {[
                  "전 세계 주요 항공사 비즈니스/퍼스트 클래스 최적가 확보",
                  "글로벌 5성급 호텔 법인 특가 및 VIP 베네핏 적용",
                  "현지 공항 픽업 및 전용 차량 의전 서비스",
                  "긴급 상황 대비 24시간 실시간 핫라인 운영"
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
              <h2 className="text-4xl font-black text-dark mb-8 tracking-tight">맞춤형 팀빌딩 워크샵</h2>
              <p className="text-lg text-dark/60 mb-10 leading-relaxed">
                천편일률적인 워크샵에서 벗어나 조직의 문화와 목표에 맞는 
                독창적인 프로그램을 기획합니다. 기획부터 운영, 정산까지 
                인사팀의 손길이 닿지 않아도 완벽하게 진행됩니다.
              </p>
              <ul className="space-y-5 mb-12">
                {[
                  "조직 진단 기반 맞춤형 팀빌딩 커리큘럼 설계",
                  "전국/해외 유니크 베뉴 및 숙소 큐레이션",
                  "전문 레크리에이션 강사 및 퍼실리테이터 매칭",
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
