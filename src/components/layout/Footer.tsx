import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-white/70 py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-8 group">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">R</span>
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">기업여행연구소</span>
            </Link>
            <p className="text-white/50 max-w-md mb-10 leading-relaxed text-sm">
              이지글로벌의 전문성을 바탕으로 탄생한 기업 전담 여행 솔루션입니다. 
              인사총무팀의 업무는 줄이고, 임직원의 만족도는 극대화하는 
              최고의 비즈니스 파트너가 되겠습니다.
            </p>
            <div className="text-xs text-white/30 space-y-2">
              <p>(주)이지글로벌 | 대표이사: 홍길동</p>
              <p>사업자등록번호: 000-00-00000 | 통신판매업신고: 제2024-서울-0000호</p>
              <p>서울특별시 강남구 테헤란로 000, 00층</p>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Services</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/details" className="hover:text-primary transition-colors">VIP 비즈니스 출장</Link></li>
              <li><Link to="/details" className="hover:text-primary transition-colors">팀빌딩 워크샵</Link></li>
              <li><Link to="/details" className="hover:text-primary transition-colors">ESG 연계 연수</Link></li>
              <li><Link to="/features" className="hover:text-primary transition-colors">Zero-Task 솔루션</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Support</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/about" className="hover:text-primary transition-colors">회사 소개</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">상담 문의</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">자주 묻는 질문</Link></li>
              <li className="text-primary font-bold pt-2">T. 02-000-0000</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Family Site</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="https://easyglobal.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center">이지글로벌 (본사) <span className="ml-1 text-[10px] opacity-50">↗</span></a></li>
              <li><a href="#" className="hover:text-primary transition-colors flex items-center">글로벌 비즈니스 센터 <span className="ml-1 text-[10px] opacity-50">↗</span></a></li>
              <li><a href="#" className="hover:text-primary transition-colors flex items-center">MICE 연구소 <span className="ml-1 text-[10px] opacity-50">↗</span></a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] text-white/20 uppercase tracking-widest font-bold">
          <p>© 2024 Corporate Travel Lab. All rights reserved.</p>
          <div className="flex space-x-8 mt-6 md:mt-0">
            <button className="hover:text-white transition-colors">Terms of Service</button>
            <button className="hover:text-white transition-colors">Privacy Policy</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
