import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

interface IntroAnimationProps {
  onComplete: () => void;
}

export const IntroAnimation: React.FC<IntroAnimationProps> = ({ onComplete }) => {
  const { t } = useTranslation();
  const [step, setStep] = useState<number>(0);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      onComplete();
      return;
    }

    // Quick, smooth editorial sequence (~1.1s total)
    const timer1 = setTimeout(() => setStep(1), 200);
    const timer2 = setTimeout(() => setStep(2), 550);
    const timer3 = setTimeout(() => {
      setStep(3);
      setTimeout(onComplete, 300);
    }, 1050);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {step < 3 && (
        <motion.div
          key="intro-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#FAF9FB] text-[#1C1A1F]"
        >
          {/* Subtle background circle */}
          <div className="absolute w-80 h-80 rounded-full bg-[#F3F1F5] pointer-events-none -z-0 opacity-80" />

          <div className="relative z-10 flex flex-col items-center text-center px-4">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="w-12 h-12 mb-4 rounded-full bg-[#F3F1F5] border border-[#E4E0E7] flex items-center justify-center"
            >
              <div className="w-4 h-4 rounded-full bg-[#6B4C7A]" />
            </motion.div>

            <motion.h1
              initial={{ y: 15, opacity: 0 }}
              animate={step >= 1 ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="text-2xl sm:text-3xl font-serif tracking-tight text-[#1C1A1F]"
            >
              Luna Sofia Ospina
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={step >= 2 ? { opacity: 1 } : {}}
              transition={{ duration: 0.3 }}
              className="mt-2 text-xs uppercase tracking-widest text-[#6F6A73] font-medium"
            >
              {t('intro.role', 'Desarrolladora de Software')}
            </motion.div>
          </div>

          <button
            onClick={onComplete}
            className="absolute bottom-8 text-[11px] text-[#6F6A73] hover:text-[#6B4C7A] transition-colors tracking-widest uppercase px-3 py-1 rounded border border-[#E4E0E7] bg-white"
          >
            {t('intro.skip', 'Saltar intro')}
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
