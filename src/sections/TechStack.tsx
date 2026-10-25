import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { techSkills } from '../data/skillsData';
import { TechRadarChart } from '../components/TechRadarChart';

export const TechStack: React.FC = () => {
  const { t, i18n } = useTranslation();
  const currentLang = (i18n.resolvedLanguage || i18n.language || 'es').toLowerCase();
  const isEn = currentLang.startsWith('en');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: isEn ? 'All Skills' : 'Todas las Tecnologías', count: techSkills.length },
    { id: 'backend', label: t('techStack.categories.backend'), count: techSkills.filter(s => s.category === 'backend').length },
    { id: 'frontend', label: t('techStack.categories.frontend'), count: techSkills.filter(s => s.category === 'frontend').length },
    { id: 'databases', label: t('techStack.categories.databases'), count: techSkills.filter(s => s.category === 'databases').length },
    { id: 'tools', label: t('techStack.categories.tools'), count: techSkills.filter(s => s.category === 'tools').length },
  ];

  const filteredSkills = activeCategory === 'all' 
    ? techSkills 
    : techSkills.filter(skill => skill.category === activeCategory);

  const categoryThemes: Record<string, { bg: string; border: string; text: string; dot: string }> = {
    backend: { bg: 'bg-[#FBF6F7]', border: 'border-[#EEDADE]', text: 'text-[#8E4453]', dot: 'bg-[#8E4453]' },
    frontend: { bg: 'bg-[#F5F8FC]', border: 'border-[#D9E4F2]', text: 'text-[#3E6596]', dot: 'bg-[#3E6596]' },
    databases: { bg: 'bg-[#F4F9F6]', border: 'border-[#D7EADE]', text: 'text-[#367954]', dot: 'bg-[#367954]' },
    tools: { bg: 'bg-[#FBF8F3]', border: 'border-[#EFE5D4]', text: 'text-[#966E38]', dot: 'bg-[#966E38]' },
  };

  return (
    <section id="skills" className="py-20 relative bg-gradient-to-b from-[#EDF3F9] via-[#E4ECF5] to-[#DBE5F0] border-b border-[#C7D7E8] overflow-hidden">
      {/* Background Matrix Dot Grid */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(#BDD0E4_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-60 pointer-events-none" 
        aria-hidden="true"
      />

      {/* Background Watermark */}
      <div 
        className="absolute top-1/2 -left-12 -translate-y-1/2 font-serif text-[140px] sm:text-[200px] font-bold text-[#C7D7E8]/60 select-none pointer-events-none leading-none tracking-tighter"
        aria-hidden="true"
      >
        SYSTEMS
      </div>

      {/* Creative Ambient Aura */}
      <div className="absolute top-10 right-10 w-72 h-72 rounded-full bg-[#C7D7E8]/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-80 h-80 rounded-full bg-[#D5E2F0]/50 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E4DCE9] text-xs font-semibold tracking-widest text-[#6B4C7A] uppercase mb-3 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6B4C7A]" />
            <span>{t('techStack.badge')}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#1C1A1F] tracking-tight">
            {t('techStack.title')}
          </h2>
          <p className="mt-3 text-[#6F6A73] text-sm sm:text-base leading-relaxed">
            {t('techStack.subtitle')}
          </p>
          <div className="w-16 h-1 bg-[#6B4C7A] mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Visual Pure SVG Competency Radar & Metric Station (NO IMAGES) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <TechRadarChart />
        </motion.div>

        {/* Minimalist Category Tabs with Spring Animation */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 mb-8">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <motion.button
                key={cat.id}
                id={`filter-tab-${cat.id}`}
                onClick={() => setActiveCategory(cat.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium tracking-wide transition-all flex items-center gap-2 ${
                  isActive
                    ? 'bg-[#6B4C7A] text-white shadow-md shadow-[#6B4C7A]/25'
                    : 'bg-white border border-[#E4E0E7] text-[#6F6A73] hover:text-[#1C1A1F] hover:border-[#6B4C7A]'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[11px] px-1.5 py-0.2 rounded-full ${isActive ? 'bg-white/20 text-white' : 'bg-[#FAF8FC] text-[#6F6A73]'}`}>
                  {cat.count}
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* Interactive Skills Pills with Category Theme Colors */}
        <motion.div 
          layout
          className="flex flex-wrap items-center justify-center gap-3.5 max-w-4xl mx-auto"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((tech, idx) => {
              const theme = categoryThemes[tech.category] || { bg: 'bg-white', border: 'border-[#E4E0E7]', text: 'text-[#1C1A1F]', dot: 'bg-[#6B4C7A]' };
              return (
                <motion.div
                  layout
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: 10 }}
                  transition={{ duration: 0.25, delay: idx * 0.02 }}
                  whileHover={{ 
                    scale: 1.08, 
                    y: -4, 
                    boxShadow: '0 10px 25px -4px rgba(107, 76, 122, 0.15)' 
                  }}
                  whileTap={{ scale: 0.96 }}
                  className={`bg-white border hover:border-[#6B4C7A] text-[#1C1A1F] hover:text-[#6B4C7A] px-4 py-2.5 rounded-full text-xs sm:text-sm font-medium tracking-wide transition-colors duration-200 cursor-pointer flex items-center gap-2.5 shadow-sm`}
                >
                  <span className={`w-2 h-2 rounded-full ${theme.dot} transition-transform group-hover:scale-125`} />
                  <span>{tech.name}</span>
                  <span className="text-[10px] text-[#8E8794] uppercase tracking-wider font-mono">
                    {tech.category}
                  </span>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* 4 Categorized Islands below */}
        <div className="mt-16 pt-10 border-t border-[#EAE3EE] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-[#EEDADE] shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#8E4453]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#8E4453]">Backend</span>
            </div>
            <p className="text-xs text-[#6F6A73] leading-relaxed">
              PHP, Laravel, Python, Java, Spring Boot
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-[#D9E4F2] shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#3E6596]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#3E6596]">Frontend</span>
            </div>
            <p className="text-xs text-[#6F6A73] leading-relaxed">
              Vue.js, React, JavaScript, TypeScript, HTML5, CSS3
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-[#D7EADE] shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#367954]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#367954]">Databases</span>
            </div>
            <p className="text-xs text-[#6F6A73] leading-relaxed">
              SQL & MySQL Relacional
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-[#EFE5D4] shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#966E38]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#966E38]">Tools</span>
            </div>
            <p className="text-xs text-[#6F6A73] leading-relaxed">
              Git, Jira, Swagger, JWT, Cisco, Scrum
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
