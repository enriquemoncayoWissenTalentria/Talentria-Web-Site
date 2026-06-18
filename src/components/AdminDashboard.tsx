/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Users, FileSpreadsheet, Trash2, Shield, Calendar, Download, RefreshCw, Layers } from 'lucide-react';
import { Lead } from '../types';

interface AdminDashboardProps {
  leads: Lead[];
  onClearLeads: () => void;
  onRemoveLead: (id: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

export default function AdminDashboard({ leads, onClearLeads, onRemoveLead, isOpen, onClose }: AdminDashboardProps) {
  const [filterType, setFilterType] = useState<string>('all');

  if (!isOpen) return null;

  const filteredLeads = leads.filter(lead => {
    if (filterType === 'all') return true;
    return lead.type === filterType;
  });

  const downloadCSV = () => {
    if (leads.length === 0) return;
    const headers = ['ID', 'Nombre', 'Empresa', 'Cargo', 'Email', 'Telefono', 'Mensaje', 'Fecha', 'Tipo'];
    const rows = leads.map(l => [
      l.id,
      `"${l.name.replace(/"/g, '""')}"`,
      `"${l.company.replace(/"/g, '""')}"`,
      `"${l.role.replace(/"/g, '""')}"`,
      l.email,
      l.phone,
      `"${(l.message || '').replace(/"/g, '""')}"`,
      l.createdAt,
      l.type
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,\uFEFF'
      + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'Talentria_Leads.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-end bg-slate-950/40 backdrop-blur-xs p-4">
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 25 }}
        className="w-full max-w-2xl h-full bg-slate-900 border-l border-slate-800 text-slate-100 flex flex-col justify-between p-6 md:p-8 rounded-3xl shadow-2xl relative"
      >
        <div>
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-brand-blue/10 rounded-lg text-brand-blue">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-extrabold text-lg flex items-center gap-2">
                  Panel de Leads & Analytics
                  <span className="text-[9px] font-bold bg-brand-green/10 text-brand-green px-2 py-0.5 rounded-full border border-brand-green/20 animate-pulse">
                    Live Engine
                  </span>
                </h3>
                <p className="text-xs text-slate-400">Consola integrada para auditar conversiones del sitio.</p>
              </div>
            </div>
            
            <button
              onClick={onClose}
              className="text-xs font-bold text-slate-400 hover:text-white px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-755 cursor-pointer"
            >
              Cerrar Consola
            </button>
          </div>

          {/* Quick Metrics Panels */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            <div className="p-3 bg-slate-950/60 border border-slate-800 rounded-xl">
              <span className="text-[9px] font-mono font-bold text-slate-500 uppercase block">Total Leads</span>
              <span className="text-2xl font-black font-mono text-white mt-1 block">{leads.length}</span>
            </div>
            <div className="p-3 bg-slate-950/60 border border-slate-800 rounded-xl">
              <span className="text-[9px] font-mono font-bold text-slate-500 uppercase block">Diagnosticos</span>
              <span className="text-2xl font-black font-mono text-brand-blue mt-1 block">
                {leads.filter(l => l.type === 'diagnostic').length}
              </span>
            </div>
            <div className="p-3 bg-slate-950/60 border border-slate-800 rounded-xl">
              <span className="text-[9px] font-mono font-bold text-slate-500 uppercase block">Reuniones</span>
              <span className="text-2xl font-black font-mono text-brand-purple mt-1 block">
                {leads.filter(l => l.type === 'meeting' || l.type === 'contact').length}
              </span>
            </div>
          </div>

          {/* Table Controls */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 mb-4">
            <div className="flex gap-1.5 flex-wrap">
              {['all', 'diagnostic', 'contact', 'meeting'].map((type) => (
                <button
                  key={type}
                  onClick={() => setFilterType(type)}
                  className={`px-3 py-1.5 rounded-lg text-[10px] font-mono font-bold uppercase transition-all cursor-pointer border ${
                    filterType === type
                      ? 'bg-slate-100 text-slate-900 border-transparent'
                      : 'bg-slate-950/60 text-slate-400 border-slate-800/80 hover:text-white'
                  }`}
                >
                  {type === 'all' ? 'Ver Todos' : type === 'diagnostic' ? 'Diagnósticos' : type === 'contact' ? 'Contacto' : 'Reuniones'}
                </button>
              ))}
            </div>

            <div className="flex gap-2">
              <button
                disabled={leads.length === 0}
                onClick={downloadCSV}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-[10px] font-bold text-slate-300 hover:text-white disabled:opacity-40 cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" /> Descargar CSV
              </button>
              <button
                disabled={leads.length === 0}
                onClick={onClearLeads}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-rose-950/20 border border-rose-900/30 text-[10px] font-bold text-rose-450 hover:bg-rose-950/40 disabled:opacity-40 cursor-pointer"
              >
                <Trash2 className="w-3.5 h-3.5" /> Limpiar Todo
              </button>
            </div>
          </div>

          {/* Leads Ledger Table */}
          <div className="border border-slate-800 rounded-xl bg-slate-950/40 overflow-hidden text-xs max-h-[300px] overflow-y-auto">
            {filteredLeads.length > 0 ? (
              <table className="w-full text-left">
                <thead className="bg-slate-950 text-slate-400 text-[9px] font-mono uppercase tracking-wider sticky top-0">
                  <tr>
                    <th className="p-3">Sujeto / Empresa</th>
                    <th className="p-3">Datos de Contacto</th>
                    <th className="p-3">Origen</th>
                    <th className="p-3 text-right">Acción</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 font-medium text-slate-300">
                  {filteredLeads.map((lead) => (
                    <tr key={lead.id} className="hover:bg-slate-900/40 transition-colors">
                      <td className="p-3 align-top">
                        <span className="font-extrabold text-white block">{lead.name}</span>
                        <span className="text-[10px] text-slate-400 block">{lead.company} – {lead.role}</span>
                      </td>
                      <td className="p-3 align-top font-mono text-[10px]">
                        <span className="block text-slate-200">{lead.email}</span>
                        <span className="block text-slate-450">{lead.phone}</span>
                      </td>
                      <td className="p-3 align-top">
                        <span className={`inline-block px-2 py-0.5 rounded text-[8px] font-mono font-bold uppercase ${
                          lead.type === 'diagnostic' ? 'bg-blue-900/40 text-blue-300 border border-blue-800/20' :
                          lead.type === 'meeting' ? 'bg-purple-900/40 text-purple-300 border border-purple-800/20' :
                          'bg-emerald-900/40 text-emerald-300 border border-emerald-800/20'
                        }`}>
                          {lead.type}
                        </span>
                      </td>
                      <td className="p-3 align-top text-right">
                        <button
                          onClick={() => onRemoveLead(lead.id)}
                          className="p-1 px-2 text-rose-450 hover:bg-rose-950/20 rounded-md border border-rose-900/10 hover:border-rose-900/40 cursor-pointer text-[10px]"
                        >
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="text-center py-12 text-slate-550 font-medium">
                No hay registros aún para esta categoría.
              </div>
            )}
          </div>
        </div>

        {/* Footer info showing telemetry logs */}
        <div className="pt-6 border-t border-slate-800 text-[10px] font-mono text-slate-500 space-y-2">
          <div className="flex justify-between">
            <span>Dispositivo: Web Browser Integration</span>
            <span className="text-brand-green">OK</span>
          </div>
          <p className="text-[9px] leading-relaxed">
            * Este panel simula el envío del correo de confirmación de Talentria a gerencia@talentriaconsulting.com e interactúa activamente para propósitos de prueba de flujo.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
