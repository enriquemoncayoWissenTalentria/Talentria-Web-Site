/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle, ChevronRight, ChevronLeft, Award, Flame, Calculator, Sparkles, GraduationCap } from 'lucide-react';
import { Lead } from '../types';

interface DiagnosticModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSaveLead: (lead: Omit<Lead, 'id' | 'createdAt'>) => void;
}

export default function DiagnosticModal({ isOpen, onClose, onSaveLead }: DiagnosticModalProps) {
  const [step, setStep] = useState<number>(1);
  const [answers, setAnswers] = useState({
    size: '',
    painpoint: '',
    currentTool: '',
    name: '',
    company: '',
    email: '',
    phone: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);

  if (!isOpen) return null;

  const handleNext = () => {
    if (step === 1 && !answers.size) {
      setError('Por favor, selecciona una opción para continuar.');
      return;
    }
    if (step === 2 && !answers.painpoint) {
      setError('Por favor, selecciona tu prioridad principal.');
      return;
    }
    if (step === 3 && !answers.currentTool) {
      setError('Por favor, selecciona tu herramienta actual.');
      return;
    }
    setError('');
    setStep(prev => prev + 1);
  };

  const handlePrev = () => {
    setError('');
    setStep(prev => Math.max(1, prev - 1));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!answers.name || !answers.company || !answers.email || !answers.phone) {
      setError('Por favor, completa todos los campos de contacto.');
      return;
    }
    setError('');
    setLoading(true);

    // Simulate diagnostic engine analysis
    setTimeout(() => {
      setLoading(false);
      setShowResult(true);
      onSaveLead({
        name: answers.name,
        company: answers.company,
        role: 'Solicitante Diagnóstico',
        email: answers.email,
        phone: answers.phone,
        message: `RESULTADOS DEL DIAGNÓSTICO EN VIVO:
• Tamaño Organización: ${answers.size}
• Fricción Principal: ${answers.painpoint}
• Gestión Actual: ${answers.currentTool}`,
        type: 'diagnostic'
      });
    }, 1500);
  };

  const resetForm = () => {
    setStep(1);
    setAnswers({
      size: '',
      painpoint: '',
      currentTool: '',
      name: '',
      company: '',
      email: '',
      phone: '',
    });
    setError('');
    setShowResult(false);
  };

  // Logic to determine recommended solution
  const getRecommendation = () => {
    const pain = answers.painpoint;
    if (pain === 'nomina') {
      return {
        title: 'Gestión de Nómina Estratégica',
        desc: 'Tu organización de rápido impacto se beneficiará al externalizar la nómina física y automatizar el IESS/SUT para mitigar pasivos antes de multas de ley.',
        icon: <Calculator className="w-8 h-8 text-brand-purple" />,
        badge: 'Cumplimiento Laboral',
      };
    } else if (pain === 'desempeno') {
      return {
        title: 'Talentria 360 & Nine-Box',
        desc: 'Te recomendamos estructurar un diagnóstico por competencias transversales para identificar líderes y construir una matriz de calibración clara.',
        icon: <Award className="w-8 h-8 text-brand-blue" />,
        badge: 'Desarrollo Estratégico',
      };
    } else if (pain === 'clima') {
      return {
        title: 'Clima Check + Plan de Intervención',
        desc: 'Recomendamos activar nuestra encuesta confidencial Clima Check. Mide la percepción general y diseña planes correctivos inmediatos.',
        icon: <Flame className="w-8 h-8 text-cyan-500" />,
        badge: 'Cultura Laboral',
      };
    } else if (pain === 'ser') {
      return {
        title: 'Programa SER (Equidad & Inclusión)',
        desc: 'Integrar talleres certificados de igualdad de género, prevención de acoso y conciliación para blindar la cultura interna y cumplir con directrices ministeriales.',
        icon: <Sparkles className="w-8 h-8 text-rose-500" />,
        badge: 'Sostenibilidad Humana',
      };
    } else {
      return {
        title: 'Formación Corporativa In-House',
        desc: 'Eleva el performance técnico de tus equipos con módulos prácticos personalizados de Excel Avanzado, Power BI o Inteligencia Artificial Aplicada.',
        icon: <GraduationCap className="w-8 h-8 text-brand-green" />,
        badge: 'Habilidades del Futuro',
      };
    }
  };

  const rec = getRecommendation();

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="relative bg-white dark:bg-slate-900 rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl border border-slate-205 dark:border-slate-800"
      >
        {/* Header decoration */}
        <div className="h-1.5 w-full bg-gradient-to-r from-brand-purple via-brand-blue to-brand-green" />

        <button
          onClick={() => { resetForm(); onClose(); }}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-250 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 md:p-8">
          
          <AnimatePresence mode="wait">
            {!showResult ? (
              <div key="form">
                
                {/* Upper progress indicators */}
                <div className="flex items-center gap-1.5 mb-8">
                  {[1, 2, 3, 4].map((num) => (
                    <div
                      key={num}
                      className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                        step >= num ? 'bg-brand-blue' : 'bg-slate-100 dark:bg-slate-800'
                      }`}
                    />
                  ))}
                </div>

                {/* STEP 1: SIZE */}
                {step === 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                  >
                    <div>
                      <span className="text-[10px] font-mono font-bold tracking-widest text-brand-blue uppercase">Paso 1 de 4</span>
                      <h3 className="text-xl md:text-2xl font-black text-slate-900 dark:text-slate-100 mt-1">
                        ¿Cuál es el tamaño actual de tu organización?
                      </h3>
                      <p className="text-xs text-slate-400">Selecciona el rango de colaboradores contratados hoy.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {[
                        { val: '1-20', label: '1 a 20 colaboradores', code: 'Pequeña' },
                        { val: '21-100', label: '21 a 100 colaboradores', code: 'Mediana incipiente' },
                        { val: '101-500', label: '101 a 500 colaboradores', code: 'Mediana consolidada' },
                        { val: '500+', label: 'Más de 500 colaboradores', code: 'Gran corporación' },
                      ].map((item) => (
                        <button
                          key={item.val}
                          type="button"
                          onClick={() => { setAnswers(prev => ({ ...prev, size: item.val })); setError(''); }}
                          className={`p-4 rounded-xl text-left border cursor-pointer transition-all ${
                            answers.size === item.val
                              ? 'border-brand-blue bg-blue-50/20 dark:bg-blue-900/10 text-brand-blue font-bold ring-2 ring-brand-blue/30'
                              : 'border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50'
                          }`}
                        >
                          <span className="block text-xs font-bold">{item.label}</span>
                          <span className="text-[10px] text-slate-450 uppercase">{item.code}</span>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* STEP 2: PAINPOINT */}
                {step === 2 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                  >
                    <div>
                      <span className="text-[10px] font-mono font-bold tracking-widest text-brand-blue uppercase">Paso 2 de 4</span>
                      <h3 className="text-xl md:text-2xl font-black text-slate-900 dark:text-slate-100 mt-1">
                        ¿Cuál es tu prioridad crítica de Talento Humano?
                      </h3>
                      <p className="text-xs text-slate-400">¿Qué desafío requiere atención prioritaria en tu negocio?</p>
                    </div>

                    <div className="grid grid-cols-1 gap-2">
                      {[
                        { val: 'nomina', label: 'Automatizar Nómina / Reducir costos y errores de cálculo' },
                        { val: 'desempeno', label: 'Medir el Desempeño humano, KPIs y calibrar potencial' },
                        { val: 'clima', label: 'Medir y mejorar la motivación del Clima Organizacional' },
                        { val: 'ser', label: 'Fortalecer Cultura y cumplimiento de políticas de Equidad / SER' },
                        { val: 'capacitacion', label: 'Capacitación del equipo en habilidades técnicas (Excel, BI, IA)' },
                      ].map((item) => (
                        <button
                          key={item.val}
                          type="button"
                          onClick={() => { setAnswers(prev => ({ ...prev, painpoint: item.val })); setError(''); }}
                          className={`p-3.5 rounded-xl text-left border cursor-pointer transition-all flex items-center justify-between ${
                            answers.painpoint === item.val
                              ? 'border-brand-blue bg-blue-50/20 dark:bg-blue-900/10 text-brand-blue font-bold'
                              : 'border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50'
                          }`}
                        >
                          <span className="text-xs font-semibold">{item.label}</span>
                          <ChevronRight className="w-4 h-4 text-slate-400" />
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* STEP 3: CURRENT TOOL */}
                {step === 3 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                  >
                    <div>
                      <span className="text-[10px] font-mono font-bold tracking-widest text-brand-blue uppercase">Paso 3 de 4</span>
                      <h3 className="text-xl md:text-2xl font-black text-slate-900 dark:text-slate-100 mt-1">
                        ¿Cómo gestionan el talento humano actualmente?
                      </h3>
                      <p className="text-xs text-slate-400">¿Qué herramientas tienen activas en la empresa?</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {[
                        { val: 'excel', label: 'Excel Manual', subtitle: 'Hojas de cálculo dispersas' },
                        { val: 'parcial', label: 'Sistema Parcial', subtitle: 'Software básico' },
                        { val: 'nada', label: 'Ninguna', subtitle: 'Sin procesos formalizados' },
                      ].map((item) => (
                        <button
                          key={item.val}
                          type="button"
                          onClick={() => { setAnswers(prev => ({ ...prev, currentTool: item.val })); setError(''); }}
                          className={`p-4 rounded-xl text-center border cursor-pointer transition-all flex flex-col items-center justify-center ${
                            answers.currentTool === item.val
                              ? 'border-brand-blue bg-blue-50/20 dark:bg-blue-900/10 text-brand-blue font-bold ring-2 ring-brand-blue/30'
                              : 'border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50'
                          }`}
                        >
                          <span className="text-xs font-bold">{item.label}</span>
                          <span className="text-[10px] mt-1 text-slate-400 leading-none">{item.subtitle}</span>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* STEP 4: CONTACT DATA */}
                {step === 4 && (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <span className="text-[10px] font-mono font-bold tracking-widest text-brand-blue uppercase">Paso Final</span>
                      <h3 className="text-xl md:text-2xl font-black text-slate-900 dark:text-slate-100 mt-1">
                        ¿A dónde enviamos tu diagnóstico de madurez?
                      </h3>
                      <p className="text-xs text-slate-400">Recibe una propuesta estratégica personalizada sin costos.</p>
                    </div>

                    <div className="space-y-3">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <input
                          type="text"
                          placeholder="Tu Nombre Completo *"
                          required
                          value={answers.name}
                          onChange={(e) => setAnswers(prev => ({ ...prev, name: e.target.value }))}
                          className="w-full px-4 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-850 dark:bg-slate-950 dark:text-slate-300 focus:border-brand-blue focus:outline-none"
                        />
                        <input
                          type="text"
                          placeholder="Nombre de la Empresa *"
                          required
                          value={answers.company}
                          onChange={(e) => setAnswers(prev => ({ ...prev, company: e.target.value }))}
                          className="w-full px-4 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-855 dark:bg-slate-950 dark:text-slate-300 focus:border-brand-blue focus:outline-none"
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <input
                          type="email"
                          placeholder="Correo Corporativo *"
                          required
                          value={answers.email}
                          onChange={(e) => setAnswers(prev => ({ ...prev, email: e.target.value }))}
                          className="w-full px-4 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-855 dark:bg-slate-950 dark:text-slate-300 focus:border-brand-blue focus:outline-none"
                        />
                        <input
                          type="tel"
                          placeholder="WhatsApp de Contacto *"
                          required
                          value={answers.phone}
                          onChange={(e) => setAnswers(prev => ({ ...prev, phone: e.target.value }))}
                          className="w-full px-4 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-855 dark:bg-slate-950 dark:text-slate-300 focus:border-brand-blue focus:outline-none"
                        />
                      </div>
                    </div>
                  </form>
                )}

                {/* Navigation Buttons */}
                <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={handlePrev}
                      className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-slate-550 dark:text-slate-400 hover:text-slate-800 cursor-pointer"
                    >
                      <ChevronLeft className="w-4 h-4" /> Anterior
                    </button>
                  ) : (
                    <div />
                  )}

                  {error && <span className="text-red-500 font-semibold text-[11px] block">{error}</span>}

                  {step < 4 ? (
                    <button
                      type="button"
                      onClick={handleNext}
                      className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-slate-900 border border-transparent dark:bg-white text-white dark:text-slate-900 font-extrabold text-xs cursor-pointer shadow hover:scale-[1.01]"
                    >
                      Siguiente <ChevronRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      type="button"
                      disabled={loading}
                      onClick={handleSubmit}
                      className="flex items-center justify-center gap-1.5 px-6 py-2.5 rounded-xl bg-brand-blue border border-transparent text-white font-extrabold text-xs cursor-pointer shadow hover:scale-[1.01] min-w-36 disabled:opacity-55"
                    >
                      {loading ? 'Calculando...' : 'Obtener Diagnóstico'}
                    </button>
                  )}
                </div>

              </div>
            ) : (
              /* RESULTS DASHBOARD CAPTURE SHEET */
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center space-y-6 py-4"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-300 flex items-center justify-center mx-auto mb-2 shadow-inner">
                  <CheckCircle className="w-8 h-8" />
                </div>

                <div>
                  <h3 className="text-2xl font-black text-slate-900 dark:text-slate-100">
                    ¡Análisis de Madurez Listo!
                  </h3>
                  <p className="text-xs text-slate-400 max-w-sm mx-auto mt-1">
                    Hola <strong>{answers.name}</strong>, hemos calculado las métricas de tu organización en <strong>{answers.company}</strong>. Un especialista se conectará de inmediato para entregar tu reporte consultivo.
                  </p>
                </div>

                {/* Score and custom recommended block card */}
                <div className="max-w-md mx-auto p-5 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-150 dark:border-slate-800 text-left">
                  <span className="text-[9px] font-bold text-brand-blue uppercase tracking-widest block mb-2 font-mono">
                    Solución Recomendada
                  </span>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-100 dark:border-slate-850">
                      {rec.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-extrabold text-slate-900 dark:text-slate-100 text-sm">
                          {rec.title}
                        </h4>
                        <span className="text-[8px] font-extrabold uppercase px-2 py-0.5 roundedbg bg-indigo-50 text-indigo-600 dark:bg-indigo-950 dark:text-indigo-400">
                          {rec.badge}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-500 mt-1 lines-clamp-2 leading-relaxed">
                        {rec.desc}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Calendar quick appointment */}
                <p className="text-[10px] text-slate-450 italic">
                  * Hemos enviado un borrador inicial de diagnóstico al correo <strong>{answers.email}</strong>.
                </p>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                  <button
                    onClick={() => { resetForm(); onClose(); }}
                    className="px-6 py-2.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-bold tracking-wide hover:opacity-90 transition-all cursor-pointer"
                  >
                    Entendido, cerrar diagnóstico
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </motion.div>
    </div>
  );
}
