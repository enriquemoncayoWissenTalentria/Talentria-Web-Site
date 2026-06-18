/**
 * @license
 * SPDX-License-Identifier: Apache-2.5
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Award,
  BarChart3,
  Calculator,
  Compass,
  GraduationCap,
  Sparkles,
  CheckCircle2,
  ChevronDown,
  Clock,
  Briefcase,
  AlertCircle,
  TrendingUp,
  Search,
} from 'lucide-react';

interface SolutionsSectionProps {
  initialActiveId?: string;
  onRequestDiagnostic: (solutionName: string) => void;
}

// Nine-Box Cell definition list for Talentria 360
const NINE_BOX_CELLS = [
  // High potential Row (Low to High Performance: x=1..3)
  { x: 1, y: 3, label: 'Enigma Inconsistente', desc: 'Alto potencial con bajo desempeño. Requiere mentoring, motivación y análisis de encaje con el puesto actual.', color: 'bg-amber-500/10 hover:bg-amber-500/20 border-amber-500/30 text-amber-700', rating: 'Potencial: Alto | Desempeño: Bajo' },
  { x: 2, y: 3, label: 'Estrella en Crecimiento', desc: 'Alto potencial y desempeño medio. Ideal para desafíos de crecimiento, planes de carrera acelerados y liderazgo.', color: 'bg-blue-500/10 hover:bg-blue-500/20 border-blue-500/30 text-blue-700', rating: 'Potencial: Alto | Desempeño: Medio' },
  { x: 3, y: 3, label: 'Estrella Consolidada', desc: 'Máximo rendimiento y potencial. Próximo sucesor clave. Ofrecer incentivos de retención y asignaciones de alta dirección.', color: 'bg-emerald-500/15 hover:bg-emerald-500/25 border-emerald-500/50 text-emerald-700 font-bold', rating: 'Potencial: Alto | Desempeño: Alto' },
  
  // Medium potential Row
  { x: 1, y: 2, label: 'Dilema de Capacitación', desc: 'Potencial medio con bajo desempeño. Requiere capacitación técnica y revisión de metas a corto plazo.', color: 'bg-amber-500/10 hover:bg-amber-500/20 border-amber-500/30 text-amber-700', rating: 'Potencial: Medio | Desempeño: Bajo' },
  { x: 2, y: 2, label: 'Pilar Confiable', desc: 'Potencial medio y desempeño medio. La fuerza laboral clave. Mantener motivado, revisar metas de mediano plazo.', color: 'bg-slate-500/10 hover:bg-slate-500/20 border-slate-500/30 text-slate-700', rating: 'Potencial: Medio | Desempeño: Medio' },
  { x: 3, y: 2, label: 'Alto Colaborador', desc: 'Desempeño destacado con potencial medio. Sólido especialista. Dar empowerment y valorar su experticia.', color: 'bg-indigo-500/10 hover:bg-indigo-500/20 border-indigo-500/30 text-indigo-700', rating: 'Potencial: Medio | Desempeño: Alto' },

  // Low potential Row
  { x: 1, y: 1, label: 'Riesgo Crítico', desc: 'Desempeño y potencial limitados. Establecer un plan estricto de mejora de rendimiento o reubicación coordinada.', color: 'bg-rose-500/10 hover:bg-rose-500/20 border-rose-500/30 text-rose-700', rating: 'Potencial: Bajo | Desempeño: Bajo' },
  { x: 2, y: 1, label: 'Especialista de Tareas', desc: 'Desempeño medio con bajo potencial. Valioso para tareas estables. Dar rutinas predecibles y retroalimentación constante.', color: 'bg-slate-500/10 hover:bg-slate-500/20 border-slate-500/30 text-slate-700', rating: 'Potencial: Bajo | Desempeño: Medio' },
  { x: 3, y: 1, label: 'Superestrella Técnica', desc: 'Rendimiento excepcional pero bajo potencial de liderazgo directivo. Excelente como mentor técnico especializado.', color: 'bg-emerald-500/10 hover:bg-emerald-500/20 border-emerald-500/30 text-emerald-700', rating: 'Potencial: Bajo | Desempeño: Alto' },
];

export default function SolutionsSection({ initialActiveId = 'clima', onRequestDiagnostic }: SolutionsSectionProps) {
  const [activeTab, setActiveTab] = useState<string>('360');

  // Align active tab with initialActiveId if passed down from ecosystem selection
  useEffect(() => {
    if (initialActiveId) {
      // Map ecosystem id to solution keys
      const mapping: { [key: string]: string } = {
        'nomina': 'nomina',
        'recruit': '360', // map recruitment to 360 or handle as part of 360
        'clima': 'clima',
        '360': '360',
        'formacion': 'formacion',
        'ser': 'ser'
      };
      const mapped = mapping[initialActiveId];
      if (mapped) {
        setActiveTab(mapped);
      }
    }
  }, [initialActiveId]);

  const tabsContainerRef = useRef<HTMLDivElement>(null);

  // Scroll to workspace on change to make sure interactive widget is visible
  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    if (tabsContainerRef.current) {
      tabsContainerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // 1. STATE FOR TALENTRIA 360 STUDY TOOL
  const [selectedNineBoxCell, setSelectedNineBoxCell] = useState<typeof NINE_BOX_CELLS[2]>(NINE_BOX_CELLS[2]); // Default high-high

  // 2. STATE FOR CLIMA CHECK SIMULATOR
  const [climaSliders, setClimaSliders] = useState({
    liderazgo: 78,
    compensacion: 62,
    entorno: 85,
    desarrollo: 55,
  });
  const [climaRecalculated, setClimaRecalculated] = useState({ score: 70, feedback: '', status: 'Moderado' });

  useEffect(() => {
    const rawAverage = (climaSliders.liderazgo + climaSliders.compensacion + climaSliders.entorno + climaSliders.desarrollo) / 4;
    const finalScore = Math.round(rawAverage);
    let feedback = '';
    let status = 'Moderado';
    if (finalScore >= 85) {
      status = 'Sobresaliente';
      feedback = 'Excelente clima laboral. Las prioridades deben enfocarse en catalizar embajadores de marca y mantener los planes de carrera activos.';
    } else if (finalScore >= 70) {
      status = 'Saludable';
      feedback = 'Focos de crecimiento estables. Se aconseja fortalecer el desarrollo profesional y optimizar la comunicación de compensación emocional.';
    } else {
      status = 'Alerta de Riesgo';
      feedback = 'Percepción crítica. Requiere diagnóstico formal inmediato y diseño de planes de contingencia en liderazgo de mandos medios.';
    }
    setClimaRecalculated({ score: finalScore, feedback, status });
  }, [climaSliders]);

  // 3. STATE FOR GESTIÓN DE NÓMINA (PAYROLL) COMPLIANCE CALCULATOR (ECUADOR 2026 RATES)
  const [payrollInputSalary, setPayrollInputSalary] = useState<number>(1000);
  const [payrollBreakdown, setPayrollBreakdown] = useState({
    salary: 1000,
    employeeIess: 94.5, // 9.45%
    employerIess: 121.5, // 12.15%
    decimoTercero: 83.33, // salary / 12
    decimoCuarto: 38.33, // 460 / 12 (unified salary for 2026 is approx 460)
    vacationProvision: 41.67, // salary / 24
    totalEmployerCost: 1284.83,
  });

  const handlePayrollRecalculate = (salary: number) => {
    const s = Math.max(0, salary);
    setPayrollInputSalary(s);
    const sUnified2026 = 460; // SBU Ecuador 2026
    const employeeIess = Number((s * 0.0945).toFixed(2));
    const employerIess = Number((s * 0.1215).toFixed(2));
    const decimoTercero = Number((s / 12).toFixed(2));
    const decimoCuarto = Number((sUnified2026 / 12).toFixed(2));
    const vacationProvision = Number((s / 24).toFixed(2));
    const totalEmployerCost = Number((s + employerIess + decimoTercero + decimoCuarto + vacationProvision).toFixed(2));
    setPayrollBreakdown({
      salary: s,
      employeeIess,
      employerIess,
      decimoTercero,
      decimoCuarto,
      vacationProvision,
      totalEmployerCost,
    });
  };

  // 4. COURSE SELECTION INDEX (FORMACION CORPORATIVA)
  const [courseQuery, setCourseQuery] = useState('');
  const [selectedCourseType, setSelectedCourseType] = useState('all');

  const COURSES = [
    { name: 'Formulación de KPI y Cuadro de Mando en HR', duration: '24 horas', area: 'hr', difficulty: 'Intermedio', desc: 'Diseño estructural de métricas críticas que influyen realmente sobre las metas corporativas.' },
    { name: 'Excel Avanzado y Automatización de Plantillas de Nómina', duration: '32 horas', area: 'excel', difficulty: 'Avanzado', desc: 'Fórmulas lógicas, macros y tablas dinámicas optimizadas específicamente para gestión del talento e incidencias.' },
    { name: 'Power BI para People Analytics', duration: '40 horas', area: 'bi', difficulty: 'Avanzado', desc: 'Construcción de dashboards dinámicos de clima, rotación, costos y perfiles interconectados.' },
    { name: 'Inteligencia Artificial Aplicada a la Gestión del Talento', duration: '16 horas', area: 'ai', difficulty: 'Inicial/Medio', desc: 'Uso estratégico de Prompts, automatización de descripciones de puestos y matching inteligente de candidatos.' },
    { name: 'Liderazgo Situacional y Comunicación Auténtica', duration: '20 horas', area: 'leadership', difficulty: 'Estratégico', desc: 'Desarrollo de competencias blandas para líderes encargados del clima y la transformación de procesos.' },
    { name: 'Servicio al Cliente Premium y Fidelización', duration: '18 horas', area: 'service', difficulty: 'Práctico', desc: 'Metodologías para desarrollar orientación al servicio y control de fricciones emocionales con clientes.' },
  ];

  const filteredCourses = COURSES.filter(course => {
    const queryLower = courseQuery.toLowerCase();
    const matchesQuery = course.name.toLowerCase().includes(queryLower) || course.desc.toLowerCase().includes(queryLower);
    const matchesFilter = selectedCourseType === 'all' || course.area === selectedCourseType;
    return matchesQuery && matchesFilter;
  });

  return (
    <section id="soluciones" ref={tabsContainerRef} className="py-24 bg-white dark:bg-slate-950 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <div className="text-center md:text-left flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-purple mb-3">
              Soluciones Avanzadas
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-slate-100 tracking-tight">
              Herramientas de Alto Impacto
            </h2>
          </div>
          <p className="text-slate-650 dark:text-slate-350 max-w-lg md:text-right text-sm leading-relaxed">
            Explora una muestra interactiva del instrumental tecnológico que Talentria despliega en cada organización para impulsar el éxito operativo.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex border-b border-slate-200 dark:border-slate-800 overflow-x-auto no-scrollbar mb-12 gap-2">
          {[
            { id: '360', label: 'Talentria 360', icon: <Award className="w-4 h-4" /> },
            { id: 'clima', label: 'Clima Check', icon: <BarChart3 className="w-4 h-4" /> },
            { id: 'nomina', label: 'Gestión de Nómina', icon: <Calculator className="w-4 h-4" /> },
            { id: 'ser', label: 'Programa SER', icon: <Sparkles className="w-4 h-4" /> },
            { id: 'formacion', label: 'Formación Corporativa', icon: <GraduationCap className="w-4 h-4" /> },
          ].map((tab) => {
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`flex items-center gap-2 px-5 py-4 font-bold text-sm border-b-2 whitespace-nowrap transition-all cursor-pointer relative ${
                  isSelected
                    ? 'border-brand-blue text-brand-blue font-extrabold'
                    : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                }`}
              >
                {tab.icon}
                {tab.label}
                {isSelected && (
                  <motion.div
                    className="absolute bottom-[-2px] left-0 right-0 h-[2px] bg-brand-blue"
                    layoutId="activeTabUnderline"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Workspace Display Area */}
        <div className="bg-slate-50/70 dark:bg-slate-900/40 rounded-3xl p-6 md:p-10 border border-slate-200/60 dark:border-slate-800/60 shadow-inner">
          <AnimatePresence mode="wait">
            {activeTab === '360' && (
              <motion.div
                key="360"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch"
              >
                {/* Left block information */}
                <div className="lg:col-span-5 flex flex-col justify-between">
                  <div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 mb-4 border border-blue-200/50">
                      <TrendingUp className="w-3.5 h-3.5" /> Evaluador 360
                    </span>
                    <h3 className="text-3xl font-black text-slate-950 dark:text-slate-50 tracking-tight">
                      Talentria 360
                    </h3>
                    <p className="mt-4 text-sm text-slate-600 dark:text-slate-350 leading-relaxed">
                      Sistema integral para evaluar desempeño, competencias y potencial del talento humano. Diseñado para simplificar procesos corporativos complejos.
                    </p>

                    <div className="mt-6 space-y-3">
                      {[
                        'Evaluación de competencias transversales y específicas',
                        'Mapeo estratégico con matrices de calibración Nine Box',
                        'Feedback constructivo 360°, 180° y revisiones ascendentes',
                        'Dashboard gerencial integrado con reportes ejecutivos limpios'
                      ].map((feat, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs">
                          <CheckCircle2 className="w-4.5 h-4.5 text-brand-blue shrink-0 mt-0.5" />
                          <span className="text-slate-700 dark:text-slate-300 font-medium">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800">
                    <button
                      onClick={() => onRequestDiagnostic('Talentria 360')}
                      className="w-full md:w-auto px-6 py-3 text-xs font-bold rounded-xl bg-brand-blue text-white hover:bg-opacity-95 transition-all shadow-md hover:scale-[1.02] cursor-pointer"
                    >
                      Conocer Talentria 360
                    </button>
                  </div>
                </div>

                {/* Right block: Interactive Nine-Box tool */}
                <div className="lg:col-span-7 flex flex-col justify-between bg-white dark:bg-slate-900 p-6 md:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                  <div>
                    <h4 className="text-sm font-black text-slate-950 dark:text-slate-100 tracking-wide uppercase mb-1 flex items-center gap-2">
                      <span className="flex h-2 w-2 rounded-full bg-indigo-500 animate-pulse" />
                      Taller Interactivo Nine-Box
                    </h4>
                    <p className="text-xs text-slate-500 mb-6">
                      Haz clic en cualquier cuadrícula para simular las decisiones y planes estratégicos del equipo Talentria.
                    </p>

                    {/* Nine-Box Matrix */}
                    <div className="grid grid-cols-3 gap-2 aspect-square max-w-[420px] mx-auto border-l-2 border-b-2 border-slate-300 dark:border-slate-700 py-3 pl-3 relative">
                      {/* Matrix Labels */}
                      <div className="absolute -left-3 top-1/2 -translate-y-1/2 -rotate-90 text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest pointer-events-none">
                        Potencial &rarr;
                      </div>
                      <div className="absolute left-1/2 -bottom-2 -translate-x-1/2 text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest pointer-events-none">
                        Desempeño &rarr;
                      </div>

                      {/* Render cells from potential (y) 3 down to 1, performance (x) 1 to 3 */}
                      {[3, 2, 1].map((currY) => {
                        return [1, 2, 3].map((currX) => {
                          const cell = NINE_BOX_CELLS.find(c => c.x === currX && c.y === currY)!;
                          const isSelected = selectedNineBoxCell.x === currX && selectedNineBoxCell.y === currY;
                          return (
                            <button
                              key={`${currX}-${currY}`}
                              onClick={() => setSelectedNineBoxCell(cell)}
                              className={`rounded-lg border p-2 flex flex-col justify-between text-left transition-all cursor-pointer h-24 ${cell.color} ${
                                isSelected ? 'ring-2 ring-brand-blue scale-[1.03] shadow-md z-10' : 'border-slate-200 dark:border-slate-800'
                              }`}
                            >
                              <span className="text-[9px] font-bold opacity-60 block truncate">{cell.rating}</span>
                              <span className="text-xs font-extrabold line-clamp-2 mt-auto leading-tight">{cell.label}</span>
                            </button>
                          );
                        });
                      })}
                    </div>
                  </div>

                  {/* Cell breakdown display details */}
                  <motion.div
                    key={selectedNineBoxCell.label}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-extrabold text-slate-800 dark:text-slate-200">
                        {selectedNineBoxCell.label}
                      </span>
                      <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 dark:bg-indigo-950/40 dark:text-indigo-300">
                        {selectedNineBoxCell.rating}
                      </span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                      {selectedNineBoxCell.desc}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            )}

            {activeTab === 'clima' && (
              <motion.div
                key="clima"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch"
              >
                {/* Left panel info */}
                <div className="lg:col-span-5 flex flex-col justify-between">
                  <div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300 mb-4 border border-emerald-200/50">
                      <BarChart3 className="w-3.5 h-3.5" /> Clima Check
                    </span>
                    <h3 className="text-3xl font-black text-slate-950 dark:text-slate-50 tracking-tight">
                      Clima Check
                    </h3>
                    <p className="mt-4 text-sm text-slate-600 dark:text-slate-350 leading-relaxed">
                      Mide la percepción real de tus colaboradores y transforma el descontento en planes de acción inmediatos alineados a tus metas comerciales.
                    </p>

                    <div className="mt-6 space-y-3">
                      {[
                        'Encuestas automatizadas y confidenciales',
                        'Detección de focos de insatisfacción o desmotivación',
                        'Dashboard interactivo con KPI clave en vivo',
                        'Generador ágil de planes de mejora e intervenciones'
                      ].map((feat, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs">
                          <CheckCircle2 className="w-4.5 h-4.5 text-brand-green shrink-0 mt-0.5" />
                          <span className="text-slate-700 dark:text-slate-300 font-medium">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800">
                    <button
                      onClick={() => onRequestDiagnostic('Clima Check')}
                      className="w-full md:w-auto px-6 py-3 text-xs font-bold rounded-xl bg-brand-green text-white hover:bg-opacity-95 transition-all shadow-md hover:scale-[1.02] cursor-pointer"
                    >
                      Conocer Clima Check
                    </button>
                  </div>
                </div>

                {/* Right component: Dynamic Clima Index Estimator */}
                <div className="lg:col-span-7 bg-white dark:bg-slate-900 p-6 md:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
                  <div>
                    <h4 className="text-sm font-black text-slate-950 dark:text-slate-100 uppercase mb-1">
                      Simulador de Satisfacción Clima Check
                    </h4>
                    <p className="text-xs text-slate-500 mb-6">
                      Ajusta los indicadores estimados para calcular automáticamente el Clima Check Index de tu organización.
                    </p>

                    {/* 4 Interactive KPI Sliders */}
                    <div className="space-y-4">
                      {[
                        { key: 'liderazgo', label: 'Estilo de Liderazgo (Mandos Medios)', color: 'accent-brand-blue' },
                        { key: 'compensacion', label: 'Compensación Emocional', color: 'accent-brand-purple' },
                        { key: 'entorno', label: 'Entorno Físico y Herramientas', color: 'accent-brand-turquoise' },
                        { key: 'desarrollo', label: 'Oportunidades de Desarrollo', color: 'accent-brand-green' },
                      ].map((slider) => {
                        const val = climaSliders[slider.key as keyof typeof climaSliders];
                        return (
                          <div key={slider.key} className="space-y-1">
                            <div className="flex justify-between items-center text-xs">
                              <span className="font-semibold text-slate-700 dark:text-slate-300">{slider.label}</span>
                              <span className="font-mono font-bold text-slate-900 dark:text-slate-150">{val}%</span>
                            </div>
                            <input
                              type="range"
                              min="10"
                              max="100"
                              value={val}
                              onChange={(e) => setClimaSliders(prev => ({ ...prev, [slider.key]: parseInt(e.target.value) }))}
                              className={`w-full h-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 appearance-none cursor-pointer ${slider.color}`}
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Scoring Result Capsule */}
                  <div className="mt-8 p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-150 dark:border-slate-800 flex flex-col md:flex-row items-center gap-6">
                    <div className="flex flex-col items-center">
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                        Index General
                      </div>
                      <div className="text-4xl font-extrabold mt-1 text-brand-green font-mono">
                        {climaRecalculated.score}%
                      </div>
                      <div className={`mt-1.5 px-2 py-0.5 rounded text-[9px] font-black uppercase text-white ${
                        climaRecalculated.status === 'Sobresaliente' ? 'bg-emerald-500' :
                        climaRecalculated.status === 'Saludable' ? 'bg-indigo-500' : 'bg-rose-500'
                      }`}>
                        {climaRecalculated.status}
                      </div>
                    </div>

                    <div className="text-center md:text-left">
                      <span className="text-[10px] font-mono font-bold text-slate-400 flex items-center gap-1 justify-center md:justify-start">
                        <AlertCircle className="w-3.5 h-3.5 text-brand-blue" />
                        Diagnóstico Talentria
                      </span>
                      <p className="mt-1 text-xs text-slate-600 dark:text-slate-450 font-medium leading-relaxed">
                        {climaRecalculated.feedback}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'nomina' && (
              <motion.div
                key="nomina"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch"
              >
                {/* Left info panel */}
                <div className="lg:col-span-5 flex flex-col justify-between">
                  <div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-violet-100 text-violet-800 dark:bg-violet-900/30 dark:text-violet-300 mb-4 border border-violet-200/50">
                      <Calculator className="w-3.5 h-3.5" /> Nómina y Legal
                    </span>
                    <h3 className="text-3xl font-black text-slate-950 dark:text-slate-50 tracking-tight">
                      Gestión de Nómina
                    </h3>
                    <p className="mt-4 text-sm text-slate-600 dark:text-slate-350 leading-relaxed">
                      Procesamos y administramos la nómina empresarial cubriendo todo el ciclo legal ecuatoriano. Olvídate de multas y reprocesos innecesarios.
                    </p>

                    <div className="mt-6 space-y-3">
                      {[
                        'Cálculos y provisiones de ley (IESS, SUT, Décimos)',
                        'Finiquitos, liquidaciones de personal y actas',
                        'Proyecciones de Impuesto a la Renta de colaboradores',
                        'Procesos certificados con auditoría preventiva'
                      ].map((feat, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs">
                          <CheckCircle2 className="w-4.5 h-4.5 text-brand-purple shrink-0 mt-0.5" />
                          <span className="text-slate-700 dark:text-slate-300 font-medium">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800">
                    <button
                      onClick={() => onRequestDiagnostic('Gestión de Nómina')}
                      className="w-full md:w-auto px-6 py-3 text-xs font-bold rounded-xl bg-brand-purple text-white hover:bg-opacity-95 transition-all shadow-md hover:scale-[1.02] cursor-pointer"
                    >
                      Conocer Servicio de Nómina
                    </button>
                  </div>
                </div>

                {/* Right component: Ecuador Labor Benefit Calculator */}
                <div className="lg:col-span-7 bg-white dark:bg-slate-900 p-6 md:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
                  <div>
                    <h4 className="text-sm font-black text-slate-950 dark:text-slate-100 uppercase mb-1 flex items-center gap-1.5">
                      Súper Calculadora de Costo Laboral (Ecuador)
                    </h4>
                    <p className="text-xs text-slate-500 mb-6">
                      Ingresa el salario base de un colaborador para verificar el costo real del empleador y provisiones de ley.
                    </p>

                    {/* Numeric Input */}
                    <div className="mb-6 relative max-w-sm">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">
                        Sueldo Base Mensual (USD)
                      </label>
                      <div className="relative">
                        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 font-bold text-slate-400 text-sm">$</span>
                        <input
                          type="number"
                          value={payrollInputSalary}
                          onChange={(e) => handlePayrollRecalculate(parseFloat(e.target.value) || 0)}
                          placeholder="Sueldo base..."
                          className="w-full pl-8 pr-4 py-2.5 rounded-xl border border-slate-250 dark:border-slate-700 dark:bg-slate-950 text-sm font-semibold focus:border-brand-purple focus:outline-none"
                        />
                      </div>
                    </div>

                    {/* Breakdown Matrix */}
                    <div className="grid grid-cols-2 gap-4 text-xs font-medium">
                      
                      {/* Left: Salarios y Provisiones */}
                      <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-950/45 space-y-2">
                        <div className="flex justify-between border-b pb-1 border-slate-200/50 dark:border-slate-800/40">
                          <span className="text-slate-500">IESS Empleador (12.15%)</span>
                          <span className="font-mono text-slate-900 dark:text-slate-150 font-bold">${payrollBreakdown.employerIess}</span>
                        </div>
                        <div className="flex justify-between border-b pb-1 border-slate-200/50 dark:border-slate-800/40">
                          <span className="text-slate-500">IESS Empleado (9.45% *)</span>
                          <span className="font-mono text-slate-450 font-bold">${payrollBreakdown.employeeIess}</span>
                        </div>
                        <div className="text-[9px] text-slate-400 italic">
                          * Retenido del sueldo final
                        </div>
                      </div>

                      {/* Right: Décimos y Beneficios */}
                      <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-950/45 space-y-2">
                        <div className="flex justify-between border-b pb-1 border-slate-200/50 dark:border-slate-800/40">
                          <span className="text-indigo-500">Décimo Tercero (Provisión)</span>
                          <span className="font-mono text-slate-900 dark:text-slate-150 font-bold">${payrollBreakdown.decimoTercero}</span>
                        </div>
                        <div className="flex justify-between border-b pb-1 border-slate-200/50 dark:border-slate-800/40">
                          <span className="text-indigo-500">Décimo Cuarto (Provisión *)</span>
                          <span className="font-mono text-slate-900 dark:text-slate-150 font-bold">${payrollBreakdown.decimoCuarto}</span>
                        </div>
                        <div className="flex justify-between border-b pb-1 border-slate-200/50 dark:border-slate-800/40">
                          <span className="text-indigo-500">Vacaciones (Provisión)</span>
                          <span className="font-mono text-slate-900 dark:text-slate-150 font-bold">${payrollBreakdown.vacationProvision}</span>
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* Calculated total summary card */}
                  <div className="mt-6 p-4 rounded-xl bg-indigo-500/[0.04] border border-indigo-500/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                        Costo Real Mensual Empleador
                      </span>
                      <h4 className="text-2xl font-black text-slate-900 dark:text-slate-100 flex items-baseline gap-1 mt-1 font-mono">
                        ${payrollBreakdown.totalEmployerCost}
                        <span className="text-xs font-normal text-slate-500">USD</span>
                      </h4>
                    </div>

                    <div className="px-4 py-2 rounded bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 text-[10px] font-bold tracking-wide">
                      Alineado a SBU 2026 Ecuatoriano
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'ser' && (
              <motion.div
                key="ser"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch"
              >
                {/* Left info panel */}
                <div className="lg:col-span-5 flex flex-col justify-between">
                  <div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-300 mb-4 border border-rose-200/50">
                      <Compass className="w-3.5 h-3.5" /> Programa SER
                    </span>
                    <h3 className="text-3xl font-black text-slate-950 dark:text-slate-50 tracking-tight">
                      Programa SER
                    </h3>
                    <p className="mt-4 text-sm text-slate-600 dark:text-slate-350 leading-relaxed">
                      Programa diseñado para fortalecer la cultura organizacional, promover equidad, inclusión, liderazgo empático y el cumplimiento riguroso de normatividades.
                    </p>

                    <div className="mt-6 space-y-3">
                      {[
                        'Derechos laborales con enfoque de equidad humana',
                        'Conciliación de la vida laboral, personal y familiar',
                        'Políticas de igualdad de género sin sesgos',
                        'Liderazgo inclusivo y sensibilización activa'
                      ].map((feat, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs">
                          <CheckCircle2 className="w-4.5 h-4.5 text-rose-500 shrink-0 mt-0.5" />
                          <span className="text-slate-700 dark:text-slate-300 font-medium">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800">
                    <button
                      onClick={() => onRequestDiagnostic('Programa SER')}
                      className="w-full md:w-auto px-6 py-3 text-xs font-bold rounded-xl bg-rose-600 text-white hover:bg-opacity-95 transition-all shadow-md hover:scale-[1.02] cursor-pointer"
                    >
                      Solicitar Información del Programa
                    </button>
                  </div>
                </div>

                {/* Right graphics panel */}
                <div className="lg:col-span-7 bg-white dark:bg-slate-900 p-6 md:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
                  <div>
                    <h4 className="text-sm font-black text-slate-950 dark:text-slate-100 uppercase mb-1">
                      Principios Clave del Programa SER
                    </h4>
                    <p className="text-xs text-slate-500 mb-6">
                      Siete pilares estratégicos diseñados de acuerdo a las directrices de bienestar y desarrollo humano sostenible.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {[
                        { title: 'Equidad Salarial', desc: 'Trabajo de igual valor con remuneraciones auditadas libres de sesgos de género.' },
                        { title: 'Conciliación Efectiva', desc: 'Equilibrio productivo entre la vida personal, familiar y profesional.' },
                        { title: 'Ambiente Libre de Acoso', desc: 'Protocolos estrictos de prevención, canalización y acción de acoso.' },
                        { title: 'Diversidad Humana', desc: 'Fomento a la inclusión laboral y el respeto absoluto a la pluralidad.' },
                      ].map((pillar, i) => (
                        <div key={i} className="p-3.5 rounded-xl border border-slate-150 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40 hover:border-rose-300 transition-all">
                          <span className="text-xs font-extrabold text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
                            <span className="flex h-1.5 w-1.5 rounded-full bg-rose-500 shrink-0" />
                            {pillar.title}
                          </span>
                          <p className="text-[11px] text-slate-500 mt-1 lines-clamp-2 leading-relaxed">
                            {pillar.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Compliance stamp info banner */}
                  <div className="mt-6 p-4 rounded-xl bg-rose-500/[0.03] border border-rose-500/10 flex items-center gap-4">
                    <div className="p-2 rounded-lg bg-rose-500/10 text-rose-500 shrink-0">
                      <Clock className="w-5 h-5 animate-pulse" />
                    </div>
                    <div>
                      <h5 className="text-xs font-bold text-slate-800 dark:text-slate-200">
                        Certificación Organizacional Inclusiva
                      </h5>
                      <p className="text-[10px] text-slate-500 leading-relaxed mt-0.5">
                        El programa SER provee el marco idóneo para dar cumplimiento a regulaciones del Ministerio del Trabajo en materia de inclusión y planes de igualdad.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'formacion' && (
              <motion.div
                key="formacion"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch"
              >
                {/* Left info panel */}
                <div className="lg:col-span-5 flex flex-col justify-between">
                  <div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-150 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300 mb-4 border border-emerald-200/50">
                      <GraduationCap className="w-3.5 h-3.5" /> Capacitación
                    </span>
                    <h3 className="text-3xl font-black text-slate-950 dark:text-slate-50 tracking-tight">
                      Formación Corporativa
                    </h3>
                    <p className="mt-4 text-sm text-slate-600 dark:text-slate-350 leading-relaxed">
                      Desarrollamos competencias técnicas y de liderazgo de alto rendimiento que impactan directamente en los resultados del negocio.
                    </p>

                    <div className="mt-6 space-y-3">
                      {[
                        'Talleres 100% prácticos hands-on con expertos',
                        'Modalidades online en vivo o presencial in-house',
                        'Material didáctico premium y simuladores listos',
                        'Certificados de aprobación y evaluación modular'
                      ].map((feat, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs">
                          <CheckCircle2 className="w-4.5 h-4.5 text-brand-green shrink-0 mt-0.5" />
                          <span className="text-slate-700 dark:text-slate-300 font-medium">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800">
                    <button
                      onClick={() => onRequestDiagnostic('Capacitación Especializada')}
                      className="w-full md:w-auto px-6 py-3 text-xs font-bold rounded-xl bg-brand-green text-white hover:bg-opacity-95 transition-all shadow-md hover:scale-[1.02] cursor-pointer"
                    >
                      Cotizar Programa de Capacitación
                    </button>
                  </div>
                </div>

                {/* Right: Interactive Syllabus Finder */}
                <div className="lg:col-span-7 bg-white dark:bg-slate-900 p-6 md:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
                  <div>
                    <h4 className="text-sm font-black text-slate-950 dark:text-slate-100 uppercase mb-1">
                      Catálogo Integral de Cursos
                    </h4>
                    <p className="text-xs text-slate-500 mb-4">
                      Utiliza los filtros rápidos para descubrir los temarios formativos que impulsamos para las empresas asociadas.
                    </p>

                    {/* Filter bar */}
                    <div className="flex flex-col md:flex-row gap-2 mb-4">
                      {/* Search box */}
                      <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                          type="text"
                          placeholder="Buscar curso o tema..."
                          value={courseQuery}
                          onChange={(e) => setCourseQuery(e.target.value)}
                          className="w-full pl-9 pr-4 py-2 rounded-xl text-xs border border-slate-200 dark:border-slate-800 focus:outline-none dark:bg-slate-950 dark:text-slate-200 font-medium"
                        />
                      </div>

                      {/* Pill filter selection */}
                      <select
                        value={selectedCourseType}
                        onChange={(e) => setSelectedCourseType(e.target.value)}
                        className="rounded-xl border border-slate-200 dark:border-slate-800 px-3 py-2 text-xs focus:outline-none dark:bg-slate-950 dark:text-slate-200 font-semibold cursor-pointer"
                      >
                        <option value="all">Todas las Áreas</option>
                        <option value="excel">Excel Aplicado</option>
                        <option value="bi">Power BI Analytics</option>
                        <option value="ai">Inteligencia Artificial</option>
                        <option value="leadership">Liderazgo & Soft</option>
                        <option value="hr">KPI de Talentos</option>
                      </select>
                    </div>

                    {/* Micro Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 overflow-y-auto max-h-[220px] pr-1 scrollbar-thin">
                      {filteredCourses.length > 0 ? (
                        filteredCourses.map((course, idx) => (
                          <div
                            key={idx}
                            className="p-3 rounded-xl border border-slate-100 dark:border-slate-850 bg-slate-50/40 dark:bg-slate-950/20 hover:border-brand-green/30 transition-all flex flex-col justify-between"
                          >
                            <div>
                              <div className="flex justify-between items-center gap-2 mb-1.5">
                                <span className="font-extrabold text-xs text-slate-900 dark:text-slate-100 leading-tight">
                                  {course.name}
                                </span>
                              </div>
                              <p className="text-[10px] text-slate-500 line-clamp-2 leading-relaxed">
                                {course.desc}
                              </p>
                            </div>
                            
                            <div className="mt-2.5 pt-2 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between text-[9px] font-bold text-slate-400">
                              <span className="flex items-center gap-1">
                                <Clock className="w-3.5 h-3.5 text-brand-green" />
                                {course.duration}
                              </span>
                              <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-300 uppercase">
                                {course.difficulty}
                              </span>
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="col-span-2 text-center py-6 text-xs text-slate-400 font-medium">
                          No se encontraron cursos que coincidan con la búsqueda.
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="text-[10px] font-bold text-center text-slate-400 dark:text-slate-500 italic mt-4 pt-3 border-t border-slate-100 dark:border-slate-800">
                    * Todos nuestros programas están adaptados a la madurez tecnológica de tus áreas administrativas.
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
