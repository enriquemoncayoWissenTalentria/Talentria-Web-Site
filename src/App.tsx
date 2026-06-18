/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EcosystemCircle from './components/EcosystemCircle';
import SolutionsSection from './components/SolutionsSection';
import WhyUs from './components/WhyUs';
import CaseImpact from './components/CaseImpact';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import DiagnosticModal from './components/DiagnosticModal';
import AdminDashboard from './components/AdminDashboard';
import { Lead } from './types';

// Pre-seeded high fidelity leads representing Ecuadorian corporates for trial
const INITIAL_LEADS: Lead[] = [
  {
    id: 'lead-1',
    name: 'Ing. María Elsa Jaramillo',
    company: 'Logística Guayas Pacífico',
    role: 'Directora de Talento Humano',
    email: 'mjaramillo@logpack.com.ec',
    phone: '0984512234',
    message: 'Interesada en la plataforma Clima Check para coordinar diagnóstico con 320 colaboradores operativos. Busco automatizar reportes para gerencia.',
    createdAt: '2026-06-05T14:22:00Z',
    type: 'diagnostic',
  },
  {
    id: 'lead-2',
    name: 'Eco. Roberto Noboa',
    company: 'Consorcio Agrícola El Naranjal',
    role: 'Gerente General',
    email: 'rnoboa@consorcionaranjal.com',
    phone: '0978556633',
    message: 'Nuestra nómina agrícola es altamente compleja debido al cálculo de jornales. Solicitamos auditoría y cotización del Outsourcing integral de nómina.',
    createdAt: '2026-06-05T16:10:00Z',
    type: 'contact',
  },
  {
    id: 'lead-3',
    name: 'Dra. Sandra Calle',
    company: 'Banco del Puerto S.A.',
    role: 'Vicepresidenta de Cultura',
    email: 'sandra.calle@bancopuerto.fi.ec',
    phone: '0990772211',
    message: 'REUNIÓN CONFIRMADA EN SISTEMA:\n• Fecha: 2026-06-12\n• Hora: 11:30 AM para evaluar alcances de Programa SER en igualdad de género.',
    createdAt: '2026-06-05T18:05:00Z',
    type: 'meeting',
  }
];

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [diagnosticOpen, setDiagnosticOpen] = useState<boolean>(false);
  const [adminOpen, setAdminOpen] = useState<boolean>(false);
  const [leads, setLeads] = useState<Lead[]>(INITIAL_LEADS);
  const [selectedEcosystemId, setSelectedEcosystemId] = useState<string>('360');

  // Trigger dark mode CSS side-effects
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  // Lead registration pipeline
  const handleSaveLead = (newLeadData: Omit<Lead, 'id' | 'createdAt'>) => {
    const newLead: Lead = {
      ...newLeadData,
      id: `lead-${Date.now()}`,
      createdAt: new Date().toISOString(),
    };
    setLeads((prev) => [newLead, ...prev]);
  };

  const handleRemoveLead = (id: string) => {
    setLeads((prev) => prev.filter((lead) => lead.id !== id));
  };

  const handleClearLeads = () => {
    setLeads([]);
  };

  // Navigations focus trigger
  const handleSelectSolutionFromEcosystem = (id: string) => {
    setSelectedEcosystemId(id);
    const scrollTarget = document.getElementById('soluciones');
    if (scrollTarget) {
      scrollTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-100 font-sans transition-colors duration-300 overflow-x-hidden selection:bg-brand-blue/20">
      
      {/* Top Navigation */}
      <Navbar
        darkMode={darkMode}
        onToggleDarkMode={() => setDarkMode(!darkMode)}
        onOpenDiagnostic={() => setDiagnosticOpen(true)}
        onOpenAdmin={() => setAdminOpen(true)}
        leadsCount={leads.length}
      />

      {/* Main Sections */}
      <Hero
        onOpenDiagnostic={() => setDiagnosticOpen(true)}
        onScrollToExplore={() => {
          const target = document.getElementById('soluciones');
          if (target) target.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Interactive Ecosystem */}
      <EcosystemCircle onSelectSolution={handleSelectSolutionFromEcosystem} />

      {/* Solutions Detail Workspaces */}
      <SolutionsSection
        initialActiveId={selectedEcosystemId}
        onRequestDiagnostic={(solName) => {
          setDiagnosticOpen(true);
        }}
      />

      {/* Corporate Bento why us */}
      <WhyUs />

      {/* Impact stats and tickers */}
      <CaseImpact />

      {/* Contact Form + Final Logo Gradient CTA Section */}
      <ContactForm
        onSaveLead={handleSaveLead}
        onOpenDiagnostic={() => setDiagnosticOpen(true)}
      />

      {/* Regulatory compliant Footer */}
      <Footer />

      {/* Step by Step Survey Diagnostic */}
      <DiagnosticModal
        isOpen={diagnosticOpen}
        onClose={() => setDiagnosticOpen(false)}
        onSaveLead={handleSaveLead}
      />

      {/* Admin Conversions Management System Console */}
      <AdminDashboard
        isOpen={adminOpen}
        onClose={() => setAdminOpen(false)}
        leads={leads}
        onRemoveLead={handleRemoveLead}
        onClearLeads={handleClearLeads}
      />

    </div>
  );
}
