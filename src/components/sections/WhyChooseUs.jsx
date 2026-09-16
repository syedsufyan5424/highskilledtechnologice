import React from 'react';
import SectionHeader from '../common/SectionHeader';
import ScrollReveal from '../common/ScrollReveal';
import { whyChooseUsPoints } from '../../data/companyData';
import { Shield, Sparkles, TrendingUp, Handshake } from 'lucide-react';

export default function WhyChooseUs() {
  const icons = [TrendingUp, Shield, Sparkles, Handshake];

  return (
    <section className="relative py-16 sm:py-20 md:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="OUR VALUE PROPOSITION"
          title="Why High Skilled"
          highlightTitle="Technologies?"
          subtitle="We combine software engineering discipline with business awareness to deliver enterprise solutions that scale seamlessly."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {whyChooseUsPoints.map((point, idx) => {
            const IconComponent = icons[idx] || Sparkles;
            return (
              <ScrollReveal key={point.number} delay={idx * 0.1} direction="up">
                <div className="p-8 rounded-2xl bg-white border border-slate-200/80 hover:border-sky-500/50 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1.5 flex flex-col justify-between shadow-sm">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="p-3 rounded-xl bg-slate-900 text-sky-400 group-hover:bg-sky-600 group-hover:text-white transition-colors duration-300 shadow-md">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="font-mono text-3xl font-extrabold text-slate-300 group-hover:text-sky-600 transition-colors">
                        {point.number}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-sky-600 transition-colors">
                      {point.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
