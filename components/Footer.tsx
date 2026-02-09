
import React from 'react';
import { Activity, Twitter, Github, Linkedin, Slack } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-obsidian border-t border-white/5 pt-32 pb-16">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-16 mb-24">
          <div className="col-span-1 md:col-span-2">
            <a href="#" className="flex items-center space-x-2 mb-8 group">
              <div className="bg-indigo p-1.5 rounded-lg group-hover:scale-110 transition-transform">
                <Activity className="w-5 h-5 text-obsidian" />
              </div>
              <span className="text-2xl font-black text-white tracking-tighter">PULSE</span>
            </a>
            <p className="text-slate-500 text-lg leading-relaxed mb-8 max-w-xs">
              The operating system for the modern creative freelancer.
            </p>
            <div className="flex space-x-5">
              {[Twitter, Github, Linkedin, Slack].map((Icon, i) => (
                <a key={i} href="#" className="p-2 border border-white/5 bg-white/5 rounded-xl text-slate-400 hover:text-indigo hover:border-indigo/50 transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Product</h4>
            <ul className="space-y-5">
              {['Features', 'Templates', 'Security', 'Pricing'].map(item => (
                <li key={item}><a href="#" className="text-slate-500 hover:text-white transition-colors text-sm font-medium">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Platform</h4>
            <ul className="space-y-5">
              {['API Docs', 'Integrations', 'SDKs', 'App Store'].map(item => (
                <li key={item}><a href="#" className="text-slate-500 hover:text-white transition-colors text-sm font-medium">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Company</h4>
            <ul className="space-y-5">
              {['About', 'Blog', 'Careers', 'Contact'].map(item => (
                <li key={item}><a href="#" className="text-slate-500 hover:text-white transition-colors text-sm font-medium">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Status</h4>
            <div className="flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-full w-fit">
               <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
               <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">All Systems Operational</span>
            </div>
          </div>
        </div>
        
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-slate-600 text-xs font-medium">
            © 2024 Pulse Operations Inc. All rights reserved.
          </p>
          <div className="flex items-center space-x-8">
            <a href="#" className="text-slate-600 hover:text-white text-xs font-medium transition-colors">Privacy</a>
            <a href="#" className="text-slate-600 hover:text-white text-xs font-medium transition-colors">Terms</a>
            <a href="#" className="text-slate-600 hover:text-white text-xs font-medium transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
