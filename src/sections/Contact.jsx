import React from 'react';
import { Mail, MessageSquare, Shield, Check, Calendar } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import { translations } from '../utils/translations';

export default function Contact({ lang }) {
  const t = translations[lang].contact;

  const contactInfo = [
    {
      title: t.emailTitle,
      value: 'tonporza01@gmail.com',
      description: t.emailDesc,
      icon: <Mail className="w-5 h-5 text-brandSecondary" />,
      href: 'mailto:tonporza01@gmail.com'
    },
    {
      title: t.lineTitle,
      value: '11aprily',
      description: t.lineDesc,
      icon: <MessageSquare className="w-5 h-5 text-brandSecondary" />,
      href: 'https://line.me/ti/p/~11aprily'
    },
    {
      title: t.fastworkTitle,
      value: lang === 'th' ? 'จ้างงานบน Fastwork' : 'Hire on Fastwork',
      description: t.fastworkDesc,
      icon: <Shield className="w-5 h-5 text-brandSecondary" />,
      href: 'https://fastwork.co/user/arrowpee?source=web_marketplace_profile-menu_profile'
    }
  ];

  return (
    <section 
      id="contact" 
      className="py-24 relative overflow-hidden bg-transparent dark:bg-[#090D16] transition-colors duration-300"
    >
      {/* Decorative glows */}
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-brandPrimary/10 rounded-full blur-[100px] pointer-events-none" />
      
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Left Column: Direct Contact Info & SLA */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-6">
              <h3 className="font-outfit text-2xl font-bold text-slate-900 dark:text-white">
                {t.channelsTitle}
              </h3>
              <p className="text-slate-650 dark:text-gray-400 text-sm leading-relaxed font-medium">
                {t.channelsDesc}
              </p>
            </div>

            {/* Channels List */}
            <div className="space-y-4">
              {contactInfo.map((info) => (
                <a 
                  key={info.title}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex gap-4 p-5 rounded-2xl bg-white dark:bg-[#121824]/60 border border-slate-200 dark:border-gray-800/40 hover:border-brandSecondary/30 hover:shadow-lg hover:shadow-brandSecondary/5 transition-all duration-300 shadow-sm"
                >
                  <div className="w-10 h-10 rounded-xl bg-brandPrimary/10 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-500 dark:text-gray-500 uppercase tracking-wider">
                      {info.title}
                    </h4>
                    <p className="text-sm font-bold text-slate-900 dark:text-white mt-1 group-hover:text-brandSecondary transition-colors font-outfit">
                      {info.value}
                    </p>
                    <p className="text-xs text-slate-400 dark:text-gray-500 mt-1 leading-relaxed">
                      {info.description}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* SLA / Response Guarantee Box */}
            <div className="p-6 bg-white dark:bg-brandPrimary/5 rounded-2xl border border-slate-200 dark:border-brandPrimary/10 space-y-4 shadow-sm">
              <h4 className="font-outfit text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Calendar className="w-4 h-4 text-brandSecondary" />
                {t.guaranteeTitle}
              </h4>
              <ul className="space-y-2 text-xs text-slate-700 dark:text-gray-300 font-medium">
                <li className="flex gap-2 items-center">
                  <Check className="w-3.5 h-3.5 text-brandSuccess shrink-0" />
                  <span>{t.guaranteeItem1}</span>
                </li>
                <li className="flex gap-2 items-center">
                  <Check className="w-3.5 h-3.5 text-brandSuccess shrink-0" />
                  <span>{t.guaranteeItem2}</span>
                </li>
                <li className="flex gap-2 items-center">
                  <Check className="w-3.5 h-3.5 text-brandSuccess shrink-0" />
                  <span>{t.guaranteeItem3}</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Lead Form */}
          <div className="lg:col-span-7">
            <ContactForm lang={lang} />
          </div>

        </div>
      </div>
    </section>
  );
}
