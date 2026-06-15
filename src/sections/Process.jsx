import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { translations } from '../utils/translations';

export default function Process({ lang }) {
  const t = translations[lang].process;

  return (
    <section 
      id="process" 
      className="py-24 relative overflow-hidden bg-transparent dark:bg-[#090D16] transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
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

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
          
          {/* Decorative connecting line for desktop */}
          <div className="absolute top-1/2 left-4 right-4 h-0.5 bg-gradient-to-r from-brandPrimary/10 via-brandSecondary/25 to-brandPrimary/10 -translate-y-12 hidden lg:block pointer-events-none" />

          {t.steps.map((stepItem, index) => {
            return (
              <div 
                key={stepItem.step}
                className="group relative bg-white dark:bg-[#121824]/60 p-6 rounded-3xl border border-slate-200 dark:border-gray-800/40 shadow-sm flex flex-col justify-between min-h-[220px] transition-all duration-300 hover:shadow-lg hover:border-brandSecondary/20"
              >
                <div>
                  {/* Step Number Badge */}
                  <div className="w-10 h-10 rounded-xl bg-brandPrimary/10 flex items-center justify-center font-outfit font-black text-sm text-brandSecondary mb-6 group-hover:scale-105 transition-transform">
                    {stepItem.step}
                  </div>

                  {/* Step Title */}
                  <h3 className="font-outfit text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-2 leading-tight">
                    {stepItem.title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-xs text-slate-550 dark:text-gray-400 leading-relaxed font-medium">
                    {stepItem.desc}
                  </p>
                </div>

                {/* Arrow connector indicator */}
                {index < 4 && (
                  <div className="absolute top-1/2 -right-4 -translate-y-12 z-20 text-brandSecondary/40 hidden lg:block">
                    <ChevronRight className="w-6 h-6 animate-pulse" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
