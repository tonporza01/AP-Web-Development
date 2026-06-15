import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { translations } from '../utils/translations';

export default function FAQ({ lang }) {
  const t = translations[lang].faq;
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section 
      id="faq" 
      className="py-24 relative overflow-hidden bg-transparent dark:bg-[#090D16] transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold text-brandSecondary uppercase tracking-widest block font-outfit">
            {t.tag}
          </span>
          <h2 className="font-outfit text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">
            {t.title} <span className="text-gradient">{t.titleAccent}</span>
          </h2>
          <p className="text-slate-655 dark:text-gray-400 text-sm leading-relaxed font-medium">
            {t.desc}
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {t.list.map((faqItem, index) => {
            const isOpen = openIndex === index;

            return (
              <div 
                key={index}
                className="bg-white dark:bg-[#121824]/60 rounded-2xl border border-slate-200 dark:border-gray-800/40 overflow-hidden shadow-sm transition-all duration-200"
              >
                {/* Header (Question trigger) */}
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 text-left flex justify-between items-center gap-4 hover:bg-slate-50 dark:hover:bg-gray-800/25 transition-colors"
                >
                  <div className="flex gap-3 items-center">
                    <HelpCircle className="w-5 h-5 text-brandSecondary shrink-0" />
                    <span className="font-outfit text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-tight">
                      {faqItem.q}
                    </span>
                  </div>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-brandSecondary shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400 dark:text-gray-500 shrink-0" />
                  )}
                </button>

                {/* Body (Answer collapsible box) */}
                <div 
                  className={`transition-all duration-300 origin-top overflow-hidden ${
                    isOpen ? 'max-h-80 opacity-100 border-t border-slate-100 dark:border-gray-850 p-5' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-450 leading-relaxed font-medium">
                    {faqItem.a}
                  </p>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
