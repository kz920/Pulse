
import React from 'react';
import { CreditCard, Layers, Globe, ShieldCheck, Zap, MousePointer2, Send, CheckCircle2, MessageSquare, ArrowUpRight } from 'lucide-react';
import { SectionTitle } from './Common';
import { motion, Variants } from 'framer-motion';

const Features: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  return (
    <section id="product" className="py-32 relative overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-indigo/5 blur-[120px] rounded-full animate-blob pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-purple-500/5 blur-[120px] rounded-full animate-blob [animation-delay:4s] pointer-events-none"></div>

      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        <SectionTitle 
          title="Engineered for peak output." 
          subtitle="One unified workspace to eliminate the 'busy work' of creative management."
        />
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-12 gap-8 h-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Box 1: Centralized Command (Live Activity Feed) */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-8 bento-card rounded-[3rem] p-10 flex flex-col md:flex-row gap-10"
          >
            <div className="flex-1 relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-indigo/10 flex items-center justify-center mb-8 border border-indigo/20">
                <Layers className="text-indigo w-8 h-8" />
              </div>
              <h3 className="text-4xl font-black text-white mb-6 leading-tight">Centralized Command</h3>
              <p className="text-slate-400 text-xl max-w-sm leading-relaxed font-medium">
                Connect your entire studio workflow. Monitor real-time progress across every client milestone.
              </p>
            </div>
            
            <div className="flex-1 w-full flex flex-col justify-center space-y-4">
              <div className="bg-white/[0.03] border border-white/5 p-5 rounded-2xl flex items-center space-x-4 hover:bg-white/[0.06] transition-colors group">
                <div className="p-3 bg-indigo/20 rounded-xl">
                  <span className="text-indigo"><Send className="w-5 h-5" /></span>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <p className="text-sm font-bold text-white">Invoice Sent</p>
                    <span className="text-[10px] font-bold text-slate-500">2m ago</span>
                  </div>
                  <p className="text-xs text-slate-400">Acme Corp • $12,400.00</p>
                </div>
              </div>

              <div className="bg-white/[0.03] border border-white/5 p-5 rounded-2xl group hover:bg-white/[0.06] transition-colors">
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-amber-500/20 rounded-xl">
                      <Zap className="w-5 h-5 text-amber-500" />
                    </div>
                    <p className="text-sm font-bold text-white">Project 'Apollo'</p>
                  </div>
                  <span className="text-xs font-black text-indigo">80%</span>
                </div>
                <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                  <div className="bg-indigo h-full w-[80%] rounded-full shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
                </div>
              </div>

              <div className="bg-white/[0.03] border border-white/5 p-5 rounded-2xl flex items-center space-x-4 hover:bg-white/[0.06] transition-colors">
                <div className="p-3 bg-emerald-500/20 rounded-xl">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold text-white">Payment Received</p>
                  <p className="text-xs text-emerald-500 font-bold">$1,200.00 via Stripe</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Box 2: Instant Billing (Mini-Invoice Popout) */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-4 bento-card rounded-[3rem] p-10 flex flex-col justify-between group overflow-visible"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-lime-cyber/10 flex items-center justify-center mb-8 border border-lime-cyber/20">
                <CreditCard className="text-lime-cyber w-8 h-8" />
              </div>
              <h3 className="text-3xl font-black text-white mb-4 leading-tight">Instant Billing</h3>
              <p className="text-slate-400 font-medium leading-relaxed">Pixel-perfect invoices that command professional rates.</p>
            </div>
            
            <div className="relative mt-8 h-40">
              <div className="absolute bottom-0 left-0 w-full bg-slate-800 rounded-xl border border-white/10 p-4 shadow-2xl transform rotate-3 group-hover:rotate-0 group-hover:-translate-y-4 transition-all duration-500">
                <div className="flex justify-between items-start mb-4">
                  <div className="space-y-1">
                    <div className="h-2 w-16 bg-white/20 rounded"></div>
                    <div className="h-1.5 w-10 bg-white/10 rounded"></div>
                  </div>
                  <div className="paid-stamp text-[10px]">PAID</div>
                </div>
                <div className="space-y-2">
                  <div className="h-2 w-full bg-white/5 rounded"></div>
                  <div className="h-2 w-3/4 bg-white/5 rounded"></div>
                </div>
                <div className="mt-4 pt-4 border-t border-white/5 flex justify-between">
                  <div className="h-2 w-12 bg-white/10 rounded"></div>
                  <div className="h-2 w-16 bg-lime-cyber/40 rounded"></div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Box 3: Global Scale (Optimized Layout) */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-4 bento-card rounded-[3rem] p-10 flex flex-col"
          >
            <div className="relative z-20">
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 border border-white/10">
                <Globe className="text-white w-8 h-8" />
              </div>
              <h3 className="text-3xl font-black text-white mb-4 leading-tight">Global Scale</h3>
              <p className="text-slate-400 font-medium leading-relaxed mb-6">
                Collect payments in any currency, localized automatically.
              </p>
            </div>

            <div className="relative flex-1 flex items-center justify-center bg-white/[0.02] rounded-3xl border border-white/5 min-h-[160px]">
              {/* Removed overflow-hidden to ensure the bubble's shadow and body aren't clipped */}
              <svg viewBox="0 0 100 50" className="w-full h-auto opacity-20 scale-110 px-4">
                <path d="M10,25 Q30,10 50,25 T90,25" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-indigo" />
                <circle cx="20" cy="20" r="1.5" fill="#6366f1">
                  <animate attributeName="r" values="1.5;3;1.5" dur="2s" repeatCount="indefinite" />
                </circle>
                <circle cx="60" cy="15" r="1.5" fill="#6366f1">
                  <animate attributeName="r" values="1.5;3;1.5" dur="2s" repeatCount="indefinite" begin="0.5s" />
                </circle>
                <circle cx="85" cy="35" r="1.5" fill="#6366f1">
                  <animate attributeName="r" values="1.5;3;1.5" dur="2s" repeatCount="indefinite" begin="1s" />
                </circle>
              </svg>
              
              {/* Adjusted Positioning: Bottom right alignment within the map area */}
              <div className="absolute bottom-6 right-6 bg-indigo border border-indigo/40 px-4 py-2 rounded-xl shadow-[0_10px_30px_rgba(99,102,241,0.6)] animate-float z-30">
                <p className="text-[10px] font-black text-white uppercase tracking-wider flex items-center whitespace-nowrap">
                  Next Payout: <span className="text-lime-cyber ml-1">$4,500</span>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Box 4: Client Portal (Avatars & Chat) */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-8 bento-card rounded-[3rem] p-10 flex flex-col md:flex-row items-center gap-12"
          >
            <div className="flex-1 relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-indigo/10 flex items-center justify-center mb-8 border border-indigo/20">
                <MousePointer2 className="text-indigo w-8 h-8" />
              </div>
              <h3 className="text-4xl font-black text-white mb-6 leading-tight">Client Portal</h3>
              <p className="text-slate-400 text-xl font-medium leading-relaxed max-w-sm">
                Branded experiences for your top-tier clients. Everything shared, signed, and delivered in one place.
              </p>
            </div>

            <div className="flex-1 w-full bg-obsidian/50 rounded-3xl border border-white/5 p-8 relative min-h-[280px] flex flex-col justify-between overflow-visible">
              <div className="flex items-center justify-between">
                <div className="flex -space-x-4">
                  {['Sarah M.', 'James K.', 'Leo T.'].map((name, i) => (
                    <div key={i} className="relative group/avatar">
                      <div className={`w-14 h-14 rounded-2xl border-2 border-obsidian ring-2 ring-indigo/20 flex items-center justify-center font-black text-white text-lg ${['bg-indigo-500', 'bg-purple-600', 'bg-emerald-600'][i]}`}>
                        {name[0]}
                      </div>
                      <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-obsidian"></span>
                    </div>
                  ))}
                  <div className="w-14 h-14 rounded-2xl border-2 border-dashed border-white/20 flex items-center justify-center text-slate-500 hover:text-white transition-colors cursor-pointer">
                    +
                  </div>
                </div>
              </div>

              <div className="bg-indigo p-5 rounded-2xl rounded-tr-none shadow-2xl animate-float relative mt-12 z-20">
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-white text-indigo rounded-full flex items-center justify-center shadow-lg">
                  <MessageSquare className="w-4 h-4 fill-current" />
                </div>
                <p className="text-sm font-bold text-obsidian leading-snug">
                  "The new mockups are incredible. Just sent the final approval signature!"
                </p>
                <div className="mt-3 flex items-center space-x-2">
                  <div className="h-0.5 w-12 bg-obsidian/20 rounded"></div>
                  <span className="text-[10px] font-black text-obsidian/40 uppercase">Sarah M. • 2m ago</span>
                </div>
              </div>

              <div className="absolute top-6 right-6 text-slate-500 hover:text-white transition-colors">
                <ArrowUpRight className="w-6 h-6" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
