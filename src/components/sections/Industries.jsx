import React, { useState } from 'react';
import SectionHeader from '../common/SectionHeader';
import ScrollReveal from '../common/ScrollReveal';
import Button from '../common/Button';
import { industries } from '../../data/companyData';
import { 
  Activity, ShoppingBag, CreditCard, Truck, GraduationCap, Factory, 
  ShieldCheck, CheckCircle2, ChevronDown, ChevronUp, ArrowRight, Layers 
} from 'lucide-react';

export default function Industries() {
  const [selectedIndustry, setSelectedIndustry] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const iconMap = {
    Activity,
    ShoppingBag,
    CreditCard,
    Truck,
    GraduationCap,
    Factory
  };

  const domainSpecs = {
    'Healthcare': {
      compliance: ['HIPAA Verified', 'HL7 / FHIR Integration'],
      modules: ['Telemedicine Video Consultation', 'Encrypted Patient Health Records', 'Instant E-Prescriptions']
    },
    'Retail & E-Commerce': {
      compliance: ['PCI-DSS Level 1', 'ISO 27001 Baseline'],
      modules: ['High-Throughput Checkout Engine', 'Real-Time Inventory Synchronization', 'Multi-Currency Payment Gateways']
    },
    'Finance & Banking': {
      compliance: ['SOC2 Type II Audit', 'PCI-DSS Compliant'],
      modules: ['Real-Time Money Transfer APIs', 'Biometric Mobile Auth', 'Encrypted Digital Wallet Ledger']
    },
    'Logistics & Supply Chain': {
      compliance: ['AWS Cloud Native', 'GPS Telemetry'],
      modules: ['Automated Fleet Dispatch', 'Live Map GPS Tracking', 'Warehouse Inventory Automation']
    },
    'Education & EdTech': {
      compliance: ['SCORM & xAPI Standards', 'WebRTC Video'],
      modules: ['Interactive Learning Management (LMS)', 'Live HD Video Classrooms', 'Student Assessment Portals']
    },
    'Manufacturing': {
      compliance: ['ISO 27001 Baseline', 'Industrial IoT'],
      modules: ['Enterprise ERP Microservices', 'Supply Chain Forecasting', 'Automated Production Scheduling']
    }
  };

  const filterTabs = ['All', 'Fintech & Banking', 'Healthcare & EdTech', 'Commerce & Supply Chain', 'Manufacturing'];

  const filteredIndustries = industries.filter(ind => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Fintech & Banking') return ind.name.includes('Finance') || ind.name.includes('Banking');
    if (activeFilter === 'Healthcare & EdTech') return ind.name.includes('Healthcare') || ind.name.includes('Education');
    if (activeFilter === 'Commerce & Supply Chain') return ind.name.includes('Retail') || ind.name.includes('Logistics');
    if (activeFilter === 'Manufacturing') return ind.name.includes('Manufacturing');
    return true;
  });

  const toggleSelect = (name) => {
    setSelectedIndustry(prev => prev === name ? null : name);
  };

  const handleConsultDomain = (domainName) => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative py-14 sm:py-16 md:py-20 bg-white border-b border-slate-100 overflow-hidden">
      {/* Decorative Radial Lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-sky-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Enterprise Section Header */}
        <SectionHeader
          eyebrow="DOMAINS WE SERVE"
          title="Industry Expertise &"
          highlightTitle="Domain Focus."
          subtitle="We tailor enterprise technology architectures to specific compliance standards, security baselines, and industry challenges."
        />

        {/* Interactive Domain Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-300 cursor-pointer ${
                activeFilter === tab
                  ? 'bg-sky-600 text-white font-bold shadow-md shadow-sky-500/20 border border-sky-500'
                  : 'bg-slate-50 text-slate-700 hover:text-sky-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Industries Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredIndustries.map((ind, idx) => {
            const IconComponent = iconMap[ind.icon] || Activity;
            const isSelected = selectedIndustry === ind.name;
            const spec = domainSpecs[ind.name] || { compliance: ['Enterprise Standard'], modules: [] };

            return (
              <ScrollReveal key={ind.name} delay={idx * 0.06} direction="up">
                <div
                  onClick={() => toggleSelect(ind.name)}
                  className={`group relative rounded-2xl bg-white p-5 sm:p-6 border transition-all duration-300 cursor-pointer flex flex-col justify-between hover:-translate-y-1 ${
                    isSelected
                      ? 'border-sky-500 shadow-md ring-2 ring-sky-500/20 bg-sky-50/40'
                      : 'border-slate-200/80 hover:border-sky-500/50 hover:shadow-xl'
                  }`}
                >
                  <div>
                    {/* Top Row: Icon & Compliance Badges */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-11 h-11 rounded-xl bg-slate-900 text-sky-400 group-hover:bg-sky-600 group-hover:text-white transition-colors duration-300 flex items-center justify-center shadow-md">
                        <IconComponent className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-sky-50 text-sky-700 border border-sky-200">
                        {spec.compliance[0]}
                      </span>
                    </div>

                    <h3 className="text-lg font-extrabold text-slate-900 mb-1.5 group-hover:text-sky-600 transition-colors">
                      {ind.name}
                    </h3>
                    
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {ind.desc}
                    </p>

                    {/* Architectural Capability Pills */}
                    <div className="space-y-1.5 pt-3 border-t border-slate-100 mb-4">
                      {spec.modules.slice(0, 2).map((m) => (
                        <div key={m} className="flex items-center gap-2 text-[11px] font-medium text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 flex-shrink-0" />
                          <span>{m}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Action Link */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-sky-600 group-hover:text-sky-700">
                    <span>{isSelected ? 'Hide Domain Specs' : 'Explore Domain Specs'}</span>
                    {isSelected ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>

                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Selected Industry In-Page Specification Drawer (NO Popup Overlay!) */}
        {selectedIndustry && (
          <div className="mt-8 max-w-4xl mx-auto p-6 sm:p-8 rounded-3xl bg-slate-900 text-white shadow-2xl animate-fadeIn space-y-6">
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
              <div>
                <span className="font-mono text-xs font-bold text-sky-400 uppercase tracking-wider">DOMAIN ARCHITECTURE SPECIFICATION</span>
                <h4 className="text-2xl font-extrabold text-white mt-0.5">{selectedIndustry} Solutions</h4>
              </div>
              
              <button
                onClick={() => setSelectedIndustry(null)}
                className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-800 text-slate-300 hover:text-white border border-slate-700 cursor-pointer"
              >
                Close Specification
              </button>
            </div>

            {/* Compliance & Functional Modules Breakdown */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Compliance & Standards */}
              <div className="space-y-3">
                <h5 className="text-xs font-extrabold uppercase tracking-wider text-sky-400 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" /> Compliance & Security Standards
                </h5>
                <div className="space-y-2">
                  {domainSpecs[selectedIndustry]?.compliance.map(c => (
                    <div key={c} className="p-3 rounded-xl bg-[#070A0F] border border-slate-800 text-xs font-semibold text-white flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      <span>{c}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Functional Modules */}
              <div className="space-y-3">
                <h5 className="text-xs font-extrabold uppercase tracking-wider text-sky-400 flex items-center gap-1.5">
                  <Layers className="w-4 h-4" /> Tailored Functional Modules
                </h5>
                <div className="space-y-2">
                  {domainSpecs[selectedIndustry]?.modules.map(m => (
                    <div key={m} className="p-3 rounded-xl bg-[#070A0F] border border-slate-800 text-xs font-medium text-slate-300 flex items-center gap-2">
                      <ArrowRight className="w-3.5 h-3.5 text-sky-400 flex-shrink-0" />
                      <span>{m}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Action Button */}
            <div className="pt-4 border-t border-slate-800 flex justify-end">
              <Button
                size="md"
                showArrow
                onClick={() => handleConsultDomain(selectedIndustry)}
              >
                Discuss {selectedIndustry} Architecture
              </Button>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
