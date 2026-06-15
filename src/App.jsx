import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import Process from './sections/Process';
import Portfolio from './sections/Portfolio';
import Pricing from './sections/Pricing';
import Testimonials from './sections/Testimonials';
import WhyChooseMe from './sections/WhyChooseMe';
import Benefits from './sections/Benefits';
import FAQ from './sections/FAQ';
import Contact from './sections/Contact';
import FloatingCTA from './components/FloatingCTA';
import Footer from './components/Footer';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  
  // Default to Thai ('th') or read from localStorage
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('ap_lang') || 'th';
  });

  // Synchronize darkMode class on <html> node
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
  }, [darkMode]);

  // Synchronize language preference to localStorage
  useEffect(() => {
    localStorage.setItem('ap_lang', lang);
  }, [lang]);

  // Scroll Spy: Tracks active section to update navbar highlighted links
  useEffect(() => {
    const sections = ['home', 'services', 'process', 'portfolio', 'pricing', 'contact'];
    const observers = [];

    const observerOptions = {
      root: null,
      rootMargin: '-35% 0px -55% 0px',
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
      }
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          observer.unobserve(el);
        }
      });
    };
  }, []);

  return (
    <div className="min-h-screen transition-colors duration-300 bg-gradient-to-b from-[#E3F0FF] via-[#F2F7FF] to-white dark:bg-none dark:bg-[#090D16] text-[#1F2937] dark:text-[#F3F4F6] overflow-x-hidden">
      {/* Sticky Navigation */}
      <Navbar 
        activeSection={activeSection} 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
        lang={lang}
        setLang={setLang}
      />

      {/* Pages / Sections */}
      <main>
        <Hero lang={lang} />
        <About lang={lang} />
        <Services lang={lang} />
        <Process lang={lang} />
        <Portfolio lang={lang} />
        <Pricing lang={lang} />
        <Testimonials lang={lang} />
        <WhyChooseMe lang={lang} />
        <Benefits lang={lang} />
        <FAQ lang={lang} />
        <Contact lang={lang} />
      </main>

      {/* Mobile Floating Action Button CTA */}
      <FloatingCTA lang={lang} />

      {/* Footer */}
      <Footer lang={lang} />
    </div>
  );
}
