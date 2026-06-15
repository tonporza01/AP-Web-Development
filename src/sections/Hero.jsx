import React from 'react';
import { ArrowRight, Laptop, Sparkles, TrendingUp, CheckCircle } from 'lucide-react';
import { translations } from '../utils/translations';

export default function Hero({ lang }) {
  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const element = document.querySelector(id);
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
      window.history.pushState(null, null, id);
    }
  };

  const t = translations[lang].hero;

  return (
    <section 
      id="home" 
      className="relative min-h-screen pt-28 pb-16 flex items-center overflow-hidden bg-transparent dark:bg-[#090D16] transition-colors duration-300"
    >
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-brandPrimary/10 rounded-full blur-[120px] glow-blue pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/10 w-80 h-80 bg-brandSecondary/10 rounded-full blur-[100px] glow-cyan pointer-events-none" />
      
      {/* Tech Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(15,23,42,0.05)_1px,transparent_1px)] dark:bg-[radial-gradient(ellipse_at_center,rgba(30,41,59,0.1)_1px,transparent_1px)] bg-[size:32px_32px] opacity-70 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-8 text-left">
            {/* Tag / Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brandPrimary/10 border border-brandPrimary/20 text-brandSecondary text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.tag}</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-outfit text-4xl sm:text-5xl lg:text-6xl font-black leading-tight text-slate-900 dark:text-white">
              {t.title} <span className="text-gradient">{t.titleAccent}</span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-650 dark:text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl font-medium">
              {t.subtitle}
            </p>

            {/* Trust Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-2.5 text-sm text-slate-700 dark:text-gray-300">
                <CheckCircle className="w-4 h-4 text-brandSecondary shrink-0" />
                <span>{t.check1}</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-700 dark:text-gray-300">
                <CheckCircle className="w-4 h-4 text-brandSecondary shrink-0" />
                <span>{t.check2}</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-700 dark:text-gray-300">
                <CheckCircle className="w-4 h-4 text-brandSecondary shrink-0" />
                <span>{t.check3}</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-700 dark:text-gray-300">
                <CheckCircle className="w-4 h-4 text-brandSecondary shrink-0" />
                <span>{t.check4}</span>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, '#contact')}
                className="px-8 py-4 bg-gradient-to-r from-brandPrimary to-brandSecondary hover:from-brandSecondary hover:to-brandPrimary text-white font-bold rounded-xl transition-all duration-300 shadow-lg shadow-brandPrimary/25 hover:shadow-brandSecondary/30 text-center flex items-center justify-center gap-2 hover:scale-[1.01]"
              >
                {t.ctaPrimary}
                <ArrowRight className="w-4 h-4" />
              </a>
              
              <a
                href="#portfolio"
                onClick={(e) => handleScrollTo(e, '#portfolio')}
                className="px-8 py-4 bg-slate-200 hover:bg-slate-300 dark:bg-gray-900 dark:hover:bg-gray-850 border border-slate-350 dark:border-gray-800 text-slate-800 dark:text-white font-bold rounded-xl transition-all duration-300 text-center flex items-center justify-center gap-2"
              >
                {t.ctaSecondary}
              </a>
            </div>

            {/* Social Trust Bar */}
            <div className="pt-6 border-t border-slate-200 dark:border-gray-800/40">
              <div className="flex flex-wrap items-center gap-6 text-slate-500 dark:text-gray-500">
                <span className="text-xs uppercase tracking-wider font-semibold text-slate-450 dark:text-gray-400">{t.targetClients}</span>
                <span className="text-sm font-semibold hover:text-slate-800 dark:hover:text-gray-300 transition-colors">{t.startups}</span>
                <span className="text-sm font-semibold hover:text-slate-800 dark:hover:text-gray-300 transition-colors">{t.smes}</span>
                <span className="text-sm font-semibold hover:text-slate-800 dark:hover:text-gray-300 transition-colors">{t.local}</span>
                <span className="text-sm font-semibold hover:text-slate-800 dark:hover:text-gray-300 transition-colors">{t.ecommerce}</span>
              </div>
            </div>

          </div>

          {/* Right Column: Code Graphic Frame (Dark styled code editor for high-end contrast) */}
          <div className="lg:col-span-5 relative hidden lg:block select-none animate-[float_6s_ease-in-out_infinite]">
            <div className="absolute inset-0 bg-gradient-to-tr from-brandPrimary/20 to-brandSecondary/25 rounded-3xl blur-3xl" />
            
            <div className="relative bg-[#0E1420] dark:bg-[#121824]/80 rounded-3xl border border-slate-200 dark:border-gray-800/50 shadow-2xl p-5 w-full max-w-md mx-auto">
              <div className="flex justify-between items-center pb-4 border-b border-gray-800/50 mb-4">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-rose-500" />
                  <span className="w-3 h-3 rounded-full bg-amber-500" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500" />
                </div>
                <span className="text-[10px] text-gray-500 font-mono">portfolio-site.jsx</span>
              </div>

              {/* Syntax highlighted code */}
              <div className="font-mono text-xs space-y-2.5 overflow-x-auto text-gray-400 leading-relaxed">
                <div>
                  <span className="text-pink-500">const</span> <span className="text-blue-400">Freelancer</span> = &#123;
                </div>
                <div className="pl-4">
                  <span className="text-gray-300">brand:</span> <span className="text-emerald-400">"AP Web Development"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-gray-300">experience:</span> <span className="text-amber-400">"9+ Years Marketing"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-gray-300">specialty:</span> <span className="text-indigo-400">["React", "Tailwind", "WP"]</span>,
                </div>
                <div className="pl-4">
                  <span className="text-gray-300">goal:</span> <span className="text-purple-400">"Drive client ROI & leads"</span>
                </div>
                <div>&#125;;</div>
                <div className="pt-2">
                  <span className="text-pink-500">function</span> <span className="text-blue-400">buildBusinessGrowth</span>() &#123;
                </div>
                <div className="pl-4">
                  <span className="text-pink-500">return</span> (
                </div>
                <div className="pl-8 text-gray-300">
                  &lt;<span className="text-rose-400">HighConversionWebsite</span>
                </div>
                <div className="pl-12">
                  <span className="text-blue-400">speed</span>=<span className="text-amber-400">"100%"</span>
                </div>
                <div className="pl-12">
                  <span className="text-blue-400">seoReady</span>=<span className="text-purple-400">&#123;true&#125;</span>
                </div>
                <div className="pl-12">
                  <span className="text-blue-400">leadForm</span>=<span className="text-purple-400">&#123;active&#125;</span>
                </div>
                <div className="pl-8 text-gray-300">/&gt;</div>
                <div className="pl-4">);</div>
                <div>&#125;</div>
              </div>

              {/* Floating ROI badge indicator inside hero visual */}
              <div className="absolute -bottom-6 -left-6 bg-[#0E1420]/90 dark:bg-slate-900/90 backdrop-blur-md p-4 rounded-2xl border border-brandSuccess/25 flex items-center gap-3 glow-emerald shadow-xl">
                <div className="p-2 bg-brandSuccess/10 rounded-lg text-brandSuccess">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-gray-400 block font-semibold uppercase">{t.avgBoost}</span>
                  <span className="text-base font-black text-white font-outfit">{t.boostValue}</span>
                </div>
              </div>

              {/* Secondary floating badge */}
              <div className="absolute -top-6 -right-6 bg-[#0E1420]/90 dark:bg-slate-900/90 backdrop-blur-md p-4 rounded-2xl border border-brandSecondary/25 flex items-center gap-3 shadow-xl">
                <div className="p-2 bg-brandSecondary/10 rounded-lg text-brandSecondary">
                  <Laptop className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-gray-400 block font-semibold uppercase">{t.deviceReady}</span>
                  <span className="text-xs font-bold text-white">{t.deviceValue}</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
