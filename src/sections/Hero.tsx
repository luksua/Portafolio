import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, Copy, Check, Terminal, Sparkles, Play, CheckCircle2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/Icons';
import { triggerConfetti } from '../utils/confetti';

export const Hero: React.FC = () => {
  const { t, i18n } = useTranslation();
  const currentLang = (i18n.resolvedLanguage || i18n.language || 'es').toLowerCase();
  const isEn = currentLang.startsWith('en');
  const [copied, setCopied] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);
  const [isExecuting, setIsExecuting] = useState(false);
  const [showExecutionResult, setShowExecutionResult] = useState(false);

  const handleExecuteCode = () => {
    setIsExecuting(true);
    setShowExecutionResult(false);
    setTimeout(() => {
      setIsExecuting(false);
      setShowExecutionResult(true);
      triggerConfetti();
    }, 700);
  };

  const handleDownloadCv = () => {
    triggerConfetti();
    const link = document.createElement('a');
    link.href = '/cv-luna-sofia-ospina.pdf';
    link.download = 'CV_Luna_Sofia_Ospina_Rodriguez.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('lunasofiaor04@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const codeSnippet = `{
  "developer": "Luna Sofia Ospina",
  "role": "${isEn ? 'Junior Software Developer' : 'Desarrolladora de Software Junior'}",
  "education": "Ing. de Sistemas & ADSO SENA",
  "specialties": [
    "REST APIs & Architecture",
    "PHP · Laravel & Java · Spring Boot",
    "React · Vue.js · TypeScript",
    "OpenAI API & Automation"
  ],
  "status": "Ready to build impactful solutions"
}`;

  const copyCodeToClipboard = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section id="home" className="relative min-h-[85vh] flex items-center pt-24 pb-16 overflow-hidden bg-gradient-to-b from-[#F7F2FA] via-[#EEE4F5] to-[#E5D5EE] border-b border-[#D6BFDE]">
      {/* Editorial Watermark */}
      <div 
        className="absolute top-1/2 -right-10 -translate-y-1/2 font-serif text-[140px] sm:text-[220px] font-bold text-[#DBC4E6]/30 select-none pointer-events-none leading-none tracking-tighter"
        aria-hidden="true"
      >
        DEV
      </div>

      {/* Creative Subtle Ambient Glows */}
      <div className="absolute top-20 right-1/4 w-96 h-96 rounded-full bg-[#DBC4E6]/40 blur-3xl pointer-events-none animate-pulse-subtle" />
      <div className="absolute -bottom-20 -left-10 w-80 h-80 rounded-full bg-[#E8D8F0]/60 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Editorial Headline & Actions */}
          <motion.div 
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="lg:col-span-6 space-y-6"
          >
            {/* Status Badge with Live Pulse Animation */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E4E0E7] shadow-sm text-xs font-medium text-[#4B3557]"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6B4C7A] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#6B4C7A]"></span>
              </span>
              <span>{isEn ? 'Available for new opportunities' : 'Disponible para nuevas oportunidades'}</span>
            </motion.div>

            {/* Big Editorial Title */}
            <div>
              <span className="text-xs font-semibold tracking-widest text-[#6B4C7A] uppercase block mb-1">
                {isEn ? 'Junior Software Developer' : 'Desarrolladora de Software Junior'}
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif tracking-tight text-[#1C1A1F] leading-[1.12]">
                Luna Sofia <br />
                <span className="font-normal italic text-[#4B3557]">
                  Ospina Rodríguez
                </span>
              </h1>
            </div>

            {/* Impact Text */}
            <p className="text-base sm:text-lg text-[#524B57] max-w-xl leading-relaxed font-sans font-normal">
              {isEn 
                ? 'Building structured web architectures, RESTful APIs, and practical AI integrations.' 
                : 'Desarrollo de arquitecturas web estructuradas, APIs RESTful e integraciones prácticas con IA.'}
            </p>

            {/* Action Buttons with Spring Hover Effects */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="btn-canva-primary px-6 py-3 text-sm tracking-wide shadow-md shadow-[#6B4C7A]/15"
              >
                <span>{t('hero.viewProjects')}</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </motion.a>

              <motion.button
                onClick={handleDownloadCv}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="btn-canva-secondary px-5 py-3 text-sm tracking-wide bg-white shadow-sm"
              >
                <Download className="w-4 h-4 mr-2 text-[#6B4C7A]" />
                <span>{t('hero.downloadCv')}</span>
              </motion.button>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.04 }}
                className="inline-flex items-center gap-2 px-4 py-3 text-sm text-[#6F6A73] hover:text-[#6B4C7A] transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>{t('hero.contactMe')}</span>
              </motion.a>
            </div>

            {/* Social Links & Quick Copy Email */}
            <div className="pt-4 flex flex-wrap items-center gap-3 text-[#6F6A73] border-t border-[#E4E0E7]">
              <motion.a
                href="https://github.com/lunasofiaor04"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="p-2.5 rounded-xl border border-[#E4E0E7] bg-white hover:border-[#6B4C7A] hover:text-[#6B4C7A] shadow-sm transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/lunasofiaor04"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="p-2.5 rounded-xl border border-[#E4E0E7] bg-white hover:border-[#6B4C7A] hover:text-[#6B4C7A] shadow-sm transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </motion.a>

              <motion.button
                onClick={copyEmail}
                whileHover={{ scale: 1.02, y: -1 }}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border border-[#E4E0E7] bg-white text-xs hover:border-[#6B4C7A] hover:text-[#6B4C7A] shadow-sm transition-colors"
                title="Copiar email"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-[#6B4C7A]" /> : <Copy className="w-3.5 h-3.5 text-[#B8A8C1]" />}
                <span className="font-mono text-[11px]">{copied ? (isEn ? 'Copied!' : '¡Copiado!') : 'lunasofiaor04@gmail.com'}</span>
              </motion.button>
            </div>
          </motion.div>

          {/* Right Column: Code Editor Window Describing Skills + Floating Badges */}
          <motion.div 
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.15, ease: 'easeOut' }}
            className="lg:col-span-6 relative"
          >
            {/* Floating Orbiting Badges */}
            <motion.div 
              className="hidden sm:flex absolute -top-4 -left-4 z-20 items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#E4E0E7] shadow-lg text-[11px] font-medium text-[#4B3557] animate-float"
            >
              <span className="w-2 h-2 rounded-full bg-[#6B4C7A]" />
              <span>REST APIs & Clean Architecture</span>
            </motion.div>

            <motion.div 
              className="hidden sm:flex absolute -bottom-4 -right-4 z-20 items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#E4E0E7] shadow-lg text-[11px] font-medium text-[#4B3557] animate-float-reverse"
            >
              <Sparkles className="w-3 h-3 text-[#6B4C7A]" />
              <span>OpenAI API & Automation</span>
            </motion.div>

            {/* Elegant Code Editor / Terminal Window */}
            <div className="relative rounded-2xl overflow-hidden bg-[#18161D] border border-[#3E3847] shadow-code-glow">
              
              {/* Window Header Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#1F1B26] border-b border-[#2C2736]">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56]/90" />
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E]/90" />
                  <div className="w-3 h-3 rounded-full bg-[#27C93F]/90" />
                  <span className="ml-2 text-xs font-mono text-[#B8A8C1] tracking-wide flex items-center gap-1.5">
                    <Terminal className="w-3 h-3 text-[#B8A8C1]" />
                    <span>skills.json</span>
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleExecuteCode}
                    disabled={isExecuting}
                    className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#6B4C7A] hover:bg-[#835C95] text-[11px] font-mono text-white transition-all shadow-xs cursor-pointer active:scale-95"
                    title={isEn ? "Execute profile check" : "Ejecutar validación de perfil"}
                  >
                    <Play className={`w-3 h-3 ${isExecuting ? 'animate-spin' : ''}`} />
                    <span>{isExecuting ? (isEn ? 'Running...' : 'Ejecutando...') : (isEn ? 'Run' : 'Ejecutar')}</span>
                  </button>

                  <button
                    onClick={copyCodeToClipboard}
                    className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#2B2535] hover:bg-[#382F45] text-[11px] font-mono text-[#B8A8C1] hover:text-white transition-colors"
                    title="Copiar JSON"
                  >
                    {copiedCode ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Code Body with Line Numbers & Syntax Highlights */}
              <div className="p-5 font-mono text-xs sm:text-[13px] text-slate-200 leading-relaxed overflow-x-auto bg-[#141218]">
                <div className="flex items-center gap-2 text-[#B8A8C1] mb-2 text-[11px]">
                  <span className="text-[#6B4C7A] font-bold">➜</span>
                  <span className="text-[#B8A8C1]">~/luna-sofia</span>
                  <span className="text-white">cat profile.json</span>
                </div>

                <div className="space-y-1 pt-1 text-slate-300">
                  <div>
                    <span className="text-[#6F6A73] select-none mr-3 inline-block w-4 text-right">1</span>
                    <span className="text-slate-400">&#123;</span>
                  </div>
                  <div>
                    <span className="text-[#6F6A73] select-none mr-3 inline-block w-4 text-right">2</span>
                    <span className="text-[#B8A8C1] ml-3">"developer"</span>
                    <span className="text-slate-400">: </span>
                    <span className="text-emerald-300">"Luna Sofia Ospina"</span>
                    <span className="text-slate-400">,</span>
                  </div>
                  <div>
                    <span className="text-[#6F6A73] select-none mr-3 inline-block w-4 text-right">3</span>
                    <span className="text-[#B8A8C1] ml-3">"role"</span>
                    <span className="text-slate-400">: </span>
                    <span className="text-emerald-300">"{isEn ? 'Junior Software Developer' : 'Desarrolladora de Software Junior'}"</span>
                    <span className="text-slate-400">,</span>
                  </div>
                  <div>
                    <span className="text-[#6F6A73] select-none mr-3 inline-block w-4 text-right">4</span>
                    <span className="text-[#B8A8C1] ml-3">"education"</span>
                    <span className="text-slate-400">: </span>
                    <span className="text-emerald-300">"Ing. Sistemas (U. Tolima) & ADSO (SENA)"</span>
                    <span className="text-slate-400">,</span>
                  </div>
                  <div>
                    <span className="text-[#6F6A73] select-none mr-3 inline-block w-4 text-right">5</span>
                    <span className="text-[#B8A8C1] ml-3">"specialties"</span>
                    <span className="text-slate-400">: [</span>
                  </div>
                  <div>
                    <span className="text-[#6F6A73] select-none mr-3 inline-block w-4 text-right">6</span>
                    <span className="text-amber-200 ml-6">"REST APIs & Clean Architecture"</span>
                    <span className="text-slate-400">,</span>
                  </div>
                  <div>
                    <span className="text-[#6F6A73] select-none mr-3 inline-block w-4 text-right">7</span>
                    <span className="text-amber-200 ml-6">"PHP · Laravel & Java · Spring Boot"</span>
                    <span className="text-slate-400">,</span>
                  </div>
                  <div>
                    <span className="text-[#6F6A73] select-none mr-3 inline-block w-4 text-right">8</span>
                    <span className="text-amber-200 ml-6">"React · Vue.js · TypeScript"</span>
                    <span className="text-slate-400">,</span>
                  </div>
                  <div>
                    <span className="text-[#6F6A73] select-none mr-3 inline-block w-4 text-right">9</span>
                    <span className="text-amber-200 ml-6">"OpenAI API & Automation"</span>
                  </div>
                  <div>
                    <span className="text-[#6F6A73] select-none mr-3 inline-block w-4 text-right">10</span>
                    <span className="text-slate-400 ml-3">],</span>
                  </div>
                  <div>
                    <span className="text-[#6F6A73] select-none mr-3 inline-block w-4 text-right">11</span>
                    <span className="text-[#B8A8C1] ml-3">"status"</span>
                    <span className="text-slate-400">: </span>
                    <span className="text-sky-300">"Ready to build impactful solutions"</span>
                  </div>
                  <div>
                    <span className="text-[#6F6A73] select-none mr-3 inline-block w-4 text-right">12</span>
                    <span className="text-slate-400">&#125;</span>
                    <span className="inline-block w-2 h-4 bg-[#6B4C7A] ml-1.5 animate-pulse align-middle" />
                  </div>
                </div>

                {/* Animated Execution Stdout Console (NO IMAGES) */}
                {isExecuting && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-3 p-3 rounded-lg bg-[#0E0C11] border border-[#2C2736] text-[11px] font-mono text-purple-300 flex items-center gap-2"
                  >
                    <span className="w-2 h-2 rounded-full bg-purple-400 animate-ping" />
                    <span>{isEn ? 'Executing skills.json test suite & runtime verification...' : 'Ejecutando suite de pruebas y verificación en tiempo de ejecución...'}</span>
                  </motion.div>
                )}

                {showExecutionResult && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-3 p-3.5 rounded-lg bg-[#0E0C11] border border-[#3E3847] text-[11px] font-mono space-y-1.5"
                  >
                    <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{isEn ? 'TEST SUITE PASSED (3/3 Checks OK)' : 'SUITE DE PRUEBAS COMPLETADA (3/3 Verificaciones OK)'}</span>
                    </div>
                    <div className="text-slate-300 pl-5 space-y-0.5 text-[10px]">
                      <div>✓ Architecture: RESTful Services & Security Sanctum (READY)</div>
                      <div>✓ Stack: PHP/Laravel 10 + Spring Boot + React/Vue (VERIFIED)</div>
                      <div>✓ AI Integration: OpenAI API & Automated Pipelines (ONLINE)</div>
                    </div>
                    <div className="text-[#B8A8C1] pl-5 pt-1 text-[10px] italic">
                      {isEn ? '→ Status: Ready to deliver high quality code for your team!' : '→ Estado: Lista para aportar código de alta calidad en tu equipo!'}
                    </div>
                  </motion.div>
                )}

                {/* Bottom Bar Info */}
                <div className="pt-3 mt-3 border-t border-[#2C2736] flex items-center justify-between text-[11px] text-[#B8A8C1]/80">
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    <span>0 errors · compilation verified</span>
                  </span>
                  <span>UTF-8 · JSON</span>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
