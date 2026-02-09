
import React, { useState } from 'react';
import { Check, Info } from 'lucide-react';
import { SectionTitle, ShinyButton } from './Common';

const Pricing: React.FC = () => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');

  const plans = [
    {
      name: "Starter",
      monthly: "$0",
      yearly: "$0",
      description: "Perfect for exploring the platform.",
      features: ["3 Active Projects", "Pulse Dashboard", "Secure Payments", "Email Support"],
      cta: "Get Started Free"
    },
    {
      name: "Professional",
      monthly: "$29",
      yearly: "$24",
      description: "Everything a growing freelancer needs.",
      features: ["Unlimited Projects", "Custom Domain", "Tax Automation", "Priority Support", "Client CRM"],
      cta: "Start 14-Day Trial",
      popular: true
    },
    {
      name: "Enterprise",
      monthly: "Custom",
      yearly: "Custom",
      description: "Scaling for agencies and studios.",
      features: ["Multi-user Access", "White Labeling", "Custom Contracts", "Account Manager", "SLA Guarantee"],
      cta: "Contact Sales"
    }
  ];

  return (
    <section id="pricing" className="py-32 relative">
      <div className="container mx-auto max-w-7xl px-6">
        <SectionTitle 
          title="Scale at your own pace." 
          subtitle="Pricing that scales with your creative journey. Transparent, fair, and simple."
        />

        {/* Toggle */}
        <div className="flex items-center justify-center mb-16">
          <div className="bg-slate-900 border border-white/10 p-1 rounded-2xl flex relative overflow-hidden">
            <button 
              onClick={() => setBillingPeriod('monthly')}
              className={`px-8 py-3 rounded-xl text-sm font-bold transition-all relative z-10 ${billingPeriod === 'monthly' ? 'text-obsidian' : 'text-slate-500 hover:text-white'}`}
            >
              Monthly
            </button>
            <button 
              onClick={() => setBillingPeriod('yearly')}
              className={`px-8 py-3 rounded-xl text-sm font-bold transition-all relative z-10 ${billingPeriod === 'yearly' ? 'text-obsidian' : 'text-slate-500 hover:text-white'}`}
            >
              Yearly
            </button>
            <div 
              className={`absolute top-1 bottom-1 w-[calc(50%-4px)] bg-white rounded-xl transition-all duration-300 ease-out ${billingPeriod === 'yearly' ? 'translate-x-[calc(100%+4px)]' : 'translate-x-0'}`}
            ></div>
          </div>
          {billingPeriod === 'yearly' && (
            <span className="ml-4 text-lime-cyber text-xs font-black uppercase tracking-widest">Save 20%</span>
          )}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div 
              key={plan.name}
              className={`relative p-8 rounded-[2.5rem] border transition-all duration-500 ${plan.popular ? 'bg-slate-900 border-indigo shadow-2xl shadow-indigo/20 scale-105 z-10' : 'bg-obsidian border-white/10 hover:border-white/20'}`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-10 -translate-y-1/2 bg-indigo text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.2em]">
                  Recommended
                </div>
              )}
              
              <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
              <div className="flex items-baseline mb-6">
                <span className="text-5xl font-black text-white">{billingPeriod === 'monthly' ? plan.monthly : plan.yearly}</span>
                {plan.monthly !== 'Custom' && <span className="text-slate-500 ml-2 font-bold">/mo</span>}
              </div>
              <p className="text-slate-400 text-sm mb-8 leading-relaxed h-12">
                {plan.description}
              </p>

              <div className="space-y-4 mb-10">
                {plan.features.map((f) => (
                  <div key={f} className="flex items-center space-x-3 group">
                    <Check className={`w-5 h-5 ${plan.popular ? 'text-indigo' : 'text-slate-600'}`} />
                    <span className="text-slate-300 text-sm font-medium group-hover:text-white transition-colors">{f}</span>
                  </div>
                ))}
              </div>

              {plan.popular ? (
                <ShinyButton className="w-full text-sm">{plan.cta}</ShinyButton>
              ) : (
                <button className="w-full py-4 rounded-xl border border-white/10 text-white font-bold hover:bg-white/5 transition-all">
                  {plan.cta}
                </button>
              )}
              
              <div className="mt-6 pt-6 border-t border-white/5 flex items-center text-xs text-slate-500">
                <Info className="w-4 h-4 mr-2" />
                <span>Standard setup applies</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
