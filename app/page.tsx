"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';

const PRICING_MATRIX = {
  tiers: [
    { name: 'Starter', base: 29, desc: 'For indie hackers' },
    { name: 'Pro', base: 79, desc: 'For growing teams' },
    { name: 'Enterprise', base: 199, desc: 'For scale' }
  ],
  currencies: { INR: 83, USD: 1, EUR: 0.92 },
  annualDiscount: 0.8
} as const;

type Currency = keyof typeof PRICING_MATRIX.currencies;
type Tier = typeof PRICING_MATRIX.tiers[number];

function PricingCard({ tier, currency, isAnnual }: { 
  tier: Tier; 
  currency: Currency; 
  isAnnual: boolean;
}) {
  const price = Math.round(
    tier.base * PRICING_MATRIX.currencies[currency] * (isAnnual? PRICING_MATRIX.annualDiscount : 1)
  );
  const symbol = { INR: '₹', USD: '$', EUR: '€' }[currency];
  
  return (
    <div className="bg-slate-800 p-6 rounded-xl border border-orange-500/20 hover:border-orange-500/50 transition-all duration-300">
      <div className="flex items-center gap-3 mb-2">
        <Image src="/icons/arrow-trending-up.svg" alt="" width={24} height={24} className="invert" />
        <h3 className="text-xl text-yellow-400">{tier.name}</h3>
      </div>
      <p className="text-slate-300 text-sm mt-1">{tier.desc}</p>
      <p className="text-4xl font-bold text-white mt-4">
        {symbol}{price}
        <span className="text-base text-slate-300">/{isAnnual? 'yr' : 'mo'}</span>
      </p>
      <button className="w-full mt-6 bg-orange-500 text-slate-900 font-bold py-3 rounded-lg hover:bg-yellow-400 transition-colors duration-150 flex items-center justify-center gap-2">
        Get Started
        <Image src="/icons/chevron-right.svg" alt="" width={16} height={16} />
      </button>
    </div>
  );
}

function BentoAccordion() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const features = [
    { title: 'Data Ingestion', desc: 'Automated pipeline setup with zero-config connectors', icon: 'arrow-path.svg' },
    { title: 'AI Modeling', desc: 'Custom model training on your private datasets', icon: 'cube-16-solid.svg' },
    { title: 'Real-time Sync', desc: 'Sub-500ms updates across all your tools', icon: 'chart-pie.svg' }
  ];

  if (isMobile) {
    return (
      <div className="space-y-3">
        {features.map((f, i) => (
          <div key={i} className="border border-orange-500/30 rounded-lg overflow-hidden">
            <button 
              onClick={() => setActiveIndex(i)} 
              className="w-full p-4 text-left text-white bg-slate-800 hover:bg-slate-700 transition-colors flex items-center gap-3"
            >
              <Image src={`/icons/${f.icon}`} alt="" width={20} height={20} className="invert" />
              {f.title}
              <Image src="/icons/chevron-down.svg" alt="" width={16} height={16} className="ml-auto invert" />
            </button>
            {activeIndex === i && (
              <div className="p-4 pt-2 text-slate-300 bg-slate-900/50 text-sm">{f.desc}</div>
            )}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-3 gap-4">
      {features.map((f, i) => (
        <div 
          key={i} 
          onMouseEnter={() => setActiveIndex(i)}
          className={`p-6 rounded-xl transition-all duration-300 cursor-pointer ${
            activeIndex === i 
       ? 'bg-orange-500 text-slate-900 scale-105' 
              : 'bg-slate-800 text-white hover:bg-slate-700'
          }`}
        >
          <div className="flex items-center gap-3 mb-3">
            <Image src={`/icons/${f.icon}`} alt="" width={24} height={24} className={activeIndex === i? '' : 'invert'} />
            <h3 className="text-lg">{f.title}</h3>
          </div>
          <p className="text-sm mt-2 opacity-90">{f.desc}</p>
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  const [currency, setCurrency] = useState<Currency>('USD');
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <main className="min-h-screen bg-slate-900">
      <header className="max-w-6xl mx-auto px-6 pt-20 pb-16">
        <div className="flex items-center gap-4 mb-6">
          <Image src="/icons/cog-8-tooth.svg" alt="Logo" width={40} height={40} className="invert" />
          <span className="text-2xl font-bold text-white">AI Data Platform</span>
        </div>
        <h1 className="text-5xl md:text-7xl text-white leading-tight">
          Build The <span className="text-orange-500">Future</span> of Data
        </h1>
        <p className="text-slate-300 text-lg mt-6 max-w-2xl">
          Premium AI-driven automation with matrix-driven pricing and responsive bento features.
        </p>
      </header>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl text-white mb-8 flex items-center gap-3">
          <Image src="/icons/cube-16-solid.svg" alt="" width={28} height={28} className="invert" />
          Core Features
        </h2>
        <BentoAccordion />
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl text-white mb-8 flex items-center gap-3">
          <Image src="/icons/chart-pie.svg" alt="" width={28} height={28} className="invert" />
          Matrix-Driven Pricing
        </h2>
        
        <div className="flex flex-wrap gap-4 mb-8">
          <div className="relative flex items-center">
            <Image src="/icons/search.svg" alt="" width={16} height={16} className="absolute left-3 pointer-events-none invert" />
            <select 
              value={currency} 
              onChange={(e) => setCurrency(e.target.value as Currency)} 
              className="bg-slate-800 text-white pl-10 pr-4 py-3 rounded-lg border border-orange-500/30 focus:border-orange-500 outline-none appearance-none"
            >
              <option value="USD">USD ($)</option>
              <option value="INR">INR (₹)</option>
              <option value="EUR">EUR (€)</option>
            </select>
            <Image src="/icons/chevron-down.svg" alt="" width={16} height={16} className="absolute right-3 pointer-events-none invert" />
          </div>
          
          <button 
            onClick={() => setIsAnnual(!isAnnual)} 
            className="bg-orange-500 text-slate-900 px-6 py-3 rounded-lg font-bold hover:bg-yellow-400 transition-colors duration-150 flex items-center gap-2"
          >
            <Image src="/icons/arrow-path.svg" alt="" width={18} height={18} />
            {isAnnual? 'Annual Billing - Save 20%' : 'Monthly Billing'}
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {PRICING_MATRIX.tiers.map(t => (
            <PricingCard key={t.name} tier={t} currency={currency} isAnnual={isAnnual} />
          ))}
        </div>
      </section>

      <footer className="max-w-6xl mx-auto px-6 py-12 text-center text-slate-400 text-sm">
        <div className="flex items-center justify-center gap-4 mb-4">
          <Image src="/icons/link.svg" alt="" width={16} height={16} className="invert" />
          <Image src="/icons/x-mark.svg" alt="" width={16} height={16} className="invert" />
        </div>
        <p>© 2026 AI Data Platform. Frontend Battle R1 Submission.</p>
      </footer>
    </main>
  );
}
