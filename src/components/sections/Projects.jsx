import React, { useState } from 'react';
import SectionHeader from '../common/SectionHeader';
import ScrollReveal from '../common/ScrollReveal';
import Button from '../common/Button';
import { projects } from '../../data/companyData';
import { 
  ArrowUpRight, ChevronDown, ChevronUp, ShieldCheck, Zap, CheckCircle2, Smartphone
} from 'lucide-react';

export default function Projects() {
  const [expandedProjectId, setExpandedProjectId] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const projectMetrics = {
    'erp-system': [
      { label: 'System Uptime', value: '99.99%' },
      { label: 'Tx Scalability', value: '+350%' },
      { label: 'Security Baseline', value: 'ISO 27001' }
    ],
    'ecommerce-platform': [
      { label: 'API Latency', value: '<80ms' },
      { label: 'Monthly Traffic', value: '10M+ Hits' },
      { label: 'Compliance', value: 'PCI-DSS' }
    ],
    'healthcare-app': [
      { label: 'Active Users', value: '250k+' },
      { label: 'Video Quality', value: 'HD WebRTC' },
      { label: 'Compliance', value: 'HIPAA Verified' }
    ],
    'logistics-system': [
      { label: 'Delivery Efficiency', value: '+28%' },
      { label: 'Fleet Sync', value: 'Real-Time' },
      { label: 'Cloud Host', value: 'AWS Native' }
    ],
    'fintech-cross-platform': [
      { label: 'iOS & Android', value: 'Single Codebase' },
      { label: 'Biometric Auth', value: '<10ms Response' },
      { label: 'Security Standard', value: 'PCI-DSS Level 1' }
    ],
    'ondemand-cross-platform': [
      { label: 'Platforms', value: 'iOS + Android + Web' },
      { label: 'Location Sync', value: 'Real-Time GPS' },
      { label: 'System SLA', value: '99.99% Uptime' }
    ]
  };

  const categories = ['All', 'Cross-Platform Mobile', 'Enterprise & ERP', 'Retail & E-Commerce', 'Healthcare', 'Logistics'];

  const filteredProjects = projects.filter((p) => {
    if (activeCategory === 'All') return true;
    if (activeCategory === 'Cross-Platform Mobile') {
      return p.category.includes('Mobile') || p.technologies.includes('Flutter') || p.technologies.includes('React Native');
    }
    if (activeCategory === 'Enterprise & ERP') return p.category.includes('Enterprise') || p.id === 'erp-system';
    if (activeCategory === 'Retail & E-Commerce') return p.category.includes('E-Commerce') || p.id === 'ecommerce-platform';
    if (activeCategory === 'Healthcare') return p.category.includes('Healthcare') || p.id === 'healthcare-app';
    if (activeCategory === 'Logistics') return p.category.includes('Logistics') || p.id === 'logistics-system';
    return true;
  });

  const toggleExpand = (id) => {
    setExpandedProjectId(prev => prev === id ? null : id);
  };

  const handleInquireProject = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="projects" className="relative py-14 sm:py-16 md:py-20 bg-slate-50/70 border-b border-slate-100 overflow-hidden">
      {/* Decorative Radial Background */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-sky-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Enterprise Section Header */}
        <SectionHeader
          eyebrow="ENGINEERING PORTFOLIO"
          title="Selected"
          highlightTitle="Case Studies."
          subtitle="Delivering robust web applications, cross-platform mobile products (Flutter & React Native), and enterprise platforms that drive measurable digital transformation."
        />

        {/* Interactive Category Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-300 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-sky-600 text-white font-bold shadow-md shadow-sky-500/20 border border-sky-500'
                  : 'bg-white text-slate-700 hover:text-sky-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* In-Page Case Study Cards (NO Popups!) */}
        <div className="space-y-10 max-w-6xl mx-auto">
          {filteredProjects.map((project, idx) => {
            const isEven = idx % 2 === 0;
            const metrics = projectMetrics[project.id] || [];
            const isExpanded = expandedProjectId === project.id;

            return (
              <ScrollReveal key={project.id} direction={isEven ? 'left' : 'right'}>
                <div className="rounded-3xl bg-white border border-slate-200/80 hover:border-sky-500/40 transition-all duration-300 shadow-md hover:shadow-xl overflow-hidden">
                  
                  {/* Card Main Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-8">
                    
                    {/* Image Column */}
                    <div className={`lg:col-span-7 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                      <div className="relative rounded-2xl overflow-hidden aspect-[16/10] border border-slate-200 shadow-xs">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-95"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1200&q=80';
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-60" />
                        <div className="absolute top-4 left-4 flex gap-2">
                          <span className="px-3 py-1.5 rounded-full text-xs font-extrabold bg-white/95 text-sky-700 border border-slate-200 shadow-sm backdrop-blur-md flex items-center gap-1.5">
                            {project.category.includes('Mobile') && <Smartphone className="w-3.5 h-3.5 text-sky-600" />}
                            {project.category}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Content Column */}
                    <div className={`lg:col-span-5 space-y-4 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs font-bold text-sky-600 uppercase tracking-wider">
                          CASE STUDY {project.number}
                        </span>
                        <span className="text-[11px] font-semibold text-slate-500">
                          {project.client}
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
                        {project.title}
                      </h3>
                      
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Enterprise Impact Metrics Badges */}
                      {metrics.length > 0 && (
                        <div className="grid grid-cols-3 gap-2 pt-1">
                          {metrics.map((m) => (
                            <div key={m.label} className="p-2 rounded-xl bg-slate-50 border border-slate-200/80 text-center">
                              <div className="font-mono text-xs sm:text-sm font-extrabold text-slate-900">{m.value}</div>
                              <div className="text-[9px] font-semibold text-slate-500 uppercase tracking-wider">{m.label}</div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Tech Badges */}
                      <div className="pt-1 flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-sky-50 text-sky-700 border border-sky-200/80"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* In-Page Action Controls (NO Popup!) */}
                      <div className="pt-2 flex flex-wrap items-center gap-3">
                        <button
                          onClick={() => toggleExpand(project.id)}
                          className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-slate-900 text-white hover:bg-sky-600 transition-colors shadow-xs cursor-pointer"
                        >
                          <span>{isExpanded ? 'Hide Architecture Details' : 'View Architecture Details'}</span>
                          {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                        </button>
                        
                        <Button
                          variant="secondary"
                          size="sm"
                          showArrow
                          onClick={handleInquireProject}
                        >
                          Inquire Similar
                        </Button>
                      </div>
                    </div>

                  </div>

                  {/* Inline In-Page Expanded Architecture Drawer (NO Popup Overlay!) */}
                  {isExpanded && (
                    <div className="border-t border-slate-200 bg-slate-50/80 p-6 sm:p-8 space-y-5 animate-fadeIn">
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <div>
                          <span className="font-mono text-xs font-bold text-sky-600 uppercase tracking-wider">PRODUCTION SPECIFICATION</span>
                          <h4 className="text-xl font-extrabold text-slate-900 mt-0.5">{project.title} Architecture Specification</h4>
                        </div>
                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                          Production Deployed
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed max-w-4xl">
                        Architected with full microservice isolation, zero-downtime CI/CD automation, and high security standards for {project.client}.
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                        <div className="p-4 rounded-xl bg-white border border-slate-200">
                          <div className="text-xs font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                            <ShieldCheck className="w-4 h-4 text-sky-600" /> Security Baseline
                          </div>
                          <div className="text-xs text-slate-600">Encrypted data in transit & rest with role-based access control.</div>
                        </div>

                        <div className="p-4 rounded-xl bg-white border border-slate-200">
                          <div className="text-xs font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                            <Zap className="w-4 h-4 text-amber-500" /> Scalability Target
                          </div>
                          <div className="text-xs text-slate-600">Built for high concurrency with automated horizontal pod scaling.</div>
                        </div>

                        <div className="p-4 rounded-xl bg-white border border-slate-200">
                          <div className="text-xs font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Quality SLA
                          </div>
                          <div className="text-xs text-slate-600">Continuous automated testing and 24/7 uptime monitoring.</div>
                        </div>
                      </div>

                      <div className="pt-2 flex justify-end">
                        <Button
                          size="md"
                          showArrow
                          onClick={handleInquireProject}
                        >
                          Request Solution Proposal
                        </Button>
                      </div>
                    </div>
                  )}

                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
