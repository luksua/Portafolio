import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export const Education: React.FC = () => {
  const { t, i18n } = useTranslation();
  const currentLang = (i18n.resolvedLanguage || i18n.language || 'es').toLowerCase();
  const isEn = currentLang.startsWith('en');

  const items = [
    {
      degree: t('education.items.0.degree'),
      institution: t('education.items.0.institution'),
      period: t('education.items.0.period'),
      description: t('education.items.0.description'),
      status: isEn ? "Enrolled" : "En curso",
      badgeColor: "bg-[#EBF4EE] text-[#2D6A48] border-[#BED6C7]",
    },
    {
      degree: t('education.items.1.degree'),
      institution: t('education.items.1.institution'),
      period: t('education.items.1.period'),
      description: t('education.items.1.description'),
      status: isEn ? "Certified" : "Certificada",
      badgeColor: "bg-[#EBF4EE] text-[#2D6A48] border-[#BED6C7]",
    },
    {
      degree: t('education.items.2.degree'),
      institution: t('education.items.2.institution'),
      period: t('education.items.2.period'),
      description: t('education.items.2.description'),
      status: isEn ? "Graduate" : "Graduada",
      badgeColor: "bg-white text-[#6F6A73] border-[#CADBCE]",
    },
  ];

  return (
    <section id="education" className="py-20 relative bg-gradient-to-b from-[#EDF5F0] via-[#E4EFE8] to-[#DAE9DF] border-b border-[#C3D9CB] overflow-hidden">
      {/* Background Watermark */}
      <div 
        className="absolute top-10 left-4 font-serif text-[120px] sm:text-[180px] font-bold text-[#C2DACB]/60 select-none pointer-events-none leading-none tracking-tighter"
        aria-hidden="true"
      >
        ACADEMIA
      </div>

      {/* Fresh Botanical / Academic Aura */}
      <div className="absolute top-1/4 right-10 w-80 h-80 rounded-full bg-[#CBE0D3]/50 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-[#D4E8DC]/60 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E0D7E5] text-xs font-semibold tracking-widest text-[#6B4C7A] uppercase mb-3 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6B4C7A]" />
            <span>{t('education.badge')}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#1C1A1F] tracking-tight">
            {t('education.title')}
          </h2>
          <p className="mt-3 text-[#6F6A73] text-sm sm:text-base leading-relaxed">
            {t('education.subtitle')}
          </p>
          <div className="w-16 h-1 bg-[#6B4C7A] mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Editorial Modern CV Layout */}
        <div className="relative pl-6 sm:pl-10 border-l-2 border-[#367954]/30 ml-4 sm:ml-8 space-y-6">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.1 }}
              whileHover={{ x: 4 }}
              className="relative transition-transform"
            >
              {/* Timeline Dot Indicator */}
              <div className="absolute -left-[33px] sm:-left-[50px] top-1.5 w-5 h-5 rounded-full bg-white border-2 border-[#367954] flex items-center justify-center shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#367954]" />
              </div>

              <div className="bg-white/95 backdrop-blur-sm p-6 sm:p-7 rounded-[18px] border border-[#C6DACD] hover:border-[#367954] transition-colors space-y-2 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs tracking-wider uppercase text-[#2D6A48] font-semibold">
                    {item.period}
                  </span>
                  <span className={`px-3 py-0.5 rounded-full text-[11px] font-medium border ${item.badgeColor}`}>
                    {item.status}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-serif text-[#1C1A1F] tracking-tight">
                  {item.degree}
                </h3>

                <div className="text-xs sm:text-sm font-medium text-[#6B4C7A]">
                  {item.institution}
                </div>

                <p className="text-xs sm:text-sm text-[#6F6A73] leading-relaxed pt-1">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
