/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  MessageSquare,
  Mail,
  MapPin,
  Calendar,
  Clock,
  CheckCircle,
  ExternalLink,
  ChevronRight,
  Send,
} from 'lucide-react';
import { Lead } from '../types';

interface ContactFormProps {
  onSaveLead: (lead: Omit<Lead, 'id' | 'createdAt'>) => void;
  onOpenDiagnostic: () => void;
}

export default function ContactForm({ onSaveLead, onOpenDiagnostic }: ContactFormProps) {
  // Main form state
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    role: '',
    email: '',
    phone: '',
    message: '',
  });

  const [formSuccess, setFormSuccess] = useState(false);
  const [formLoading, setFormLoading] = useState(false);

  // Meeting scheduler states
  const [meetingSchedulerOpen, setMeetingSchedulerOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [schedulerSuccess, setSchedulerSuccess] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormLoading(true);

    // Simulate sending message
    setTimeout(() => {
      onSaveLead({
        name: formData.name,
        company: formData.company,
        role: formData.role,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        type: 'contact',
      });
      setFormLoading(false);
      setFormSuccess(true);
      setFormData({
        name: '',
        company: '',
        role: '',
        email: '',
        phone: '',
        message: '',
      });
      setTimeout(() => {
        setFormSuccess(false);
      }, 5000);
    }, 1200);
  };

  const handleScheduleMeeting = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime) return;

    onSaveLead({
      name: 'Agenda Reunión Automática',
      company: 'Reservado vía Calendario',
      role: 'Interesado Corporativo',
      email: 'Pendiente@reunion.com',
      phone: 'Pendiente',
      message: `REUNIÓN CONFIRMADA EN SISTEMA:
• Fecha: ${selectedDate}
• Hora: ${selectedTime}`,
      type: 'meeting',
    });

    setSchedulerSuccess(true);
    setTimeout(() => {
      setSchedulerSuccess(false);
      setMeetingSchedulerOpen(false);
      setSelectedDate('');
      setSelectedTime('');
    }, 3000);
  };

  return (
    <section id="contacto" className="relative scroll-mt-20">
      
      {/* =========================================================================
                                     FINAL CTA
         ========================================================================= */}
      <div className="relative py-24 px-6 md:px-12 bg-gradient-to-r from-brand-purple via-brand-blue to-teal-500 text-white overflow-hidden text-center flex flex-col items-center justify-center">
        
        {/* Animated pattern grids */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-brand-green/20 blur-3xl" />

        <div className="max-w-3xl mx-auto relative z-10 space-y-6">
          <span className="text-[10px] font-mono font-bold tracking-widest uppercase bg-white/15 px-3 py-1 rounded-full inline-block">
            Socio Estratégico
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
            Transforma la gestión de tu talento humano
          </h2>
          <p className="text-white/80 max-w-xl mx-auto text-sm sm:text-base leading-relaxed font-semibold">
            Conversemos sobre los desafíos de tu organización y construyamos juntos una solución a medida mediante procesos modernos y fluidos.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setMeetingSchedulerOpen(true)}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-slate-900 font-extrabold text-xs tracking-wider shadow-lg hover:scale-[1.03] transition-transform flex items-center justify-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-brand-blue" />
              Agendar reunión
            </button>
            <button
              onClick={onOpenDiagnostic}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900/40 hover:bg-slate-900/60 border border-white/20 text-white font-extrabold text-xs tracking-wide cursor-pointer hover:scale-[1.01] transition-transform"
            >
              Hacer auto-diagnóstico
            </button>
          </div>
        </div>
      </div>

      {/* =========================================================================
                                CONTACT FORM SECTION
         ========================================================================= */}
      <div className="bg-slate-50 dark:bg-slate-900/60 py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left panel: Info & Channels */}
          <div className="lg:col-span-5 flex flex-col justify-between text-left space-y-8">
            <div className="space-y-4">
              <span className="text-[10px] font-mono font-extrabold tracking-widest text-brand-blue uppercase">
                Canales Corporativos
              </span>
              <h3 className="text-3xl font-black text-slate-950 dark:text-slate-50 tracking-tight">
                Canales de Atención Directa
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed max-w-sm">
                Nuestras coordinaciones principales se encuentran listas para procesar solicitudes de reclutamiento, legalizaciones, capacitaciones o estructuración de clima.
              </p>
            </div>

            {/* Channels Stack cards */}
            <div className="space-y-4">
              
              {/* WhatsApp channel */}
              <a
                href="https://wa.me/593979547435?text=Hola%20Talentria,%20me%20gustar%C3%ADa%20solicitar%20un%20diagn%C3%B3stico%20corporativo."
                target="_blank"
                rel="noreferrer"
                className="block p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 shadow-xs hover:border-emerald-300 dark:hover:border-emerald-700/60 hover:shadow-md transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-emerald-500/10 text-emerald-600 rounded-xl">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-widest block">WhatsApp 24/7</span>
                    <span className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-slate-100 flex items-center gap-1.5 mt-0.5">
                      0979547435
                      <ExternalLink className="w-3 h-3 text-slate-300 group-hover:text-emerald-500" />
                    </span>
                  </div>
                </div>
              </a>

              {/* Email channel */}
              <a
                href="mailto:gerencia@talentriaconsulting.com"
                className="block p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 shadow-xs hover:border-brand-blue/30 hover:shadow-md transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-500/10 text-brand-blue rounded-xl">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-widest block">Correo Institucional</span>
                    <span className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-slate-100 flex items-center gap-1.5 mt-0.5">
                      gerencia@talentriaconsulting.com
                      <ExternalLink className="w-3 h-3 text-slate-300 group-hover:text-blue-500" />
                    </span>
                  </div>
                </div>
              </a>

              {/* Physical address channel */}
              <div
                className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 shadow-xs flex items-center gap-4"
              >
                <div className="p-3 bg-violet-500/10 text-brand-purple rounded-xl">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-widest block">Sede Guayas</span>
                  <span className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-slate-100 block mt-0.5">
                    Guayaquil – Ecuador
                  </span>
                </div>
              </div>

            </div>

            {/* Social media connections */}
            <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex items-center gap-4 text-xs font-bold text-slate-400">
              <span>SÍGUENOS EN REDES:</span>
              <a href="#" className="hover:text-brand-purple">LinkedIn</a>
              <span className="text-slate-200">&bull;</span>
              <a href="#" className="hover:text-brand-blue">Instagram</a>
              <span className="text-slate-200">&bull;</span>
              <a href="#" className="hover:text-brand-green">TikTok</a>
            </div>

          </div>

          {/* Right panel: Live Input Capture Form */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-950 p-6 md:p-8 rounded-3xl border border-slate-205 dark:border-slate-805 shadow-xl">
            <h4 className="text-sm font-black text-slate-950 dark:text-slate-100 uppercase mb-1 tracking-wide">
              Consulta de Servicios Corporativos
            </h4>
            <p className="text-xs text-slate-500 mb-6">
              Completa los datos gerenciales correspondientes. Recibe un diagnóstico preliminar sin cargo.
            </p>

            <form onSubmit={handleFormSubmit} className="space-y-4 text-left">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block mb-1">Nombre Completo *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="Ej. Ing. Carlos Alvarado"
                    className="w-full px-4 py-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 focus:border-brand-blue focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block mb-1">Empresa *</label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                    placeholder="Ej. Corporación Guayas S.A."
                    className="w-full px-4 py-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 focus:border-brand-blue focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-1">
                  <label className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block mb-1">Cargo *</label>
                  <input
                    type="text"
                    required
                    value={formData.role}
                    onChange={(e) => setFormData(prev => ({ ...prev, role: e.target.value }))}
                    placeholder="Ej. Gerente HR"
                    className="w-full px-4 py-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 focus:border-brand-blue focus:outline-none"
                  />
                </div>
                <div className="md:col-span-1">
                  <label className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block mb-1">Correo Corporativo *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    placeholder="ejemplo@empresa.com"
                    className="w-full px-4 py-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 focus:border-brand-blue focus:outline-none"
                  />
                </div>
                <div className="md:col-span-1">
                  <label className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block mb-1">Teléfono *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    placeholder="Ej. 0979547435"
                    className="w-full px-4 py-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 focus:border-brand-blue focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block mb-1">Desafío u Objetivos de tu Organización *</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  placeholder="Describe brevemente tus requerimientos o problemas actuales de clima, nómina o capacitación..."
                  className="w-full px-4 py-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 focus:border-brand-blue focus:outline-none resize-none"
                />
              </div>

              {formSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-xl bg-emerald-500/10 text-emerald-700 dark:text-emerald-350 font-bold text-xs flex items-center gap-2 border border-emerald-500/20"
                >
                  <CheckCircle className="w-5 h-5 shrink-0" />
                  ¡Consulta Guardada! Hemos consolidado la solicitud en la consola local del cliente para simulación.
                </motion.div>
              )}

              <button
                type="submit"
                disabled={formLoading}
                className="w-full py-3.5 px-6 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-extrabold text-xs shadow-md tracking-wider flex items-center justify-center gap-2 hover:bg-brand-blue hover:text-white dark:hover:bg-brand-blue dark:hover:text-white transition-all cursor-pointer disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
                {formLoading ? 'Enviando...' : 'Enviar Consulta de Servicios'}
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* =========================================================================
                             APP CONTROLLED SCHEDULER DIALOG
         ========================================================================= */}
      {meetingSchedulerOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center bg-slate-950/60 backdrop-blur-xs p-4">
          <motion.div
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            className="w-full max-w-md bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 rounded-3xl p-6 shadow-2xl border border-slate-200 dark:border-slate-800 relative text-left"
          >
            <button
              onClick={() => setMeetingSchedulerOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-900 cursor-pointer"
            >
              &times;
            </button>

            <div className="flex items-center gap-2.5 mb-4">
              <Calendar className="w-5 h-5 text-brand-blue" />
              <h3 className="font-extrabold text-base">Agenda tu Demo Corporativa</h3>
            </div>

            <p className="text-xs text-slate-500 mb-6">
              Selecciona el horario idóneo para conversar de los retos de recursos humanos de tu empresa con nuestro equipo directivo.
            </p>

            {schedulerSuccess ? (
              <div className="text-center py-6 text-emerald-500 font-bold text-xs space-y-2">
                <CheckCircle className="w-12 h-12 text-emerald-500 mx-auto" />
                <p>¡Reunión Agendada Exitosamente!</p>
                <p className="text-slate-500 text-[10px] font-normal">Revisaremos tu propuesta en base a la agenda establecida.</p>
              </div>
            ) : (
              <form onSubmit={handleScheduleMeeting} className="space-y-4">
                <div>
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Selecciona Fecha</label>
                  <input
                    type="date"
                    required
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full px-4 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-250 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Selecciona Hora (GTM-5)</label>
                  <select
                    required
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="w-full px-4 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-250 focus:outline-none font-semibold cursor-pointer"
                  >
                    <option value="">Opciones de agenda...</option>
                    <option value="09:00 AM">09:00 AM – Corte de la mañana</option>
                    <option value="11:30 AM">11:30 AM – Entrevistas Directivas</option>
                    <option value="02:30 PM">02:30 PM – Consultoría de Operaciones</option>
                    <option value="04:00 PM">04:00 PM – Coordinación Corporativa</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-brand-blue text-white font-extrabold text-xs shadow-md tracking-wider flex items-center justify-center gap-1.5 cursor-pointer mt-4"
                >
                  <Clock className="w-4 h-4" /> Confirmar Horario Especial
                </button>
              </form>
            )}
          </motion.div>
        </div>
      )}

      {/* =========================================================================
                             FLOATING WHATSAPP BUTTON
         ========================================================================= */}
      <a
        href="https://wa.me/593979547435?text=Hola%20Talentria,%20me%20gustar%C3%ADa%20solicitar%20un%20diagn%C3%B3stico%20corporativo."
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-40 p-4 bg-emerald-500 text-white rounded-full shadow-2xl hover:bg-emerald-600 transition-all transform hover:scale-110 flex items-center justify-center group"
        title="Contactar vía WhatsApp"
      >
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 font-bold text-xs whitespace-nowrap px-0 group-hover:px-2 block">
          Chatea con nosotros
        </span>
        <svg
          className="w-6 h-6 shrink-0"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      </a>

    </section>
  );
}
