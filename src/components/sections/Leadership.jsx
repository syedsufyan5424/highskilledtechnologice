import React from 'react';
import SectionHeader from '../common/SectionHeader';
import ScrollReveal from '../common/ScrollReveal';
import { leadershipMembers } from '../../data/companyData';
import { ArrowUpRight, User, Users } from 'lucide-react';

export default function Leadership() {
  // Theme color accents matching the reference design style
  const cardThemes = [
    {
      ringBorder: 'border-sky-400',
      ringBg: 'bg-sky-50',
      badgeBg: 'bg-sky-500',
      accentBar: 'bg-gradient-to-r from-sky-400 to-sky-600',
      nodeColor: 'bg-sky-500'
    },
    {
      ringBorder: 'border-indigo-500',
      ringBg: 'bg-indigo-50',
      badgeBg: 'bg-indigo-600',
      accentBar: 'bg-gradient-to-r from-indigo-500 to-indigo-700',
      nodeColor: 'bg-indigo-500'
    },
    {
      ringBorder: 'border-blue-500',
      ringBg: 'bg-blue-50',
      badgeBg: 'bg-blue-600',
      accentBar: 'bg-gradient-to-r from-blue-500 to-blue-700',
      nodeColor: 'bg-blue-500'
    }
  ];

  return (
    <section id="leadership" className="relative py-16 sm:py-20 md:py-24 bg-white border-b border-slate-100 overflow-hidden">
      {/* Ambient Radial Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-sky-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header with Decorative Graphic */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12">
          <SectionHeader
            eyebrow="LEADERSHIP"
            title="People Behind Our"
            highlightTitle="Vision"
            subtitle="Guiding High Skilled Technologies with strategic vision, enterprise engineering focus, and commitment to client success."
            align="left"
            className="mb-0"
          />

          {/* Decorative Enterprise Team Icon Badge (Matching Reference Graphic) */}
          <div className="hidden lg:flex items-center gap-3 px-5 py-3 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-200 flex items-center justify-center text-sky-600">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900">Enterprise Leadership</div>
              <div className="text-[11px] font-medium text-slate-500">Executive Engineering Board</div>
            </div>
          </div>
        </div>

        {/* Timeline Connecting Line Track (Desktop Only) */}
        <div className="relative mt-8">
          <div className="hidden lg:block absolute top-[140px] left-16 right-16 h-1 bg-slate-200/80 rounded-full z-0" />

          {/* Responsive Member Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {leadershipMembers.map((member, idx) => {
              const theme = cardThemes[idx % cardThemes.length];
              const initials = member.name
                .split(' ')
                .map((n) => n[0])
                .join('')
                .slice(0, 2);

              return (
                <ScrollReveal key={member.id} delay={idx * 0.15} direction="up">
                  <div className="group relative h-full rounded-3xl bg-white p-6 sm:p-8 border border-slate-200/80 hover:border-sky-500/50 hover:shadow-2xl hover:shadow-sky-500/10 transition-all duration-300 flex flex-col items-center text-center hover:-translate-y-2 shadow-sm">
                    
                    {/* Connecting Node Dot (Desktop Timeline Track Node) */}
                    <div className={`hidden lg:block absolute -top-4 w-4 h-4 rounded-full border-2 border-white shadow-md z-20 ${theme.nodeColor}`} />

                    {/* Member ID Badge */}
                    <span className={`absolute top-4 left-4 px-2.5 py-1 rounded-md text-[11px] font-mono font-bold text-white shadow-xs ${theme.badgeBg}`}>
                      {member.number}
                    </span>

                    {/* Styled Circular Ring Profile Avatar */}
                    <div className={`w-36 h-36 sm:w-44 sm:h-44 rounded-full p-1.5 shadow-lg border-4 transition-transform duration-500 group-hover:scale-105 mb-6 flex items-center justify-center ${theme.ringBorder} ${theme.ringBg}`}>
                      {member.image ? (
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full rounded-full object-cover object-top shadow-inner"
                        />
                      ) : (
                        <div className="w-full h-full rounded-full bg-slate-900 flex flex-col items-center justify-center text-slate-400">
                          <User className="w-14 h-14 text-slate-500 group-hover:text-sky-400 transition-colors" />
                          <span className="text-xs font-mono font-bold text-sky-400 mt-1">
                            {initials}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Designation & Name */}
                    <p className="text-xs font-extrabold uppercase tracking-widest text-sky-600 mb-1">
                      {member.designation}
                    </p>
                    
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 group-hover:text-sky-600 transition-colors">
                      {member.name}
                    </h3>

                    {/* Colored Accent Divider Bar */}
                    <div className={`w-12 h-1 rounded-full ${theme.accentBar} mb-4 group-hover:w-20 transition-all duration-300`} />

                    {/* Role Focus Description Subtext */}
                    <p className="text-xs text-slate-600 leading-relaxed max-w-xs mb-6 px-1 font-normal">
                      {member.description}
                    </p>

                    {/* LinkedIn Link Action */}
                    <div className="mt-auto pt-2 w-full flex justify-center">
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`LinkedIn profile of ${member.name}`}
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-50 hover:bg-sky-600 text-slate-700 hover:text-white border border-slate-200 hover:border-sky-500 transition-all duration-300 font-bold text-xs shadow-xs group/btn"
                      >
                        <svg className="w-4 h-4 fill-[#0A66C2] group-hover/btn:fill-white transition-colors flex-shrink-0" viewBox="0 0 24 24">
                          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                        </svg>
                        <span>Connect on LinkedIn</span>
                        <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 flex-shrink-0" />
                      </a>
                    </div>

                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
