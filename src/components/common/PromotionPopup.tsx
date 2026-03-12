import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Gift } from 'lucide-react';

export default function PromotionPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hideUntil = localStorage.getItem('hidePromotionUntil');
    if (!hideUntil || new Date().getTime() > parseInt(hideUntil)) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const closePopup = () => setIsVisible(false);

  const hideForToday = () => {
    const tomorrow = new Date();
    tomorrow.setHours(24, 0, 0, 0);
    localStorage.setItem('hidePromotionUntil', tomorrow.getTime().toString());
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 100, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 100, scale: 0.9 }}
          className="fixed top-32 right-8 z-40 w-80 hidden lg:block"
        >
          <div className="bg-white rounded-[2.5rem] shadow-2xl border border-dark/5 overflow-hidden">
            {/* Promotion Image */}
            <div className="relative aspect-[3/4] bg-bg overflow-hidden">
              <img 
                src="/images/promotion.jpg" 
                alt="Promotion" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "https://picsum.photos/seed/promotion/400/600";
                }}
              />
              <button 
                onClick={closePopup}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-dark/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-dark/40 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Bottom Controls */}
            <div className="p-4 flex items-center justify-between bg-white border-t border-dark/5">
              <button 
                onClick={hideForToday}
                className="text-[10px] font-bold text-dark/30 hover:text-dark transition-colors uppercase tracking-widest"
              >
                오늘 하루 보지 않기
              </button>
              <button 
                onClick={closePopup}
                className="text-[10px] font-bold text-dark/30 hover:text-dark transition-colors uppercase tracking-widest"
              >
                닫기
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
