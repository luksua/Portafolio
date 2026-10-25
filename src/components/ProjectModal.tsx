import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { 
  X, 
  ExternalLink, 
  CheckCircle2, 
  Layers, 
  AlertTriangle, 
  Sparkles,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { GithubIcon } from './Icons';
import type { ProjectDetail } from '../data/projectsData';

interface ProjectModalProps {
  project: ProjectDetail | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const { t, i18n } = useTranslation();
  const currentLang = (i18n.resolvedLanguage || i18n.language || 'es').toLowerCase().startsWith('en') ? 'en' : 'es';
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Prevent background page scrolling when modal is open and handle Escape key
  useEffect(() => {
    if (!project) return;

    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  // Reset image index when opening a new project
  useEffect(() => {
    setActiveImageIndex(0);
  }, [project]);

  if (typeof document === 'undefined') return null;

  const gallery = project?.gallery && project.gallery.length > 0 ? project.gallery : (project ? [project.image] : []);

  return createPortal(
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 overflow-hidden">
          {/* Backdrop with dark blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="relative w-full max-w-3xl bg-white border border-[#E4E0E7] rounded-[22px] shadow-[0_25px_60px_rgba(0,0,0,0.25)] overflow-hidden z-10 my-auto max-h-[88vh] sm:max-h-[90vh] flex flex-col"
          >
            {/* Header Bar */}
            <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-[#E4E0E7] bg-[#FAF9FB] shrink-0">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#6B4C7A]" />
                <span className="text-xs uppercase tracking-widest text-[#6B4C7A] font-semibold">
                  {project.category[currentLang]}
                </span>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-[#6F6A73] hover:text-[#1C1A1F] hover:bg-[#F3F1F5] transition-colors"
                aria-label={t('projects.modal.close')}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body (Scrollable) */}
            <div className="overflow-y-auto p-5 sm:p-8 space-y-6">
              <div>
                <h2 className="text-2xl sm:text-3xl font-serif text-[#1C1A1F] tracking-tight">
                  {project.title[currentLang]}
                </h2>
                <p className="mt-2 text-xs sm:text-base text-[#6F6A73] leading-relaxed">
                  {project.summary[currentLang]}
                </p>
              </div>

              {/* Gallery Image Display */}
              <div className="relative rounded-[16px] overflow-hidden border border-[#E4E0E7] bg-[#FAF9FB]">
                <img
                  src={gallery[activeImageIndex]}
                  alt={project.title[currentLang]}
                  className="w-full h-52 sm:h-80 object-cover object-top"
                />
                {gallery.length > 1 && (
                  <>
                    <button
                      onClick={() => setActiveImageIndex((prev) => (prev > 0 ? prev - 1 : gallery.length - 1))}
                      className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 text-[#1C1A1F] hover:bg-white shadow-md border border-[#E4E0E7]"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setActiveImageIndex((prev) => (prev < gallery.length - 1 ? prev + 1 : 0))}
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 text-[#1C1A1F] hover:bg-white shadow-md border border-[#E4E0E7]"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </>
                )}
              </div>

              {/* Technologies Badges */}
              <div>
                <div className="text-xs uppercase tracking-wider text-[#6F6A73] font-semibold mb-2">
                  {t('projects.modal.tech')}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-[#FAF9FB] border border-[#E4E0E7] text-[#1C1A1F]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Structured Deep-Dive: Problem -> Solution -> Architecture -> Result */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4 pt-2">
                <div className="p-4 rounded-xl bg-[#FAF9FB] border border-[#E4E0E7]">
                  <div className="flex items-center gap-2 text-[#4B3557] font-semibold text-xs uppercase tracking-wider mb-1.5">
                    <AlertTriangle className="w-4 h-4 text-[#6B4C7A]" />
                    <span>{t('projects.modal.problem')}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#6F6A73] leading-relaxed">
                    {project.problem[currentLang]}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#FAF9FB] border border-[#E4E0E7]">
                  <div className="flex items-center gap-2 text-[#4B3557] font-semibold text-xs uppercase tracking-wider mb-1.5">
                    <Sparkles className="w-4 h-4 text-[#6B4C7A]" />
                    <span>{t('projects.modal.solution')}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#6F6A73] leading-relaxed">
                    {project.solution[currentLang]}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#FAF9FB] border border-[#E4E0E7]">
                  <div className="flex items-center gap-2 text-[#4B3557] font-semibold text-xs uppercase tracking-wider mb-1.5">
                    <Layers className="w-4 h-4 text-[#6B4C7A]" />
                    <span>{t('projects.modal.architecture')}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#6F6A73] leading-relaxed">
                    {project.architecture[currentLang]}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#FAF9FB] border border-[#E4E0E7]">
                  <div className="flex items-center gap-2 text-[#4B3557] font-semibold text-xs uppercase tracking-wider mb-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#6B4C7A]" />
                    <span>{t('projects.modal.result')}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#6F6A73] leading-relaxed">
                    {project.results[currentLang]}
                  </p>
                </div>
              </div>

              {/* Actions Footer */}
              <div className="pt-4 flex flex-wrap items-center justify-between gap-3 border-t border-[#E4E0E7]">
                <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 text-xs font-semibold rounded-lg bg-[#6B4C7A] text-white hover:bg-[#4B3557] flex items-center gap-2 shadow-sm transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>{t('projects.visitDemo')}</span>
                    </a>
                  )}

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-canva-secondary px-3.5 py-2 text-xs flex items-center gap-2 border border-[#D8C7DE] rounded-lg"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>{t('projects.viewCode')}</span>
                  </a>
                </div>

                <button
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-medium text-[#6F6A73] hover:text-[#1C1A1F] transition-colors"
                >
                  {t('projects.modal.close')}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
};
