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
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-6">
      <div className="max-w-7xl mx-auto">
        <div className="glass rounded-[2rem] px-8 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-all duration-500 shadow-lg shadow-primary/20">
                <span className="text-white font-black text-2xl">C</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black text-dark tracking-tighter leading-none">기업여행연구소</span>
                <span className="text-[9px] text-primary font-black tracking-[0.3em] uppercase opacity-70">Corporate Travel Lab</span>
              </div>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-12">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "text-sm font-bold transition-all hover:text-primary relative group py-2",
                  location.pathname === item.path ? "text-primary" : "text-dark/60"
                )}
              >
                {item.name}
                <span className={cn(
                  "absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-primary rounded-full transition-all duration-300 group-hover:w-4",
                  location.pathname === item.path ? "w-4" : ""
                )} />
              </Link>
            ))}
            <Link
              to="/contact"
              className="btn-primary py-3 px-8 text-sm flex items-center group"
            >
              <PhoneCall className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
              상담 신청
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-bg text-dark hover:text-primary transition-colors"
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
