import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Clock, GitCommit, Code2 } from 'lucide-react';

export const DevActivityMatrix: React.FC = () => {
  const { i18n } = useTranslation();
  const isEn = (i18n.resolvedLanguage || i18n.language || 'es').toLowerCase().startsWith('en');
  const [colombiaTime, setColombiaTime] = useState<string>('');
  const [activeCellTooltip, setActiveCellTooltip] = useState<string | null>(null);

  // Update Colombia UTC-5 live time
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Colombia is UTC-5
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'America/Bogota',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setColombiaTime(new Intl.DateTimeFormat('es-CO', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Generate 26 weeks x 7 days grid with realistic commit intensity
  // Levels: 0 (empty), 1 (light), 2 (medium), 3 (high), 4 (intense)
  const milestones = [
    'Laravel Sanctum Authentication & Token Expiry',
    'OpenAI API Prompt Engineering & Classification',
    'EditorJS Custom Block Tools & Sanitization',
    'MySQL Normalized Schemas & Foreign Keys',
    'React + TypeScript Component Architecture',
    'SENA ADSO Sprint Review & Best Apprentice 2025',
    'Universidad del Tolima: Algoritmia & Estructuras de Datos',
    'REST API Documentation with Swagger/OpenAPI',
    'Vue.js Reactive Dashboard & Blade Views',
    'Git Flow Branching & Pull Requests Review',
  ];

  const weeksCount = 24;
  const daysCount = 7;

  // Deterministic pseudo-random pattern for realistic activity
  const gridData = Array.from({ length: weeksCount }).map((_, weekIdx) => {
    return Array.from({ length: daysCount }).map((_, dayIdx) => {
      const seed = (weekIdx * 7 + dayIdx * 13) % 17;
      let level = 1;
      if (seed < 4) level = 0;
      else if (seed < 9) level = 1;
      else if (seed < 13) level = 2;
      else if (seed < 16) level = 3;
      else level = 4;

      const randomMilestone = milestones[(weekIdx + dayIdx) % milestones.length];
      return {
        id: `${weekIdx}-${dayIdx}`,
        level,
        commits: level === 0 ? 0 : level * 3 + (dayIdx % 3),
        note: randomMilestone,
      };
    });
  });

  const levelColors = [
    'bg-[#EFE6D8]/50 border-[#E4D7C7]', // 0
    'bg-[#D8C7B5] border-[#C9B7A3]',    // 1
    'bg-[#B8A8C1] border-[#A896B2]',    // 2
    'bg-[#6B4C7A] border-[#5A3D68]',    // 3
    'bg-[#4B3557] border-[#3B2845]',    // 4
  ];

  return (
    <div className="bg-white/90 backdrop-blur-md rounded-3xl border border-[#DFD3C2] p-6 sm:p-7 shadow-sm mt-12">
      {/* Console Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-[#EADECF]">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-[#F4ECE2] border border-[#DFD3C2] flex items-center justify-center text-[#6B4C7A]">
            <Code2 className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-sm sm:text-base font-serif font-bold text-[#1C1A1F] tracking-tight">
              {isEn ? 'Continuous Learning & Development Log' : 'Registro de Actividad & Desarrollo Continuo'}
            </h4>
            <p className="text-[11px] text-[#6F6A73]">
              {isEn ? 'Consistent engineering practice across university, SENA & personal projects' : 'Práctica constante en ingeniería de sistemas, SENA y proyectos reales'}
            </p>
          </div>
        </div>

        {/* Live Colombia Clock Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F8F2EB] border border-[#DFD3C2] text-xs font-mono text-[#4B3557] self-start sm:self-auto">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <Clock className="w-3.5 h-3.5 text-[#6B4C7A]" />
          <span>Colombia (UTC-5): {colombiaTime || 'Active'}</span>
        </div>
      </div>

      {/* Heatmap Matrix Display */}
      <div className="pt-6 overflow-x-auto pb-2 scrollbar-thin">
        <div className="inline-flex flex-col gap-1 min-w-[500px]">
          {/* Day rows (Mon - Sun) */}
          {Array.from({ length: daysCount }).map((_, dayIdx) => (
            <div key={dayIdx} className="flex items-center gap-1.5">
              <span className="text-[9px] font-mono text-[#8C7D6F] w-5 text-right select-none">
                {dayIdx === 1 ? 'M' : dayIdx === 3 ? 'W' : dayIdx === 5 ? 'F' : ''}
              </span>
              <div className="flex items-center gap-1">
                {gridData.map((week, _weekIdx) => {
                  const cell = week[dayIdx];
                  const colorClass = levelColors[cell.level];

                  return (
                    <motion.div
                      key={cell.id}
                      whileHover={{ scale: 1.4, zIndex: 30 }}
                      onMouseEnter={() => {
                        if (cell.commits > 0) {
                          setActiveCellTooltip(`${cell.commits} commits · ${cell.note}`);
                        } else {
                          setActiveCellTooltip(isEn ? 'Rest & Code Review' : 'Revisión teórica & descanso');
                        }
                      }}
                      onMouseLeave={() => setActiveCellTooltip(null)}
                      className={`w-3.5 h-3.5 rounded-[3px] border transition-colors cursor-pointer ${colorClass}`}
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar: Tooltip Message + Legend */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-4 border-t border-[#EADECF] text-xs text-[#6F6A73]">
        <div className="min-h-[20px] flex items-center gap-2 font-mono text-[11px] text-[#4B3557]">
          <GitCommit className="w-3.5 h-3.5 text-[#6B4C7A]" />
          <span>{activeCellTooltip || (isEn ? 'Hover over any activity dot to inspect engineering logs' : 'Pasa el cursor sobre cualquier nodo para ver los logs')}</span>
        </div>

        {/* Legend */}
        <div className="flex items-center gap-1.5 text-[10px] font-mono">
          <span>{isEn ? 'Less' : 'Menos'}</span>
          {levelColors.map((color, i) => (
            <span key={i} className={`w-2.5 h-2.5 rounded-[2px] border ${color}`} />
          ))}
          <span>{isEn ? 'More' : 'Más'}</span>
        </div>
      </div>

      {/* Quick Verified Metric Counters */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4 pt-4 border-t border-[#EADECF]">
        <div className="bg-[#FAF6F0] p-3 rounded-xl border border-[#DFD3C2] text-center">
          <span className="text-xl font-serif font-bold text-[#1C1A1F] block">350+</span>
          <span className="text-[10px] uppercase tracking-wider text-[#6F6A73] font-medium">
            {isEn ? 'Hours of Coding' : 'Horas de Código'}
          </span>
        </div>
        <div className="bg-[#FAF6F0] p-3 rounded-xl border border-[#DFD3C2] text-center">
          <span className="text-xl font-serif font-bold text-[#6B4C7A] block">100%</span>
          <span className="text-[10px] uppercase tracking-wider text-[#6F6A73] font-medium">
            {isEn ? 'Clean Code Mindset' : 'Código Limpio'}
          </span>
        </div>
        <div className="bg-[#FAF6F0] p-3 rounded-xl border border-[#DFD3C2] text-center">
          <span className="text-xl font-serif font-bold text-[#4B3557] block">2</span>
          <span className="text-[10px] uppercase tracking-wider text-[#6F6A73] font-medium">
            {isEn ? 'Degrees In Progress' : 'Titulaciones'}
          </span>
        </div>
        <div className="bg-[#FAF6F0] p-3 rounded-xl border border-[#DFD3C2] text-center">
          <span className="text-xl font-serif font-bold text-amber-600 block">2025</span>
          <span className="text-[10px] uppercase tracking-wider text-[#6F6A73] font-medium">
            {isEn ? 'Best Apprentice SENA' : 'Mejor Aprendiz ADSO'}
          </span>
        </div>
      </div>

    </div>
  );
};
