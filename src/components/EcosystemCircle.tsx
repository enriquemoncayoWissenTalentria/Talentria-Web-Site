/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  DollarSign,
  UserCheck,
  Flame,
  Activity,
  GraduationCap,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import { EcosystemNode } from '../types';

interface EcosystemCircleProps {
  onSelectSolution: (id: string) => void;
}

const ECOSYSTEM_ITEMS: (EcosystemNode & { icon: React.ReactComponentElement<any>, bg: string, accent: string })[] = [
  {
    id: 'nomina',
    title: 'Gestión de Nómina',
    shortDesc: 'Eficiencia, precisión y bienestar para tu equipo.',
    description: 'Administración ágil y segura que garantiza el exacto cálculo de remuneraciones, décimos, IESS, SUT, liquidaciones y auditorías, adaptados al marco laboral ecuatoriano.',
    color: 'from-brand-purple to-brand-blue',
    accent: '#7000ff',
    angle: 0,
    icon: <DollarSign className="w-6 h-6 text-white" />,
    bg: 'bg-indigo-500'
  },
  {
    id: 'recruit',
    title: 'Reclutamiento y Selección',
    shortDesc: 'Atracción y evaluación de talento idóneo.',
    description: 'Encontramos a los profesionales y especialistas que tu organización requiere para traccionar el crecimiento, mediante evaluaciones estratégicas, psicométricas y técnicas.',
    color: 'from-brand-blue to-cyan-500',
    accent: '#0055ff',
    angle: 60,
    icon: <UserCheck className="w-6 h-6 text-white" />,
    bg: 'bg-blue-600'
  },
  {
    id: 'clima',
    title: 'Clima Check',
    shortDesc: 'Modelo avanzado de clima laboral.',
    description: 'Mide con precisión la satisfacción, engagement y cultura interna de tu equipo de trabajo para convertirlos en palancas reales de retención y productividad.',
    color: 'from-brand-turquoise to-cyan-600',
    accent: '#00f2fe',
    angle: 120,
    icon: <Flame className="w-6 h-6 text-white" />,
    bg: 'bg-cyan-500'
  },
  {
    id: '360',
    title: 'Talentria 360',
    shortDesc: 'Evaluación de desempeño y potencial.',
    description: 'Plataforma interactiva para evaluar habilidades, performance de objetivos, y potencial de liderazgo para construir mapas de talento robustos y planes Nine-Box.',
    color: 'from-teal-400 to-brand-green',
    accent: '#00e676',
    angle: 180,
    icon: <Activity className="w-6 h-6 text-white" />,
    bg: 'bg-teal-500'
  },
  {
    id: 'formacion',
    title: 'Formación Corporativa',
    shortDesc: 'Capacitación alineada a objetivos empresariales.',
    description: 'Talleres estratégicos y prácticos en Excel Avanzado, Power BI, Inteligencia Artificial, Liderazgo, Servicio y KPI de Talento Humano que redefinen la competitividad.',
    color: 'from-brand-green to-lime-500',
    accent: '#00e676',
    angle: 240,
    icon: <GraduationCap className="w-6 h-6 text-white" />,
    bg: 'bg-emerald-500'
  },
  {
    id: 'ser',
    title: 'Programa SER',
    shortDesc: 'Cultura, equidad laboral y ambientes inclusivos.',
    description: 'Metodología patentada para cimentar la igualdad de género, conciliación familiar, prevención del acoso laboral y liderazgo estratégico con enfoque de diversidad humana.',
    color: 'from-rose-500 to-brand-purple',
    accent: '#7000ff',
    angle: 300,
    icon: <Sparkles className="w-6 h-6 text-white" />,
    bg: 'bg-violet-600'
  },
];

export default function EcosystemCircle({ onSelectSolution }: EcosystemCircleProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const activeNode = ECOSYSTEM_ITEMS[activeIndex];

  return (
    <section className="py-24 bg-slate-50/50 dark:bg-slate-900/40 relative overflow-hidden">
      {/* Decorative gradient backgrounds */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 glow-blob-blue rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 glow-blob-purple rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-blue mb-3">
            Plataforma Unificada
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-slate-100 tracking-tight leading-tight">
            Ecosistema <span className="bg-gradient-to-r from-brand-purple via-brand-blue to-brand-turquoise bg-clip-text text-transparent">Talentria</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            Cada eslabón conecta tecnología y desarrollo de personas para construir organizaciones transformadoras libres de silos.
          </p>
        </div>

        {/* Outer Flex Container for Responsive Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT AREA: Interactive Circle (Desktop) or Horizontal List Grid (Mobile) */}
          <div className="lg:col-span-7 flex justify-center items-center h-[460px] md:h-[500px] relative">
            
            {/* Desktop Circular Ring Visualization (Hidden on Mobile) */}
            <div className="hidden md:flex relative w-[400px] h-[400px] items-center justify-center">
              
              {/* Outer Circular Guide Line */}
              <div className="absolute w-[320px] h-[320px] rounded-full border-2 border-slate-200/80 dark:border-slate-800/80" />
              <div className="absolute w-[320px] h-[320px] rounded-full border border-dashed border-brand-blue/30 animate-[spin_100s_linear_infinite]" />
              
              {/* Center Talentria Pulsing Logo Capsule */}
              <div className="absolute w-40 h-40 bg-white dark:bg-slate-900 rounded-full shadow-2xl border border-slate-100 dark:border-slate-800 flex flex-col items-center justify-center p-4 z-20">
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="flex items-center justify-center flex-col text-center"
                >
                  <svg
                    className="w-16 h-16"
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <linearGradient id="center-grad" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#7000ff" />
                      <stop offset="50%" stopColor="#0055ff" />
                      <stop offset="100%" stopColor="#00e676" />
                    </linearGradient>
                    <path
                      d="M37 78 C39 70, 42 53, 50 43 L 42 41 L 72 32 L 67 59 L 61 54 C 52 60, 43 72, 37 78 Z"
                      fill="url(#center-grad)"
                    />
                    <circle cx="44" cy="28" r="8" fill="#0055ff" />
                  </svg>
                  <span className="text-xs font-bold text-slate-800 dark:text-slate-200 tracking-widest mt-1">
                    TALENTRIA
                  </span>
                </motion.div>
              </div>

              {/* Six Satellite Nodes orbiting around central core */}
              {ECOSYSTEM_ITEMS.map((item, index) => {
                const angleRad = (item.angle * Math.PI) / 180;
                // Calculate position relative to center of a 400x400 container
                const radius = 160; // radius from center
                const x = radius * Math.cos(angleRad);
                const y = radius * Math.sin(angleRad);
                const isSelected = activeIndex === index;

                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveIndex(index)}
                    className="absolute cursor-pointer focus:outline-none transition-all duration-300 group z-30"
                    style={{
                      transform: `translate(${x}px, ${y}px)`,
                    }}
                  >
                    {/* Ring highlight element */}
                    <div className="relative flex items-center justify-center">
                      <motion.div
                        className={`absolute -inset-4 rounded-full bg-gradient-to-r ${item.color} filter blur-sm`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ 
                          opacity: isSelected ? 0.4 : 0, 
                          scale: isSelected ? [1, 1.2, 1] : 0.8 
                        }}
                        transition={{ repeat: isSelected ? Infinity : 0, duration: 2.5 }}
                      />
                      
                      {/* Active Ring Outer Border */}
                      <div
                        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 ${
                          isSelected 
                            ? 'scale-110 bg-gradient-to-r ' + item.color + ' ring-4 ring-white dark:ring-slate-900 text-white' 
                            : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:scale-105'
                        }`}
                      >
                        {/* Replace the generic SVG icon wrapper color based on selected state */}
                        <div className={isSelected ? 'text-white' : 'text-slate-700 dark:text-slate-300'}>
                          {React.cloneElement(item.icon, {
                            className: `w-5 h-5 ${isSelected ? 'text-white' : 'text-slate-600 dark:text-slate-300 group-hover:text-brand-blue group-hover:scale-110 transition-transform'}`
                          })}
                        </div>
                      </div>

                      {/* Tooltip text floating above or below node based on coordinates */}
                      <span className="absolute -bottom-8 whitespace-nowrap bg-slate-900 text-white text-[10px] px-2 py-1 rounded shadow-md font-semibold opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none tracking-wide">
                        {item.title}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Mobile Grid Layout Representation (Visible on Mobile only) */}
            <div className="md:hidden grid grid-cols-2 gap-4 w-full px-2">
              {ECOSYSTEM_ITEMS.map((item, index) => {
                const isSelected = activeIndex === index;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveIndex(index)}
                    className={`p-4 rounded-2xl text-left transition-all duration-300 flex flex-col justify-between h-32 border ${
                      isSelected
                        ? `bg-gradient-to-br ${item.color} border-transparent text-white shadow-xl scale-[1.02]`
                        : 'bg-white dark:bg-slate-800 border-slate-200/70 dark:border-slate-700/70 text-slate-800 dark:text-slate-200'
                    }`}
                  >
                    <div className={`p-2 rounded-xl w-fit ${isSelected ? 'bg-white/20' : 'bg-slate-100 dark:bg-slate-700'}`}>
                      {React.cloneElement(item.icon, { 
                        className: `w-5 h-5 ${isSelected ? 'text-white' : 'text-slate-500 dark:text-slate-400'}` 
                      })}
                    </div>
                    <div>
                      <h4 className="font-bold text-xs uppercase tracking-wide truncate max-w-full">
                        {item.title}
                      </h4>
                      <p className={`text-[10px] line-clamp-1 mt-1 ${isSelected ? 'text-slate-100' : 'text-slate-500'}`}>
                        {item.shortDesc}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

          </div>

          {/* RIGHT AREA: Expanded Details Console */}
          <div className="lg:col-span-5 h-[360px] md:h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeNode.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="h-full flex flex-col justify-center bg-white dark:bg-slate-800/80 p-8 rounded-3xl border border-slate-150 dark:border-slate-750 shadow-xl relative overflow-hidden"
              >
                {/* Backdrop Accent Pill */}
                <span className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${activeNode.color} opacity-5 rounded-bl-[100px]`} />

                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-2xl bg-gradient-to-r ${activeNode.color} text-white shadow-md`}>
                    {React.cloneElement(activeNode.icon, { className: 'w-6 h-6' })}
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400">
                      Módulo Integrado
                    </span>
                    <h3 className="text-2xl font-black text-slate-900 dark:text-slate-100">
                      {activeNode.title}
                    </h3>
                  </div>
                </div>

                <p className="text-sm font-semibold text-brand-blue tracking-wide mb-3">
                  {activeNode.shortDesc}
                </p>

                <p className="text-slate-600 dark:text-slate-350 text-sm leading-relaxed mb-6">
                  {activeNode.description}
                </p>

                <div className="mt-auto flex flex-wrap gap-4 items-center">
                  <button
                    onClick={() => onSelectSolution(activeNode.id)}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold text-xs hover:bg-brand-blue dark:hover:bg-brand-blue dark:hover:text-white transition-all cursor-pointer shadow-md shadow-slate-200 dark:shadow-none"
                  >
                    Ver detalles del módulo
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  
                  {/* Subtle checklist badge for ecuador compliance or enterprise grade */}
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-700/60 text-slate-600 dark:text-slate-400 text-[10px] font-semibold border border-slate-200/50 dark:border-slate-600/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-ping" />
                    Enterprise Ready
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
