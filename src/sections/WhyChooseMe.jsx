import React from 'react';
import { Target, Zap, Search, MessageSquareCode } from 'lucide-react';
import { translations } from '../utils/translations';

export default function WhyChooseMe({ lang }) {
  const t = translations[lang].whyChooseMe;

  const icons = [
    <Target className="w-5 h-5 text-brandSecondary" />,
    <Zap className="w-5 h-5 text-brandSecondary" />,
    <Search className="w-5 h-5 text-brandSecondary" />,
    <MessageSquareCode className="w-5 h-5 text-brandSecondary" />
  ];

  return (
    <section 
      id="why-choose-me" 
      className="py-24 relative overflow-hidden bg-transparent dark:bg-[#090D16] transition-colors duration-300"
    >
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-brandPrimary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold text-brandSecondary uppercase tracking-widest block font-outfit">
            {t.tag}
          </span>
          <h2 className="font-outfit text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">
            {t.title} <span className="text-gradient">{t.titleAccent}</span>
          </h2>
          <p className="text-slate-650 dark:text-gray-400 text-sm sm:text-base leading-relaxed font-medium">
            {t.desc}
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.list.map((point, index) => (
            <div 
              key={point.title}
              className="bg-white dark:bg-[#121824]/60 p-8 rounded-3xl border border-slate-200 dark:border-gray-800/40 card-hover-effect flex gap-5 shadow-sm"
            >
              {/* Icon Container */}
              <div className="w-12 h-12 rounded-2xl bg-brandPrimary/10 flex items-center justify-center shrink-0">
                {icons[index]}
              </div>

              {/* Text details */}
              <div className="space-y-2">
                <h3 className="font-outfit text-lg font-bold text-slate-900 dark:text-white">
                  {point.title}
                </h3>
                <p className="text-slate-650 dark:text-gray-400 text-sm leading-relaxed font-medium">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
