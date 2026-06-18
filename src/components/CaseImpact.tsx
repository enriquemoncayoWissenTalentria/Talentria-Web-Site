/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Smile, GraduationCap, UserCheck, ShieldCheck, ArrowUpRight } from 'lucide-react';

export default function CaseImpact() {
  const metrics = [
    {
      value: '95%',
      label: 'Satisfacción de Clientes',
      sub: 'Auditorías anuales',
      icon: <Smile className="w-5 h-5 text-brand-blue" />,
      color: 'text-brand-blue'
    },
    {
      value: '500+',
      label: 'Profesionales Capacitados',
      sub: 'Excel, BI, IA, Liderazgo',
      icon: <GraduationCap className="w-5 h-5 text-brand-purple" />,
      color: 'text-brand-purple'
    },
    {
      value: '100+',
      label: 'Procesos de Selección',
      sub: 'Talentos clave posicionados',
      icon: <UserCheck className="w-5 h-5 text-brand-green" />,
      color: 'text-brand-green'
    },
    {
      value: 'Miles',
      label: 'Registros de Nómina',
      sub: 'Procesados con Cero Errores',
      icon: <ShieldCheck className="w-5 h-5 text-rose-500" />,
      color: 'text-rose-500'
    },
  ];

  return (
    <section className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden">
      
      {/* Glow gradient backdrops */}
      <div className="absolute right-0 bottom-0 w-96 h-96 glow-blob-purple rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Text Block */}
          <div className="space-y-6 text-left">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-brand-blue bg-blue-50 dark:bg-blue-900/10 dark:text-blue-300 px-3 py-1 rounded-full w-fit">
              Trayectoria de Valor
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-slate-100 tracking-tight leading-tight">
              Impacto que transforma la gestión empresarial
            </h2>
            <p className="text-slate-600 dark:text-slate-350 text-sm leading-relaxed font-semibold">
              Cada número representa organizaciones fortalecidas mediante programas de desarrollo corporativo, nóminas seguras y liderazgos empáticos alineados para redefinir el futuro.
            </p>

            {/* Minor list items */}
            <div className="space-y-3 pt-2">
              {[
                'Casos de éxito documentados en banca, logística y retail nacional.',
                'Sistemas auditables con resultados tangibles en clima y rotación controlada.',
                'Firma estratégica asociada a la transformación ágil en recursos humanos.'
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300 font-medium">
                  <span className="flex h-5 w-5 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 font-bold text-[10px] items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Metrics Grid Display */}
          <div className="grid grid-cols-2 gap-4">
            {metrics.map((m, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                className="p-6 rounded-2xl border border-slate-205 dark:border-slate-805 bg-slate-50/50 dark:bg-slate-900/35 hover:bg-white dark:hover:bg-slate-900 shadow-sm flex flex-col justify-between text-left h-44 group transition-all"
              >
                <div className="flex justify-between items-center">
                  <div className="p-2.5 rounded-xl bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-850 shadow-xs">
                    {m.icon}
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-300 group-hover:text-slate-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>

                <div className="space-y-1 mt-auto">
                  <h3 className={`text-4xl font-extrabold tracking-tight font-mono ${m.color}`}>
                    {m.value}
                  </h3>
                  <div>
                    <h4 className="text-xs font-black text-slate-900 dark:text-slate-100 leading-none">
                      {m.label}
                    </h4>
                    <p className="text-[10px] text-slate-450 mt-1">
                      {m.sub}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
