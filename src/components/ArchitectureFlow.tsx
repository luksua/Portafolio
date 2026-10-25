import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { 
  Laptop, 
  Server, 
  Database, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Activity
} from 'lucide-react';

interface ArchitectureNode {
  id: string;
  name: string;
  category: string;
  icon: React.ComponentType<{ className?: string }>;
  techs: string[];
  roleEs: string;
  roleEn: string;
  statusText: string;
  color: string;
  borderColor: string;
  badgeBg: string;
}

export const ArchitectureFlow: React.FC = () => {
  const { i18n } = useTranslation();
  const isEn = (i18n.resolvedLanguage || i18n.language || 'es').toLowerCase().startsWith('en');
  const [selectedNodeId, setSelectedNodeId] = useState<string>('api');

  const nodes: ArchitectureNode[] = [
    {
      id: 'client',
      name: 'Client Layer',
      category: 'Frontend UI',
      icon: Laptop,
      techs: ['Vue.js', 'Blade', 'EditorJS', 'Tailwind CSS'],
      roleEs: 'Editor de contenidos en bloques JSON interactivo con renderizado dinámico y validación de formularios en cliente.',
      roleEn: 'Interactive JSON block content editor with dynamic rendering and client-side form validation.',
      statusText: '200 OK · Responsive',
      color: '#3E6596',
      borderColor: '#B9CFEA',
      badgeBg: '#EDF4FC',
    },
    {
      id: 'gateway',
      name: 'Security & Auth',
      category: 'Middleware Layer',
      icon: ShieldCheck,
      techs: ['Laravel Sanctum', 'Bearer Token', 'CORS Guard'],
      roleEs: 'Protección de endpoints, control de acceso basado en sesiones y tokens criptográficos para peticiones seguras.',
      roleEn: 'Endpoint protection, session-based access control, and cryptographic tokens for secure requests.',
      statusText: 'Auth Verified · 100%',
      color: '#4B3557',
      borderColor: '#D8C6E2',
      badgeBg: '#F5EEF8',
    },
    {
      id: 'api',
      name: 'RESTful Backend API',
      category: 'Core Service Tier',
      icon: Server,
      techs: ['PHP 8.2', 'Laravel 10', 'Eloquent ORM', 'Routing'],
      roleEs: 'Gestión de rutas RESTful, inyección de dependencias, lógica de negocio y transformación limpia de payloads JSON.',
      roleEn: 'RESTful routing, dependency injection, business logic, and clean JSON payload transformation.',
      statusText: 'Active Worker · Fast',
      color: '#8E4453',
      borderColor: '#E8C5CE',
      badgeBg: '#FBF2F4',
    },
    {
      id: 'ai',
      name: 'OpenAI Intelligence',
      category: 'External AI Microservice',
      icon: Sparkles,
      techs: ['OpenAI API', 'GPT-4 Models', 'Prompt Sanitization'],
      roleEs: 'Generación asistida de resúmenes, extracción de palabras clave y clasificación temática inteligente de artículos.',
      roleEn: 'Assisted summary generation, keyword extraction, and intelligent topic classification for articles.',
      statusText: 'Latency: ~420ms · Ready',
      color: '#6B4C7A',
      borderColor: '#D4BFE0',
      badgeBg: '#F4EEF8',
    },
    {
      id: 'db',
      name: 'Relational Database',
      category: 'Persistence Tier',
      icon: Database,
      techs: ['MySQL 8.0', 'Migrations', 'Foreign Keys', 'Indexes'],
      roleEs: 'Esquema relacional normalizado para artículos, usuarios, categorías, auditoría y control de versiones.',
      roleEn: 'Normalized relational schema for articles, users, categories, auditing, and version tracking.',
      statusText: 'Pool Connected · 0 Errors',
      color: '#367954',
      borderColor: '#BDDEC9',
      badgeBg: '#EEF8F2',
    },
  ];

  const selectedNode = nodes.find(n => n.id === selectedNodeId) || nodes[2];

  return (
    <div className="bg-white/90 backdrop-blur-md rounded-3xl border border-[#D6C1E2] p-6 sm:p-8 shadow-sm my-10">
      
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E8DCF0]">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5EDF9] border border-[#D6C1E2] text-[11px] font-semibold tracking-wider text-[#6B4C7A] uppercase mb-1">
            <Activity className="w-3.5 h-3.5 text-[#6B4C7A] animate-pulse" />
            <span>{isEn ? 'System Architecture Diagram' : 'Diagrama Visual de Arquitectura'}</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-serif text-[#1C1A1F] tracking-tight">
            {isEn ? 'Institutional Intranet & AI Integration Flow' : 'Flujo de la Intranet Institucional con IA'}
          </h3>
          <p className="text-xs text-[#6F6A73] mt-1">
            {isEn 
              ? 'Real architecture implemented for Gestión Integral del Riesgo (GIR) with Laravel & OpenAI API.'
              : 'Arquitectura real implementada para Gestión Integral del Riesgo (GIR) con Laravel y OpenAI API.'}
          </p>
        </div>

        {/* Live Architecture Status Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EEF8F2] border border-[#BDDEC9] text-xs font-medium text-[#2D6A48] shadow-sm self-start sm:self-auto">
          <span className="w-2 h-2 rounded-full bg-[#367954] animate-ping" />
          <span>{isEn ? 'Architecture Status: Production Ready' : 'Estado: Arquitectura Funcional'}</span>
        </div>
      </div>

      {/* Visual Interactive Pipeline (Pure Vector & CSS Nodes) */}
      <div className="pt-8 pb-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3.5 relative">
          
          {nodes.map((node, index) => {
            const isSelected = node.id === selectedNodeId;
            return (
              <motion.div
                key={node.id}
                onClick={() => setSelectedNodeId(node.id)}
                whileHover={{ scale: 1.03, y: -3 }}
                whileTap={{ scale: 0.98 }}
                className={`p-4 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between relative group ${
                  isSelected
                    ? 'bg-white shadow-lg ring-2 ring-[#6B4C7A]/20'
                    : 'bg-white/80 hover:bg-white hover:shadow-md'
                }`}
                style={{ borderColor: isSelected ? node.color : node.borderColor }}
              >
                {/* Node Step Counter */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1.5">
                    <span 
                      className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md"
                      style={{ backgroundColor: node.badgeBg, color: node.color }}
                    >
                      0{index + 1}
                    </span>
                    <node.icon className="w-3.5 h-3.5 text-[#6B4C7A]" />
                  </div>
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: node.color }} />
                </div>

                {/* Node Title & Layer */}
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#6F6A73] block mb-0.5 font-medium">
                    {node.category}
                  </span>
                  <h4 className="text-sm font-serif font-bold text-[#1C1A1F] group-hover:text-[#6B4C7A] transition-colors tracking-tight">
                    {node.name}
                  </h4>
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1 mt-3 pt-2.5 border-t border-slate-100">
                  {node.techs.slice(0, 2).map((tech, i) => (
                    <span 
                      key={i} 
                      className="text-[9px] px-1.5 py-0.5 rounded bg-slate-50 border border-slate-200 text-slate-700 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                  {node.techs.length > 2 && (
                    <span className="text-[9px] px-1 py-0.5 text-slate-500 font-mono">
                      +{node.techs.length - 2}
                    </span>
                  )}
                </div>

                {/* Arrow Connector on Desktop */}
                {index < nodes.length - 1 && (
                  <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 w-6 h-6 rounded-full bg-white border border-[#D6C1E2] items-center justify-center text-[#6B4C7A] shadow-xs">
                    <ArrowRight className="w-3 h-3" />
                  </div>
                )}
              </motion.div>
            );
          })}

        </div>
      </div>

      {/* Selected Node Details Display Panel */}
      <motion.div 
        key={selectedNode.id}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className="mt-6 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-[#FAF7FC] to-[#F5EFF8] border border-[#D6C1E2] flex flex-col md:flex-row items-start md:items-center justify-between gap-5"
      >
        <div className="space-y-1.5 max-w-2xl">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: selectedNode.color }} />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#6B4C7A]">
              {selectedNode.category} · {selectedNode.name}
            </span>
          </div>
          <p className="text-xs sm:text-sm text-[#1C1A1F] leading-relaxed">
            {isEn ? selectedNode.roleEn : selectedNode.roleEs}
          </p>
          <div className="flex flex-wrap items-center gap-2 pt-1">
            <span className="text-[11px] font-semibold text-[#6F6A73]">
              {isEn ? 'Technologies:' : 'Tecnologías:'}
            </span>
            {selectedNode.techs.map((tech, i) => (
              <span 
                key={i} 
                className="text-[11px] px-2.5 py-0.5 rounded-full bg-white border border-[#D6C1E2] font-mono text-[#4B3557] font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Live Metrics Stamp */}
        <div className="bg-white px-4 py-3 rounded-xl border border-[#D6C1E2] shadow-xs self-stretch md:self-auto text-right md:text-left shrink-0">
          <span className="text-[10px] text-[#6F6A73] uppercase tracking-wider block font-semibold mb-0.5">
            {isEn ? 'Telemetry Signal' : 'Señal Telemétrica'}
          </span>
          <span className="text-xs font-mono font-bold text-[#367954] flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#367954]" />
            {selectedNode.statusText}
          </span>
        </div>
      </motion.div>

    </div>
  );
};
