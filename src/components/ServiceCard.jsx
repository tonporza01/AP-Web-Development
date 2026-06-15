import React from 'react';
import { Globe, FileCode, Wrench, Code, LayoutGrid, CheckCircle2 } from 'lucide-react';

// Map service names to Lucide icons
const getIcon = (name) => {
  const iconClass = "w-6 h-6 text-brandSecondary";
  switch (name) {
    case 'Business Website Development':
    case 'พัฒนาเว็บไซต์ธุรกิจทั่วไป':
      return <Globe className={iconClass} />;
    case 'Landing Page Development':
    case 'สร้างแลนดิ้งเพจปิดการขาย':
      return <FileCode className={iconClass} />;
    case 'WordPress Development':
    case 'พัฒนาเว็บไซต์ด้วย WordPress':
      return <div className="text-brandSecondary font-bold text-lg select-none">WP</div>;
    case 'Website Maintenance':
    case 'บริการดูแลและบำรุงรักษาเว็บ':
      return <Wrench className={iconClass} />;
    case 'React Website Development':
    case 'พัฒนาแอปพลิเคชันด้วย React':
      return <Code className={iconClass} />;
    case 'Website Redesign':
    case 'ปรับปรุงเว็บไซต์เก่า (Redesign)':
      return <LayoutGrid className={iconClass} />;
    default:
      return <Globe className={iconClass} />;
  }
};

export default function ServiceCard({ service, index }) {
  const { title, description, features, benefit } = service;

  return (
    <div 
      className="group bg-white dark:bg-[#121824]/60 p-8 rounded-3xl border border-slate-200 dark:border-gray-800/40 card-hover-effect relative overflow-hidden flex flex-col justify-between shadow-sm"
    >
      {/* Dynamic background glow on card hover */}
      <div className="absolute -right-12 -top-12 w-24 h-24 bg-brandPrimary/10 group-hover:bg-brandSecondary/25 rounded-full blur-2xl transition-all duration-500" />
      
      <div>
        {/* Icon container */}
        <div className="w-12 h-12 rounded-2xl bg-brandPrimary/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brandSecondary/15 transition-all duration-300">
          {getIcon(title)}
        </div>

        {/* Title */}
        <h3 className="font-outfit text-xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-brandSecondary transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed mb-6 font-medium">
          {description}
        </p>

        {/* Features bullet points */}
        <ul className="space-y-2.5 mb-8">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-2 text-sm text-slate-700 dark:text-gray-300 font-medium">
              <CheckCircle2 className="w-4 h-4 text-brandSecondary shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Target benefit highlight box */}
      <div className="pt-4 border-t border-slate-100 dark:border-gray-800/30">
        <span className="text-xs font-semibold text-brandSuccess tracking-wider uppercase bg-brandSuccess/10 px-2.5 py-1 rounded-md">
          {benefit}
        </span>
      </div>
    </div>
  );
}
