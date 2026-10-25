import React from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Footer: React.FC = () => {
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1C1A1F] text-[#FAF9FB] py-14 relative z-10 border-t border-[#1C1A1F]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10">
          
          {/* Identity */}
          <div className="text-center md:text-left space-y-1">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="w-2 h-2 rounded-full bg-[#6B4C7A]" />
              <h3 className="font-serif text-lg text-[#FAF9FB] tracking-tight">
                Luna Sofia Ospina Rodríguez
              </h3>
            </div>
            <p className="text-xs tracking-wider text-[#B8A8C1] uppercase font-sans">
              {t('footer.role')}
            </p>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/lunasofiaor04"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg border border-white/10 bg-white/5 hover:border-[#6B4C7A] hover:text-[#B8A8C1] text-white/80 transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href="https://www.linkedin.com/in/lunasofiaor04"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg border border-white/10 bg-white/5 hover:border-[#6B4C7A] hover:text-[#B8A8C1] text-white/80 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href="mailto:lunasofiaor04@gmail.com"
              className="p-2.5 rounded-lg border border-white/10 bg-white/5 hover:border-[#6B4C7A] hover:text-[#B8A8C1] text-white/80 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-lg border border-[#6B4C7A]/50 bg-[#6B4C7A]/20 text-[#B8A8C1] hover:bg-[#6B4C7A] hover:text-white transition-all ml-2"
              title="Volver arriba / Back to top"
              aria-label="Volver arriba"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom copyright notice */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#B8A8C1] font-sans gap-3">
          <p>© 2026 Luna Sofia Ospina Rodríguez. {t('footer.rights')}</p>
          <p className="text-white/60">
            {t('footer.craftedWith')}
          </p>
        </div>

      </div>
    </footer>
  );
};
