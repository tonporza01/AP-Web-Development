import React, { useState, useEffect } from 'react';
import { MessageSquare, Shield, PhoneCall } from 'lucide-react';

export default function FloatingCTA({ lang }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating bar after scrolling 300px down
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isTh = lang === 'th';

  return (
    <div 
      className={`md:hidden fixed bottom-5 left-4 right-4 z-40 transition-all duration-300 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
      }`}
    >
      <div className="glass p-2.5 rounded-2xl flex items-center justify-between gap-3 shadow-2xl border border-brandPrimary/15 max-w-md mx-auto">
        {/* Line Quick link */}
        <a 
          href="https://line.me/ti/p/~11aprily"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-grow py-3 bg-[#06C755] text-white text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 shadow"
        >
          <MessageSquare className="w-4 h-4 fill-current" />
          <span>{isTh ? 'คุยทาง Line' : 'Line Chat'}</span>
        </a>

        {/* Fastwork Link */}
        <a 
          href="https://fastwork.co/user/arrowpee?source=web_marketplace_profile-menu_profile"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-grow py-3 bg-gradient-to-r from-brandPrimary to-brandSecondary text-white text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 shadow"
        >
          <Shield className="w-4 h-4" />
          <span>{isTh ? 'จ้างผ่าน Fastwork' : 'Hire Fastwork'}</span>
        </a>
      </div>
    </div>
  );
}
