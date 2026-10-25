import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Briefcase,
  Brain,
  Lightbulb,
  Target,
  Search,
  Compass,
  RefreshCw,
  CheckCircle2,
  Users,
  ShieldCheck
} from 'lucide-react';

export const About: React.FC = () => {
  const { t, i18n } = useTranslation();
  const currentLang = (i18n.resolvedLanguage || i18n.language || 'es').toLowerCase();
  const isEn = currentLang.startsWith('en');

  const pillars = [
    {
      num: "01",
      title: isEn ? "Systems Engineering" : "Ingeniería de Sistemas",
      sub: isEn ? "Universidad del Tolima · 6th Sem." : "Universidad del Tolima · 6to Sem.",
      tag: "U. Tolima",
    },
    {
      num: "02",
      title: isEn ? "ADSO Technologist" : "Tecnóloga ADSO",
      sub: isEn ? "SENA · Software Analysis & Dev" : "SENA · Análisis y Desarrollo",
      tag: "SENA",
    },
    {
      num: "03",
      title: isEn ? "Web & API Architecture" : "Desarrollo Web & APIs",
      sub: isEn ? "Laravel, Spring Boot, React & SQL" : "Laravel, Spring Boot, React & SQL",
      tag: "Full Stack",
    },
    {
      num: "04",
      title: isEn ? "AI & Automation" : "IA & Automatización",
      sub: isEn ? "OpenAI API & Clean Code" : "OpenAI API & Código Limpio",
      tag: "GenAI",
    },
  ];

  const softSkills = [
    { name: isEn ? "Problem Solving" : "Resolución de Problemas", icon: Target, color: "text-[#367954] bg-[#EDF8F2] border-[#C8E6D5]" },
    { name: isEn ? "Analytical Thinking" : "Pensamiento Analítico", icon: Brain, color: "text-[#8E4453] bg-[#FBF2F4] border-[#EED4DA]" },
    { name: isEn ? "Critical Thinking" : "Pensamiento Crítico", icon: Search, color: "text-[#3E6596] bg-[#EDF4FC] border-[#CCE0F5]" },
    { name: isEn ? "Creativity & Innovation" : "Creatividad & Innovación", icon: Lightbulb, color: "text-[#6B4C7A] bg-[#F5EEF8] border-[#DFCFE5]" },
    { name: isEn ? "Adaptability" : "Adaptabilidad", icon: Compass, color: "text-[#966E38] bg-[#FDF7EE] border-[#EFE0C9]" },
    { name: isEn ? "Continuous Learning" : "Aprendizaje Continuo", icon: RefreshCw, color: "text-[#6B4C7A] bg-[#F5EEF8] border-[#DFCFE5]" },
    { name: isEn ? "Attention to Detail" : "Atención al Detalle", icon: CheckCircle2, color: "text-[#4B3557] bg-[#F3ECF6] border-[#D9C8DE]" },
    { name: isEn ? "Teamwork & Agile" : "Trabajo en Equipo", icon: Users, color: "text-[#8E4453] bg-[#FBF2F4] border-[#EED4DA]" },
    { name: isEn ? "Commitment & Ethics" : "Compromiso & Ética", icon: ShieldCheck, color: "text-[#367954] bg-[#EDF8F2] border-[#C8E6D5]" },
  ];

  return (
    <section id="about" className="py-20 relative bg-gradient-to-b from-[#F8F3EB] via-[#F4EDE2] to-[#EFE6D8] border-b border-[#E0D3C1] overflow-hidden">
      {/* Background Watermark */}
      <div 
        className="absolute -top-10 right-0 font-serif text-[120px] sm:text-[160px] lg:text-[200px] font-bold text-[#DECEBD]/40 select-none pointer-events-none leading-none tracking-tighter"
        aria-hidden="true"
      >
        STORY
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center max-w-xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 border border-[#D8CDE0] text-[11px] font-semibold tracking-widest text-[#6B4C7A] uppercase mb-2 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6B4C7A]" />
            <span>{t('about.badge')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#1C1A1F] tracking-tight">
            {t('about.title')}
          </h2>
          <div className="w-12 h-1 bg-[#6B4C7A] mx-auto mt-2.5 rounded-full" />
        </motion.div>

        {/* Editorial Profile: Photo + Concise Bio + Pillars + Soft Skills */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left: Luna's Editorial Photo Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-4 flex flex-col items-center"
          >
            <div className="relative group max-w-[270px] w-full">
              {/* Canva-inspired subtle pastel backing offset border */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-[#6B4C7A]/25 via-[#B8A8C1]/35 to-[#EADECF] rounded-[30px] blur-xs -rotate-1.5 group-hover:rotate-0 transition-transform duration-300" />
              
              {/* Photo Box */}
              <div className="relative rounded-[24px] overflow-hidden border-2 border-[#DFD3C2] bg-white shadow-md shadow-[#6B4C7A]/10">
                <img 
                  src="/profile-luna.jpg" 
                  alt="Luna Sofia Ospina Rodríguez" 
                  className="w-full aspect-[4/5] object-cover object-top filter brightness-[1.02] contrast-[1.02] group-hover:scale-[1.02] transition-transform duration-500"
                />

                {/* Top Badge */}
                {/* <div className="absolute top-2.5 left-2.5 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full border border-[#DFD3C2] shadow-xs flex items-center gap-1.5 text-[10px] font-semibold text-[#4B3557]">
                  <GraduationCap className="w-3 h-3 text-[#6B4C7A]" />
                  <span>{isEn ? 'Dual Degree Track' : 'Doble Formación'}</span>
                </div> */}
              </div>
            </div>

            {/* Quick Location & Availability */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-4 text-[11px] text-[#554D43]">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/80 border border-[#DFD3C2]">
                <MapPin className="w-3 h-3 text-[#6B4C7A]" />
                <span>Colombia · {isEn ? 'Remote / Hybrid' : 'Remoto / Híbrido'}</span>
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/80 border border-[#DFD3C2] text-[#2D6A48]">
                <Briefcase className="w-3 h-3 text-[#367954]" />
                <span>{isEn ? 'Open to Work' : 'Disponible'}</span>
              </span>
            </div>
          </motion.div>

          {/* Right: Concise Story + 4 Pillars + Compact Soft Skills */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-8 space-y-6"
          >
            {/* Header / Identity */}
            <div>
              <span className="text-xs font-semibold tracking-wider text-[#6B4C7A] uppercase block">
                {isEn ? 'Junior Software Developer' : 'Desarrolladora de Software Junior'}
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-[#1C1A1F] tracking-tight">
                Luna Sofia Ospina Rodríguez
              </h3>
            </div>

            {/* Ultra-Concise Lead (No redundancy, immediate clarity) */}
            <p className="text-sm sm:text-base text-[#463F38] font-normal leading-relaxed bg-white/70 backdrop-blur-xs p-4 rounded-xl border border-[#DFD3C2]">
              {isEn 
                ? "Junior Developer with dual technical training (Systems Engineering & ADSO SENA), specialized in backend architectures (Laravel, Spring Boot), RESTful APIs, MySQL, and practical AI integrations." 
                : "Desarrolladora Junior con doble formación técnica (Ingeniería de Sistemas & ADSO SENA), especializada en arquitectura backend (Laravel, Spring Boot), APIs RESTful, MySQL e integraciones prácticas con IA."}
            </p>

            {/* 4 Pillars in a Compact Row */}
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#7C7267] block mb-2">
                {isEn ? 'Core Pillars' : 'Pilares de Formación & Enfoque'}
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {pillars.map((pillar) => (
                  <div
                    key={pillar.num}
                    className="bg-white/90 p-3 rounded-xl border border-[#DFD3C2] shadow-xs hover:border-[#6B4C7A] transition-colors"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-base font-serif text-[#C4B4A2] font-semibold">
                        {pillar.num}
                      </span>
                      <span className="text-[8px] font-bold px-1.5 py-0.5 rounded bg-[#F4ECE2] text-[#6B4C7A]">
                        {pillar.tag}
                      </span>
                    </div>
                    <h4 className="font-semibold text-xs text-[#1C1A1F] leading-tight">
                      {pillar.title}
                    </h4>
                    <p className="text-[10px] text-[#6F6A73] mt-0.5 truncate">
                      {pillar.sub}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Integrated Soft Skills: Compact Interactive Tag Cloud */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#7C7267]">
                  {isEn ? 'Key Soft Skills' : 'Competencias Blandas'}
                </span>
                <span className="text-[10px] font-mono text-[#6B4C7A] font-semibold">
                  {softSkills.length} {isEn ? 'Skills' : 'Habilidades'}
                </span>
              </div>

              {/* Compact Badges Grid */}
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill, idx) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.05, y: -1 }}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border shadow-2xs transition-all cursor-default ${skill.color}`}
                    >
                      <Icon className="w-3.5 h-3.5 shrink-0" />
                      <span>{skill.name}</span>
                    </motion.div>
                  );
                })}
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
