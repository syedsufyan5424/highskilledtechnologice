import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-50 p-3.5 rounded-full bg-slate-900/90 text-sky-400 border border-sky-500/30 hover:bg-sky-500 hover:text-white hover:border-sky-400 shadow-xl shadow-sky-500/10 transition-all duration-300 backdrop-blur-md cursor-pointer hover:scale-110"
    >
      <ChevronUp className="w-5 h-5" />
    </button>
  );
}
