import React from 'react';
import { Check, Flame } from 'lucide-react';
import { translations } from '../utils/translations';

export default function Pricing({ lang }) {
  const t = translations[lang].pricing;
  const isTh = lang === 'th';

  const handleChoosePlan = (e, planName) => {
    e.preventDefault();
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      const detailsTextarea = document.querySelector('textarea[name="details"]');
      const serviceSelect = document.querySelector('select[name="serviceType"]');
      
      // Auto-populate form details based on chosen plan
      if (serviceSelect) {
        if (planName.toLowerCase().includes('landing')) {
          serviceSelect.value = isTh ? 'สร้างแลนดิ้งเพจปิดการขาย' : 'Landing Page Development';
        } else if (planName.toLowerCase().includes('business')) {
          serviceSelect.value = isTh ? 'พัฒนาเว็บไซต์ธุรกิจทั่วไป' : 'Business Website Development';
        } else {
          serviceSelect.value = isTh ? 'พัฒนาแอปพลิเคชันด้วย React' : 'React Website Development';
        }
        // Trigger select event to clear validation errors
        const event = new Event('change', { bubbles: true });
        serviceSelect.dispatchEvent(event);
      }

      if (detailsTextarea) {
        detailsTextarea.value = isTh 
          ? `สวัสดีครับ สนใจติดตั้งบริการแพ็กเกจ: ${planName} รบกวนขอข้อมูลติดต่อและรายละเอียดเพิ่มเติมครับ` 
          : `Hello, I am interested in the package: ${planName}. Please contact me back with details.`;
        const event = new Event('change', { bubbles: true });
        detailsTextarea.dispatchEvent(event);
      }

      // Smooth scroll to contact
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = contactSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      window.history.pushState(null, null, '#contact');
    }
  };

  return (
    <section 
      id="pricing" 
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
          <p className="text-slate-650 dark:text-gray-400 text-sm sm:text-base leading-relaxed font-medium">
            {t.desc}
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {t.packages.map((pkg, index) => {
            const isPopular = index === 1; // Middle package is popular
            const mainPrice = isTh ? pkg.priceTHB : pkg.priceUSD;
            const subPrice = isTh ? pkg.priceUSD : pkg.priceTHB;

            return (
              <div 
                key={pkg.name}
                className={`flex flex-col justify-between rounded-3xl border relative transition-all duration-300 ${
                  isPopular
                    ? 'bg-white dark:bg-[#162235] border-brandPrimary shadow-xl scale-[1.03] lg:-translate-y-2.5 z-10 glow-blue'
                    : 'bg-white dark:bg-[#121824]/60 border-slate-200 dark:border-gray-800/40 shadow-sm hover:border-slate-300 dark:hover:border-gray-700'
                } p-8`}
              >
                {/* Popular Ribbon */}
                {isPopular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-brandPrimary to-brandSecondary text-white text-[10px] font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full flex items-center gap-1 shadow">
                    <Flame className="w-3.5 h-3.5 fill-current text-yellow-300" />
                    {t.popular}
                  </span>
                )}

                {/* Card Top Information */}
                <div>
                  <h3 className="font-outfit text-lg font-black text-slate-900 dark:text-white uppercase tracking-wider mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-gray-500 mb-6 min-h-8">
                    {pkg.desc}
                  </p>
                  
                  {/* Pricing Box */}
                  <div className="mb-6 pb-6 border-b border-slate-100 dark:border-gray-800/40">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white font-outfit">
                        {mainPrice}
                      </span>
                      <span className="text-[10px] text-slate-400 dark:text-gray-500 font-semibold">
                        / {t.setupFee}
                      </span>
                    </div>
                    <span className="text-xs text-brandSecondary font-bold block mt-1">
                      ≈ {subPrice}
                    </span>
                  </div>

                  {/* Delivery & Revisions Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6 p-3 bg-slate-50 dark:bg-[#090D16]/50 rounded-xl border border-slate-100 dark:border-gray-850">
                    <div>
                      <span className="text-[9px] text-slate-400 dark:text-gray-500 block uppercase font-bold">{t.day}</span>
                      <span className="text-xs font-black text-slate-900 dark:text-white font-outfit">{pkg.delivery}</span>
                    </div>
                    <div>
                      <span className="text-[9px] text-slate-400 dark:text-gray-500 block uppercase font-bold">{t.revision}</span>
                      <span className="text-xs font-black text-slate-900 dark:text-white font-outfit">{pkg.revisions}</span>
                    </div>
                  </div>

                  {/* Inclusions checklist */}
                  <h4 className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider mb-4 font-outfit">
                    {t.secKey}
                  </h4>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex gap-2.5 items-start text-xs text-slate-700 dark:text-gray-300 font-medium">
                        <Check className="w-3.5 h-3.5 text-brandSuccess mt-0.5 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Choose plan Button CTA */}
                <button
                  onClick={(e) => handleChoosePlan(e, pkg.name)}
                  className={`w-full py-3 rounded-xl font-bold text-xs text-center transition-all ${
                    isPopular
                      ? 'bg-gradient-to-r from-brandPrimary to-brandSecondary text-white hover:shadow-lg hover:shadow-brandPrimary/20 hover:scale-[1.01]'
                      : 'bg-slate-100 hover:bg-slate-200 dark:bg-gray-800/60 dark:hover:bg-gray-700 text-slate-800 dark:text-white'
                  }`}
                >
                  {t.choosePlan}
                </button>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
