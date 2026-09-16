import React, { useState } from 'react';
import SectionHeader from '../common/SectionHeader';
import ScrollReveal from '../common/ScrollReveal';
import Button from '../common/Button';
import { techCategories } from '../../data/companyData';
import { 
  Code2, Server, Smartphone, Database, CheckCircle2, Search, X, Cpu, 
  ShieldCheck, Zap, ArrowRight, Activity, Terminal
} from 'lucide-react';

export default function Technologies() {
  const [activeTab, setActiveTab] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('All');
  const [inspectedTech, setInspectedTech] = useState(null);

  const categoryIcons = [Code2, Server, Smartphone, Database];
  const levels = ['All', 'Expert', 'Advanced'];

  // Current category items
  const currentCategoryItems = techCategories[activeTab]?.items || [];
  
  // Filter logic combining category, level filter, and search input
  const baseItems = searchQuery.trim() === '' 
    ? currentCategoryItems 
    : techCategories.flatMap(cat => cat.items);

  const filteredTechs = baseItems.filter(item => {
    const matchesLevel = selectedLevel === 'All' || item.level === selectedLevel;
    const matchesSearch = searchQuery.trim() === '' || 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.level.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesLevel && matchesSearch;
  });

  const handleConsultStack = (techName) => {
    setInspectedTech(null);
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="technologies" className="relative py-14 sm:py-16 md:py-20 bg-slate-50/70 border-b border-slate-100 overflow-hidden">
      {/* Background Decorative Tech Grid */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Enterprise Section Header */}
        <SectionHeader
          eyebrow="TECH ECOSYSTEM & STACK"
          title="Enterprise Technology We"
          highlightTitle="Work With."
          subtitle="Proven frameworks, cloud platforms, and microservices powering resilient web, mobile, and custom enterprise software solutions."
        />

        {/* Enterprise Stack Telemetry Highlights Header */}
        <div className="max-w-5xl mx-auto mb-8 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
          <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
            <div className="font-mono text-xl font-black text-slate-900">16+</div>
            <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Production Frameworks</div>
          </div>
          <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
            <div className="font-mono text-xl font-black text-sky-600">99.99%</div>
            <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Uptime Architecture</div>
          </div>
          <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
            <div className="font-mono text-xl font-black text-emerald-600">AWS / Azure</div>
            <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Cloud Native</div>
          </div>
          <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
            <div className="font-mono text-xl font-black text-indigo-600">Full-Stack</div>
            <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Enterprise Code</div>
          </div>
        </div>

        {/* Interactive Controls Bar: Search & Filters */}
        <div className="max-w-4xl mx-auto mb-8 space-y-4">
          
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
            
            {/* Search Input */}
            <div className="sm:col-span-8 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search stack (e.g. React, Java Spring Boot, Flutter, AWS, PostgreSQL...)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all shadow-xs"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-700 cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Level Tier Filter */}
            <div className="sm:col-span-4 flex items-center justify-end gap-1.5 bg-white p-1 rounded-xl border border-slate-200 shadow-xs">
              <span className="text-[10px] font-extrabold uppercase text-slate-400 px-2">Tier:</span>
              {levels.map(level => (
                <button
                  key={level}
                  onClick={() => setSelectedLevel(level)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    selectedLevel === level
                      ? 'bg-slate-900 text-white font-bold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>

          </div>

          {/* Category Tabs (Active when not searching) */}
          {!searchQuery && (
            <div className="flex flex-wrap justify-center gap-2 pt-1">
              {techCategories.map((cat, idx) => {
                const IconComponent = categoryIcons[idx] || Code2;
                const isActive = activeTab === idx;
                return (
                  <button
                    key={cat.name}
                    onClick={() => {
                      setActiveTab(idx);
                      setInspectedTech(null);
                    }}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-300 cursor-pointer ${
                      isActive
                        ? 'bg-sky-600 text-white font-bold shadow-md shadow-sky-500/20 border border-sky-500'
                        : 'bg-white text-slate-700 hover:text-sky-600 hover:bg-slate-100 border border-slate-200'
                    }`}
                  >
                    <IconComponent className="w-3.5 h-3.5" />
                    <span>{cat.name}</span>
                    <span className={`ml-1 px-1.5 py-0.2 text-[10px] rounded-full font-mono ${
                      isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                    }`}>
                      {cat.items.length}
                    </span>
                  </button>
                );
              })}
            </div>
          )}

        </div>

        {/* Technology Grid Cards */}
        {filteredTechs.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 max-w-md mx-auto space-y-2">
            <Cpu className="w-8 h-8 text-slate-300 mx-auto" />
            <div className="text-sm font-bold text-slate-800">No technology matches your query</div>
            <p className="text-xs text-slate-500">Try searching for MERN, Java, Flutter, Spring Boot, or Cloud DevOps.</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedLevel('All'); }}
              className="mt-2 text-xs font-bold text-sky-600 hover:underline cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {filteredTechs.map((tech, idx) => (
              <ScrollReveal key={tech.name} delay={idx * 0.05} direction="up">
                <div
                  onClick={() => setInspectedTech(tech)}
                  className={`group relative p-5 rounded-2xl bg-white border transition-all duration-300 cursor-pointer shadow-xs flex flex-col justify-between hover:-translate-y-1 ${
                    inspectedTech?.name === tech.name
                      ? 'border-sky-500 shadow-md ring-2 ring-sky-500/20 bg-sky-50/40'
                      : 'border-slate-200/80 hover:border-sky-500/50 hover:shadow-xl'
                  }`}
                >
                  <div>
                    {/* Card Top: Name & Level Pill */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-slate-900 text-sky-400 group-hover:bg-sky-600 group-hover:text-white flex items-center justify-center transition-colors shadow-xs">
                          <Terminal className="w-4 h-4" />
                        </div>
                        <h4 className="text-base font-extrabold text-slate-900 group-hover:text-sky-600 transition-colors">
                          {tech.name}
                        </h4>
                      </div>
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-extrabold border ${
                        tech.level === 'Expert'
                          ? 'bg-sky-50 text-sky-700 border-sky-200'
                          : 'bg-indigo-50 text-indigo-700 border-indigo-200'
                      }`}>
                        {tech.level}
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {tech.desc}
                    </p>
                  </div>

                  {/* Card Bottom Action */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px]">
                    <span className="flex items-center gap-1 text-emerald-600 font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Production Ready
                    </span>
                    <span className="text-sky-600 font-bold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                      Inspect <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>

                </div>
              </ScrollReveal>
            ))}
          </div>
        )}

        {/* Enterprise Tech Inspection Architecture Modal */}
        {inspectedTech && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
            <div className="relative w-full max-w-xl rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto text-slate-900 shadow-2xl">
              
              <button
                onClick={() => setInspectedTech(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 border border-slate-200 cursor-pointer"
                aria-label="Close inspection"
              >
                <X className="w-5 h-5" />
              </button>

              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-mono text-xs font-bold text-sky-600 uppercase tracking-wider">ENTERPRISE SPECIFICATION</span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-sky-100 text-sky-700 border border-sky-200">
                    {inspectedTech.level} Tier
                  </span>
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900">{inspectedTech.name} Architecture</h3>
                <p className="text-xs text-slate-500 mt-1">{inspectedTech.desc}</p>
              </div>

              {/* Architectural Capability Grid */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-900">Engineering Benchmarks</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Microservices & SPA Ready</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-sky-600 flex-shrink-0" />
                    <span>Enterprise Security Baseline</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800 flex items-center gap-2">
                    <Activity className="w-4 h-4 text-indigo-600 flex-shrink-0" />
                    <span>High Throughput & Concurrency</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-amber-600 flex-shrink-0" />
                    <span>Automated CI/CD Pipeline</span>
                  </div>
                </div>
              </div>

              {/* Modal Actions */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                <Button
                  size="md"
                  showArrow
                  onClick={() => handleConsultStack(inspectedTech.name)}
                >
                  Build With {inspectedTech.name}
                </Button>
                <Button variant="secondary" onClick={() => setInspectedTech(null)}>
                  Close
                </Button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
