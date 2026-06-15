import React from 'react';
import { Star, Quote, ShieldCheck } from 'lucide-react';
import { translations } from '../utils/translations';

export default function Testimonials({ lang }) {
  const t = translations[lang].testimonials;
  const isTh = lang === 'th';

  const projectsAssociated = [
    isTh ? 'กรณีศึกษา: เว็บไซต์คลินิกเสริมความงาม' : 'Case Study: Beauty Clinic Website',
    isTh ? 'กรณีศึกษา: เว็บไซต์ร้านกาแฟสเปเชียลตี้' : 'Case Study: Coffee Shop Website',
    isTh ? 'กรณีศึกษา: เว็บไซต์ก่อสร้าง & วิศวกรรม' : 'Case Study: Construction Portal',
    isTh ? 'กรณีศึกษา: เว็บไซต์ภาษีสำนักงานบัญชี' : 'Case Study: Accounting Website',
    isTh ? 'กรณีศึกษา: แลนดิ้งเพจช่างล้างแอร์' : 'Case Study: AC Service Landing Page'
  ];

  return (
    <section 
      id="testimonials" 
      className="py-24 relative overflow-hidden bg-transparent dark:bg-[#0B121F] transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold text-brandSecondary uppercase tracking-widest block font-outfit">
            {t.tag}
          </span>
          <h2 className="font-outfit text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">
            {t.title} <span className="text-gradient">{t.titleAccent}</span>
          </h2>
          <p className="text-slate-655 dark:text-gray-400 text-sm sm:text-base leading-relaxed font-medium">
            {t.desc}
          </p>
        </div>

        {/* Testimonials Masonry/Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {t.list.map((review, index) => {
            return (
              <div 
                key={review.name}
                className="group bg-white dark:bg-[#121824]/60 p-8 rounded-3xl border border-slate-200 dark:border-gray-800/40 shadow-sm relative overflow-hidden flex flex-col justify-between min-h-[300px] hover:shadow-lg transition-all duration-300"
              >
                {/* Quote Icon watermark */}
                <Quote className="absolute right-6 top-6 w-10 h-10 text-brandPrimary/5 group-hover:text-brandPrimary/10 transition-colors pointer-events-none" />

                <div>
                  {/* Rating indicator */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current text-yellow-400" />
                    ))}
                  </div>

                  {/* Quote content */}
                  <p className="text-slate-700 dark:text-gray-300 text-sm leading-relaxed mb-6 font-medium italic">
                    "{review.quote}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="pt-4 border-t border-slate-100 dark:border-gray-850 mt-auto flex flex-col gap-2">
                  <div>
                    <span className="font-outfit text-sm font-bold text-slate-900 dark:text-white block">
                      {review.name}
                    </span>
                    <span className="text-[10px] text-slate-500 dark:text-gray-500 block uppercase font-bold mt-0.5">
                      {review.role}
                    </span>
                  </div>
                  {/* Associated project badge */}
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-brandSuccess/10 text-[9px] text-brandSuccess font-bold self-start mt-2">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>{projectsAssociated[index]}</span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
