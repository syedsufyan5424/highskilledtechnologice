import React from 'react';
import { motion } from 'framer-motion';
import Button from '../common/Button';
import HeroVisual from './HeroVisual';
import { companyInfo } from '../../data/companyData';
import { ShieldCheck, Zap, CheckCircle2 } from 'lucide-react';

export default function Home() {
  const handleScrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative pt-24 sm:pt-28 md:pt-32 pb-16 md:pb-20 overflow-hidden bg-white bg-tech-grid border-b border-slate-100">
      {/* Subtle Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-sky-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Hero Content Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 text-left space-y-5"
          >
            {/* Master Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-extrabold tracking-widest uppercase bg-sky-50 text-sky-700 border border-sky-200/80 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
              ENTERPRISE ENGINEERING • DIGITAL TRANSFORMATION
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15]">
              Technology That Moves{' '}
              <span className="bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Business Forward.
              </span>
            </h1>

            {/* Supporting Subtext */}
            <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
              {companyInfo.heroSubheadline}
            </p>

            {/* Primary & Secondary CTAs (Responsive buttons) */}
            <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <Button
                size="lg"
                showArrow
                onClick={() => handleScrollTo('#contact')}
                className="w-full sm:w-auto text-center"
              >
                Start a Conversation
              </Button>
              
              <Button
                variant="secondary"
                size="lg"
                onClick={() => handleScrollTo('#services')}
                className="w-full sm:w-auto text-center"
              >
                Explore Solutions
              </Button>
            </div>

            {/* Enterprise Trust Metrics & Badges */}
            <div className="pt-5 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs font-semibold text-slate-700">
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200/70 shadow-xs">
                <ShieldCheck className="w-4 h-4 text-sky-600 flex-shrink-0" />
                <span>Enterprise Architecture</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200/70 shadow-xs">
                <Zap className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>99.99% Guaranteed SLA</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200/70 shadow-xs col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-indigo-600 flex-shrink-0" />
                <span>24/7 Technical Support</span>
              </div>
            </div>
          </motion.div>

          {/* Right Hero Enterprise Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5"
          >
            <HeroVisual />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
