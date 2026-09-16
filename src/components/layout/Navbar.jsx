import React, { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import Button from '../common/Button';
import { companyInfo } from '../../data/companyData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Technologies', href: '#technologies' },
    { name: 'Projects', href: '#projects' },
    { name: 'Clients', href: '#clients' },
    { name: 'Leadership', href: '#leadership' },
    { name: 'Careers', href: '#careers' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        mobileMenuOpen || scrolled
          ? 'bg-white py-3.5 border-b border-slate-200 shadow-md'
          : 'bg-white/90 backdrop-blur-md py-4 border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#home');
          }}
          className="flex items-center gap-2.5 group focus:outline-none py-1"
        >
          {/* </ > Code Symbol */}
          <span className="font-mono text-2xl sm:text-3xl font-black text-sky-500 tracking-tighter transition-transform duration-300 group-hover:scale-110 select-none">
            &lt;/&gt;
          </span>
          <div className="flex items-center text-lg sm:text-xl font-extrabold tracking-tight">
            <span className="text-slate-900 group-hover:text-sky-600 transition-colors">HighSkilled</span>
            <span className="text-sky-500">Technologies</span>
          </div>
        </a>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-1.5 bg-slate-100/70 p-1.5 rounded-full border border-slate-200/80 shadow-xs">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`px-4 py-2 text-xs font-semibold rounded-full transition-all duration-300 ${
                  isActive
                    ? 'bg-white text-sky-600 font-bold shadow-sm ring-1 ring-slate-200'
                    : 'text-slate-700 hover:text-sky-600'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Mobile Hamburger Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2.5 rounded-xl bg-slate-100 text-slate-800 border border-slate-200 hover:bg-slate-200 hover:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all cursor-pointer"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Responsive Mobile Drawer Menu (Solid Pure White Theme) */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[64px] bottom-0 z-40 bg-white border-b border-slate-200 flex flex-col justify-between p-6 overflow-y-auto shadow-2xl">
          
          <nav className="flex flex-col space-y-2 pt-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`px-4 py-3.5 text-base font-semibold rounded-xl transition-all ${
                    isActive
                      ? 'bg-sky-50 text-sky-600 font-bold border border-sky-200 shadow-sm'
                      : 'text-slate-700 hover:bg-slate-100 hover:text-sky-600'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          <div className="pt-6 pb-4 border-t border-slate-200 flex flex-col gap-3">
            <Button
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact');
              }}
              size="lg"
              showArrow
              className="w-full text-center"
            >
              Start a Conversation
            </Button>
            <div className="text-center text-xs text-slate-500 pt-2">
              High Skilled Technologies • Enterprise Software
            </div>
          </div>

        </div>
      )}
    </header>
  );
}
