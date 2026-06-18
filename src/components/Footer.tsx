/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import TalentriaLogo from './TalentriaLogo';
import { Activity, BarChart2 } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-8 border-t border-slate-900 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 border-b border-slate-900 pb-12 mb-8 items-start text-left">
        
        {/* Brand statement column */}
        <div className="md:col-span-5 space-y-4">
          <TalentriaLogo size="sm" showTagline={false} />
          
          <p className="text-xs text-slate-500 leading-relaxed max-w-sm">
            Especialistas en talento humano, capacitación y consultoría organizacional, impulsando el desarrollo de personas y la evolución de las empresas a través de soluciones estratégicas e innovadoras.
          </p>

          <div className="flex gap-1.5 flex-wrap items-center">
            {/* Real analytical compatibility states */}
            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-900 text-slate-500 text-[10px] font-mono font-bold">
              <BarChart2 className="w-3.5 h-3.5 text-brand-blue" />
              G-Analytics Ready
            </span>
            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-900 text-slate-500 text-[10px] font-mono font-bold">
              <Activity className="w-3.5 h-3.5 text-brand-turquoise" />
              Meta Pixel Connected
            </span>
          </div>
        </div>

        {/* Directory columns */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="text-xs font-black text-slate-200 uppercase tracking-widest">Alineaciones</h4>
          <ul className="text-xs space-y-2.5 font-semibold text-slate-500">
            <li><a href="#inicio" className="hover:text-white transition-colors">Corporativo</a></li>
            <li><a href="#soluciones" className="hover:text-white transition-colors">Plataformas SaaS</a></li>
            <li><a href="#nosotros" className="hover:text-white transition-colors">Nosotros</a></li>
            <li><a href="#contacto" className="hover:text-white transition-colors">Contacto</a></li>
          </ul>
        </div>

        {/* Solutions links */}
        <div className="md:col-span-4 space-y-4">
          <h4 className="text-xs font-black text-slate-200 uppercase tracking-widest">Soluciones Clave</h4>
          <ul className="text-xs space-y-2.5 font-semibold text-slate-500">
            <li><a href="#soluciones" className="hover:text-white transition-colors">Talentria 360 & Desempeño</a></li>
            <li><a href="#soluciones" className="hover:text-white transition-colors">Clima Check – Clima Laboral</a></li>
            <li><a href="#soluciones" className="hover:text-white transition-colors">Gestión Integral de Nómina</a></li>
            <li><a href="#soluciones" className="hover:text-white transition-colors">Formación Corporativa Especializada</a></li>
            <li><a href="#soluciones" className="hover:text-white transition-colors">Programa SER – Cultura Inclusiva</a></li>
          </ul>
        </div>

      </div>

      {/* Copy lines */}
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-600 font-bold gap-4">
        <span>
          &copy; {currentYear} TALENTRIA CONSULTING. Todos los derechos reservados.
        </span>
        <div className="flex gap-4">
          <a href="#" className="hover:text-slate-400">Políticas de Privacidad</a>
          <span>&middot;</span>
          <a href="#" className="hover:text-slate-400 font-extrabold">IESS Ecuador</a>
        </div>
      </div>
    </footer>
  );
}
