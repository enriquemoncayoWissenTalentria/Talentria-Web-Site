/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import {
  Compass,
  Layers,
  Cpu,
  Bookmark,
  ShieldCheck,
  UserCheck,
} from 'lucide-react';

export default function WhyUs() {
  const cards = [
    {
      title: 'Enfoque estratégico',
      desc: 'No solo ejecutamos procesos; generamos resultados que impactan directamente en el EBITDA corporativo.',
      icon: <Compass className="w-6 h-6 text-brand-purple" />,
      color: 'border-brand-purple/20 bg-brand-purple/[0.02]',
    },
    {
      title: 'Soluciones integrales',
      desc: 'Todo el ciclo de talento humano unificado en un solo lugar, eliminando fricciones operativas.',
      icon: <Layers className="w-6 h-6 text-brand-blue" />,
      color: 'border-brand-blue/20 bg-brand-blue/[0.02]',
    },
    {
      title: 'Tecnología aplicada',
      desc: 'Automatización ágil y analítica avanzada de datos para respaldar tus tomas de decisiones gerenciales.',
      icon: <Cpu className="w-6 h-6 text-brand-turquoise" />,
      color: 'border-brand-turquoise/20 bg-brand-turquoise/[0.02]',
    },
    {
      title: 'Experiencia comprobada',
      desc: 'Más de una década acompañando a organizaciones líderes del país en su evolución cultural.',
      icon: <Bookmark className="w-6 h-6 text-yellow-500" />,
      color: 'border-yellow-500/20 bg-yellow-500/[0.01]',
    },
    {
      title: 'Cumplimiento normativo',
      desc: 'Procesos estrictamente alineados a la legislación laboral ecuatoriana (IESS, SUT, Ministerio del Trabajo).',
      icon: <ShieldCheck className="w-6 h-6 text-brand-green" />,
      color: 'border-brand-green/20 bg-brand-green/[0.02]',
    },
    {
      title: 'Acompañamiento personalizado',
      desc: 'No existen recetas universales. Cada empresa recibe una solución adaptada a su madurez humana.',
      icon: <UserCheck className="w-6 h-6 text-rose-500" />,
      color: 'border-rose-500/20 bg-rose-500/[0.02]',
    },
  ];

  return (
    <section id="nosotros" className="py-24 bg-slate-50 dark:bg-slate-900 relative overflow-hidden">
      {/* Decorative backdrop elements */}
      <div className="absolute top-1/2 left-0 w-80 h-80 glow-blob-blue rounded-full blur-3xl pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-blue mb-3">
            Diferenciador Talentria
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-slate-100 tracking-tight">
            ¿Por qué <span className="bg-gradient-to-r from-brand-purple via-brand-blue to-brand-green bg-clip-text text-transparent">TALENTRIA</span>?
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-350 leading-relaxed">
            Fusionamos la exactitud técnica de sistemas digitales avanzados con la sensibilidad humana que tracciona la retención y la transformación organizacional.
          </p>
        </div>

        {/* 3x2 Bento Grid / Card Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ duration: 0.25 }}
              className={`p-6 md:p-8 rounded-2xl border bg-white dark:bg-slate-850 shadow-md shadow-slate-100 dark:shadow-none flex flex-col justify-between h-64 gap-6 ${card.color}`}
            >
              {/* Icon Capsule */}
              <div className="p-3 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm w-fit rounded-xl">
                {card.icon}
              </div>

              {/* Text content details */}
              <div className="space-y-2 text-left">
                <h3 className="text-lg font-extrabold text-slate-950 dark:text-slate-50">
                  {card.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-semibold">
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
