import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Zap } from 'lucide-react';
import { translations } from '../utils/translations';

export default function Navbar({ activeSection, darkMode, setDarkMode, lang, setLang }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Track scrolling to toggle solid/glass styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const t = translations[lang].nav;

  const navLinks = [
    { name: t.home, href: '#home' },
    { name: t.services, href: '#services' },
    { name: t.process, href: '#process' },
    { name: t.portfolio, href: '#portfolio' },
    { name: t.pricing, href: '#pricing' },
    { name: t.contact, href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
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

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass shadow-lg py-3'
          : 'bg-transparent py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Logo Brand */}
          <div className="flex-shrink-0 flex items-center">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center gap-2 font-outfit text-xl font-extrabold tracking-tight"
            >
              <span className="p-2 bg-gradient-to-tr from-brandPrimary to-brandSecondary rounded-xl text-white shadow-md glow-cyan">
                <Zap className="w-5 h-5 fill-current" />
              </span>
              <span className="bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                AP
              </span>
              <span className="text-brandSecondary font-light">WebDev</span>
            </a>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => {
                const sectionId = link.href.slice(1);
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`font-semibold text-sm transition-all duration-200 relative py-1 ${
                      isActive
                        ? 'text-brandSecondary'
                        : 'text-slate-600 hover:text-slate-900 dark:text-gray-400 dark:hover:text-white'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brandSecondary rounded-full glow-cyan" />
                    )}
                  </a>
                );
              })}
            </div>

            {/* Icons & CTA */}
            <div className="flex items-center gap-4 border-l border-slate-200 dark:border-gray-800 pl-6">
              {/* Language Switcher Dual Toggle */}
              <button
                onClick={() => setLang(lang === 'th' ? 'en' : 'th')}
                className="flex items-center gap-1 text-xs font-black px-2.5 py-1.5 rounded-xl hover:bg-slate-200 dark:hover:bg-gray-800/30 transition-colors select-none text-slate-500 dark:text-gray-400"
                aria-label="Toggle language"
              >
                <span className={lang === 'th' ? 'text-brandSecondary' : 'text-slate-400 dark:text-gray-500'}>TH</span>
                <span className="text-slate-300 dark:text-gray-650">|</span>
                <span className={lang === 'en' ? 'text-brandSecondary' : 'text-slate-400 dark:text-gray-500'}>EN</span>
              </button>

              {/* Dark mode switcher */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 text-slate-600 hover:text-slate-900 dark:text-gray-400 dark:hover:text-white rounded-xl hover:bg-slate-200 dark:hover:bg-gray-850/50 transition-colors"
                aria-label="Toggle theme"
              >
                {darkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-indigo-600" />}
              </button>

              {/* Conversion CTA */}
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="px-5 py-2.5 bg-gradient-to-r from-brandPrimary to-brandSecondary hover:from-brandSecondary hover:to-brandPrimary text-white font-bold text-sm rounded-xl transition-all duration-300 shadow-md shadow-brandPrimary/20 hover:shadow-brandSecondary/30 hover:scale-[1.02]"
              >
                {t.cta}
              </a>
            </div>
          </div>

          {/* Mobile menu controllers */}
          <div className="flex items-center md:hidden gap-2">
            {/* Lang switcher for mobile */}
            <button
              onClick={() => setLang(lang === 'th' ? 'en' : 'th')}
              className="flex items-center gap-1 text-xs font-black px-2.5 py-1.5 rounded-xl hover:bg-slate-200 dark:hover:bg-gray-800/40 transition-colors select-none text-slate-500 dark:text-gray-400"
              aria-label="Toggle language"
            >
              <span className={lang === 'th' ? 'text-brandSecondary' : 'text-slate-400 dark:text-gray-500'}>TH</span>
              <span className="text-slate-300 dark:text-gray-650">|</span>
              <span className={lang === 'en' ? 'text-brandSecondary' : 'text-slate-400 dark:text-gray-500'}>EN</span>
            </button>

            {/* Dark mode switcher for mobile */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 text-slate-600 hover:text-slate-900 dark:text-gray-400 dark:hover:text-white rounded-xl hover:bg-slate-200 dark:hover:bg-gray-800/40 transition-colors"
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-indigo-600" />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 dark:text-gray-400 dark:hover:text-white rounded-xl hover:bg-slate-200 dark:hover:bg-gray-800/40 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full glass shadow-xl border-t border-slate-200 dark:border-gray-800/50 transition-all duration-300 origin-top overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100 py-4 scale-y-100' : 'max-h-0 opacity-0 scale-y-0'
        }`}
      >
        <div className="px-4 space-y-2 pb-3">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`block px-4 py-2.5 rounded-xl text-base font-semibold transition-all ${
                  isActive
                    ? 'bg-brandPrimary/10 text-brandSecondary border-l-4 border-brandSecondary'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-950 dark:text-gray-400 dark:hover:bg-gray-800/30 dark:hover:text-white'
                }`}
              >
                {link.name}
              </a>
            );
          })}
          <div className="pt-4 px-4">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="block w-full text-center py-3 bg-gradient-to-r from-brandPrimary to-brandSecondary text-white font-bold rounded-xl shadow-lg"
            >
              {t.cta}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
