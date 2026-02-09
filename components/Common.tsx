
import React from 'react';

interface ShinyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export const ShinyButton: React.FC<ShinyButtonProps> = ({ children, className = '', ...props }) => {
  return (
    <button 
      className={`shiny-button animate-shine px-8 py-4 rounded-xl font-bold text-white shadow-2xl shadow-indigo-500/20 hover:shadow-indigo-500/40 transition-all duration-500 active:scale-95 flex items-center justify-center ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export const GlowBadge: React.FC<{ children: React.ReactNode; color?: 'indigo' | 'lime' }> = ({ children, color = 'indigo' }) => {
  const styles = {
    indigo: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20 shadow-indigo-500/10",
    lime: "bg-lime-cyber/10 text-lime-400 border-lime-cyber/20 shadow-lime-cyber/10"
  };
  
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase border ${styles[color]} shadow-[0_0_15px_rgba(0,0,0,0.1)]`}>
      {children}
    </span>
  );
};

export const SectionTitle: React.FC<{ 
  title: string; 
  subtitle?: string; 
  align?: 'center' | 'left' 
}> = ({ title, subtitle, align = 'center' }) => {
  return (
    <div className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 text-white leading-tight">
        {title}
      </h2>
      {subtitle && <p className="text-slate-500 text-lg max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  );
};
