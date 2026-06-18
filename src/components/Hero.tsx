/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import {
  Sparkles,
  ArrowRight,
  TrendingUp,
  Sliders,
  CheckSquare,
  Award,
  Users,
} from 'lucide-react';

interface HeroProps {
  onOpenDiagnostic: () => void;
  onScrollToExplore: () => void;
}

export default function Hero({ onOpenDiagnostic, onScrollToExplore }: HeroProps) {
  return (
    <section id="inicio" className="relative py-20 lg:py-32 bg-white dark:bg-slate-950 overflow-hidden">
      
      {/* Dynamic glow blobs for premium backdrop depth */}
      <div className="absolute top-10 left-10 w-[450px] h-[450px] glow-blob-blue rounded-full blur-3xl pointer-events-none opacity-80" />
      <div className="absolute bottom-20 right-10 w-[450px] h-[450px] glow-blob-purple rounded-full blur-3xl pointer-events-none opacity-80" />
      <div className="absolute top-1/2 right-1/4 w-[350px] h-[350px] glow-blob-turquoise rounded-full blur-3xl pointer-events-none opacity-60" />

      {/* Grid Pattern Background overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* LEFT TEXT CONTAINER */}
        <div className="lg:col-span-7 text-center lg:text-left space-y-6">
          
          {/* Label banner */}
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-50 text-brand-blue border border-blue-200/40 dark:bg-blue-900/10 dark:text-blue-300 dark:border-blue-800/30">
            <Sparkles className="w-4 h-4 text-brand-blue animate-pulse" />
            Transformación Organizacional & SaaS HR
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 dark:text-slate-50 tracking-tight leading-[1.1]">
            Potenciamos personas,{' '}
            <span className="bg-gradient-to-r from-brand-purple via-brand-blue to-brand-turquoise bg-clip-text text-transparent">
              transformamos organizaciones
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-semibold">
            Ayudamos a las empresas a optimizar su talento humano mediante soluciones especializadas, tecnología, análisis de datos y desarrollo organizacional.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <button
              onClick={onOpenDiagnostic}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-extrabold text-xs tracking-wide shadow-xl flex items-center justify-center gap-2 transition-transform hover:scale-[1.02] cursor-pointer"
            >
              Solicitar asesoría
              <ArrowRight className="w-4 h-4 text-brand-turquoise" />
            </button>
            <button
              onClick={onScrollToExplore}
              className="w-full sm:w-auto px-8 py-4 rounded-xl border border-slate-255 dark:border-slate-800 bg-white/40 dark:bg-slate-900/40 backdrop-blur-xs text-slate-700 dark:text-slate-200 font-extrabold text-xs hover:bg-slate-50 dark:hover:bg-slate-800 hover:scale-[1.01] transition-all cursor-pointer"
            >
              Conocer nuestras soluciones
            </button>
          </div>

          <div className="pt-8 border-t border-slate-100 dark:border-slate-800/80">
            {/* Visual key metrics counters */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: '+10 años', sub: 'De Experiencia', icon: <Award className="w-5 h-5 text-brand-purple" /> },
                { label: 'Personalizadas', sub: 'Soluciones', icon: <Sliders className="w-5 h-5 text-brand-blue" /> },
                { label: 'Analítica', sub: 'Gestión con Datos', icon: <TrendingUp className="w-5 h-5 text-brand-turquoise" /> },
                { label: 'Cumplimiento', sub: 'Laboral / Legal', icon: <CheckSquare className="w-5 h-5 text-brand-green" /> },
              ].map((m, idx) => (
                <div key={idx} className="space-y-1.5 text-left bg-slate-50/40 dark:bg-slate-900/20 p-3 rounded-xl border border-slate-150 dark:border-slate-850/60 transition-colors">
                  <div className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-850 shadow-xs w-9 h-9 flex items-center justify-center">
                    {m.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-slate-900 dark:text-slate-200">{m.label}</h4>
                    <p className="text-[10px] text-slate-500 uppercase tracking-widest">{m.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* RIGHT ILLUSTRATION SIDE */}
        <div className="lg:col-span-5 relative flex justify-center">
          
          {/* Main Visual Board */}
          <div className="relative w-full max-w-[400px] aspect-square rounded-3xl border border-slate-200/60 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-2xl flex flex-col justify-between overflow-hidden">
            
            {/* Ambient vector details */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-teal-500/10 to-transparent rounded-tr-3xl" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-brand-purple/10 to-transparent rounded-bl-3xl" />

            <div className="flex justify-between items-center z-10">
              <span className="text-[10px] font-mono font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                Talentria Analytics
              </span>
              <span className="px-2 py-1 bg-brand-green/10 text-brand-green text-[10px] font-bold rounded-lg flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-ping" />
                Live Hub
              </span>
            </div>

            {/* Simulated interactive dashboard view - Central Graphic element */}
            <div className="my-auto relative flex items-center justify-center h-48">
              
              {/* Spinning background circles */}
              <div className="absolute w-36 h-36 rounded-full border border-dashed border-slate-200/80 dark:border-slate-800 animate-[spin_50s_linear_infinite]" />
              <div className="absolute w-44 h-44 rounded-full border border-slate-100 dark:border-slate-800/40" />

              {/* Ascending arrow trail using SVG */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" fill="none">
                <path
                  d="M15 85 C 30 75, 40 40, 75 25"
                  stroke="url(#hero-gradient-path)"
                  strokeWidth="3"
                  strokeDasharray="4 4"
                />
                
                <defs>
                  <linearGradient id="hero-gradient-path" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#7000ff" />
                    <stop offset="50%" stopColor="#0055ff" />
                    <stop offset="100%" stopColor="#00e676" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Floating Node A: Person Node */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-10 left-10 p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-lg flex items-center gap-2"
              >
                <div className="p-1.5 bg-blue-500 rounded-lg text-white">
                  <Users className="w-4 h-4" />
                </div>
                <div className="text-left leading-none">
                  <span className="text-[9px] font-extrabold text-slate-800 dark:text-slate-100 block">Talentos</span>
                  <span className="text-[8px] text-brand-green font-mono font-bold">+25% Productividad</span>
                </div>
              </motion.div>

              {/* Floating Node B: Growth Node */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute bottom-10 right-6 p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-lg flex items-center gap-2"
              >
                <div className="p-1.5 bg-brand-purple rounded-lg text-white">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div className="text-left leading-none">
                  <span className="text-[9px] font-extrabold text-slate-800 dark:text-slate-100 block">Evolución</span>
                  <span className="text-[8px] text-slate-400 font-bold">Modelos 360 Activos</span>
                </div>
              </motion.div>

              {/* Dynamic shining brand logo representation in the core */}
              <div className="relative w-20 h-20 bg-gradient-to-tr from-brand-purple to-brand-turquoise rounded-2xl p-0.5 flex items-center justify-center shadow-lg shadow-blue-500/10">
                <div className="w-full h-full bg-slate-900 rounded-2xl flex items-center justify-center">
                  <svg className="w-12 h-12" viewBox="0 0 100 100" fill="none">
                    <path
                      d="M 37 78 C 39 70, 42 53, 50 43 L 42 41 L 72 32 L 67 59 L 61 54 C 52 60, 43 72, 37 78 Z"
                      fill="url(#center-gradient-glow)"
                    />
                    <circle cx="44" cy="28" r="8" fill="#00e676" />
                    
                    <defs>
                      <linearGradient id="center-gradient-glow" x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#7000ff" />
                        <stop offset="50%" stopColor="#0055ff" />
                        <stop offset="100%" stopColor="#00f2fe" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>

            </div>

            {/* Bottom mini scoreboard */}
            <div className="p-3 bg-slate-50 dark:bg-slate-950 border border-slate-150 dark:border-slate-805 rounded-xl text-left flex justify-between items-center z-10">
              <div>
                <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest block">Satisfacción Promedio</span>
                <span className="text-sm font-black font-mono text-slate-900 dark:text-slate-100 block mt-0.5">95.2% General</span>
              </div>
              <span className="text-[9px] font-extrabold text-brand-green bg-emerald-500/10 px-2 py-0.5 rounded">
                +4.1 pt anual
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
