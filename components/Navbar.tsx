
import React, { useState, useEffect } from 'react';
import { Activity, ArrowRight, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Product', href: '#product' },
    { name: 'Enterprise', href: '#enterprise' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Docs', href: '#docs' },
  ];

  return (
    <>
      <nav className="fixed top-6 left-0 right-0 z-[100] px-6">
        <div className={`container mx-auto max-w-7xl flex items-center justify-between px-6 md:px-8 py-4 rounded-2xl transition-all duration-500 ${scrolled || mobileMenuOpen ? 'glass-navbar shadow-[0_20px_50px_rgba(0,0,0,0.5)]' : 'bg-transparent'}`}>
          
          {/* Logo */}
          <a href="#" className="flex items-center space-x-3 group z-[110]">
            <div className="bg-indigo p-2 rounded-xl group-hover:rotate-12 transition-transform shadow-[0_0_20px_rgba(99,102,241,0.3)]">
              <Activity className="w-5 h-5 md:w-6 md:h-6 text-obsidian" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-xl md:text-2xl font-black text-white tracking-tighter">PULSE</span>
              <span className="text-[10px] font-black text-indigo bg-indigo/10 px-1.5 py-0.5 rounded ml-auto mt-0.5 border border-indigo/20">v4.0</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-slate-400 hover:text-white transition-all text-xs font-extrabold uppercase tracking-widest hover:tracking-[0.2em]"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4 md:space-x-6">
            <a href="#" className="hidden lg:block text-sm font-extrabold text-white/60 hover:text-white transition-colors uppercase tracking-widest">Login</a>
            
            <div className="hidden sm:block">
              <button className="shimmer-button px-6 py-2.5 md:px-7 md:py-3 rounded-xl text-obsidian font-black text-sm transition-all flex items-center space-x-2 bg-white hover:scale-105 active:scale-95 shadow-[0_10px_30px_rgba(255,255,255,0.1)] group">
                <span className="text-white">Get Started</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Hamburger Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-white hover:bg-white/5 rounded-xl transition-colors z-[110]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "circOut" }}
            className="fixed inset-0 z-[90] bg-obsidian pt-32 px-10 flex flex-col md:hidden"
          >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex flex-col space-y-8">
                {navLinks.map((link, i) => (
                  <motion.a
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-4xl font-black text-white tracking-tighter hover:text-indigo transition-colors"
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>

              <div className="mt-auto pb-16 space-y-6">
                <div className="h-px bg-white/5 w-full"></div>
                <div className="flex flex-col space-y-4">
                  <a href="#" className="text-xl font-bold text-slate-400 hover:text-white transition-colors">Login to account</a>
                  <button className="shimmer-button w-full py-5 rounded-2xl text-white font-black text-xl flex items-center justify-center space-x-3 active:scale-95 transition-transform">
                    <span>Get Started Now</span>
                    <ArrowRight className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
