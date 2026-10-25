import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Cpu, Database, Layout, Sparkles, ShieldCheck, GitBranch } from 'lucide-react';

interface MetricAxis {
  id: string;
  labelEs: string;
  labelEn: string;
  value: number; // 0 - 100
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  technologies: string;
  detailEs: string;
  detailEn: string;
}

export const TechRadarChart: React.FC = () => {
  const { i18n } = useTranslation();
  const isEn = (i18n.resolvedLanguage || i18n.language || 'es').toLowerCase().startsWith('en');
  const [hoveredAxis, setHoveredAxis] = useState<MetricAxis | null>(null);

  const axes: MetricAxis[] = [
    {
      id: 'backend',
      labelEs: 'Backend & APIs',
      labelEn: 'Backend & APIs',
      value: 92,
      icon: Cpu,
      color: '#8E4453',
      technologies: 'PHP · Laravel · Spring Boot · Java',
      detailEs: 'Controladores RESTful, middleware, inyección de dependencias y lógica de negocio sólida.',
      detailEn: 'RESTful controllers, middleware, dependency injection, and solid business logic.',
    },
    {
      id: 'databases',
      labelEs: 'Bases de Datos SQL',
      labelEn: 'SQL Databases',
      value: 88,
      icon: Database,
      color: '#367954',
      technologies: 'MySQL · Modelado ER · Optimización',
      detailEs: 'Diseño relacional, consultas optimizadas, normalización e integridad referencial.',
      detailEn: 'Relational design, optimized queries, normalization, and referential integrity.',
    },
    {
      id: 'frontend',
      labelEs: 'Frontend & UI',
      labelEn: 'Frontend & UI',
      value: 86,
      icon: Layout,
      color: '#3E6596',
      technologies: 'React · Vue.js · TypeScript · Tailwind',
      detailEs: 'Componentes reactivos modulares, interfaces limpias y experiencia de usuario fluida.',
      detailEn: 'Modular reactive components, clean interfaces, and smooth user experience.',
    },
    {
      id: 'ai',
      labelEs: 'Inteligencia Artificial',
      labelEn: 'AI & Automation',
      value: 90,
      icon: Sparkles,
      color: '#6B4C7A',
      technologies: 'OpenAI API · Prompt Eng · Sanitización',
      detailEs: 'Categorización automatizada de contenidos, enriquecimiento semántico y filtrado de datos.',
      detailEn: 'Automated content classification, semantic enrichment, and data sanitization.',
    },
    {
      id: 'security',
      labelEs: 'Arquitectura & Seguridad',
      labelEn: 'Architecture & Auth',
      value: 89,
      icon: ShieldCheck,
      color: '#4B3557',
      technologies: 'Sanctum · JWT Tokens · CORS · Roles',
      detailEs: 'Autenticación basada en tokens, validación estricta de payloads y control de acceso.',
      detailEn: 'Token-based authentication, strict payload validation, and access control.',
    },
    {
      id: 'devops',
      labelEs: 'DevOps & Colaboración',
      labelEn: 'DevOps & Git',
      value: 87,
      icon: GitBranch,
      color: '#966E38',
      technologies: 'Git · GitHub · Jira · Scrum · Swagger',
      detailEs: 'Control de versiones con Git Flow, especificaciones OpenAPI y trabajo ágil.',
      detailEn: 'Version control with Git Flow, OpenAPI specifications, and agile teamwork.',
    },
  ];

  // SVG Geometry Constants optimized for mobile and desktop
  const size = 360;
  const center = size / 2;
  const radius = 105;
  const totalAxes = axes.length;

  // Calculate polygon points
  const polygonPoints = axes.map((axis, i) => {
    const angle = i * ((2 * Math.PI) / totalAxes) - Math.PI / 2;
    const r = (axis.value / 100) * radius;
    const x = center + r * Math.cos(angle);
    const y = center + r * Math.sin(angle);
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(' ');

  // Concentric polygon levels: 25%, 50%, 75%, 100%
  const levels = [0.25, 0.5, 0.75, 1.0];

  return (
    <div className="bg-white/90 backdrop-blur-md rounded-2xl sm:rounded-3xl border border-[#C7D7E8] p-4 sm:p-8 shadow-sm mb-12 sm:mb-14">
      {/* Visual Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 pb-5 sm:pb-6 border-b border-[#E2ECF5]">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EDF3F9] border border-[#C7D7E8] text-[11px] font-semibold tracking-wider text-[#3E6596] uppercase mb-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3E6596] animate-pulse" />
            <span>{isEn ? 'Visual Competency Radar' : 'Radar de Competencias Técnicas'}</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-serif text-[#1C1A1F] tracking-tight">
            {isEn ? 'Full-Stack Proficiency Map' : 'Mapa de Equilibrio Técnico'}
          </h3>
        </div>
        <p className="text-xs text-[#6F6A73] max-w-xs leading-relaxed">
          {isEn 
            ? 'Interactive vector visualization of core technical disciplines, software patterns, and AI integration.'
            : 'Visualización vectorial interactiva de disciplinas técnicas, patrones de software e integración de IA.'}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center pt-5 sm:pt-6">
        
        {/* Left Column: Pure SVG Radar Chart */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center relative">
          <div className="relative w-full max-w-[290px] sm:max-w-[340px] aspect-square select-none">
            <svg 
              viewBox={`0 0 ${size} ${size}`} 
              className="w-full h-full drop-shadow-sm overflow-visible"
              aria-label="Radar Chart of Technical Skills"
            >
              <defs>
                <linearGradient id="radarFillGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#6B4C7A" stopOpacity="0.45" />
                  <stop offset="50%" stopColor="#3E6596" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#367954" stopOpacity="0.3" />
                </linearGradient>
                <filter id="radarGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Concentric Guide Web Rings */}
              {levels.map((lvl) => {
                const ringPoints = Array.from({ length: totalAxes }).map((_, i) => {
                  const angle = i * ((2 * Math.PI) / totalAxes) - Math.PI / 2;
                  const r = radius * lvl;
                  const x = center + r * Math.cos(angle);
                  const y = center + r * Math.sin(angle);
                  return `${x.toFixed(1)},${y.toFixed(1)}`;
                }).join(' ');

                return (
                  <polygon
                    key={lvl}
                    points={ringPoints}
                    fill="none"
                    stroke="#D0DFEE"
                    strokeWidth={lvl === 1 ? '1.5' : '1'}
                    strokeDasharray={lvl === 1 ? 'none' : '3 3'}
                  />
                );
              })}

              {/* Radial Spokes from Center */}
              {axes.map((axis, i) => {
                const angle = i * ((2 * Math.PI) / totalAxes) - Math.PI / 2;
                const x = center + radius * Math.cos(angle);
                const y = center + radius * Math.sin(angle);
                return (
                  <line
                    key={axis.id}
                    x1={center}
                    y1={center}
                    x2={x}
                    y2={y}
                    stroke="#D0DFEE"
                    strokeWidth="1"
                  />
                );
              })}

              {/* Data Polygon with Animated Gradient Fill */}
              <motion.polygon
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                points={polygonPoints}
                fill="url(#radarFillGradient)"
                stroke="#6B4C7A"
                strokeWidth="2.5"
                filter="url(#radarGlow)"
              />

              {/* Vertex Interactive Points */}
              {axes.map((axis, i) => {
                const angle = i * ((2 * Math.PI) / totalAxes) - Math.PI / 2;
                const r = (axis.value / 100) * radius;
                const x = center + r * Math.cos(angle);
                const y = center + r * Math.sin(angle);
                const isHovered = hoveredAxis?.id === axis.id;

                // Label positions around outer edge
                const labelR = radius + 22;
                const labelX = center + labelR * Math.cos(angle);
                const labelY = center + labelR * Math.sin(angle);

                return (
                  <g 
                    key={axis.id} 
                    className="cursor-pointer group"
                    onMouseEnter={() => setHoveredAxis(axis)}
                    onMouseLeave={() => setHoveredAxis(null)}
                  >
                    {/* Pulsing ring on hover */}
                    {isHovered && (
                      <circle
                        cx={x}
                        cy={y}
                        r="12"
                        fill="none"
                        stroke="#6B4C7A"
                        strokeWidth="1.5"
                        className="animate-ping opacity-60"
                      />
                    )}

                    {/* Outer vertex dot */}
                    <circle
                      cx={x}
                      cy={y}
                      r={isHovered ? '6.5' : '4.5'}
                      fill="#FFFFFF"
                      stroke={axis.color}
                      strokeWidth={isHovered ? '3' : '2'}
                      className="transition-all duration-200"
                    />

                    {/* Outer Label text */}
                    <text
                      x={labelX}
                      y={labelY + 4}
                      textAnchor={
                        Math.abs(Math.cos(angle)) < 0.2 
                          ? 'middle' 
                          : Math.cos(angle) > 0 
                            ? 'start' 
                            : 'end'
                      }
                      className={`text-[10px] sm:text-[11px] font-sans font-semibold transition-colors duration-200 ${
                        isHovered ? 'fill-[#6B4C7A] font-bold' : 'fill-[#4B3557]'
                      }`}
                    >
                      {isEn ? axis.labelEn : axis.labelEs}
                    </text>
                  </g>
                );
              })}

              {/* Center point */}
              <circle cx={center} cy={center} r="3" fill="#6B4C7A" opacity="0.6" />
            </svg>
          </div>

          <span className="text-[11px] text-[#6F6A73] mt-2 italic">
            {isEn ? 'Hover over vertices or cards to explore each engineering axis' : 'Pasa el cursor sobre los vértices para explorar cada disciplina'}
          </span>
        </div>

        {/* Right Column: Dynamic Detail Cards */}
        <div className="lg:col-span-6 space-y-3">
          {axes.map((axis) => {
            const Icon = axis.icon;
            const isSelected = hoveredAxis?.id === axis.id;

            return (
              <motion.div
                key={axis.id}
                onMouseEnter={() => setHoveredAxis(axis)}
                onMouseLeave={() => setHoveredAxis(null)}
                whileHover={{ scale: 1.02, x: 3 }}
                transition={{ duration: 0.2 }}
                className={`p-3.5 rounded-2xl border transition-all duration-200 cursor-pointer ${
                  isSelected 
                    ? 'bg-white border-[#6B4C7A] shadow-md shadow-[#6B4C7A]/10 ring-1 ring-[#6B4C7A]/20' 
                    : 'bg-white/70 border-[#D9E4F0] hover:border-[#6B4C7A]'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2.5">
                    <div 
                      className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-xs shadow-sm"
                      style={{ backgroundColor: axis.color }}
                    >
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-semibold text-[#1C1A1F]">
                        {isEn ? axis.labelEn : axis.labelEs}
                      </h4>
                      <span className="text-[10px] text-[#6F6A73] font-mono">
                        {axis.technologies}
                      </span>
                    </div>
                  </div>

                  {/* Percentage Metric Pill */}
                  <div className="flex items-center gap-2">
                    <div className="w-12 sm:w-16 h-1.5 sm:h-2 rounded-full bg-[#E5EDF5] overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${axis.value}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: axis.color }}
                      />
                    </div>
                    <span className="text-xs font-mono font-bold text-[#1C1A1F]">
                      {axis.value}%
                    </span>
                  </div>
                </div>

                {isSelected && (
                  <motion.p 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="text-[11px] text-[#6F6A73] pt-1.5 border-t border-[#EAE3EE] mt-1.5 leading-relaxed"
                  >
                    {isEn ? axis.detailEn : axis.detailEs}
                  </motion.p>
                )}
              </motion.div>
            );
          })}
        </div>

      </div>
    </div>
  );
};
