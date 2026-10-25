import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export const Languages: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24 relative bg-gradient-to-b from-[#ECF2FA] via-[#E2EBF6] to-[#D7E2F2] border-b border-[#C2D2EC] overflow-hidden">
      {/* Background Watermark */}
      <div 
        className="absolute top-1/2 right-4 -translate-y-1/2 font-serif text-[130px] sm:text-[200px] font-bold text-[#C5D5ED]/60 select-none pointer-events-none leading-none tracking-tighter"
        aria-hidden="true"
      >
        GLOBAL
      </div>

      {/* Global Sky Ambient Aura */}
      <div className="absolute top-10 left-10 w-80 h-80 rounded-full bg-[#CADBF2]/50 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 rounded-full bg-[#D4E3F7]/60 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#D8C7DE] text-xs font-semibold tracking-widest text-[#6B4C7A] uppercase mb-3 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6B4C7A]" />
            <span>{t('languages.badge')}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#1C1A1F] tracking-tight">
            {t('languages.title')}
          </h2>
          <div className="w-16 h-1 bg-[#6B4C7A] mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Large Typography Editorial Composition with Spring Hover */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* Spanish */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            whileHover={{ 
              scale: 1.04, 
              y: -5,
              boxShadow: '0 20px 40px -5px rgba(107, 76, 122, 0.15)'
            }}
            className="bg-white/95 backdrop-blur-sm p-8 sm:p-9 rounded-[20px] border border-[#CAD8EE] hover:border-[#3E6596] transition-colors duration-200 text-center space-y-3 shadow-sm cursor-default group"
          >
            <span className="text-xs tracking-widest text-[#6F6A73] uppercase font-semibold block">
              01 · IDIOMA
            </span>
            <div className="text-3xl sm:text-4xl font-serif text-[#1C1A1F] group-hover:text-[#4B3557] transition-colors tracking-tight">
              {t('languages.items.0.lang')}
            </div>
            <div className="text-sm font-semibold text-[#6B4C7A] uppercase tracking-wider">
              {t('languages.items.0.level')}
            </div>
            <p className="text-xs text-[#6F6A73] leading-relaxed pt-3 border-t border-[#EDE4F0]">
              {t('languages.items.0.desc')}
            </p>
          </motion.div>

          {/* English */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            whileHover={{ 
              scale: 1.04, 
              y: -5,
              boxShadow: '0 20px 40px -5px rgba(107, 76, 122, 0.15)'
            }}
            className="bg-white/95 backdrop-blur-sm p-8 sm:p-9 rounded-[20px] border border-[#CAD8EE] hover:border-[#3E6596] transition-colors duration-200 text-center space-y-3 shadow-sm cursor-default group"
          >
            <span className="text-xs tracking-widest text-[#6F6A73] uppercase font-semibold block">
              02 · LANGUAGE
            </span>
            <div className="text-3xl sm:text-4xl font-serif text-[#1C1A1F] group-hover:text-[#4B3557] transition-colors tracking-tight">
              {t('languages.items.1.lang')}
            </div>
            <div className="text-sm font-semibold text-[#6B4C7A] uppercase tracking-wider">
              {t('languages.items.1.level')}
            </div>
            <p className="text-xs text-[#6F6A73] leading-relaxed pt-3 border-t border-[#EDE4F0]">
              {t('languages.items.1.desc')}
            </p>
            <div className="text-[11px] text-[#4B3557] font-semibold pt-1">
              {t('languages.items.1.cert')}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
