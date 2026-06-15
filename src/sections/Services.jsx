import React from 'react';
import ServiceCard from '../components/ServiceCard';
import { translations } from '../utils/translations';

export default function Services({ lang }) {
  const t = translations[lang].services;

  return (
    <section 
      id="services" 
      className="py-24 relative overflow-hidden bg-transparent dark:bg-[#090D16] transition-colors duration-300"
    >
      {/* Decorative background glows */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-brandPrimary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold text-brandSecondary uppercase tracking-widest block font-outfit">
            {t.tag}
          </span>
          <h2 className="font-outfit text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">
            {t.title} <br className="hidden sm:inline" />
            <span className="text-gradient">{t.titleAccent}</span>
          </h2>
          <p className="text-slate-650 dark:text-gray-400 text-sm sm:text-base leading-relaxed font-medium">
            {t.desc}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.list.map((service, index) => (
            <ServiceCard 
              key={service.title} 
              service={service} 
              index={index} 
            />
          ))}
        </div>

      </div>
    </section>
  );
}
