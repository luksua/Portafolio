import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Server, Layout, Database, Wrench } from 'lucide-react';
import { techSkills } from '../data/skillsData';
import { TechRadarChart } from '../components/TechRadarChart';

export const TechStack: React.FC = () => {
  const { t, i18n } = useTranslation();
  const currentLang = (i18n.resolvedLanguage || i18n.language || 'es').toLowerCase();
  const isEn = currentLang.startsWith('en');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: isEn ? 'All Skills' : 'Todas', count: techSkills.length },
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

  const domainIslands = [
    {
      id: 'backend',
      title: 'Backend & APIs',
      icon: Server,
      color: '#8E4453',
      border: 'border-[#EEDADE]',
      bg: 'bg-white',
      desc: isEn 
        ? 'Layered architecture, REST microservices, token auth, and business logic.' 
        : 'Arquitectura en capas, microservicios REST, autenticación por tokens y lógica de negocio.',
      tags: ['Laravel', 'PHP', 'Spring Boot', 'Java', 'Python', 'REST APIs']
    },
    {
      id: 'frontend',
      title: 'Frontend & UI',
      icon: Layout,
      color: '#3E6596',
      border: 'border-[#D9E4F2]',
      bg: 'bg-white',
      desc: isEn 
        ? 'Component-driven reactive interfaces, SPA navigation, and modern UX design.' 
        : 'Interfaces reactivas por componentes, navegación SPA y diseño UX moderno.',
      tags: ['Vue.js', 'React', 'JavaScript', 'TypeScript', 'Tailwind', 'HTML5/CSS3']
    },
    {
      id: 'databases',
      title: 'Bases de Datos',
      icon: Database,
      color: '#367954',
      border: 'border-[#D7EADE]',
      bg: 'bg-white',
      desc: isEn 
        ? 'Relational modeling, normalization, indexing, and referential integrity.' 
        : 'Modelado relacional, normalización, índices e integridad referencial.',
      tags: ['MySQL', 'SQL Relacional', 'Modelado ER', 'Consultas Optimizadas']
    },
    {
      id: 'tools',
      title: 'Tools & DevOps',
      icon: Wrench,
      color: '#966E38',
      border: 'border-[#EFE5D4]',
      bg: 'bg-white',
      desc: isEn 
        ? 'Version control, agile delivery, API contracts, and team workflows.' 
        : 'Control de versiones, metodologías ágiles, contratos de API y trabajo en equipo.',
      tags: ['Git / GitHub', 'Jira / Scrum', 'Swagger', 'JWT Tokens', 'Sanctum']
    }
  ];

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
          className="text-center max-w-2xl mx-auto mb-10 sm:mb-12"
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

        {/* Visual Competency Radar & Metric Station */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <TechRadarChart />
        </motion.div>

        {/* Minimalist Category Tabs - Mobile Scrollable & Desktop Centered */}
        <div className="mb-6 sm:mb-8">
          <div className="flex sm:flex-wrap items-center sm:justify-center gap-2 sm:gap-3 overflow-x-auto no-scrollbar py-1 px-1 -mx-2 sm:mx-0">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <motion.button
                  key={cat.id}
                  id={`filter-tab-${cat.id}`}
                  onClick={() => setActiveCategory(cat.id)}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  className={`px-3.5 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium tracking-wide transition-all flex items-center gap-2 shrink-0 ${
                    isActive
                      ? 'bg-[#6B4C7A] text-white shadow-md shadow-[#6B4C7A]/25'
                      : 'bg-white border border-[#E4E0E7] text-[#6F6A73] hover:text-[#1C1A1F] hover:border-[#6B4C7A]'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`text-[10px] sm:text-[11px] px-1.5 py-0.5 rounded-full font-mono ${isActive ? 'bg-white/20 text-white' : 'bg-[#FAF8FC] text-[#6F6A73]'}`}>
                    {cat.count}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Mobile: 2-Column Responsive Structured Cards / Desktop: Floating Pills */}
        <motion.div 
          layout
          className="grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center gap-2 sm:gap-3 max-w-4xl mx-auto"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((tech, idx) => {
              const theme = categoryThemes[tech.category] || { bg: 'bg-white', border: 'border-[#E4E0E7]', text: 'text-[#1C1A1F]', dot: 'bg-[#6B4C7A]' };
              return (
                <motion.div
                  layout
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.9, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 10 }}
                  transition={{ duration: 0.2, delay: idx * 0.02 }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -2, 
                    boxShadow: '0 8px 20px -4px rgba(107, 76, 122, 0.15)' 
                  }}
                  whileTap={{ scale: 0.96 }}
                  className="bg-white border border-[#E4E0E7] hover:border-[#6B4C7A] text-[#1C1A1F] hover:text-[#6B4C7A] px-3 sm:px-4 py-2.5 rounded-xl sm:rounded-full text-xs sm:text-sm font-medium tracking-wide transition-all duration-200 cursor-default flex items-center justify-between sm:justify-start gap-2 sm:gap-2.5 shadow-sm"
                >
                  <div className="flex items-center gap-2 truncate">
                    <span className={`w-2 h-2 rounded-full ${theme.dot} shrink-0`} />
                    <span className="truncate">{tech.name}</span>
                  </div>
                  <span className="text-[9px] sm:text-[10px] text-[#8E8794] uppercase tracking-wider font-mono px-1.5 py-0.5 rounded bg-[#FAF8FC] border border-[#EBE5EE] shrink-0">
                    {tech.category.slice(0, 4)}
                  </span>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* 4 Categorized Islands - Neatly Structured on Mobile & Desktop */}
        <div className="mt-14 sm:mt-16 pt-8 sm:pt-10 border-t border-[#D5E2F0] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
          {domainIslands.map((island) => {
            const Icon = island.icon;
            return (
              <div 
                key={island.id}
                className="bg-white/95 p-4 sm:p-5 rounded-2xl border border-[#D5E2F0] shadow-sm flex flex-col justify-between hover:border-[#6B4C7A]/40 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2 pb-2 border-b border-[#F0EBF4]">
                    <div className="flex items-center gap-2">
                      <div 
                        className="w-6 h-6 rounded-md flex items-center justify-center text-white"
                        style={{ backgroundColor: island.color }}
                      >
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <span 
                        className="text-xs font-bold uppercase tracking-wider"
                        style={{ color: island.color }}
                      >
                        {island.title}
                      </span>
                    </div>
                    <span className="text-[10px] text-[#8E8794] font-mono">
                      {island.tags.length} skills
                    </span>
                  </div>

                  <p className="text-xs text-[#6F6A73] leading-relaxed mb-3">
                    {island.desc}
                  </p>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {island.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-[#FAF8FC] border border-[#E5DEEC] text-[#4B3557]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
