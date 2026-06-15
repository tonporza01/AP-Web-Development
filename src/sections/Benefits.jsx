import React from 'react';
import { ArrowUpRight, BarChart3, Star, Compass, Award } from 'lucide-react';
import { translations } from '../utils/translations';

export default function Benefits({ lang }) {
  const t = translations[lang].benefits;

  const icons = [
    <BarChart3 className="w-5 h-5 text-brandSecondary" />,
    <Star className="w-5 h-5 text-brandSecondary" />,
    <Compass className="w-5 h-5 text-brandSecondary" />,
    <Award className="w-5 h-5 text-brandSecondary" />
  ];

  return (
    <section 
      id="benefits" 
      className="py-24 relative overflow-hidden bg-transparent dark:bg-[#0B121F] transition-colors duration-300"
    >
      {/* Background decoration */}
      <div className="absolute top-1/4 left-3/4 w-96 h-96 bg-brandPrimary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs font-bold text-brandSecondary uppercase tracking-widest block font-outfit">
              {t.tag}
            </span>
            <h2 className="font-outfit text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">
              {t.title} <br className="hidden sm:inline" />
              <span className="text-gradient">{t.titleAccent}</span>
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-slate-650 dark:text-gray-400 text-sm leading-relaxed font-medium">
              {t.desc}
            </p>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {t.list.map((benefit, index) => (
            <div 
              key={benefit.title}
              className="bg-white dark:bg-[#121824]/60 p-8 rounded-3xl border border-slate-200 dark:border-gray-800/40 card-hover-effect flex flex-col justify-between min-h-[260px] shadow-sm"
            >
              <div>
                {/* Header info */}
                <div className="flex justify-between items-center mb-6">
                  <div className="w-10 h-10 rounded-xl bg-brandPrimary/10 flex items-center justify-center">
                    {icons[index]}
                  </div>
                  <span className="text-[10px] font-bold text-brandSuccess uppercase bg-brandSuccess/10 px-2.5 py-1 rounded-md">
                    {benefit.metric}
                  </span>
                </div>

                {/* Text details */}
                <h3 className="font-outfit text-xl font-bold mb-3 text-slate-900 dark:text-white">
                  {benefit.title}
                </h3>
                <p className="text-slate-650 dark:text-gray-400 text-sm leading-relaxed font-medium">
                  {benefit.description}
                </p>
              </div>

              {/* Arrow CTA detail */}
              <div className="pt-6 border-t border-slate-100 dark:border-gray-800/20 mt-6 flex justify-end">
                <span className="text-[10px] text-slate-400 dark:text-gray-500 flex items-center gap-1">
                  {t.standard} <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
