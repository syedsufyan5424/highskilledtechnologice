import React from 'react';
import ScrollReveal from '../common/ScrollReveal';
import AnimatedCounter from '../common/AnimatedCounter';
import { trustStats, trustBadges } from '../../data/companyData';
import { CheckCircle2 } from 'lucide-react';

export default function TrustStats() {
  return (
    <section className="relative py-14 bg-[#0B111A] border-y border-[rgba(148,163,184,0.12)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Qualitative Trust Pills */}
        <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-6 mb-10">
          {trustBadges.map((badge) => (
            <div
              key={badge}
              className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#111821] border border-[rgba(148,163,184,0.12)] text-xs font-semibold text-[#E2E8F0] shadow-sm"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-[#38BDF8]" />
              <span>{badge}</span>
            </div>
          ))}
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {trustStats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.1} direction="up">
              <div className="p-6 rounded-2xl bg-[#111821] border border-[rgba(148,163,184,0.12)] hover:border-[#38BDF8]/35 transition-all duration-300 group hover:-translate-y-1">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F8FAFC] mb-2 tracking-tight group-hover:text-[#38BDF8] transition-colors">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm font-bold text-[#E2E8F0] mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-[#94A3B8]">
                  {stat.description}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
