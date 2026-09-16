import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  href,
  className = '',
  icon: Icon,
  showArrow = false,
  type = 'button',
  disabled = false,
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#38BDF8] focus:ring-offset-2 focus:ring-offset-[#070A0F] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed group';

  const sizes = {
    sm: 'text-xs px-4 py-2.5 gap-1.5',
    md: 'text-sm px-6 py-3.5 gap-2',
    lg: 'text-base px-7 py-4 gap-2.5 font-bold'
  };

  const variants = {
    // Primary: Electric Azure #38BDF8 background, dark text #070A0F
    primary: 'bg-[#38BDF8] hover:bg-[#60A5FA] text-[#070A0F] shadow-lg shadow-sky-500/20 hover:shadow-sky-400/30 hover:-translate-y-0.5 border border-sky-300/40',
    // Secondary: Crisp black text, solid background, light highlighted border with subtle sky glow on hover
    secondary: 'bg-white text-slate-900 hover:text-sky-600 border border-slate-300 hover:border-sky-500 hover:bg-sky-50/50 shadow-sm hover:shadow-md hover:shadow-sky-500/10 hover:-translate-y-0.5',
    // Outline: Transparent background, black text, light highlighted border
    outline: 'bg-transparent text-slate-900 hover:text-sky-600 border border-slate-300 hover:border-sky-500 hover:bg-sky-50/40 hover:-translate-y-0.5',
    // Ghost: Transparent background, dark slate text
    ghost: 'bg-transparent text-slate-800 hover:text-sky-600 hover:bg-slate-100/80'
  };

  const content = (
    <>
      {Icon && <Icon className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />}
      <span>{children}</span>
      {showArrow && (
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
      )}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={`${baseStyles} ${sizes[size]} ${variants[variant]} ${className}`}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${sizes[size]} ${variants[variant]} ${className}`}
      {...props}
    >
      {content}
    </button>
  );
}
