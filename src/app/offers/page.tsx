"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Offers() {
  const [activeDealFilter, setActiveDealFilter] = useState("All Deals");

  const deals = [
    {
      id: 1,
      type: "Off-Plan",
      title: "Smart Detached Duplex - The Obsidian",
      description: "Prime Maitama, Abuja location featuring AI-integrated smart suites and private sky decks.",
      roi: "12.5%",
      progress: 45,
      price: "₦1.2B",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC7LvlsW6z_FgWtIwcKcoyQtLPH7bWGULAsefYbcsY8bvaEL3WYL4IAlcuYd57NTsv0eHI9LfPixdyqsm0X2HUUll8RuvogQWXfoCBeIfLY0um1CiVHoyxdHA97qho93Zec_-BPLEsFKS8SG0kQiLk3xAH3CK8-ehydUVxCCi7hVJjvR6RChT5k_jAykE3po2xhJ4aXjxjKJm1YB1pxdYdiXqD4GuPH-J74xDBLXazwTjHlWmZstTrX-ABhDH1GgQJB-rx_E-UrGvzw"
    },
    {
      id: 2,
      type: "Flash Sale",
      title: "Luxury Apartments & Condominiums",
      description: "Ready-to-move-in luxury estate in Guzape, Abuja with panoramic views and sustainable solar architecture.",
      discount: "-₦150M",
      equity: "Instant Equity",
      beds: 5,
      sqft: "6,500",
      price: "₦2.85B",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop"
    }
  ];

  const [investment, setInvestment] = useState(100000000); // 100M
  const [holdPeriod, setHoldPeriod] = useState("3Y");

  const calculateReturn = () => {
    const rate = holdPeriod === "1Y" ? 0.08 : holdPeriod === "3Y" ? 0.25 : holdPeriod === "5Y" ? 0.45 : 1.10;
    return (investment * rate).toLocaleString();
  };

  return (
    <div className="bg-[#041329] text-white selection:bg-[#8B0000] selection:text-white min-h-screen font-body">
      <Header />
      <main className="pt-24 min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-[600px] flex items-center px-6 md:px-24 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img alt="Luxury penthouse view" className="w-full h-full object-cover opacity-40 scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8k_zm8EaBZGfpjinZB0TwYk_eywmcwIyvfrGzIisLvMXlNvRyc9BOVNOnJWPDPWw9LESR4fgO03g0v8NWsrhjKIlOh0eTPNFjN59bZX_nPLEFDj6om4OQE9l07AinbQOtQ5ZvNTKpd3wbVBGiXO_FWTkyhVyfeoCU0HsJPev2pBobbBZhrxoPLJEo2BGyTqHKdMzAiavdH8_SCJuyTiL2llepID0HbdmjkPGVV58fYG0Vj6Gsuau0UFNWNMuto7Qoami37PDFXv2y"/>
            <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/80 to-transparent"></div>
          </div>
          <div className="relative z-10 max-w-4xl">
            <span className="inline-block text-secondary font-bold tracking-[0.2em] uppercase text-xs mb-4">Limited Availability</span>
            <h1 className="text-5xl md:text-7xl font-headline font-extrabold text-white leading-[1.1] tracking-tighter mb-6">
              Exclusive Real Estate <br/>
              <span className="text-secondary">Offers</span> & Investment
            </h1>
            <p className="text-xl text-on-surface-variant max-w-2xl leading-relaxed mb-8">
              Access off-market opportunities and high-yield off-plan developments curated for the sophisticated investor in Nigeria.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-secondary text-on-secondary px-8 py-4 rounded-md font-bold editorial-shadow hover:brightness-110 transition-all flex items-center gap-2">
                View Premium Portfolios
                <span className="material-symbols-outlined">trending_up</span>
              </button>
            </div>
          </div>
        </section>

        {/* Investment Grid */}
        <section className="px-6 md:px-8 py-24 max-w-screen-2xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-3xl font-headline font-bold text-white mb-2 uppercase tracking-tighter">Current Opportunities</h2>
              <p className="text-on-surface-variant">High ROI projects with guaranteed appreciation trajectories.</p>
            </div>
            <div className="flex gap-2 bg-surface-container p-1 rounded-lg">
              {["All Deals", "Off-Plan", "Ready to Move"].map((filter) => (
                <button 
                  key={filter}
                  onClick={() => setActiveDealFilter(filter)}
                  className={`px-4 py-2 rounded font-medium text-sm transition-all ${activeDealFilter === filter ? 'bg-surface-container-highest text-white' : 'text-on-surface-variant hover:text-white'}`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {deals.filter(d => activeDealFilter === "All Deals" || d.type === activeDealFilter || (activeDealFilter === "Ready to Move" && d.type === "Flash Sale")).map((deal) => (
              <div key={deal.id} className="group relative bg-surface-container rounded-xl overflow-hidden editorial-shadow border border-white/5 transition-transform hover:-translate-y-2">
                <div className="relative h-64 overflow-hidden">
                  <img alt={deal.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src={deal.image} />
                  <div className={`absolute top-4 left-4 ${deal.type === 'Off-Plan' ? 'bg-secondary-container text-on-secondary-container' : 'bg-tertiary-container text-on-tertiary-container'} px-3 py-1 rounded-full text-xs font-bold tracking-wider`}>
                    {deal.type.toUpperCase()}
                  </div>
                  <div className="absolute bottom-4 left-4 glass-panel p-3 rounded-lg border border-white/10">
                    <span className="text-white font-bold text-xl">{deal.roi || deal.discount}</span>
                    <span className="text-on-surface-variant text-[10px] block uppercase font-bold tracking-widest">{deal.roi ? 'Projected ROI' : 'Instant Equity'}</span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-headline font-bold text-white mb-2">{deal.title}</h3>
                  <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">{deal.description}</p>
                  
                  {deal.progress ? (
                    <div className="mb-8">
                      <div className="flex justify-between text-xs font-bold mb-2">
                        <span className="text-on-surface-variant uppercase tracking-widest">Construction Progress</span>
                        <span className="text-secondary">{deal.progress}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
                        <div className="h-full bg-secondary rounded-full" style={{ width: `${deal.progress}%` }}></div>
                      </div>
                    </div>
                  ) : (
                    <div className="flex gap-4 mb-8">
                      <div className="flex items-center gap-2 text-on-surface-variant text-sm">
                        <span className="material-symbols-outlined text-secondary text-lg">bed</span>
                        {deal.beds} Beds
                      </div>
                      <div className="flex items-center gap-2 text-on-surface-variant text-sm">
                        <span className="material-symbols-outlined text-secondary text-lg">square_foot</span>
                        {deal.sqft} SQFT
                      </div>
                    </div>
                  )}

                  <div className="flex items-center justify-between pt-6 border-t border-white/5">
                    <div>
                      <span className="block text-xs text-on-surface-variant uppercase font-bold tracking-tighter">Starting From</span>
                      <span className="text-xl font-bold text-white">{deal.price}</span>
                    </div>
                    <button className={`${deal.type === 'Off-Plan' ? 'bg-secondary text-on-secondary' : 'bg-[#8B0000] text-white'} px-5 py-2.5 rounded text-sm font-bold hover:brightness-110`}>
                      {deal.type === 'Off-Plan' ? 'View Plan' : 'Inquire Now'}
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {/* ROI Calculator Widget */}
            <div className="lg:col-span-1 bg-gradient-to-br from-[#112036] to-[#041329] rounded-xl p-8 border border-secondary/20 relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"></div>
              <div>
                <h3 className="text-2xl font-headline font-bold text-white mb-6 uppercase tracking-tighter">ROI Calculator</h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-xs font-bold text-on-surface-variant uppercase mb-2 tracking-widest">Investment Amount</label>
                    <input 
                      className="w-full accent-secondary bg-surface-container-highest rounded-lg appearance-none h-2 cursor-pointer" 
                      type="range"
                      min="50000000"
                      max="1000000000"
                      step="10000000"
                      value={investment}
                      onChange={(e) => setInvestment(Number(e.target.value))}
                    />
                    <div className="flex justify-between mt-2 text-[10px] text-white font-bold uppercase tracking-widest">
                      <span>₦{(investment / 1000000).toFixed(0)}M</span>
                      <span>₦1B</span>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-on-surface-variant uppercase mb-2 tracking-widest">Hold Period</label>
                    <div className="grid grid-cols-4 gap-2">
                      {["1Y", "3Y", "5Y", "10Y"].map((period) => (
                        <button 
                          key={period} 
                          onClick={() => setHoldPeriod(period)}
                          className={`py-2 rounded text-xs font-bold transition-all ${holdPeriod === period ? 'bg-secondary text-on-secondary' : 'bg-surface-container-highest text-on-surface-variant hover:border-secondary border border-white/5'}`}
                        >
                          {period}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 p-6 bg-surface-container-lowest rounded-lg border border-white/5">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-on-surface-variant text-xs font-bold uppercase tracking-widest">Est. Return</span>
                  <span className="text-2xl font-black text-secondary">+₦{calculateReturn()}</span>
                </div>
                <button className="w-full bg-white/5 hover:bg-white/10 text-white py-3 rounded text-sm font-bold transition-all">Get Detailed Forecast</button>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Tiers Section */}
        <section className="bg-surface-container-low py-24 px-6 md:px-8">
          <div className="max-w-screen-2xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-headline font-bold text-white mb-4 uppercase tracking-tighter">Investment Tiers</h2>
              <p className="text-on-surface-variant max-w-xl mx-auto">Join our inner circle with exclusive membership benefits tailored to your portfolio scale.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch pt-8">
              {/* Tier 1 */}
              <div className="p-8 rounded-xl bg-surface-container border border-white/5 flex flex-col h-full hover:border-[#8B0000]/30 transition-all">
                <span className="text-secondary font-bold text-xs uppercase tracking-widest mb-4">Silver Entry</span>
                <div className="mb-8">
                  <span className="text-4xl font-bold text-white">₦50M+</span>
                  <span className="text-on-surface-variant text-[10px] uppercase font-bold tracking-widest block mt-1">Single Asset Investment</span>
                </div>
                <ul className="space-y-4 mb-10 flex-grow">
                  <li className="flex items-center gap-3 text-sm text-on-surface-variant leading-relaxed">
                    <span className="material-symbols-outlined text-secondary text-lg">check_circle</span>
                    Access to Public Pre-sales
                  </li>
                  <li className="flex items-center gap-3 text-sm text-on-surface-variant leading-relaxed">
                    <span className="material-symbols-outlined text-secondary text-lg">check_circle</span>
                    Standard ROI Tracking
                  </li>
                </ul>
                <button className="w-full py-4 border border-outline-variant hover:border-secondary text-white font-bold transition-all rounded uppercase tracking-widest text-xs">Get Started</button>
              </div>

              {/* Tier 2 - Featured */}
              <div className="p-8 rounded-xl bg-surface-container-highest border-2 border-secondary relative editorial-shadow flex flex-col h-full transform md:scale-105 z-10">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-on-secondary px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest">Most Popular</div>
                <span className="text-secondary font-bold text-xs uppercase tracking-widest mb-4">Gold Portfolio</span>
                <div className="mb-8">
                  <span className="text-4xl font-bold text-white">₦250M+</span>
                  <span className="text-on-surface-variant text-[10px] uppercase font-bold tracking-widest block mt-1">Multi-Unit Strategy</span>
                </div>
                <ul className="space-y-4 mb-10 flex-grow">
                  <li className="flex items-center gap-3 text-sm text-white leading-relaxed">
                    <span className="material-symbols-outlined text-secondary text-lg">check_circle</span>
                    Priority Off-Market Access
                  </li>
                  <li className="flex items-center gap-3 text-sm text-white leading-relaxed">
                    <span className="material-symbols-outlined text-secondary text-lg">check_circle</span>
                    0% Management Fees (1st Year)
                  </li>
                  <li className="flex items-center gap-3 text-sm text-white leading-relaxed">
                    <span className="material-symbols-outlined text-secondary text-lg">check_circle</span>
                    VIP Project Launches
                  </li>
                </ul>
                <button className="w-full py-4 bg-secondary text-on-secondary font-black transition-all rounded shadow-xl uppercase tracking-widest text-xs">Contact Senior Advisor</button>
              </div>

              {/* Tier 3 */}
              <div className="p-8 rounded-xl bg-surface-container border border-white/5 flex flex-col h-full hover:border-[#8B0000]/30 transition-all">
                <span className="text-secondary font-bold text-xs uppercase tracking-widest mb-4">Platinum Institutional</span>
                <div className="mb-8">
                  <span className="text-4xl font-bold text-white">₦1B+</span>
                  <span className="text-on-surface-variant text-[10px] uppercase font-bold tracking-widest block mt-1">Full Floor & Commercial</span>
                </div>
                <ul className="space-y-4 mb-10 flex-grow">
                  <li className="flex items-center gap-3 text-sm text-on-surface-variant leading-relaxed">
                    <span className="material-symbols-outlined text-secondary text-lg">check_circle</span>
                    Custom Architectural Requests
                  </li>
                  <li className="flex items-center gap-3 text-sm text-on-surface-variant leading-relaxed">
                    <span className="material-symbols-outlined text-secondary text-lg">check_circle</span>
                    White-Glove Portfolio Management
                  </li>
                  <li className="flex items-center gap-3 text-sm text-on-surface-variant leading-relaxed">
                    <span className="material-symbols-outlined text-secondary text-lg">check_circle</span>
                    International Tax Advisory
                  </li>
                </ul>
                <button className="w-full py-4 border border-outline-variant hover:border-secondary text-white font-bold transition-all rounded uppercase tracking-widest text-xs">Request Prospectus</button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
