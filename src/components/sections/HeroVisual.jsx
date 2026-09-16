import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Cpu, Database, Cloud, Layers, Code, Play } from 'lucide-react';

export default function HeroVisual() {
  const [activeTab, setActiveTab] = useState('code');

  const nodes = [
    { label: 'MERN & MEAN', color: 'text-[#38BDF8]', bg: 'bg-[#38BDF8]/10', border: 'border-[#38BDF8]/30', x: '5%', y: '12%' },
    { label: 'Java Microservices', color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/30', x: '68%', y: '8%' },
    { label: 'Flutter / React Native', color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/30', x: '72%', y: '65%' },
    { label: 'Mendix Low-Code', color: 'text-[#8B5CF6]', bg: 'bg-[#8B5CF6]/10', border: 'border-[#8B5CF6]/30', x: '10%', y: '78%' }
  ];

  return (
    <div className="relative w-full h-[460px] sm:h-[520px] flex items-center justify-center select-none">
      {/* Subtle Azure/Violet Radial Glow (Barely visible) */}
      <div className="absolute inset-0 bg-ambient-glow opacity-80 pointer-events-none" />
      <div className="absolute inset-0 bg-ambient-violet opacity-60 pointer-events-none" />

      {/* Concentric Pulse Rings */}
      <div className="absolute w-72 h-72 rounded-full border border-[#38BDF8]/15 animate-ping opacity-20 pointer-events-none" />
      <div className="absolute w-96 h-96 rounded-full border border-[#8B5CF6]/15 pointer-events-none" />

      {/* Central Terminal / System Card */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-20 w-80 sm:w-96 p-5 rounded-2xl bg-[#111821] border border-[rgba(148,163,184,0.18)] hover:border-[#38BDF8]/40 shadow-2xl transition-all duration-300"
      >
        {/* Header Tabs */}
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-[rgba(148,163,184,0.12)]">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('code')}
              className={`px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold transition-colors ${
                activeTab === 'code' ? 'bg-[#38BDF8]/20 text-[#38BDF8]' : 'text-[#94A3B8] hover:text-white'
              }`}
            >
              hst-architecture.js
            </button>
            <button
              onClick={() => setActiveTab('status')}
              className={`px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold transition-colors ${
                activeTab === 'status' ? 'bg-[#38BDF8]/20 text-[#38BDF8]' : 'text-[#94A3B8] hover:text-white'
              }`}
            >
              telemetry.json
            </button>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
          </div>
        </div>

        {/* Tab 1: Live Code Architecture */}
        {activeTab === 'code' ? (
          <div className="space-y-3 font-mono text-xs text-[#E2E8F0] leading-relaxed">
            <div className="p-3 rounded-xl bg-[#070A0F] border border-[rgba(148,163,184,0.1)] text-[11px]">
              <span className="text-[#38BDF8]">import</span> {`{ EnterpriseApp }`} <span className="text-[#38BDF8]">from</span> <span className="text-emerald-300">'@hst/core'</span>;
              <br /><br />
              <span className="text-[#8B5CF6]">const</span> solution = <span className="text-[#38BDF8]">new</span> EnterpriseApp({`{`}
              <br />
              <span className="pl-4 text-[#94A3B8]">web:</span> <span className="text-emerald-300">'MERN | MEAN Stack'</span>,
              <br />
              <span className="pl-4 text-[#94A3B8]">mobile:</span> <span className="text-emerald-300">'Flutter | React Native'</span>,
              <br />
              <span className="pl-4 text-[#94A3B8]">backend:</span> <span className="text-emerald-300">'Java Spring Boot'</span>,
              <br />
              <span className="pl-4 text-[#94A3B8]">cloud:</span> <span className="text-emerald-300">'AWS | Azure DevOps'</span>
              <br />
              {`}`});
              <br />
              <span className="text-[#38BDF8]">await</span> solution.<span className="text-[#8B5CF6]">deploy</span>();
            </div>
            <div className="flex items-center justify-between text-[11px] text-[#94A3B8]">
              <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                <Play className="w-3 h-3 fill-current" /> Build Passing (100%)
              </span>
              <span className="text-[#38BDF8]">v2.4.0</span>
            </div>
          </div>
        ) : (
          /* Tab 2: System Telemetry */
          <div className="space-y-2.5 font-mono text-xs text-[#E2E8F0]">
            <div className="p-3 rounded-xl bg-[#070A0F] border border-[rgba(148,163,184,0.1)] space-y-2 text-[11px]">
              <div className="flex justify-between text-slate-300">
                <span>Active API Microservices</span>
                <span className="text-[#38BDF8] font-bold">12 Nodes</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Uptime SLA</span>
                <span className="text-emerald-400 font-bold">99.99%</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Security Compliance</span>
                <span className="text-purple-400 font-bold">ISO 27001</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Global Response Time</span>
                <span className="text-emerald-400 font-bold">&lt; 45ms</span>
              </div>
            </div>
          </div>
        )}
      </motion.div>

      {/* Floating Technology Node Pills */}
      {nodes.map((node, i) => (
        <motion.div
          key={node.label}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: [0, -8, 0] }}
          transition={{
            opacity: { duration: 0.6, delay: 0.3 + i * 0.1 },
            y: { duration: 4 + i, repeat: Infinity, ease: 'easeInOut' }
          }}
          style={{ top: node.y, left: node.x }}
          className={`absolute z-30 hidden sm:flex items-center gap-2 px-3 py-2 rounded-xl bg-[#111821]/90 border ${node.border} shadow-lg backdrop-blur-md hover:scale-105 transition-transform cursor-pointer`}
        >
          <div className={`p-1 rounded-md ${node.bg} ${node.color}`}>
            <Code className="w-3.5 h-3.5" />
          </div>
          <span className="text-xs font-semibold text-[#F8FAFC]">{node.label}</span>
        </motion.div>
      ))}

      {/* Connection Lines (SVG) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
        <line x1="20%" y1="20%" x2="45%" y2="45%" stroke="#38BDF8" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="75%" y1="15%" x2="55%" y2="45%" stroke="#8B5CF6" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="75%" y1="70%" x2="55%" y2="55%" stroke="#10b981" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="20%" y1="80%" x2="45%" y2="55%" stroke="#38BDF8" strokeWidth="1" strokeDasharray="4 4" />
      </svg>
    </div>
  );
}
