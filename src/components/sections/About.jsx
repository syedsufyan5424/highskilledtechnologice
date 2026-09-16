import React from 'react';
import ScrollReveal from '../common/ScrollReveal';
import Button from '../common/Button';
import { companyInfo } from '../../data/companyData';
import { Target, Layers } from 'lucide-react';

export default function About() {
  const highlights = [
    { title: "Full-Lifecycle Engineering", desc: "From concept and wireframing to deployment, monitoring, and scaling." },
    { title: "Agile & Transparent Delivery", desc: "Weekly sprint demos, clear technical roadmaps, and predictable milestones." },
    { title: "Enterprise High Uptime SLA", desc: "Built with microservices, security compliance, and clean modular code." }
  ];

  return (
    <section id="about" className="relative py-16 sm:py-20 md:py-24 bg-slate-50/70 border-y border-slate-200/80 overflow-hidden">
      {/* Subtle Ambient Radial Lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-sky-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Tech Visual Container */}
          <div className="lg:col-span-6">
            <ScrollReveal direction="right">
              <div className="relative rounded-3xl p-1 bg-gradient-to-tr from-sky-500/20 via-blue-500/10 to-indigo-500/20 border border-slate-200/80 shadow-xl">
                <div className="relative rounded-2xl overflow-hidden bg-[#070A0F] p-6 sm:p-8 space-y-5">
                  <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-sky-500/10 flex items-center justify-center text-sky-400">
                        <Layers className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white">High Skilled Architecture</div>
                        <div className="text-xs text-slate-400">Enterprise Solution Standards</div>
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold">
                      Production Verified
                    </span>
                  </div>

                  <div className="space-y-3">
                    <div className="p-3.5 rounded-xl bg-[#111821] border border-slate-800 flex items-start gap-3.5">
                      <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400 font-mono font-bold text-xs">
                        01
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-white">Modern Full-Stack Engineering</h4>
                        <p className="text-[11px] text-slate-400 mt-0.5">MERN, MEAN & Enterprise Java Spring Boot microservices.</p>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#111821] border border-slate-800 flex items-start gap-3.5">
                      <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 font-mono font-bold text-xs">
                        02
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-white">Cross-Platform Mobile Apps</h4>
                        <p className="text-[11px] text-slate-400 mt-0.5">Flutter & React Native mobile applications with native UI performance.</p>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#111821] border border-slate-800 flex items-start gap-3.5">
                      <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 font-mono font-bold text-xs">
                        03
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-white">Custom Systems & Cloud DevOps</h4>
                        <p className="text-[11px] text-slate-400 mt-0.5">Custom enterprise portals & AWS/Azure automated pipelines.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Content Column */}
          <div className="lg:col-span-6 space-y-5">
            <ScrollReveal direction="left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-extrabold tracking-widest uppercase bg-sky-50 text-sky-700 border border-sky-200/80 shadow-sm mb-1">
                WHO WE ARE
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                {companyInfo.aboutHeading}
              </h2>
              
              <p className="text-base text-slate-700 leading-relaxed pt-1">
                {companyInfo.aboutDescription1}
              </p>
              
              <p className="text-sm text-slate-600 leading-relaxed">
                {companyInfo.aboutDescription2}
              </p>

              <div className="pt-2 space-y-3">
                {highlights.map((h) => (
                  <div key={h.title} className="flex items-start gap-3">
                    <div className="p-1 rounded-md bg-sky-100 text-sky-600 mt-0.5 flex-shrink-0">
                      <Target className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs sm:text-sm font-bold text-slate-900">{h.title}: </span>
                      <span className="text-xs sm:text-sm text-slate-600">{h.desc}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Button
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  variant="secondary"
                  showArrow
                  className="w-full sm:w-auto text-center"
                >
                  Learn More
                </Button>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
