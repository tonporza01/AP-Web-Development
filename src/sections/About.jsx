import React, { useState } from 'react';
import { Code } from 'lucide-react';
import { translations } from '../utils/translations';

export default function About({ lang }) {
  const [selectedSkill, setSelectedSkill] = useState(0);

  const t = translations[lang].about;

  const skillColors = [
    'from-blue-500 to-cyan-500',
    'from-blue-600 to-indigo-700',
    'from-amber-400 to-yellow-500',
    'from-orange-500 to-red-500',
    'from-purple-500 to-indigo-500',
    'from-emerald-400 to-teal-500'
  ];

  return (
    <section 
      id="about" 
      className="py-24 relative overflow-hidden bg-transparent dark:bg-[#0B121F] transition-colors duration-300"
    >
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-full -translate-x-1/2 w-80 h-80 bg-brandPrimary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Narrative & Stats */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold text-brandSecondary uppercase tracking-widest block font-outfit">
              {t.tag}
            </span>
            <h2 className="font-outfit text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">
              {t.title} <span className="text-gradient">{t.titleAccent}</span>
            </h2>
            <p className="text-slate-650 dark:text-gray-400 text-sm sm:text-base leading-relaxed font-medium">
              {t.desc1}
            </p>
            <p className="text-slate-550 dark:text-gray-450 text-sm leading-relaxed">
              {t.desc2}
            </p>

            {/* Experience / Stats block */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-300 dark:border-gray-800/40">
              <div>
                <span className="font-outfit text-3xl font-black text-slate-900 dark:text-white block">{t.stat1Val}</span>
                <span className="text-xs text-slate-500 dark:text-gray-500 font-medium uppercase tracking-wider">{t.stat1}</span>
              </div>
              <div>
                <span className="font-outfit text-3xl font-black text-brandSecondary block">{t.stat2Val}</span>
                <span className="text-xs text-slate-500 dark:text-gray-500 font-medium uppercase tracking-wider">{t.stat2}</span>
              </div>
              <div>
                <span className="font-outfit text-3xl font-black text-brandSuccess block">{t.stat3Val}</span>
                <span className="text-xs text-slate-500 dark:text-gray-500 font-medium uppercase tracking-wider">{t.stat3}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Skills Selector */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white dark:bg-[#121824]/60 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-gray-800/40 shadow-xl">
              <h3 className="font-outfit text-lg font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <Code className="w-5 h-5 text-brandSecondary" />
                {t.skillsTitle}
              </h3>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                {t.skills.map((skill, index) => {
                  const isActive = selectedSkill === index;
                  return (
                    <button
                      key={skill.name}
                      onClick={() => setSelectedSkill(index)}
                      className={`p-3.5 rounded-2xl text-left border transition-all duration-200 flex flex-col justify-between h-24 relative overflow-hidden ${
                        isActive
                          ? 'bg-slate-50 dark:bg-gradient-to-br dark:from-[#1E293B] dark:to-[#121824] border-brandSecondary shadow-lg scale-[1.02]'
                          : 'bg-white dark:bg-[#090D16]/40 border-slate-200 dark:border-gray-850 hover:border-brandSecondary'
                      }`}
                    >
                      <span className="text-xs font-bold text-slate-550 dark:text-gray-400">
                        {skill.level}
                      </span>
                      <span className="font-outfit text-sm sm:text-base font-extrabold text-slate-900 dark:text-white mt-2">
                        {skill.name}
                      </span>
                      {isActive && (
                        <div className="absolute top-0 right-0 w-12 h-12 bg-brandSecondary/10 rounded-bl-full flex items-center justify-center">
                          <span className="w-2 h-2 rounded-full bg-brandSecondary/80 animate-pulse" />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Dynamic Skill value Display Box */}
              <div className="bg-slate-50 dark:bg-[#090D16] p-5 rounded-2xl border border-slate-200 dark:border-gray-800/60 min-h-24 flex items-center gap-4">
                <div className={`w-3.5 h-12 rounded bg-gradient-to-b ${skillColors[selectedSkill]} shrink-0`} />
                <div>
                  <h4 className="text-xs font-black text-brandSecondary uppercase tracking-widest font-outfit">
                    {t.skillsHelp}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-gray-300 mt-1 leading-relaxed font-medium">
                    {t.skills[selectedSkill].businessValue}
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
