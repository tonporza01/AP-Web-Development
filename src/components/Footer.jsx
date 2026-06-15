import React from 'react';
import { Mail, Shield, MessageSquare, ArrowUpRight } from 'lucide-react';
import { translations } from '../utils/translations';

export default function Footer({ lang }) {
  const t = translations[lang].footer;
  const navTrans = translations[lang].nav;

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      window.history.pushState(null, null, href);
    }
  };

  const navLinks = [
    { label: navTrans.home, href: '#home' },
    { label: navTrans.services, href: '#services' },
    { label: navTrans.portfolio, href: '#portfolio' },
    { label: navTrans.contact, href: '#contact' }
  ];

  return (
    <footer className="bg-white dark:bg-[#090D16] border-t border-slate-200 dark:border-gray-800/40 pt-16 pb-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          {/* Logo & Description */}
          <div className="md:col-span-2 space-y-4">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="font-outfit text-xl font-extrabold tracking-tight flex items-center gap-2"
            >
              <span className="bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                AP
              </span>
              <span className="text-brandSecondary font-light">WebDev</span>
            </a>
            <p className="text-slate-650 dark:text-gray-400 text-sm leading-relaxed max-w-sm font-medium">
              {t.desc}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-outfit text-sm font-bold text-slate-900 dark:text-white uppercase tracking-widest mb-4">
              {t.navTitle}
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="text-slate-500 hover:text-brandSecondary dark:text-gray-400 dark:hover:text-brandSecondary text-sm transition-colors font-medium"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social / Work Handles */}
          <div>
            <h4 className="font-outfit text-sm font-bold text-slate-900 dark:text-white uppercase tracking-widest mb-4">
              {t.profilesTitle}
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="mailto:tonporza01@gmail.com"
                  className="flex items-center gap-2 text-slate-500 hover:text-brandSecondary dark:text-gray-400 dark:hover:text-brandSecondary transition-colors font-medium"
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  <span>tonporza01@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://line.me/ti/p/~11aprily"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-500 hover:text-brandSecondary dark:text-gray-400 dark:hover:text-brandSecondary transition-colors font-medium"
                >
                  <MessageSquare className="w-4 h-4 shrink-0" />
                  <span>Line ID: 11aprily</span>
                </a>
              </li>
              <li>
                <a
                  href="https://fastwork.co/user/arrowpee?source=web_marketplace_profile-menu_profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-500 hover:text-brandSecondary dark:text-gray-400 dark:hover:text-brandSecondary transition-colors font-medium"
                >
                  <Shield className="w-4 h-4 shrink-0" />
                  <span className="flex items-center gap-1">
                    {lang === 'th' ? 'โปรไฟล์ Fastwork' : 'Fastwork Profile'} <ArrowUpRight className="w-3 h-3 text-brandSecondary" />
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 dark:border-gray-800/40 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <p>© {new Date().getFullYear()} {t.copy}</p>
            <span className="hidden sm:inline text-slate-300 dark:text-gray-700">|</span>
            <span className="font-semibold text-brandSecondary">{t.demoProject}</span>
            <span className="hidden sm:inline text-slate-300 dark:text-gray-700">|</span>
            <span className="font-medium text-slate-400 dark:text-gray-500">{t.createdBtn}</span>
          </div>
          <div className="flex gap-4">
            <span className="hover:text-slate-800 dark:hover:text-gray-400 cursor-pointer transition-colors">{t.privacy}</span>
            <span>•</span>
            <span className="hover:text-slate-800 dark:hover:text-gray-400 cursor-pointer transition-colors">{t.terms}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
