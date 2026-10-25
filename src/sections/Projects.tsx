import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, ExternalLink } from 'lucide-react';
import { GithubIcon } from '../components/Icons';
import { projectsData } from '../data/projectsData';
import type { ProjectDetail } from '../data/projectsData';
import { ProjectModal } from '../components/ProjectModal';

export const Projects: React.FC = () => {
  const { t, i18n } = useTranslation();
  const currentLang = (i18n.resolvedLanguage || i18n.language || 'es').toLowerCase().startsWith('en') ? 'en' : 'es';
  const isEn = currentLang === 'en';
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);

  const handleProjectClick = (project: ProjectDetail) => {
    if (project.liveUrl) {
      window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
    } else {
      setSelectedProject(project);
    }
  };

  return (
    <section id="projects" className="py-20 relative bg-gradient-to-b from-[#FBF5ED] via-[#F6ECE0] to-[#EFE2D2] border-b border-[#E0CFBB] overflow-hidden">
      {/* Background Watermark */}
      <div 
        className="absolute top-1/2 -right-8 -translate-y-1/2 font-serif text-[140px] sm:text-[220px] font-bold text-[#DFCDAE]/40 select-none pointer-events-none leading-none tracking-tighter"
        aria-hidden="true"
      >
        GALLERY
      </div>

      {/* Warm Ambient Gallery Glow */}
      <div className="absolute top-20 left-10 w-80 h-80 rounded-full bg-[#EED9C4]/60 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 rounded-full bg-[#F3E5D4]/70 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#D8C7DE] text-xs font-semibold tracking-widest text-[#6B4C7A] uppercase mb-3 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6B4C7A]" />
            <span>{t('projects.badge')}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#1C1A1F] tracking-tight">
            {t('projects.title')}
          </h2>
          <p className="mt-3 text-[#6F6A73] text-sm sm:text-base leading-relaxed">
            {t('projects.subtitle')}
          </p>
          <div className="w-16 h-1 bg-[#6B4C7A] mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Canva / Behance Editorial Projects Grid with Spring Hover */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, idx) => (
            <motion.div
              key={project.id}
              id={`project-card-${project.id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ 
                y: -8, 
                boxShadow: '0 20px 40px -10px rgba(107, 76, 122, 0.15)' 
              }}
              className="bg-white rounded-[18px] border border-[#D8C7DE] hover:border-[#6B4C7A] transition-colors duration-300 flex flex-col justify-between overflow-hidden shadow-sm group"
            >
              {/* Visual Container */}
              <div 
                onClick={() => handleProjectClick(project)}
                className="relative h-56 overflow-hidden bg-[#FAF9FB] cursor-pointer"
                title={project.liveUrl ? (isEn ? 'Click to visit Live Demo' : 'Clic para abrir el Demo') : (isEn ? 'Click to view details' : 'Clic para ver detalles')}
              >
                {project.isUpcoming ? (
                  <div className="w-full h-full bg-[#18161D] p-5 flex flex-col justify-between font-mono text-xs text-slate-300 relative overflow-hidden group-hover:bg-[#1C1824] transition-colors">
                    {/* Background blueprint circuit grid */}
                    <div className="absolute inset-0 bg-[radial-gradient(#3E3847_1.2px,transparent_1.2px)] [background-size:16px_16px] opacity-40" />
                    
                    <div className="relative z-10 flex items-center justify-between border-b border-[#2C2736] pb-2">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                      </div>
                      <span className="text-[10px] text-[#B8A8C1] font-mono">blueprint://prototype</span>
                    </div>

                    <div className="relative z-10 space-y-1 py-1">
                      <div className="text-[11px] text-emerald-400">
                        ➜ <span className="text-slate-300">spec:</span> "{project.title[currentLang]}"
                      </div>
                      <div className="text-[10px] text-[#B8A8C1]">
                        <span>engine:</span> <span className="text-amber-200">REST API + Modern UI</span>
                      </div>
                      <div className="text-[10px] text-slate-400 flex items-center gap-1.5 pt-0.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
                        <span>sprint: architecture & logic</span>
                      </div>
                    </div>

                    <div className="relative z-10 flex items-center justify-between text-[10px] text-[#8E8794] border-t border-[#2C2736] pt-1.5">
                      <span>branch: main</span>
                      <span className="text-[#B8A8C1]">status: 80%</span>
                    </div>
                  </div>
                ) : (
                  <div className="relative w-full h-full">
                    <img
                      src={project.image}
                      alt={project.title[currentLang]}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.05]"
                    />

                    {/* Hover Overlay with Live Demo Call to Action */}
                    {project.liveUrl && (
                      <div className="absolute inset-0 bg-[#4B3557]/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-[#4B3557] font-semibold text-xs shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                          <ExternalLink className="w-4 h-4 text-[#6B4C7A]" />
                          <span>{t('projects.visitDemo')}</span>
                        </span>
                      </div>
                    )}

                    {/* Live Telemetry Ribbon */}
                    <div className="absolute bottom-2 left-2 right-2 px-3 py-1.5 rounded-lg bg-[#141218]/85 backdrop-blur-md border border-white/10 text-[10px] font-mono text-emerald-300 flex items-center justify-between shadow-sm z-10">
                      <span className="flex items-center gap-1.5 truncate mr-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                        <span className="truncate">{project.technologies.slice(0, 2).join(' · ')}</span>
                      </span>
                      <span className="text-slate-400 shrink-0">Live Demo</span>
                    </div>
                  </div>
                )}

                {/* Status Badges */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-2 z-10">
                  {project.isUpcoming ? (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium bg-white/95 text-[#6F6A73] border border-[#E4E0E7] shadow-sm">
                      <Clock className="w-3 h-3 text-[#6B4C7A]" />
                      <span>{t('projects.statusUpcoming')}</span>
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium bg-white/95 text-[#4B3557] border border-[#E4E0E7] shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span>{isEn ? 'Live Project' : 'Demo Disponible'}</span>
                    </span>
                  )}
                </div>
              </div>

              {/* Editorial Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div 
                  onClick={() => handleProjectClick(project)}
                  className="cursor-pointer space-y-2"
                >
                  <span className="text-[11px] uppercase tracking-wider text-[#6B4C7A] font-semibold block">
                    {project.category[currentLang]}
                  </span>
                  <h3 className="text-xl font-serif text-[#1C1A1F] group-hover:text-[#6B4C7A] transition-colors leading-snug">
                    {project.title[currentLang]}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6F6A73] line-clamp-3 leading-relaxed">
                    {project.summary[currentLang]}
                  </p>
                </div>

                {/* Minimalist Tech Badges */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded-full text-[11px] bg-[#FAF8FC] border border-[#E4DCE9] text-[#1C1A1F]"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-0.5 rounded-full text-[11px] bg-[#FAF8FC] border border-[#E4DCE9] text-[#6F6A73]">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                {/* Card Footer Actions */}
                <div className="pt-4 border-t border-[#EDE4F0] flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#6B4C7A] text-white text-xs font-semibold hover:bg-[#4B3557] transition-all shadow-sm"
                        title={t('projects.visitDemo')}
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>{t('projects.liveDemo')}</span>
                      </motion.a>
                    )}

                    <motion.button
                      id={`btn-case-study-${project.id}`}
                      onClick={() => setSelectedProject(project)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#6B4C7A] hover:text-[#4B3557] transition-colors group/btn cursor-pointer py-1 px-1.5"
                    >
                      <span>{t('projects.details')}</span>
                      <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                    </motion.button>
                  </div>

                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-[#D8C7DE] bg-white text-xs font-medium text-[#1C1A1F] hover:border-[#6B4C7A] hover:text-[#6B4C7A] transition-colors shadow-sm"
                    title={t('projects.viewCode')}
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">{t('projects.viewCode')}</span>
                  </motion.a>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* Interactive Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
