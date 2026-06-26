"use client";
import { useState, useEffect } from 'react';

const PRICING_MATRIX = {
  tiers: [
    { name: 'Starter', base: 29, desc: 'For indie hackers' },
    { name: 'Pro', base: 79, desc: 'For growing teams' },
    { name: 'Enterprise', base: 199, desc: 'For scale' }
  ],
  currencies: { INR: 83, USD: 1, EUR: 0.92 },
  annualDiscount: 0.8
};

function PricingCard({ tier, currency, isAnnual }: { 
  tier: any, 
  currency: 'USD' | 'INR' | 'EUR', 
  isAnnual: boolean 
}) {
  const price = Math.round(
    tier.base * PRICING_MATRIX.currencies[currency] * (isAnnual? PRICING_MATRIX.annualDiscount : 1)
  );
  const symbol = { INR: '₹', USD: '$', EUR: '€' }[currency];
  
  return (
    <div className="bg-nocturnal p-6 rounded-xl border border-saffron/20 hover:border-saffron/50 transition-all duration-300">
      <h3 className="font-jetbrains text-xl text-forsythia">{tier.name}</h3>
      <p className="text-mint/80 text-sm mt-1 font-inter">{tier.desc}</p>
      <p className="text-4xl font-bold text-arctic mt-4 font-inter">
        {symbol}{price}
        <span className="text-base text-mint">/{isAnnual? 'yr' : 'mo'}</span>
      </p>
      <button className="w-full mt-6 bg-saffron text-oceanic font-jetbrains py-3 rounded-lg hover:bg-forsythia transition-colors duration-150">
        Get Started
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
    { title: 'Data Ingestion', desc: 'Automated pipeline setup with zero-config connectors' },
    { title: 'AI Modeling', desc: 'Custom model training on your private datasets' },
    { title: 'Real-time Sync', desc: 'Sub-500ms updates across all your tools' }
  ];

  if (isMobile) {
    return (
      <div className="space-y-3">
        {features.map((f, i) => (
          <div key={i} className="border border-saffron/30 rounded-lg overflow-hidden">
            <button 
              onClick={() => setActiveIndex(i)} 
              className="w-full p-4 text-left font-jetbrains text-arctic bg-nocturnal hover:bg-nocturnal/80 transition-colors"
            >
              {f.title}
            </button>
            {activeIndex === i && (
              <div className="p-4 pt-2 text-mint bg-oceanic/50 font-inter text-sm">{f.desc}</div>
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
            ? 'bg-saffron text-oceanic scale-105' 
              : 'bg-nocturnal text-arctic hover:bg-nocturnal/80'
          }`}
        >
          <h3 className="font-jetbrains text-lg">{f.title}</h3>
          <p className="text-sm mt-2 font-inter opacity-90">{f.desc}</p>
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  const [currency, setCurrency] = useState<'USD' | 'INR' | 'EUR'>('USD');
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <main className="min-h-screen">
      <header className="max-w-6xl mx-auto px-6 pt-20 pb-16">
        <h1 className="font-jetbrains text-5xl md:text-7xl text-arctic leading-tight">
          Build The <span className="text-saffron">Future</span> of Data
        </h1>
        <p className="text-mint text-lg mt-6 max-w-2xl font-inter">
          Premium AI-driven automation with matrix-driven pricing and responsive bento features.
        </p>
      </header>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="font-jetbrains text-3xl text-arctic mb-8">Core Features</h2>
        <BentoAccordion />
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="font-jetbrains text-3xl text-arctic mb-8">Matrix-Driven Pricing</h2>
        
        <div className="flex flex-wrap gap-4 mb-8">
          <select 
            value={currency} 
            onChange={(e) => setCurrency(e.target.value as any)} 
            className="bg-nocturnal text-arctic p-3 rounded-lg border border-saffron/30 font-inter focus:border-saffron outline-none"
          >
            <option value="USD">USD ($)</option>
            <option value="INR">INR (₹)</option>
            <option value="EUR">EUR (€)</option>
          </select>
          
          <button 
            onClick={() => setIsAnnual(!isAnnual)} 
            className="bg-saffron text-oceanic px-6 py-3 rounded-lg font-jetbrains hover:bg-forsythia transition-colors duration-150"
          >
            {isAnnual? 'Annual Billing - Save 20%' : 'Monthly Billing'}
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {PRICING_MATRIX.tiers.map(t => (
            <PricingCard key={t.name} tier={t} currency={currency} isAnnual={isAnnual} />
          ))}
        </div>
      </section>

      <footer className="max-w-6xl mx-auto px-6 py-12 text-center text-mint/60 font-inter text-sm">
        <p>© 2026 AI Data Platform. Frontend Battle R1 Submission.</p>
      </footer>
    </main>
  );
}