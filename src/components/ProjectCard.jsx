import React, { useState } from 'react';
import { ExternalLink, Check, Smartphone, Monitor, ChevronRight, X, Sparkles } from 'lucide-react';
import { translations } from '../utils/translations';

const VERCEL_URLS = {
  clinic: 'https://beauty-clinic-demo-five.vercel.app/',
  coffee: 'https://coffee-shop-demo-mocha.vercel.app/',
  construction: 'https://construction-company-demo.vercel.app/',
  accounting: 'https://accounting-firm-demo-eta.vercel.app/',
  ac: 'https://air-conditioner-service-demo.vercel.app/'
};

// Optimized screenshot preview renderer for the portfolio cards
const MockupPreview = ({ type, lang }) => {
  const imageMap = {
    clinic: '/assets/clinic_preview.png',
    coffee: '/assets/coffee_preview.png',
    construction: '/assets/construction_preview.png',
    accounting: '/assets/accounting_preview.png',
    ac: '/assets/ac_preview.png'
  };

  const imageSrc = imageMap[type];

  return (
    <div className="w-full h-full relative overflow-hidden bg-slate-900 select-none">
      <img 
        src={imageSrc}
        alt={`${type} website preview`}
        className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-[1.03]"
        loading="lazy"
      />
      {/* Light gradient overlay to blend into the card theme */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />
    </div>
  );
};

export default function ProjectCard({ project, lang }) {
  const { title, description, tags, type, details } = project;
  const [showSandbox, setShowSandbox] = useState(false);
  const [responsiveMode, setResponsiveMode] = useState('desktop');

  const t = translations[lang].portfolio;
  const isTh = lang === 'th';

  return (
    <>
      <div 
        className="group bg-white dark:bg-[#121824]/60 rounded-3xl border border-slate-200 dark:border-gray-800/40 overflow-hidden flex flex-col shadow-sm transition-all duration-300 hover:shadow-brandPrimary/15 hover:border-brandPrimary/30"
      >
        {/* Browser Frame Window Mockup */}
        <div className="w-full bg-slate-100 dark:bg-[#121824] border-b border-slate-200 dark:border-gray-800/30 p-2.5 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
          </div>
          <div className="w-2/3 h-5 bg-white dark:bg-[#090D16] border border-slate-200 dark:border-gray-800/30 rounded-md flex items-center justify-center text-[8px] sm:text-[9px] text-gray-500 select-none font-mono truncate px-2">
            {VERCEL_URLS[type].replace('https://', '')}
          </div>
          <div className="w-4" />
        </div>

        {/* Live Mockup Box */}
        <div className="relative h-44 bg-[#090D16] overflow-hidden group-hover:scale-[1.01] transition-transform duration-300">
          <MockupPreview type={type} lang={lang} />
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-[#090D16]/65 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300">
            <button
              onClick={() => setShowSandbox(true)}
              className="px-5 py-2.5 bg-brandSecondary text-slate-950 font-semibold text-xs rounded-xl flex items-center gap-1.5 hover:bg-white transition-all shadow-lg shadow-brandSecondary/20"
            >
              {t.demoBtn}
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Content Box */}
        <div className="p-6 flex-grow flex flex-col justify-between">
          <div>
            {/* Tech Badges */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {tags.map((tag) => (
                <span 
                  key={tag}
                  className="text-[10px] font-semibold tracking-wide bg-brandPrimary/10 text-brandSecondary px-2 py-0.5 rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Project Title */}
            <h3 className="font-outfit text-xl font-bold mb-2 text-slate-900 dark:text-white group-hover:text-brandSecondary transition-colors">
              {title}
            </h3>

            {/* Project Description */}
            <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed mb-6 font-medium">
              {description}
            </p>
          </div>

          {/* Learn More / Demo Action bar */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-gray-800/20">
            <button 
              onClick={() => setShowSandbox(true)}
              className="text-xs font-semibold text-slate-600 dark:text-gray-350 hover:text-brandSecondary transition-colors flex items-center gap-1"
            >
              {t.caseStudyLink} <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Interactive Simulated Live Demo Sandbox Modal */}
      {showSandbox && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="w-full max-w-5xl h-[90vh] bg-white dark:bg-[#121824] rounded-3xl border border-slate-200 dark:border-gray-800/50 flex flex-col overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="p-4 bg-slate-50 dark:bg-[#121824] border-b border-slate-200 dark:border-gray-800/40 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="p-1.5 bg-brandSecondary/10 rounded-lg text-brandSecondary">
                  <Sparkles className="w-4 h-4" />
                </span>
                <div>
                  <h4 className="font-outfit text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    {title}
                    <span className="text-[10px] bg-brandSuccess/10 text-brandSuccess px-2 py-0.5 rounded-full font-semibold">Live Sandbox</span>
                  </h4>
                  <p className="text-[10px] text-slate-500 dark:text-gray-500">{t.sandboxSubtitle}</p>
                </div>
              </div>

              {/* Responsiveness / Action controllers */}
              <div className="flex items-center gap-4">
                <div className="hidden sm:flex items-center bg-slate-100 dark:bg-[#090D16] rounded-xl p-1 border border-slate-200 dark:border-gray-800/30">
                  <button
                    onClick={() => setResponsiveMode('desktop')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                      responsiveMode === 'desktop'
                        ? 'bg-brandPrimary text-white shadow'
                        : 'text-slate-500 hover:text-slate-800 dark:text-gray-400 dark:hover:text-white'
                    }`}
                  >
                    <Monitor className="w-3.5 h-3.5" /> {t.desktop}
                  </button>
                  <button
                    onClick={() => setResponsiveMode('mobile')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                      responsiveMode === 'mobile'
                        ? 'bg-brandPrimary text-white shadow'
                        : 'text-slate-500 hover:text-slate-800 dark:text-gray-400 dark:hover:text-white'
                    }`}
                  >
                    <Smartphone className="w-3.5 h-3.5" /> {t.mobile}
                  </button>
                </div>

                <button
                  onClick={() => setShowSandbox(false)}
                  className="p-2 text-slate-555 hover:text-slate-800 dark:text-gray-400 dark:hover:text-white rounded-xl hover:bg-slate-200 dark:hover:bg-gray-800/50 transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Split Content View: Details Sidebar + Live Preview Sandbox */}
            <div className="flex-grow flex flex-col md:flex-row overflow-hidden bg-slate-100 dark:bg-[#090D16]">
              {/* Left Column: Project Stats & business problem details */}
              <div className="w-full md:w-80 border-b md:border-b-0 md:border-r border-slate-200 dark:border-gray-800/40 p-6 flex flex-col justify-between overflow-y-auto bg-slate-50 dark:bg-[#0E1420]/80">
                <div className="space-y-6">
                  <div>
                    <span className="text-[10px] font-bold text-brandSecondary uppercase tracking-widest">{t.businessCase}</span>
                    <h5 className="font-outfit text-lg font-extrabold text-slate-900 dark:text-white mt-1">{title}</h5>
                    <p className="text-xs text-slate-600 dark:text-gray-450 mt-2 leading-relaxed font-medium">{details.challenge}</p>
                  </div>

                  <div>
                    <span className="text-[10px] font-bold text-brandSecondary uppercase tracking-widest">{t.deliverables}</span>
                    <ul className="mt-2.5 space-y-2">
                      {details.solutions.map((sol, index) => (
                        <li key={index} className="flex gap-2 items-start text-xs text-slate-700 dark:text-gray-300 font-medium">
                          <Check className="w-3.5 h-3.5 text-brandSuccess mt-0.5 shrink-0" />
                          <span>{sol}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <span className="text-[10px] font-bold text-brandSecondary uppercase tracking-widest font-outfit">{t.infrastructure}</span>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {tags.map((tag) => (
                        <span key={tag} className="text-[10px] bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-gray-300 px-2 py-0.5 rounded-md font-semibold">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-200 dark:border-gray-850">
                  <div className="bg-white dark:bg-[#121824] p-3.5 rounded-xl border border-slate-250 dark:border-gray-800/40 text-center shadow-sm">
                    <span className="text-[10px] text-slate-500 dark:text-gray-400 block mb-1">{t.expectedRoi}</span>
                    <span className="text-lg font-black text-brandSuccess font-outfit">{details.roi}</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Simulated site viewport */}
              <div className="flex-grow p-4 sm:p-6 flex items-center justify-center bg-slate-100 dark:bg-[#090D16] overflow-hidden">
                <div 
                  className={`border border-slate-200 dark:border-gray-850 shadow-2xl overflow-hidden rounded-2xl transition-all duration-300 bg-white dark:bg-slate-900 ${
                    responsiveMode === 'mobile' ? 'w-[360px] h-[500px]' : 'w-full h-full'
                  }`}
                >
                  {/* Browser Address mock inside viewport */}
                  <div className="w-full bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700/50 px-3 py-2 flex items-center justify-between text-slate-800 dark:text-gray-350">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-red-400" />
                      <span className="w-2 h-2 rounded-full bg-yellow-400" />
                      <span className="w-2 h-2 rounded-full bg-green-400" />
                    </div>
                    <div className="flex-grow max-w-lg bg-white dark:bg-slate-900 border border-gray-300 dark:border-gray-700 rounded px-2 py-0.5 text-[9px] text-slate-500 dark:text-gray-400 text-center truncate mx-4 select-none font-mono">
                      {VERCEL_URLS[type]}
                    </div>
                    <a 
                      href={VERCEL_URLS[type]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-md transition-colors text-slate-500 hover:text-slate-800 dark:text-gray-400 dark:hover:text-white"
                      title={lang === 'th' ? 'เปิดในแท็บใหม่' : 'Open in new tab'}
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  {/* Simulated viewport site contents */}
                  <div className="w-full h-[calc(100%-36px)] bg-white">
                    <iframe 
                      src={VERCEL_URLS[type]}
                      className="w-full h-full border-none"
                      title={title}
                      loading="lazy"
                      allow="fullscreen"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
