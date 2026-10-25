import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  ExternalLink
} from 'lucide-react';
import { triggerConfetti } from '../utils/confetti';

export const Contact: React.FC = () => {
  const { t, i18n } = useTranslation();
  const currentLang = (i18n.resolvedLanguage || i18n.language || 'es').toLowerCase();
  const isEn = currentLang.startsWith('en');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('lunasofiaor04@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('3228783122');
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage(t('contact.form.error'));
      return;
    }

    if (!formData.email.includes('@')) {
      setStatus('error');
      setErrorMessage(isEn ? 'Please enter a valid email address.' : 'Por favor ingresa un correo electrónico válido.');
      return;
    }

    setStatus('sending');

    setTimeout(() => {
      setStatus('success');
      triggerConfetti();
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 6000);
    }, 800);
  };

  return (
    <section id="contact" className="py-20 relative bg-gradient-to-b from-[#ECE0F2] via-[#E2D2EA] to-[#D6C1E2] border-b border-[#C7B0D4] overflow-hidden">
      {/* Background Watermark */}
      <div 
        className="absolute top-1/2 left-4 -translate-y-1/2 font-serif text-[140px] sm:text-[220px] font-bold text-[#CEB5DC]/40 select-none pointer-events-none leading-none tracking-tighter"
        aria-hidden="true"
      >
        CONNECT
      </div>

      {/* Radiant Amethyst Ambient Aura */}
      <div className="absolute top-10 right-10 w-96 h-96 rounded-full bg-[#DAC2E8]/60 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-[#E8D4F4]/60 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#D0C0DA] text-xs font-semibold tracking-widest text-[#6B4C7A] uppercase mb-3 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6B4C7A]" />
            <span>{t('contact.badge')}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#1C1A1F] tracking-tight">
            {t('contact.title')}
          </h2>
          <p className="mt-3 text-[#6F6A73] text-sm sm:text-base leading-relaxed">
            {t('contact.subtitle')}
          </p>
          <div className="w-16 h-1 bg-[#6B4C7A] mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-5xl mx-auto items-start">
          
          {/* Left Column: Direct Contact Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, x: 2 }}
              className="bg-white p-5 rounded-[16px] border border-[#DDD0E4] hover:border-[#6B4C7A] transition-all flex items-center justify-between shadow-sm cursor-default"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#F3EEF6] flex items-center justify-center text-[#6B4C7A]">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#6F6A73] font-semibold block">
                    {t('contact.emailLabel')}
                  </span>
                  <a 
                    href="mailto:lunasofiaor04@gmail.com" 
                    className="text-sm font-medium text-[#1C1A1F] hover:text-[#6B4C7A] transition-colors"
                  >
                    lunasofiaor04@gmail.com
                  </a>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="p-2 rounded-lg text-[#6F6A73] hover:text-[#6B4C7A] hover:bg-[#F3EEF6] transition-colors"
                title="Copiar correo"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-[#6B4C7A]" /> : <Copy className="w-4 h-4" />}
              </button>
            </motion.div>

            {/* Phone & WhatsApp Card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              whileHover={{ scale: 1.02, x: 2 }}
              className="bg-white p-5 rounded-[16px] border border-[#DDD0E4] hover:border-[#6B4C7A] transition-all flex items-center justify-between shadow-sm cursor-default"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#F3EEF6] flex items-center justify-center text-[#6B4C7A]">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#6F6A73] font-semibold block">
                    {t('contact.phoneLabel')}
                  </span>
                  <a 
                    href="https://wa.me/573228783122" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-[#1C1A1F] hover:text-[#6B4C7A] transition-colors flex items-center gap-1.5"
                  >
                    <span>322 8783122</span>
                    <ExternalLink className="w-3 h-3 text-[#B8A8C1]" />
                  </a>
                </div>
              </div>

              <button
                onClick={handleCopyPhone}
                className="p-2 rounded-lg text-[#6F6A73] hover:text-[#6B4C7A] hover:bg-[#F3EEF6] transition-colors"
                title="Copiar teléfono"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-[#6B4C7A]" /> : <Copy className="w-4 h-4" />}
              </button>
            </motion.div>

            {/* Location Card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.16 }}
              className="bg-white p-5 rounded-[16px] border border-[#DDD0E4] flex items-center gap-3 shadow-sm"
            >
              <div className="w-10 h-10 rounded-full bg-[#F3EEF6] flex items-center justify-center text-[#6B4C7A]">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#6F6A73] font-semibold block">
                  {t('contact.locationLabel')}
                </span>
                <span className="text-sm font-medium text-[#1C1A1F]">
                  {t('contact.locationValue')}
                </span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Clean Editorial Form */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-white p-8 sm:p-9 rounded-[20px] border border-[#DDD0E4] shadow-sm"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label 
                  htmlFor="contact-name" 
                  className="block text-xs uppercase tracking-wider text-[#1C1A1F] font-semibold mb-1.5"
                >
                  {t('contact.form.nameLabel')} *
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder={t('contact.form.namePlaceholder')}
                  className="w-full px-4 py-3 rounded-[10px] bg-[#FAF8FC] border border-[#DDD0E4] focus:border-[#6B4C7A] focus:bg-white focus:outline-none text-[#1C1A1F] text-sm placeholder-[#6F6A73]/60 transition-all"
                />
              </div>

              <div>
                <label 
                  htmlFor="contact-email" 
                  className="block text-xs uppercase tracking-wider text-[#1C1A1F] font-semibold mb-1.5"
                >
                  {t('contact.form.emailLabel')} *
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder={t('contact.form.emailPlaceholder')}
                  className="w-full px-4 py-3 rounded-[10px] bg-[#FAF8FC] border border-[#DDD0E4] focus:border-[#6B4C7A] focus:bg-white focus:outline-none text-[#1C1A1F] text-sm placeholder-[#6F6A73]/60 transition-all"
                />
              </div>

              <div>
                <label 
                  htmlFor="contact-message" 
                  className="block text-xs uppercase tracking-wider text-[#1C1A1F] font-semibold mb-1.5"
                >
                  {t('contact.form.messageLabel')} *
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={t('contact.form.messagePlaceholder')}
                  className="w-full px-4 py-3 rounded-[10px] bg-[#FAF8FC] border border-[#DDD0E4] focus:border-[#6B4C7A] focus:bg-white focus:outline-none text-[#1C1A1F] text-sm placeholder-[#6F6A73]/60 transition-all resize-none"
                />
              </div>

              {status === 'error' && (
                <div className="p-3 rounded-lg bg-[#FAF0F2] border border-rose-300 text-rose-700 text-xs">
                  {errorMessage}
                </div>
              )}

              {status === 'success' && (
                <div className="p-3 rounded-lg bg-[#F3EEF6] border border-[#6B4C7A] text-[#4B3557] text-xs flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#6B4C7A]" />
                  <span>{t('contact.form.success')}</span>
                </div>
              )}

              <motion.button
                type="submit"
                disabled={status === 'sending'}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full btn-canva-primary py-3.5 text-xs tracking-wider uppercase flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer shadow-md shadow-[#6B4C7A]/20"
              >
                {status === 'sending' ? (
                  <>
                    <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>{t('contact.form.sending')}</span>
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>{t('contact.form.send')}</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
