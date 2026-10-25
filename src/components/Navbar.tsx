import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X, Download } from 'lucide-react';
import { triggerConfetti } from '../utils/confetti';

export const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const currentLang = (i18n.resolvedLanguage || i18n.language || 'es').toLowerCase();
  const isEs = currentLang.startsWith('es');
  const isEn = currentLang.startsWith('en');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'education', 'certificaciones', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('luna_portfolio_lang', lng);
  };

  const navLinks = [
    { id: 'about', label: t('nav.about') },
    { id: 'skills', label: t('nav.skills') },
    { id: 'experience', label: t('nav.experience') },
    { id: 'projects', label: t('nav.projects') },
    { id: 'education', label: t('nav.education') },
    { id: 'contact', label: t('nav.contact') },
  ];

  const handleDownloadCv = () => {
    triggerConfetti();
    const link = document.createElement('a');
    link.href = '/cv-luna-sofia-ospina.pdf';
    link.download = 'CV_Luna_Sofia_Ospina_Rodriguez.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#FAF9FB]/95 backdrop-blur-md py-4 border-b border-[#E4E0E7] shadow-[0_2px_10px_rgba(0,0,0,0.02)]' 
          : 'bg-[#FAF9FB] py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand / Name Logo (Editorial Canva style) */}
        <a 
          href="#home" 
          className="flex items-center gap-2 group focus:outline-none"
          aria-label="Luna Sofia - Inicio"
        >
          <span className="w-2 h-2 rounded-full bg-[#6B4C7A]" />
          <span className="font-semibold text-sm sm:text-base tracking-widest text-[#1C1A1F] uppercase font-sans">
            Luna Sofia
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`text-xs tracking-wider transition-colors duration-200 uppercase font-medium ${
                activeSection === link.id
                  ? 'text-[#6B4C7A] font-semibold'
                  : 'text-[#6F6A73] hover:text-[#1C1A1F]'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA & Minimalist Language Switcher */}
        <div className="hidden sm:flex items-center gap-5">
          {/* Minimalist ES · EN Switcher */}
          <div className="flex items-center gap-1.5 text-xs tracking-wider font-medium">
            <button
              id="lang-btn-es"
              onClick={() => changeLanguage('es')}
              className={`transition-colors ${
                isEs
                  ? 'text-[#6B4C7A] font-bold'
                  : 'text-[#6F6A73] hover:text-[#1C1A1F]'
              }`}
              aria-label="Cambiar a Español"
            >
              ES
            </button>
            <span className="text-[#B8A8C1]">·</span>
            <button
              id="lang-btn-en"
              onClick={() => changeLanguage('en')}
              className={`transition-colors ${
                isEn
                  ? 'text-[#6B4C7A] font-bold'
                  : 'text-[#6F6A73] hover:text-[#1C1A1F]'
              }`}
              aria-label="Switch to English"
            >
              EN
            </button>
          </div>

          {/* Minimalist Download CV Button */}
          <button
            onClick={handleDownloadCv}
            className="btn-canva-secondary px-3.5 py-1.5 text-xs font-medium flex items-center gap-1.5 hover:border-[#6B4C7A]"
          >
            <Download className="w-3.5 h-3.5" />
            <span>{t('nav.downloadCv')}</span>
          </button>
        </div>

        {/* Mobile Hamburger & Language */}
        <div className="flex items-center gap-3 lg:hidden">
          <div className="flex items-center gap-1 text-xs font-medium">
            <button
              onClick={() => changeLanguage('es')}
              className={isEs ? 'text-[#6B4C7A] font-bold' : 'text-[#6F6A73]'}
            >
              ES
            </button>
            <span className="text-[#B8A8C1]">·</span>
            <button
              onClick={() => changeLanguage('en')}
              className={isEn ? 'text-[#6B4C7A] font-bold' : 'text-[#6F6A73]'}
            >
              EN
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-lg text-[#1C1A1F] hover:bg-[#F3F1F5] transition-colors"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF9FB] border-b border-[#E4E0E7] px-6 py-5 space-y-3">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm py-2 transition-colors uppercase tracking-wider ${
                  activeSection === link.id
                    ? 'text-[#6B4C7A] font-bold'
                    : 'text-[#6F6A73] hover:text-[#1C1A1F]'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-[#E4E0E7]">
            <button
              onClick={() => {
                handleDownloadCv();
                setMobileMenuOpen(false);
              }}
              className="w-full btn-canva-primary py-2.5 text-xs uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{t('nav.downloadCv')}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
