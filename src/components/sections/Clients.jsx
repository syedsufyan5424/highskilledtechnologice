import React from 'react';
import SectionHeader from '../common/SectionHeader';
import ScrollReveal from '../common/ScrollReveal';
import { clientsData } from '../../data/companyData';

export default function Clients() {
  return (
    <section id="clients" className="relative py-16 sm:py-20 md:py-24 bg-slate-50/70 border-b border-slate-100 overflow-hidden">
      {/* Background Watermark & Lighting */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 text-7xl sm:text-9xl font-black text-slate-200/35 uppercase tracking-widest select-none pointer-events-none z-0">
        Clients
      </div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          eyebrow="OUR CLIENTS"
          title="Take a look at"
          highlightTitle="Our Clients"
          subtitle="We partner with global enterprise leaders, high-growth startups, and industry innovators to engineer scalable digital products."
        />

        {/* Client Logos Responsive 5-Column Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 mt-10">
          {clientsData.map((client, idx) => (
            <ScrollReveal key={client.name} delay={idx * 0.08} direction="up">
              <div className="group relative bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 hover:border-sky-500/50 hover:shadow-xl hover:shadow-sky-500/10 transition-all duration-300 flex flex-col items-center justify-center h-32 sm:h-36 hover:-translate-y-1.5 cursor-pointer shadow-xs">
                
                {/* Client Logo with Grayscale-to-Color Transition */}
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-12 sm:max-h-14 max-w-[120px] sm:max-w-[140px] w-auto h-auto object-contain transition-all duration-500 group-hover:scale-110 select-none grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100"
                  style={{
                    transition: 'filter 0.4s ease, opacity 0.4s ease, transform 0.4s ease'
                  }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    if (e.target.nextSibling) e.target.nextSibling.style.display = 'block';
                  }}
                />
                <span className="hidden font-sans font-black text-slate-800 group-hover:text-sky-600 text-base sm:text-lg tracking-tight">
                  {client.name}
                </span>

                {/* Subtle Hover Tooltip Badge */}
                <span className="absolute bottom-2 text-[10px] font-bold text-sky-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {client.category}
                </span>

              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
