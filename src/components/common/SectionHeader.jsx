import React from 'react';

export default function SectionHeader({
  eyebrow,
  title,
  highlightTitle,
  subtitle,
  align = 'center',
  className = ''
}) {
  const alignmentClass = align === 'left' ? 'text-left items-start' : 'text-center items-center mx-auto';

  return (
    <div className={`flex flex-col max-w-3xl mb-14 ${alignmentClass} ${className}`}>
      {eyebrow && (
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-extrabold tracking-widest uppercase bg-sky-50 text-sky-700 border border-sky-200/80 shadow-xs mb-3.5">
          <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse" />
          {eyebrow}
        </span>
      )}
      
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-4 leading-tight">
        {title}{' '}
        {highlightTitle && (
          <span className="bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
            {highlightTitle}
          </span>
        )}
      </h2>
      
      {subtitle && (
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
}
