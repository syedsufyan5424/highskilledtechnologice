import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './components/sections/Home';
import TrustStats from './components/sections/TrustStats';
import Clients from './components/sections/Clients';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Technologies from './components/sections/Technologies';
import WhyChooseUs from './components/sections/WhyChooseUs';
import Projects from './components/sections/Projects';
import Industries from './components/sections/Industries';
import Process from './components/sections/Process';
import Leadership from './components/sections/Leadership';
import Careers from './components/sections/Careers';
import Contact from './components/sections/Contact';
import BackToTop from './components/common/BackToTop';
import CustomCursor from './components/common/CustomCursor';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-[#F8FAFC] flex flex-col selection:bg-[#38BDF8]/30 selection:text-[#38BDF8]">
      {/* Custom Refined Desktop Cursor */}
      <CustomCursor />

      {/* Sticky Header Navbar */}
      <Navbar />

      {/* Main Page Flow */}
      <main className="flex-grow">
        <Home />
        <TrustStats />
        <About />
        <Services />
        <Technologies />
        <WhyChooseUs />
        <Projects />
        <Industries />
        <Process />
        <Clients />
        <Leadership />
        <Careers />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Back to Top Button */}
      <BackToTop />
    </div>
  );
}
