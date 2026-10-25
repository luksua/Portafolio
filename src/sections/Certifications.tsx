import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Award, Trophy } from 'lucide-react';

export const Certifications: React.FC = () => {
  const { t, i18n } = useTranslation();
  const currentLang = (i18n.resolvedLanguage || i18n.language || 'es').toLowerCase();
  const isEn = currentLang.startsWith('en');

  const certs = [
    {
      id: "best-apprentice",
      title: t('certifications.items.0.title'),
      issuer: t('certifications.items.0.issuer'),
      year: "2025",
      isAward: true,
      description: t('certifications.items.0.description'),
    },
    {
      id: "gen-ai",
      title: t('certifications.items.1.title'),
      issuer: t('certifications.items.1.issuer'),
      duration: isEn ? "30 hours" : "30 horas",
      year: "2024",
      isAward: false,
      description: t('certifications.items.1.description'),
    },
    {
      id: "ai-solutions",
      title: t('certifications.items.2.title'),
      issuer: t('certifications.items.2.issuer'),
      year: "2024",
      isAward: false,
      description: t('certifications.items.2.description'),
    },
    {
      id: "office-tools",
      title: t('certifications.items.3.title'),
      issuer: t('certifications.items.3.issuer'),
      year: "2023",
      isAward: false,
      description: t('certifications.items.3.description'),
    },
    {
      id: "office-basics",
      title: t('certifications.items.4.title'),
      issuer: t('certifications.items.4.issuer'),
      year: "2023",
      isAward: false,
      description: t('certifications.items.4.description'),
    },
  ];

  return (
    <section id="certificaciones" className="py-20 relative bg-gradient-to-br from-[#EFE5F7] via-[#E4D4EE] to-[#DAC1E7] border-b border-[#CEB2DD] overflow-hidden">
      {/* Background Watermark */}
      <div 
        className="absolute top-1/2 right-4 -translate-y-1/2 font-serif text-[140px] sm:text-[200px] font-bold text-[#CEB2DD]/50 select-none pointer-events-none leading-none tracking-tighter"
        aria-hidden="true"
      >
        HONORS
      </div>

      {/* Royal Honor Ambient Aura */}
      <div className="absolute top-1/4 right-10 w-96 h-96 rounded-full bg-[#E5D2F2]/60 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-[#EEDBF8]/60 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#D0C0DA] text-xs font-semibold tracking-widest text-[#6B4C7A] uppercase mb-3 shadow-sm">
            <Award className="w-3.5 h-3.5 text-[#6B4C7A]" />
            <span>{t('certifications.badge')}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#1C1A1F] tracking-tight">
            {t('certifications.title')}
          </h2>
          <p className="mt-3 text-[#6F6A73] text-sm sm:text-base leading-relaxed">
            {t('certifications.subtitle')}
          </p>
          <div className="w-16 h-1 bg-[#6B4C7A] mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Featured Card: Mejor Aprendiz ADSO 2025 with Special Creative Styling */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          whileHover={{ 
            scale: 1.02, 
            y: -5,
            boxShadow: '0 20px 40px -5px rgba(107, 76, 122, 0.18)' 
          }}
          className="mb-10 max-w-4xl mx-auto"
        >
          <div className="bg-white p-8 sm:p-9 rounded-[20px] border-2 border-[#6B4C7A]/50 shadow-[0_6px_30px_rgba(107,76,122,0.08)] relative overflow-hidden transition-all duration-300">
            {/* Soft decorative corner gradient */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#6B4C7A]/15 via-[#B8A8C1]/20 to-transparent rounded-bl-full pointer-events-none" />

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-[#F3EEF6] border border-[#D8C7DE] flex items-center justify-center text-[#6B4C7A]">
                  <Trophy className="w-4 h-4 animate-bounce" />
                </div>
                <span className="text-xs font-bold tracking-wider uppercase text-[#6B4C7A]">
                  {t('certifications.featuredBadge')}
                </span>
              </div>
              <span className="text-xs font-semibold text-[#4B3557] px-3.5 py-1 rounded-full bg-[#FAF8FB] border border-[#D8C7DE] shadow-sm">
                SENA · 2025
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-serif text-[#1C1A1F] tracking-tight mb-2">
              {certs[0].title}
            </h3>

            <p className="text-sm text-[#5A5460] leading-relaxed max-w-2xl">
              {certs[0].description}
            </p>
          </div>
        </motion.div>

        {/* Other Simple White Cards Grid with Spring Hover */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {certs.slice(1).map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              whileHover={{ 
                scale: 1.04, 
                y: -4, 
                boxShadow: '0 12px 25px -4px rgba(107, 76, 122, 0.12)' 
              }}
              className="bg-white p-5 rounded-[16px] border border-[#DDD1E6] hover:border-[#6B4C7A] transition-colors duration-200 flex flex-col justify-between space-y-4 shadow-sm cursor-default"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-[#6B4C7A] uppercase tracking-wider">
                    {cert.issuer}
                  </span>
                  <span className="text-[11px] text-[#6F6A73] px-2 py-0.5 rounded-full bg-[#FAF8FB]">
                    {cert.year}
                  </span>
                </div>

                <h4 className="font-serif text-base text-[#1C1A1F] leading-snug">
                  {cert.title}
                </h4>

                {cert.duration && (
                  <div className="text-xs text-[#4B3557] font-medium">
                    {cert.duration}
                  </div>
                )}

                <p className="text-xs text-[#6F6A73] leading-relaxed pt-1">
                  {cert.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#EFE8F4] flex items-center justify-between text-[11px] text-[#6F6A73]">
                <span>Certificado</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#B8A8C1]" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
