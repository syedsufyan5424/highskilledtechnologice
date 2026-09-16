import React from 'react';
import SectionHeader from '../common/SectionHeader';
import ScrollReveal from '../common/ScrollReveal';
import { processSteps } from '../../data/companyData';

export default function Process() {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 bg-slate-50/70 border-b border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="OUR WORKFLOW"
          title="From Idea to"
          highlightTitle="Measurable Impact"
          subtitle="A proven software engineering methodology that delivers scalable digital products on time and within budget."
        />

        {/* Timeline (Horizontal on Desktop, Vertical on Mobile) */}
        <div className="relative mt-10">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-0.5 bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 relative z-10">
            {processSteps.map((step, idx) => (
              <ScrollReveal key={step.step} delay={idx * 0.1} direction="up">
                <div className="group relative h-full rounded-2xl bg-white p-6 border border-slate-200/80 hover:border-sky-500/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 shadow-sm">
                  
                  <div>
                    {/* Step Number Badge */}
                    <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 group-hover:bg-sky-600 group-hover:border-sky-500 flex items-center justify-center font-mono text-lg font-black text-sky-400 group-hover:text-white mb-5 transition-all duration-300 shadow-md">
                      {step.step}
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-sky-600 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-[11px] font-extrabold uppercase tracking-wider text-sky-600 mb-3">
                      {step.subtitle}
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                    <span>Phase {idx + 1}</span>
                    <span className="text-sky-600 font-bold">Step {step.step}</span>
                  </div>

                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
