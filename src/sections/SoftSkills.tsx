import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export const SoftSkills: React.FC = () => {
  const { t } = useTranslation();

  const skills = [
    { keyIndex: 0, tag: "Análisis", color: "bg-[#8E4453]" },
    { keyIndex: 1, tag: "Innovación", color: "bg-[#6B4C7A]" },
    { keyIndex: 2, tag: "Solución", color: "bg-[#367954]" },
    { keyIndex: 3, tag: "Criterio", color: "bg-[#3E6596]" },
    { keyIndex: 4, tag: "Agilidad", color: "bg-[#966E38]" },
    { keyIndex: 5, tag: "Aprendizaje", color: "bg-[#6B4C7A]" },
    { keyIndex: 6, tag: "Detalle", color: "bg-[#4B3557]" },
    { keyIndex: 7, tag: "Equipo", color: "bg-[#8E4453]" },
    { keyIndex: 8, tag: "Compromiso", color: "bg-[#367954]" },
  ];

  return (
    <section className="py-24 relative bg-gradient-to-b from-[#FDF1ED] via-[#FAECE6] to-[#F5E2DA] border-b border-[#E9CDC2] overflow-hidden">
      {/* Background Watermark */}
      <div 
        className="absolute top-1/2 left-0 -translate-y-1/2 font-serif text-[120px] sm:text-[180px] font-bold text-[#E9CEC3]/60 select-none pointer-events-none leading-none tracking-tighter"
        aria-hidden="true"
      >
        MINDSET
      </div>

      {/* Warm Peach Blush Ambient Glow */}
      <div className="absolute top-10 left-1/3 w-80 h-80 rounded-full bg-[#F6D7CC]/60 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[#FCE3D9]/70 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E0D7E5] text-xs font-semibold tracking-widest text-[#6B4C7A] uppercase mb-3 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6B4C7A]" />
            <span>{t('softSkills.badge')}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#1C1A1F] tracking-tight">
            {t('softSkills.title')}
          </h2>
          <p className="mt-2 text-[#6F6A73] text-sm sm:text-base leading-relaxed">
            {t('softSkills.subtitle')}
          </p>
          <div className="w-16 h-1 bg-[#6B4C7A] mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Minimalist Editorial Grid with Color Dots and Spring Hover */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {skills.map((item, idx) => {
            const name = t(`softSkills.skills.${item.keyIndex}.name`);
            const desc = t(`softSkills.skills.${item.keyIndex}.desc`);

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.04 }}
                whileHover={{ 
                  scale: 1.04, 
                  y: -5, 
                  boxShadow: '0 14px 30px -4px rgba(107, 76, 122, 0.12)' 
                }}
                className="bg-white/95 backdrop-blur-sm p-6 rounded-[16px] border border-[#E8D0C5] hover:border-[#8E4453] transition-colors duration-200 space-y-2 shadow-sm cursor-default group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${item.color}`} />
                    <h3 className="font-serif text-base text-[#1C1A1F] group-hover:text-[#4B3557] transition-colors">
                      {name}
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#FAECE6] text-[#8E4453] border border-[#E8D0C5]">
                    {item.tag}
                  </span>
                </div>
                <p className="text-xs text-[#6F6A73] leading-relaxed pt-1">
                  {desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
