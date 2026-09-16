import React, { useState } from 'react';
import SectionHeader from '../common/SectionHeader';
import ScrollReveal from '../common/ScrollReveal';
import Button from '../common/Button';
import { services } from '../../data/companyData';
import { Globe, Smartphone, Building2, Zap, Cloud, ShieldCheck, ArrowRight, Check, X } from 'lucide-react';

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const iconMap = {
    Globe,
    Smartphone,
    Building2,
    Zap,
    Cloud,
    ShieldCheck
  };

  const categories = ['All', 'Web & Cloud', 'Mobile Apps', 'Enterprise & Low-Code', 'Security & QA'];

  const filteredServices = services.filter((s) => {
    if (activeCategory === 'All') return true;
    if (activeCategory === 'Web & Cloud') return s.id === 'web-dev' || s.id === 'cloud-devops';
    if (activeCategory === 'Mobile Apps') return s.id === 'mobile-dev';
    if (activeCategory === 'Enterprise & Low-Code') return s.id === 'enterprise-java' || s.id === 'mendix';
    if (activeCategory === 'Security & QA') return s.id === 'security-qa';
    return true;
  });

  return (
    <section id="services" className="relative py-14 sm:py-16 md:py-20 bg-white border-b border-slate-100">
      {/* Subtle Radial Ambient Lighting */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-sky-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Enterprise Section Header */}
        <SectionHeader
          eyebrow="OUR SERVICES"
          title="Solutions Designed for the"
          highlightTitle="Digital World."
          subtitle="End-to-end software development services tailored to your business needs with clean architecture, enterprise scale, and predictable delivery."
        />

        {/* Interactive Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-300 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-sky-600 text-white font-bold shadow-md shadow-sky-500/20 border border-sky-500'
                  : 'bg-slate-50 text-slate-700 hover:text-sky-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Enterprise Services List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, i) => {
            const IconComponent = iconMap[service.icon] || Globe;
            return (
              <ScrollReveal key={service.id} delay={i * 0.06} direction="up">
                <div
                  onClick={() => setSelectedService(service)}
                  className="group relative h-full rounded-2xl bg-white p-6 border border-slate-200/80 hover:border-sky-500/50 hover:shadow-xl hover:shadow-sky-500/5 transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1 shadow-sm"
                >
                  <div>
                    {/* Top Row: Icon & Number */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-11 h-11 rounded-xl bg-slate-900 text-sky-400 group-hover:bg-sky-600 group-hover:text-white transition-colors duration-300 flex items-center justify-center shadow-md">
                        <IconComponent className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <span className="font-mono text-xl font-extrabold text-slate-300 group-hover:text-sky-600 transition-colors">
                        {service.number}
                      </span>
                    </div>

                    {/* Service Titles */}
                    <h3 className="text-lg font-extrabold text-slate-900 mb-1 group-hover:text-sky-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-[11px] font-extrabold uppercase tracking-wider text-sky-600 mb-3">
                      {service.subtitle}
                    </p>

                    <p className="text-xs text-slate-600 leading-relaxed mb-5">
                      {service.description}
                    </p>

                    {/* Capabilities List */}
                    <ul className="space-y-1.5 mb-5 pt-3.5 border-t border-slate-100">
                      {service.features.map((feat) => (
                        <li key={feat} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                          <Check className="w-3.5 h-3.5 text-sky-600 flex-shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card Action */}
                  <div className="pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-sky-600 group-hover:text-sky-700">
                    <span>Explore Solution Details</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>

      {/* Enterprise Service Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-xl rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto text-slate-900 shadow-2xl">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 border border-slate-200 cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <span className="font-mono text-xs font-bold text-sky-600">SERVICE {selectedService.number}</span>
              <h3 className="text-2xl font-extrabold text-slate-900 mt-1">{selectedService.title}</h3>
              <p className="text-xs text-sky-600 font-extrabold uppercase tracking-wider mt-1">{selectedService.subtitle}</p>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">{selectedService.description}</p>

            <div>
              <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider mb-3">Key Technical Capabilities</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selectedService.features.map(f => (
                  <div key={f} className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-800 flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-sky-600 flex-shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
              <Button
                href="#contact"
                onClick={() => {
                  setSelectedService(null);
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                showArrow
              >
                Start a Conversation
              </Button>
              <Button variant="secondary" onClick={() => setSelectedService(null)}>Close</Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
