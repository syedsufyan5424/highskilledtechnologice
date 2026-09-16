import React from 'react';
import ScrollReveal from '../common/ScrollReveal';
import Button from '../common/Button';
import { Users, Code, Rocket } from 'lucide-react';

export default function Careers() {
  const pillars = [
    { title: "Continuous Learning", desc: "Access to latest frameworks, cloud certifications, and tech workshops.", icon: Code },
    { title: "Engineering Autonomy", desc: "Work on clean codebases with architecture ownership.", icon: Rocket },
    { title: "Real Business Impact", desc: "Build enterprise solutions for real clients that scale.", icon: Users }
  ];

  return (
    <section id="careers" className="relative py-16 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="relative rounded-3xl p-8 sm:p-12 overflow-hidden bg-slate-900 text-white shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              
              <div className="lg:col-span-7 space-y-4">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-sky-500/10 text-sky-400 border border-sky-500/20 shadow-sm">
                  JOIN OUR TEAM
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  Build the Future With Us
                </h2>
                <p className="text-base text-slate-300 leading-relaxed max-w-xl">
                  Join a passionate team focused on solving real business problems through modern technology, clean architecture, and continuous innovation.
                </p>

                <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {pillars.map(p => {
                    const IconComp = p.icon;
                    return (
                      <div key={p.title} className="p-3 rounded-xl bg-[#070A0F] border border-slate-800">
                        <IconComp className="w-4 h-4 text-sky-400 mb-1.5" />
                        <div className="text-xs font-bold text-white">{p.title}</div>
                        <div className="text-[11px] text-slate-400 mt-0.5">{p.desc}</div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col items-start lg:items-end justify-center space-y-3">
                <Button
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  size="lg"
                  showArrow
                  className="w-full sm:w-auto text-center"
                >
                  Explore Careers
                </Button>
                <span className="text-xs text-slate-400">
                  Send your resume to info@highskilledtechnologies.com
                </span>
              </div>

            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
