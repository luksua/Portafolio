import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArchitectureFlow } from '../components/ArchitectureFlow';

export const Experience: React.FC = () => {
  const { t } = useTranslation();

  const achievements = [
    t('experience.achievements.0'),
    t('experience.achievements.1'),
    t('experience.achievements.2'),
    t('experience.achievements.3'),
  ];

  const techPills = [
    "Laravel",
    "PHP",
    "Laravel Sanctum",
    "OpenAI API",
    "EditorJS",
    "MySQL",
    "REST APIs",
    "JavaScript",
    "Git",
    "Analytics & Ranking"
  ];

  return (
    <section id="experience" className="py-20 relative bg-gradient-to-b from-[#F2EAF6] via-[#EAE0F2] to-[#E2D3EB] border-b border-[#D4BFDF] overflow-hidden">
      {/* Background Watermark */}
      <div 
        className="absolute top-10 right-4 font-serif text-[120px] sm:text-[180px] font-bold text-[#DAC3E6]/40 select-none pointer-events-none leading-none tracking-tighter"
        aria-hidden="true"
      >
        JOURNEY
      </div>

      {/* Creative Subtle Ambient Glows */}
      <div className="absolute top-1/3 left-0 w-80 h-80 rounded-full bg-[#DAC3E6]/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[#E5D2F0]/50 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E4D7CF] text-xs font-semibold tracking-widest text-[#6B4C7A] uppercase mb-3 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6B4C7A]" />
            <span>{t('experience.badge')}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#1C1A1F] tracking-tight">
            {t('experience.title')}
          </h2>
          <p className="mt-3 text-[#6F6A73] text-sm sm:text-base leading-relaxed">
            {t('experience.subtitle')}
          </p>
          <div className="w-16 h-1 bg-[#6B4C7A] mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Minimalist Editorial Timeline */}
        <div className="relative pl-6 sm:pl-10 border-l-2 border-[#6B4C7A]/30 ml-4 sm:ml-8 space-y-12">
          
          {/* Main Experience Item */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            {/* Minimal Pulsing Purple Dot on the line */}
            <div className="absolute -left-[33px] sm:-left-[50px] top-1.5 w-5 h-5 rounded-full bg-white border-2 border-[#6B4C7A] flex items-center justify-center shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#6B4C7A] animate-ping" />
            </div>

            {/* Editorial Header */}
            <div className="bg-white/95 backdrop-blur-sm p-6 sm:p-7 rounded-2xl border border-[#D6C1E2] shadow-sm space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs tracking-wider uppercase text-[#6B4C7A] font-semibold">
                <span className="px-3 py-1 rounded-full bg-[#F5EDF9] border border-[#D6C1E2]">
                  {t('experience.company')}
                </span>
                <span className="text-[#6F6A73] font-normal">{t('experience.period')}</span>
              </div>

              <h3 className="text-2xl font-serif text-[#1C1A1F] tracking-tight pt-1">
                {t('experience.role')}
              </h3>

              <div className="text-sm font-medium text-[#6B4C7A]">
                {t('experience.type')}
              </div>
            </div>

            {/* Organized Responsibilities & Achievements with Interactive Hover */}
            <div className="mt-6 space-y-3">
              <h4 className="text-xs uppercase tracking-wider text-[#1C1A1F] font-semibold">
                {t('experience.responsibilitiesTitle')}
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {achievements.map((item, idx) => {
                  const parts = item.split(': ');
                  const hasPrefix = parts.length > 1;
                  return (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.02, y: -2 }}
                      className="p-4 rounded-xl bg-white border border-[#E8DDD5] hover:border-[#6B4C7A] text-xs leading-relaxed flex items-start gap-2.5 transition-all shadow-sm cursor-default"
                    >
                      <span className="w-2 h-2 rounded-full bg-[#6B4C7A] mt-1 shrink-0" />
                      <div>
                        {hasPrefix ? (
                          <>
                            <strong className="text-[#1C1A1F] font-semibold block sm:inline mr-1">
                              {parts[0]}:
                            </strong>
                            <span className="text-[#5C554F]">{parts.slice(1).join(': ')}</span>
                          </>
                        ) : (
                          <span className="text-[#5C554F]">{item}</span>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Minimalist Tech Badges */}
            <div className="mt-6 pt-5 border-t border-[#E8DDD5]">
              <span className="text-xs uppercase tracking-wider text-[#6F6A73] block mb-2.5 font-medium">
                {t('experience.techUsed')}
              </span>
              <div className="flex flex-wrap gap-2">
                {techPills.map((tech) => (
                  <motion.span
                    key={tech}
                    whileHover={{ scale: 1.06, y: -2 }}
                    className="px-3 py-1 rounded-full text-xs bg-white border border-[#E8DDD5] hover:border-[#6B4C7A] hover:text-[#6B4C7A] text-[#1C1A1F] shadow-sm transition-colors cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>

          </motion.div>

        </div>

        {/* Visual Pure Vector Architecture Diagram (NO IMAGES) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-12"
        >
          <ArchitectureFlow />
        </motion.div>

      </div>
    </section>
  );
};
