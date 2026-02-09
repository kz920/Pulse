
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import { ShinyButton } from './components/Common';
import { ArrowRight } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-obsidian">
      <Navbar />
      
      <main>
        <Hero />
        <SocialProof />
        <Features />
        <Pricing />
        
        {/* Closing CTA */}
        <section className="py-40 relative">
          <div className="absolute inset-0 bg-indigo/5 pointer-events-none"></div>
          <div className="container mx-auto max-w-5xl px-6 text-center">
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8 leading-tight">
              Build your legacy <br /> with <span className="text-gradient">Pulse.</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12">
              Join thousands of creators who've transformed their passion into a scalable business infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <ShinyButton className="px-12 py-6 text-xl">
                Start your journey <ArrowRight className="ml-3 w-6 h-6" />
              </ShinyButton>
            </div>
            <p className="mt-8 text-slate-600 text-sm font-bold uppercase tracking-widest">
              14 days free • No credit card required • Cancel anytime
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
