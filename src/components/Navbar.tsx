/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sun, Moon, ShieldAlert, Award } from 'lucide-react';
import TalentriaLogo from './TalentriaLogo';

interface NavbarProps {
  darkMode: boolean;
  onToggleDarkMode: () => void;
  onOpenDiagnostic: () => void;
  onOpenAdmin: () => void;
  leadsCount: number;
}

export default function Navbar({
  darkMode,
  onToggleDarkMode,
  onOpenDiagnostic,
  onOpenAdmin,
  leadsCount,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Soluciones', href: '#soluciones' },
    { label: 'Programa SER', href: '#soluciones' }, // points to solutions where SER is a tab
    { label: 'Capacitación', href: '#soluciones' }, // points to solutions where Capacitación is a tab
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav className="sticky top-0 z-40 bg-white/70 dark:bg-slate-950/70 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-800/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* LOGO */}
        <a href="#inicio" className="flex items-center">
          <TalentriaLogo size="md" />
        </a>

        {/* DESKTOP NAVIGATION MENU */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              className="text-sm font-bold text-slate-600 dark:text-slate-300 hover:text-brand-blue dark:hover:text-brand-blue transition-colors relative group py-2"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-blue transition-all group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* RIGHT SIDE CTA BUTTONS & TOGGLES */}
        <div className="hidden lg:flex items-center gap-4">
          
          {/* Secret/Admin Conversion Gear */}
          <button
            onClick={onOpenAdmin}
            className="p-2 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all relative cursor-pointer"
            title="Consola de Conversión"
          >
            <ShieldAlert className="w-5 h-5" />
            {leadsCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-rose-500 rounded-full font-mono text-[9px] font-bold text-white flex items-center justify-center animate-bounce">
                {leadsCount}
              </span>
            )}
          </button>

          {/* Theme Mode Toggle */}
          <button
            onClick={onToggleDarkMode}
            className="p-2.5 rounded-xl border border-slate-205 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 transition-all cursor-pointer text-slate-600 dark:text-slate-400"
            title={darkMode ? 'Cambiar a Modo Claro' : 'Cambiar a Modo Oscuro'}
          >
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Core Diagnostic CTA Button */}
          <button
            onClick={onOpenDiagnostic}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-brand-purple via-brand-blue to-teal-500 text-white font-extrabold text-xs transition-transform hover:scale-[1.03] cursor-pointer shadow-md shadow-blue-500/10"
          >
            Solicitar Diagnóstico
          </button>
        </div>

        {/* MOBILE MENU TOGGLE BUTTON */}
        <div className="flex items-center gap-2 lg:hidden">
          
          {/* Mobile Admin conversion shortcut */}
          <button
            onClick={onOpenAdmin}
            className="p-2 mr-1 rounded-xl text-slate-500 relative cursor-pointer"
          >
            <ShieldAlert className="w-5 h-5" />
            {leadsCount > 0 && (
              <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-rose-500 rounded-full font-mono text-[8px] font-bold text-white flex items-center justify-center">
                {leadsCount}
              </span>
            )}
          </button>

          {/* Mobile Theme Toggle */}
          <button
            onClick={onToggleDarkMode}
            className="p-2 rounded-md text-slate-500 dark:text-slate-400"
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          {/* Menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md text-slate-600 dark:text-slate-350 cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-slate-200/50 dark:border-slate-800 bg-white dark:bg-slate-950 overflow-hidden"
          >
            <div className="px-6 py-8 space-y-4">
              {navItems.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-base font-extrabold text-slate-800 dark:text-slate-200 hover:text-brand-blue"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-850">
                <button
                  onClick={() => { setMobileMenuOpen(false); onOpenDiagnostic(); }}
                  className="w-full text-center py-3 rounded-xl bg-slate-900 border border-transparent dark:bg-white text-white dark:text-slate-900 font-extrabold text-sm shadow-md"
                >
                  Solicitar Diagnóstico
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
