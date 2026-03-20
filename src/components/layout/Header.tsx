import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, PhoneCall } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { motion, AnimatePresence } from 'motion/react';

const navItems = [
  { name: '홈', path: '/' },
  { name: '상세 정보', path: '/details' },
  { name: '기능/서비스', path: '/features' },
  { name: '소개/안내', path: '/about' },
];

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';
  const isTransparent = isHome && !scrolled;

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        (scrolled || !isHome) ? "py-4 px-4" : "py-6 px-0"
      )}
    >
      <div className={cn(
        "mx-auto transition-all duration-500 container-custom"
      )}>
        <div className={cn(
          "transition-all duration-500 flex justify-between items-center",
          (scrolled || !isHome)
            ? "glass rounded-[2rem] px-8 py-4 shadow-lg" 
            : "bg-transparent py-2"
        )}>
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 group>
              <div className="w-10 h-10 flex items-center justify-center group-hover:rotate-12 transition-transform">
                <img 
                  src="/images/logo.png" // 이 부분을 실제 파일 경로로 수정하세요!
                  alt="기업여행연구소 로고" 
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col">
                <span className={cn(
                  "text-xl font-black tracking-tighter leading-none transition-colors",
                  isTransparent ? "text-white" : "text-dark"
                )}>기업여행연구소</span>
                <span className={cn(
                  "text-[9px] font-black tracking-[0.3em] uppercase opacity-70 transition-colors",
                  isTransparent ? "text-primary-light text-white/80" : "text-primary"
                )}>Corporate Travel Lab</span>
              </div>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "text-sm font-bold transition-all hover:text-primary relative group py-2",
                  location.pathname === item.path 
                    ? "text-primary" 
                    : (isTransparent ? "text-white/80 hover:text-white" : "text-dark/60")
                )}
              >
                {item.name}
                <span className={cn(
                  "absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-primary rounded-full transition-all duration-300 group-hover:w-4",
                  location.pathname === item.path ? "w-4" : ""
                )} />
              </Link>
            ))}
            <div className="flex items-center space-x-3">
              <Link
                to="/contact"
                className={cn(
                  "btn-primary py-3 px-6 text-sm flex items-center group",
                  !scrolled && isHome && "bg-white text-dark font-bold hover:bg-white/90 shadow-none"
                )}
              >
                <PhoneCall className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                상담 신청
              </Link>
              <a
                href="https://www.easyglobal.kr/"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "h-[46px] px-6 flex items-center justify-center rounded-xl transition-all duration-300 group backdrop-blur-md border",
                  !scrolled && isHome 
                    ? "bg-white/10 border-white/20 hover:bg-white/20" 
                    : "bg-dark/5 border-dark/10 hover:bg-dark/10"
                )}
                title="이지글로벌 홈페이지로 이동"
              >
                {/* 로고 이미지를 public/images/easyglobal-logo.png 에 넣어주세요 */}
                <img 
                  src="/images/easyglobal-logo.png" 
                  alt="이지글로벌" 
                  className="h-5 w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    if (e.currentTarget.nextElementSibling) {
                      e.currentTarget.nextElementSibling.classList.remove('hidden');
                    }
                  }}
                />
                <span className={cn(
                  "hidden font-bold text-sm",
                  !scrolled && isHome ? "text-white" : "text-dark"
                )}>
                  이지글로벌
                </span>
              </a>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                "w-10 h-10 flex items-center justify-center rounded-xl transition-colors",
                isTransparent ? "bg-white/10 text-white" : "bg-bg text-dark hover:text-primary"
              )}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-2 px-4"
          >
            <div className="glass rounded-2xl p-6 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block px-4 py-3 text-base font-bold rounded-xl transition-all",
                    location.pathname === item.path ? "bg-primary text-white" : "text-dark hover:bg-bg"
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center mt-4 btn-primary"
              >
                상담 신청
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
