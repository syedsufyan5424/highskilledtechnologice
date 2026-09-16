import React from 'react';

export default function Logo({ isDarkBg = false, className = '' }) {
  const highSkilledColor = isDarkBg ? 'text-white' : 'text-slate-900';

  return (
    <div className={`inline-flex items-center gap-2 font-sans font-black select-none ${className}`}>
      {/* Code icon </ > */}
      <span className="font-mono text-xl sm:text-2xl font-black text-[#38BDF8] tracking-tighter leading-none flex items-center">
        &lt;/&gt;
      </span>

      {/* HighSkilledTechnologies text */}
      <div className="flex items-center text-lg sm:text-xl font-extrabold tracking-tight leading-none">
        <span className={`${highSkilledColor} transition-colors`}>HighSkilled</span>
        <span className="text-[#38BDF8]">Technologies</span>
      </div>
    </div>
  );
}
