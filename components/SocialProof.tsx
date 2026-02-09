
import React from 'react';
import { Cloud, Zap, Hexagon, Shield, Circle, Triangle, Square } from 'lucide-react';

const SocialProof: React.FC = () => {
  const brands = [
    { name: "Nebula", icon: <Cloud className="w-8 h-8" /> },
    { name: "Volt", icon: <Zap className="w-8 h-8" /> },
    { name: "Apex", icon: <Triangle className="w-8 h-8" /> },
    { name: "Core", icon: <Hexagon className="w-8 h-8" /> },
    { name: "Guard", icon: <Shield className="w-8 h-8" /> },
    { name: "Orbit", icon: <Circle className="w-8 h-8" /> },
    { name: "Box", icon: <Square className="w-8 h-8" /> }
  ];

  return (
    <section className="py-24 border-y border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 mb-16">
        <p className="text-center text-slate-500 text-xs font-black uppercase tracking-[0.4em]">
          Engineered for teams at
        </p>
      </div>
      
      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee whitespace-nowrap flex items-center space-x-16 md:space-x-32 pr-32">
          {[...brands, ...brands].map((brand, idx) => (
            <div 
              key={idx} 
              className="flex items-center space-x-4 opacity-30 hover:opacity-100 transition-opacity duration-500 grayscale hover:grayscale-0 cursor-pointer"
            >
              <div className="text-white">
                {brand.icon}
              </div>
              <span className="text-white text-2xl font-black tracking-tighter uppercase">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
