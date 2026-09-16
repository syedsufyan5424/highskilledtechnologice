import React from 'react';
import { companyInfo, services } from '../../data/companyData';
import { Code2, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#05070B] border-t border-[rgba(148,163,184,0.12)] text-[#94A3B8] pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[rgba(148,163,184,0.12)]">
          
          {/* Column 1: Brand & Description (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#home');
              }}
              className="flex items-center gap-2.5 group focus:outline-none py-1"
            >
              {/* </ > Code Symbol */}
              <span className="font-mono text-2xl sm:text-3xl font-black text-[#38BDF8] tracking-tighter transition-transform duration-300 group-hover:scale-110 select-none">
                &lt;/&gt;
              </span>
              <div className="flex items-center text-lg sm:text-xl font-extrabold tracking-tight">
                <span className="text-[#F8FAFC] group-hover:text-[#38BDF8] transition-colors">HighSkilled</span>
                <span className="text-[#38BDF8]">Technologies</span>
              </div>
            </a>

            <p className="text-xs text-[#94A3B8] leading-relaxed max-w-sm">
              High Skilled Technologies delivers reliable web application development, mobile app development, enterprise Java microservices, and Mendix low-code solutions for business growth.
            </p>

            {/* Social Icons SVG */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href={companyInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-[#111821] text-[#94A3B8] hover:text-[#38BDF8] hover:bg-[#17212C] transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>

              <a
                href={companyInfo.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-[#111821] text-[#94A3B8] hover:text-[#38BDF8] hover:bg-[#17212C] transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              <a
                href={companyInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-[#111821] text-[#94A3B8] hover:text-[#38BDF8] hover:bg-[#17212C] transition-colors"
                aria-label="GitHub"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
                </svg>
              </a>

              <a
                href={companyInfo.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-[#111821] text-[#94A3B8] hover:text-[#38BDF8] hover:bg-[#17212C] transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H7.5v-3H10V9.69c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.45 3h-2.33v6.8c4.56-.93 8-4.96 8-9.8z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-[#F8FAFC] uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2 text-xs">
              {['Home', 'About', 'Services', 'Technologies', 'Projects', 'Careers', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(`#${item.toLowerCase()}`);
                    }}
                    className="hover:text-[#38BDF8] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-[#F8FAFC] uppercase tracking-wider">Our Solutions</h4>
            <ul className="space-y-2 text-xs">
              {services.map((s) => (
                <li key={s.id}>
                  <a
                    href="#services"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick('#services');
                    }}
                    className="hover:text-[#38BDF8] transition-colors"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Details (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-[#F8FAFC] uppercase tracking-wider">Headquarters</h4>
            <div className="space-y-2.5 text-xs text-[#94A3B8]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#38BDF8] flex-shrink-0 mt-0.5" />
                <span>{companyInfo.contact.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#38BDF8] flex-shrink-0" />
                <span>{companyInfo.contact.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#38BDF8] flex-shrink-0" />
                <span>{companyInfo.contact.phone}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748B]">
          <div>
            © {currentYear} {companyInfo.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#home" onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }} className="hover:text-[#94A3B8] transition-colors">
              Privacy Policy
            </a>
            <a href="#home" onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }} className="hover:text-[#94A3B8] transition-colors">
              Terms of Service
            </a>
            <a href="#home" onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }} className="hover:text-[#94A3B8] transition-colors">
              Security Standard
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
