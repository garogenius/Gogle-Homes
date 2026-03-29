"use client";
import React from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Contact() {
  return (
    <div className="bg-[#041329] text-white selection:bg-[#8B0000] selection:text-white min-h-screen font-body">
      <Header />
      <main className="pt-24 min-h-screen">
        {/* Hero Header Section */}
        <section className="relative h-[600px] flex items-center px-6 md:px-24 overflow-hidden">
          <div className="absolute inset-0 z-0 text-white/5 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary opacity-10 blur-[150px] rounded-full"></div>
          </div>
          <div className="absolute inset-0 z-0">
            <img alt="Luxury reflection" className="w-full h-full object-cover opacity-30" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwqGQnchFZ7OuMTdrJISREKabLbVm7OBkGnrMjjEc8gQwxImdTRYBncFzOVt9R12rFhxCflxwaiFC__bB1yTpfrqrWa5ehC8VfA7ZsjhNz7VFFfPYdAlfbb6MgVvMMlinvuM6Yljz23f9T8H-JZll-sicXBg3xytGEzyY02udGf1wBQvqAA6bEPis7Zx-N960nZRp4JglUZARUWXwMuxzNmvPZnYRdQzRCWMInW3vvmcujeWf-K_-2TSM3FdV1JQNGh7Vf4shIoDtN"/>
            <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/80 to-transparent"></div>
          </div>
          <div className="relative z-10 max-w-4xl">
            <span className="text-secondary font-headline font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Get in Touch</span>
            <h1 className="text-6xl md:text-8xl font-headline font-extrabold tracking-tighter text-white leading-none mb-6">
              Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">Connect</span>
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl leading-relaxed font-light">
              Whether you're looking for your next architectural masterpiece or seeking high-yield architectural investments, our concierge team is standing by.
            </p>
          </div>
        </section>

        {/* Interaction Grid */}
        <section className="max-w-screen-2xl mx-auto px-6 md:px-24 -mt-32 relative z-20 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-7 bg-surface-container/60 backdrop-blur-xl p-8 md:p-12 rounded-xl border border-white/5 shadow-2xl">
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs text-on-surface-variant font-bold uppercase tracking-widest ml-1">Full Name</label>
                    <input className="w-full bg-[#0d1c32] border border-white/5 rounded-lg p-4 text-white focus:ring-1 focus:ring-secondary/50 transition-all placeholder:text-slate-600" placeholder="John Doe" type="text" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs text-on-surface-variant font-bold uppercase tracking-widest ml-1">Email Address</label>
                    <input className="w-full bg-[#0d1c32] border border-white/5 rounded-lg p-4 text-white focus:ring-1 focus:ring-secondary/50 transition-all placeholder:text-slate-600" placeholder="john@example.com" type="email" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs text-on-surface-variant font-bold uppercase tracking-widest ml-1">Phone Number</label>
                    <input className="w-full bg-[#0d1c32] border border-white/5 rounded-lg p-4 text-white focus:ring-1 focus:ring-secondary/50 transition-all placeholder:text-slate-600" placeholder="+234 ..." type="tel" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs text-on-surface-variant font-bold uppercase tracking-widest ml-1">Inquiry Type</label>
                    <select className="w-full bg-[#0d1c32] border border-white/5 rounded-lg p-4 text-white focus:ring-1 focus:ring-secondary/50 transition-all cursor-pointer">
                      <option>Residential Purchase</option>
                      <option>Commercial Leasing</option>
                      <option>Property Management</option>
                      <option>Investment Plan</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs text-on-surface-variant font-bold uppercase tracking-widest ml-1">Your Message</label>
                  <textarea className="w-full bg-[#0d1c32] border border-white/5 rounded-lg p-4 text-white focus:ring-1 focus:ring-secondary/50 transition-all placeholder:text-slate-600 resize-none" placeholder="How can we help you find your dream legacy?" rows={5}></textarea>
                </div>
                <button className="w-full bg-secondary text-on-secondary font-headline font-extrabold py-5 rounded-lg shadow-xl shadow-secondary/10 hover:brightness-110 transition-all active:scale-[0.98] flex items-center justify-center gap-3 uppercase tracking-widest text-xs" type="submit">
                  Send Message
                  <span className="material-symbols-outlined text-xl">send</span>
                </button>
              </form>
            </div>

            {/* Contact Info Bento */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              <div className="bg-surface-container p-8 md:p-10 rounded-xl flex flex-col justify-between border border-white/5 shadow-2xl">
                <div>
                  <h3 className="text-2xl font-headline font-bold text-white mb-8 tracking-tighter uppercase">Global Headquarters</h3>
                  <div className="space-y-8">
                    <div className="flex items-start gap-4">
                      <div className="bg-[#8B0000] p-3 rounded-lg text-white">
                        <span className="material-symbols-outlined">location_on</span>
                      </div>
                      <div>
                        <p className="text-on-surface-variant leading-relaxed text-sm font-medium">
                          Iheasiaba Court, Ishaya Shekari Crescent,<br/>
                          Federal Staff Housing Estate, Gwarinpa,<br/>
                          Abuja, FCT, Nigeria.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="bg-[#8B0000] p-3 rounded-lg text-white">
                        <span className="material-symbols-outlined">call</span>
                      </div>
                      <div>
                        <p className="text-on-surface font-bold text-sm tracking-tight text-white/90">08064160204, 08065393938, 08088015345</p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-4">
                       <div className="flex items-center gap-4">
                        <div className="bg-[#8B0000] p-3 rounded-lg text-white">
                          <span className="material-symbols-outlined">mail</span>
                        </div>
                        <p className="text-on-surface font-bold text-sm text-white/90">info@goglehomes.com</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="bg-[#8B0000] p-3 rounded-lg text-white">
                          <span className="material-symbols-outlined">mail</span>
                        </div>
                        <p className="text-on-surface font-bold text-sm text-white/90">partnerships@goglehomes.com</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-12 pt-8 border-t border-white/5">
                  <p className="text-[10px] text-on-surface-variant mb-6 font-bold uppercase tracking-[0.2em]">Connect With Our Concierge</p>
                  <div className="flex gap-4">
                    {["public", "share", "video_camera_front"].map(icon => (
                       <a key={icon} className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center text-white hover:bg-[#8B0000] transition-all border border-white/5">
                        <span className="material-symbols-outlined">{icon}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

               <div className="bg-surface-container-high rounded-xl overflow-hidden min-h-[200px] relative group border border-white/5">
                <img className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTy71RpzqmsIagOGe9toIfGJeP_a3erGpQ3xyvEQdAsa2BiT3jehL1NWmYjAnamyAZxyzxnw-URyrH2fKfkrjw3St4-jGnYJlEgVWsgo3Ybv2BwWn8aS9tgHbwkKYxeZLQnB7yPqdyGGzFeapWJAhfmIX6N5wOfcB3Q5v068O26ehdvBMlikNiz79o2OUUaCDxlmJ0JmNaFkmxM09RPd3AGoDY-S-fLDbLF1TuXkkynw2L5OHtLmInjnKgxXTdfBA1hRzwTg1Ddpyr"/>
                <div className="absolute inset-0 bg-[#041329]/40 group-hover:bg-transparent transition-all"></div>
                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end z-10">
                  <div>
                    <h4 className="text-white font-headline font-bold uppercase tracking-widest text-xs">Abuja Showroom</h4>
                    <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest mt-1">Gwarinpa Estate</p>
                  </div>
                  <button className="bg-white/10 backdrop-blur-md p-3 rounded-full text-white border border-white/10 hover:bg-[#8B0000] transition-all">
                    <span className="material-symbols-outlined">open_in_new</span>
                  </button>
                </div>
               </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-surface-container-low py-24 px-6 md:px-24">
          <div className="max-w-screen-2xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div className="max-w-2xl">
                <h2 className="text-4xl md:text-5xl font-headline font-extrabold text-white mb-6 uppercase tracking-tighter">Common Questions</h2>
                <p className="text-on-surface-variant text-lg font-light leading-relaxed">We\u2019ve answered the most frequent inquiries from our discerning clients to help you get started immediately.</p>
              </div>
              <a className="text-[#8B0000] font-headline font-bold flex items-center gap-2 group uppercase tracking-widest text-xs" href="#">
                View all FAQs <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { q: "How do I schedule a private viewing?", a: "You can book directly via our portal or call our concierge desk for same-day VIP arrangements in Maitama or Gwarinpa." },
                { q: "Do you offer international financing?", a: "Yes, we partner with premier global financial institutions to provide bespoke mortgage solutions for expatriates and investors." },
                { q: "Are the listings verified?", a: "Every property on Gogle Homes undergoes a 50-point technical and legal audit by our Head of Legal before listing." }
              ].map(faq => (
                <div key={faq.q} className="p-8 bg-surface-container rounded-xl border border-white/5 hover:border-[#8B0000]/30 transition-all cursor-pointer group">
                  <h4 className="text-xl font-bold text-white mb-4 group-hover:text-secondary transition-colors font-headline tracking-tight">{faq.q}</h4>
                  <p className="text-on-surface-variant leading-relaxed text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Showroom Map Section */}
        <section className="h-[400px] w-full relative group cursor-pointer overflow-hidden">
          <img alt="Abuja CBD" className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrhy5h38gNXHJMptEQxDwdmSLsClC7jbHvc5GrGr7byAeUKr7ruban6Yi_d0SGIIOeTUOjKm9wAu6BwdmGJwHBz0xCGAF2wGU0DgBzIH3Sx9CSoHy5aEmNjrh90WYkDAv2NhwwQIf4jyVIoa30wonT5LF8Jmz-LzjkYgGlxN1DFKn3vifMVkf_CYwxRc0mpXtTUBX_i7FtwlgMNMOwVQ3N2gQt0lJRG7-MG7UZv3sg0Wbgz8eNBMm_VLM0GK3WDVUDu6MOhp2XdqBj"/>
          <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-[#0d1c32]/80 backdrop-blur-xl p-8 rounded-2xl flex items-center gap-6 shadow-2xl border border-white/10 border-t-4 border-t-[#8B0000]">
              <div className="w-16 h-16 bg-[#8B0000] rounded-xl flex items-center justify-center shadow-lg shadow-[#8B0000]/30">
                <span className="material-symbols-outlined text-3xl text-white">location_on</span>
              </div>
              <div>
                <p className="text-white font-headline font-bold text-xl uppercase tracking-tighter">Visit Our Showroom</p>
                <p className="text-on-surface-variant text-sm font-medium">Mon - Sat: 9:00 AM - 6:00 PM</p>
              </div>
              <button className="bg-white text-[#041329] px-6 py-3 rounded-lg font-bold ml-4 hover:bg-secondary transition-colors text-sm uppercase tracking-widest">Directions</button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
