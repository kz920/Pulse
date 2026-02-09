
import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Play, CheckCircle2, TrendingUp, Users } from 'lucide-react';
import { ShinyButton, GlowBadge } from './Common';

const Hero: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section ref={sectionRef} className="relative pt-40 pb-20 lg:pt-56 lg:pb-32 overflow-hidden">
      {/* Interactive Mouse Glow */}
      <div 
        className="pointer-events-none absolute -z-10 w-[800px] h-[800px] rounded-full opacity-20 transition-opacity duration-1000 group-hover:opacity-30"
        style={{
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.4) 0%, transparent 70%)',
          left: mousePos.x - 400,
          top: mousePos.y - 400,
        }}
      />

      {/* Abstract Grid Background */}
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_center,_rgba(99,102,241,0.05)_0%,_transparent_60%)]"></div>
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="relative z-10 animate-in fade-in slide-in-from-left-8 duration-700">
            <GlowBadge color="lime">Powered by Pulse 4.0</GlowBadge>
            
            <h1 className="mt-8 text-6xl lg:text-7xl font-black tracking-tighter text-white leading-[0.95] mb-8">
              Stop chasing invoices.<br />
              <span className="text-gradient">Start scaling your studio.</span>
            </h1>
            
            <p className="text-xl text-slate-400 mb-10 max-w-lg leading-relaxed font-medium">
              The high-fidelity workspace for creative operators. Automate the boring parts of your business so you can stay in your flow state.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
              <ShinyButton className="text-lg px-10">
                Get Started <ArrowRight className="ml-2 w-5 h-5" />
              </ShinyButton>
              <button className="flex items-center justify-center px-8 py-4 rounded-xl border border-white/10 text-white font-bold hover:bg-white/5 transition-all">
                <Play className="mr-2 w-5 h-5 fill-current" /> Watch Demo
              </button>
            </div>

            <div className="flex flex-wrap gap-x-8 gap-y-4">
              {['14-day free trial', 'Instant payouts', 'ISO 27001 Certified'].map((text) => (
                <div key={text} className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-lime-cyber" />
                  <span className="text-slate-500 text-sm font-semibold tracking-wide uppercase">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right UI Mockup */}
          <div className="relative animate-in fade-in slide-in-from-right-12 duration-1000">
            <div className="relative group animate-float">
              {/* Glow behind frame */}
              <div className="absolute -inset-10 bg-indigo/15 blur-[80px] rounded-full group-hover:bg-indigo/25 transition-all duration-700"></div>
              
              {/* Main App Frame */}
              <div className="relative bg-obsidian rounded-[2rem] border border-white/10 p-2 shadow-2xl overflow-hidden">
                <div className="bg-[#0a0a0a] rounded-[1.75rem] overflow-hidden border border-white/5 shadow-inner">
                  {/* Title bar */}
                  <div className="h-10 w-full bg-[#121212] border-b border-white/5 flex items-center justify-between px-6">
                    <div className="flex space-x-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
                    </div>
                    <div className="text-[10px] text-slate-500 font-bold tracking-widest uppercase">pulse_workspace_01</div>
                    <div className="w-10"></div>
                  </div>

                  {/* Sidebar + Main */}
                  <div className="flex">
                    {/* Sidebar Mock */}
                    <div className="w-20 border-r border-white/5 p-4 space-y-6 flex flex-col items-center">
                      {[1, 2, 3, 4].map(i => (
                        <div key={i} className={`w-8 h-8 rounded-xl ${i === 1 ? 'bg-indigo' : 'bg-white/5'} border border-white/10`}></div>
                      ))}
                    </div>

                    {/* Content Mock */}
                    <div className="flex-1 p-6">
                      <div className="flex justify-between items-center mb-8">
                        <div>
                          <h4 className="text-white text-lg font-bold">Project Velocity</h4>
                          <p className="text-slate-500 text-xs">Quarterly Overview</p>
                        </div>
                        <div className="flex -space-x-3">
                           <div className="w-8 h-8 rounded-full border-2 border-[#0a0a0a] bg-indigo-500 flex items-center justify-center text-[10px] font-bold">JD</div>
                           <div className="w-8 h-8 rounded-full border-2 border-[#0a0a0a] bg-purple-500 flex items-center justify-center text-[10px] font-bold">SK</div>
                           <div className="w-8 h-8 rounded-full border-2 border-[#0a0a0a] bg-emerald-500 flex items-center justify-center text-[10px] font-bold">AM</div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-6">
                        {/* Bar Chart Mock */}
                        <div className="bg-white/5 border border-white/5 rounded-2xl p-4 flex flex-col justify-end">
                           <div className="flex items-end justify-between h-24 space-x-2">
                              {[35, 65, 45, 90, 55, 75].map((h, i) => (
                                <div key={i} className="flex-1 rounded-t-sm transition-all duration-1000" style={{ height: `${h}%`, backgroundColor: i === 3 ? '#d9f99d' : '#333' }}></div>
                              ))}
                           </div>
                           <div className="mt-4 flex justify-between items-center">
                              <span className="text-[10px] text-slate-500 font-bold">EFFICIENCY</span>
                              <TrendingUp className="w-3 h-3 text-lime-cyber" />
                           </div>
                        </div>

                        {/* Status Card Mock */}
                        <div className="bg-white/5 border border-white/5 rounded-2xl p-4 flex flex-col justify-center items-center text-center">
                           <div className="px-4 py-1.5 bg-lime-cyber/20 border border-lime-cyber/30 rounded-full mb-2">
                              <span className="text-[10px] font-black text-lime-cyber uppercase tracking-widest">Status: Completed</span>
                           </div>
                           <p className="text-white font-bold text-sm">Design Sprint v2.4</p>
                           <p className="text-slate-500 text-[10px] mt-1">Delivered 4h ago</p>
                        </div>
                      </div>

                      {/* Wide Table Mock */}
                      <div className="bg-white/5 border border-white/5 rounded-2xl p-4 space-y-3">
                         <div className="h-2 w-full bg-white/10 rounded"></div>
                         <div className="h-2 w-3/4 bg-white/10 rounded"></div>
                         <div className="h-2 w-1/2 bg-white/10 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floaties */}
              <div className="absolute -top-12 -right-12 bg-lime-cyber text-obsidian px-6 py-4 rounded-2xl font-black text-xl shadow-2xl rotate-6 group-hover:rotate-0 transition-all duration-700">
                +42.8%
              </div>
              <div className="absolute -bottom-8 -left-8 glass-navbar border border-white/10 px-6 py-5 rounded-3xl shadow-2xl -rotate-3 group-hover:rotate-0 transition-all duration-700">
                <div className="flex items-center space-x-4">
                   <div className="w-12 h-12 rounded-2xl bg-indigo/20 flex items-center justify-center">
                      <Users className="text-indigo w-6 h-6" />
                   </div>
                   <div>
                      <div className="text-white font-bold text-sm leading-none mb-1">Collaborators</div>
                      <div className="text-slate-500 text-[10px] font-bold tracking-widest uppercase">8 active now</div>
                   </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
