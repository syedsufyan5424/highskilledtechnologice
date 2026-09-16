import React from 'react';

export default function Badge({ children, variant = 'cyan', className = '' }) {
  const variants = {
    cyan: 'bg-sky-500/10 text-sky-400 border-sky-500/20 shadow-sky-500/10',
    blue: 'bg-blue-500/10 text-blue-400 border-blue-500/20 shadow-blue-500/10',
    emerald: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20 shadow-emerald-500/10',
    purple: 'bg-purple-500/10 text-purple-400 border-purple-500/20 shadow-purple-500/10'
  };

  return (
    <span className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide border shadow-sm ${variants[variant]} ${className}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
      {children}
    </span>
  );
}
