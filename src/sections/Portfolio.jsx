import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import { translations } from '../utils/translations';

export default function Portfolio({ lang }) {
  const [activeTab, setActiveTab] = useState('all');

  const t = translations[lang].portfolio;

  const categories = [
    { id: 'all', name: t.all },
    { id: 'react', name: t.react },
    { id: 'wordpress', name: t.wp },
    { id: 'landing', name: t.landing }
  ];

  // We filter the projectsList retrieved from the translation dictionary
  const filteredProjects = activeTab === 'all' 
    ? t.list 
    : t.list.filter(project => project.category === activeTab);

  return (
    <section 
      id="portfolio" 
      className="py-24 relative overflow-hidden bg-transparent dark:bg-[#0B121F] transition-colors duration-300"
    >
      {/* Background Decorative Blur */}
      <div className="absolute top-1/3 right-1/10 w-96 h-96 bg-brandSecondary/5 rounded-full blur-[120px] pointer-events-none" />

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

        {/* Categories Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 border ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-brandPrimary to-brandSecondary border-transparent text-white shadow-lg shadow-brandPrimary/20'
                  : 'bg-white dark:bg-[#121824]/40 border-slate-200 dark:border-gray-850 text-slate-600 dark:text-gray-400 hover:border-brandSecondary hover:text-brandSecondary'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard 
              key={project.title} 
              project={project} 
              lang={lang}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
