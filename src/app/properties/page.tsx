"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Properties() {
  const [activeType, setActiveType] = useState("All Properties");
  const [priceRange, setPriceRange] = useState(250000000); // 250M

  const properties = [
    {
      title: "Smart Detached Duplex",
      price: 850000000,
      location: "Maitama, Abuja",
      beds: 5,
      baths: 6.5,
      sqft: 8400,
      type: "Villas",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC_k8QxJv1aBsYjlFaxBQ8ytOBiFT_d1FE6XCvtATZsh4Z4xvZGA8FuqKebe2hOz2r_G6LELcApOnKTwnqBgE_fN2uE-eksTJMwE7MyXO-qXQrZdvNV0Q5WtBSkToJnOcNF8x8zAVjDefm3z1zIJHUBQhyC_wjEeVdNnQ5luRlmkOYdZ4lQA4qmJCYPkOJfg6dz-PZuZfWDeABE_m_ow5tpfaX8u059j4STKqtN1OcwOMn4NsWcG1nKn2hCPWQsjpi75D4FxkE-5-CH",
      tag: "Exclusive"
    },
    {
      title: "Smart Semi-Detached Duplex",
      price: 1200000000,
      location: "Asokoro, Abuja",
      beds: 6,
      baths: 7,
      sqft: 12200,
      type: "Villas",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBgKmHk_Iat2ORCwT8N9HW-JmCDHmt6u-My8gC1wWZ50fgT2AKAJjQLKzUv71N_aTOe5fEsxGkfPOuQKAqjb8LcHP1ibcg7zU3pGeVz2CswZZbyAh1c0kp9__D7bx2X42qa_caV_YIUuFZJkAEkaOsSp0bAxZkZOJKLuvqwwVQILwF5mGmcy1bA-IN8i4B5SeLK6tDmIVeHgyTRbT9dxI5xIbV_UjeF_hW3y3Hxd0VtUsqjMyKltsCBTR88nnkDzf36J6eOsLJyIaXU",
      tag: "New Listing"
    },
    {
      id: 3,
      title: "Luxury Apartments & Condominiums",
      price: 450000000,
      location: "Guzape, Abuja",
      beds: 4,
      baths: 4.5,
      sqft: 5600,
      type: "Apartments",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCv4Y-eBeEWDMkCAFh5sU-H2ElRYvWjB4tGr6eQ1Qj8hPuXvypukSRiVxi7-mzZLTRJngym02OxZmy6uPtJsll43Nm_2PVLqhC7HWtF517bWN0ZL1q5TWiS_9DM2v0SnP5cOoAoPA-9Jy3DMMEFluLMEfFu4XhxOLlDqAxSPEcwNL1I09rfX96j6IuQYXWiVtFnqow4yPeFnNVgs4z10IhE5eLParJvc8VThbcJnlazY0FvzmyEiwZpxX962txX4itV_lUoCjcJSu6N",
      tag: "Featured"
    },
    {
      id: 4,
      title: "Terrace Homes & Townhouses",
      price: 350000000,
      location: "Gwarinpa, Abuja",
      beds: 4,
      baths: 4,
      sqft: 6200,
      type: "Duplexes",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuADyydKl3Y1q2HGMDM9gZSMAECzDvEG7jQ6uS84JZ5G4ilRSiMCHXaEQtkbti5uqoN8TEEp7gbjm5tn1fMkaXff47xzyE7bS7UdPommd9dkx4-VLIK7fB3oUTwLXzFGy3nzuoWaH47nfrFTQCKijXtjTZm1C7F3hN4tIUU7knhdm6ysaxlfYjrfAJajvhdbnZAcBR-CZeGARsi6du03bIL5-xwXhTXImL-ftCrO-NUduWHJxCpXHo4TaiKXdNeUwlCHij4xMtr5ic2Z",
      tag: "Price Reveal"
    }
  ];

  const filteredProperties = properties.filter(p =>
    (activeType === "All Properties" || p.type === activeType) &&
    (p.price >= priceRange)
  );

  return (
    <div className="bg-[#041329] text-white selection:bg-[#8B0000] selection:text-white min-h-screen font-body">
      <Header />
      <main className="pt-24 min-h-screen">
        {/* Editorial Header Section */}
        <header className="relative px-6 md:px-8 py-20 max-w-screen-2xl mx-auto overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row items-end gap-8">
            <h1 className="text-6xl md:text-8xl font-black font-headline tracking-tighter text-white leading-[0.9] max-w-2xl uppercase">
              Our <span className="text-[#8B0000]">Premium</span> Properties
            </h1>
            <p className="text-on-surface-variant text-lg max-w-md pb-4 font-light leading-relaxed">
              A curated selection of architectural masterpieces in Nigeria's most prestigious locations. Experience the pinnacle of modern living.
            </p>
          </div>
          <div className="absolute top-0 right-0 -z-10 w-2/3 h-full opacity-20">
            <div className="w-full h-full bg-gradient-to-l from-secondary/20 to-transparent"></div>
          </div>
        </header>

        <div className="max-w-screen-2xl mx-auto px-6 md:px-8 pb-20 flex flex-col lg:flex-row gap-12">
          {/* SideNavBar / Advanced Filters */}
          <aside className="w-full lg:w-72 shrink-0">
            <div className="sticky top-28 space-y-8">
              <div className="bg-surface-container p-8 rounded-xl shadow-[20px_0_40px_rgba(0,0,0,0.25)] border-l-4 border-[#8B0000]">
                <h3 className="text-white font-bold text-lg mb-1 font-headline uppercase tracking-tighter">Property Filter</h3>
                <p className="text-on-surface-variant text-[10px] mb-8 uppercase tracking-widest font-bold">Refine your search</p>
                <div className="space-y-8">
                  {/* Price Range */}
                  <div>
                    <label className="text-white text-sm font-semibold mb-4 block">Starting Price (\u20a6)</label>
                    <input
                      type="range"
                      className="w-full accent-secondary h-1 bg-surface-variant rounded-full appearance-none cursor-pointer"
                      min="100000000"
                      max="1000000000"
                      step="50000000"
                      value={priceRange}
                      onChange={(e) => setPriceRange(Number(e.target.value))}
                    />
                    <div className="flex justify-between mt-4 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">
                      <span>\u20a6{(priceRange / 1000000).toFixed(0)}M+</span>
                      <span>\u20a61B</span>
                    </div>
                  </div>
                  {/* Property Types */}
                  <div className="space-y-3">
                    <label className="text-white text-sm font-semibold mb-2 block">Property Type</label>
                    {["All Properties", "Smart Detached Duplexes", "Smart Semi-Detached Duplexes", "Terrace Homes & Townhouses", "Luxury Apartments & Condominiums", "Bungalows & Mini Villas", "Serviced Apartments"].map(type => (
                      <button
                        key={type}
                        onClick={() => setActiveType(type)}
                        className={`w-full flex items-center gap-3 p-3 font-bold rounded-md transition-all ${activeType === type ? 'bg-[#27354c] text-white' : 'text-slate-400 hover:bg-[#27354c]/50'}`}
                      >
                        <span className="material-symbols-outlined text-sm">{type === 'All Properties' ? 'domain' : 'villa'}</span>
                        <span className="text-sm">{type}</span>
                      </button>
                    ))}
                  </div>
                  {/* Beds/Baths */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-on-surface-variant text-[10px] uppercase font-bold tracking-tighter mb-2 block">Beds</label>
                      <select className="w-full bg-surface-container-high border-none text-white text-sm rounded focus:ring-secondary/20 transition-all">
                        <option>3+</option>
                        <option>4+</option>
                        <option>5+</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-on-surface-variant text-[10px] uppercase font-bold tracking-tighter mb-2 block">Baths</label>
                      <select className="w-full bg-surface-container-high border-none text-white text-sm rounded focus:ring-secondary/20 transition-all">
                        <option>2+</option>
                        <option>3+</option>
                        <option>4+</option>
                      </select>
                    </div>
                  </div>
                  <button className="w-full bg-[#8B0000] text-white py-4 font-bold uppercase tracking-widest text-xs rounded-md shadow-lg hover:brightness-110 transition-all">
                    Apply Filters
                  </button>
                </div>
              </div>
            </div>
          </aside>

          {/* Property Listing Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
              {filteredProperties.map((prop, idx) => (
                <div key={prop.id} className={`group relative ${idx === 1 || idx === 3 ? 'md:mt-24' : ''}`}>
                  <div className="aspect-[4/5] overflow-hidden rounded-lg relative">
                    <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)]" src={prop.image} />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="bg-secondary-container text-on-secondary-container text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded">{prop.tag}</span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-80"></div>
                  </div>
                  <div className="mt-[-2rem] relative z-20 px-6">
                    <div className="bg-surface-container-low p-6 shadow-2xl border border-white/5">
                      <div className="flex justify-between items-start mb-4 gap-2">
                        <h4 className="text-2xl font-black font-headline text-white leading-tight uppercase tracking-tighter">{prop.title.split(' ')[0]} <br />{prop.title.split(' ').slice(1).join(' ')}</h4>
                        <span className="text-secondary font-bold text-lg tracking-tighter self-start">\u20a6{(prop.price / 1000000).toFixed(0)}M</span>
                      </div>
                      <div className="flex items-center gap-2 text-on-surface-variant text-sm mb-6 font-medium">
                        <span className="material-symbols-outlined text-base text-[#8B0000]">location_on</span>
                        <span>{prop.location}</span>
                      </div>
                      <div className="flex justify-between py-4 border-y border-white/5 mb-6">
                        <div className="flex flex-col">
                          <span className="text-[10px] uppercase font-bold text-on-surface-variant tracking-widest">Beds</span>
                          <span className="text-white font-bold">{prop.beds}</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[10px] uppercase font-bold text-on-surface-variant tracking-widest">Baths</span>
                          <span className="text-white font-bold">{prop.baths}</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[10px] uppercase font-bold text-on-surface-variant tracking-widest">Size</span>
                          <span className="text-white font-bold">{prop.sqft.toLocaleString()} <span className="text-[8px] opacity-70">sqft</span></span>
                        </div>
                      </div>
                      <button className="w-full border border-secondary/20 hover:bg-[#8B0000] hover:text-white hover:border-[#8B0000] text-secondary py-3 text-xs font-bold uppercase tracking-widest transition-all">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {filteredProperties.length === 0 && (
              <div className="py-20 text-center bg-surface-container rounded-xl">
                <span className="material-symbols-outlined text-6xl text-on-surface-variant mb-4 opacity-50">search_off</span>
                <p className="text-on-surface-variant text-lg">No properties match your criteria. Try adjusting the filters.</p>
              </div>
            )}
          </div>
        </div>

        {/* Property Detail Section (Focused Spotlight) */}
        <section className="bg-surface-container py-24 px-6 md:px-8 mt-20">
          <div className="max-w-screen-2xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              <div className="lg:col-span-8 space-y-8">
                <div className="relative group cursor-pointer overflow-hidden rounded-xl border border-white/5 shadow-2xl">
                  <img className="w-full h-[600px] object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJQ9yRcsPiqGCNUFq5It5Mb5BYBHpVi1ncXHKxhXsUhjGKNfifdGZlGVZ0fpu3dcpDj1EHkkbiGfz6QDbYEbOhy-Et4436DAaKOhb3nR1qseMTdLi56x1phKrCCqcsHCSwJRKXBswM64hDh1sHPFxjhPq7o7MhViNPafIo2-DwH4F_2bT2Kx6sfTPWuhZasGwoiyiPzfFdkgYCPbsIgwfB_tW-2nu5KyIlao3yiStH28w5xTWcbjfnB9ZbaLUTMgCWsX6OC2liIkEW" />
                  <div className="absolute inset-0 bg-surface/20 group-hover:bg-transparent transition-all"></div>
                  <div className="absolute bottom-8 right-8">
                    <button className="bg-white/10 backdrop-blur-md p-4 rounded-full text-white hover:bg-[#8B0000] transition-all">
                      <span className="material-symbols-outlined">fullscreen</span>
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-4">
                  {[
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuAy803iCeI11XgMreI8pxv-6stkree7If8MhsCzPSO21UAzRRoTDlxMJ90NNfzg1B7CG6NQyF8RgA65fT3dyT65HG3I_8ZxuazJ_fw8y4GosvyQnu1zFRbhQoPYvrMV4mRSqIt9rnWx__Z3wrERRxEPeZz6z6nbiA-PAPHIhq0AdJKVFL6llUeA4qNjDQ3-wRkScZ4Vg3cTKStXfOtxM6ou0aT4xVYysJChEXphzp_q5Emv7LWgrohJUEtiUBDPgqhMLBnRsUVsV6a-",
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuAVRNt-OcmyyNqwei709GlMbxwORXPlfEAGoasuthjjv1osVoTxpcs_oiLAWAZzXOYfnAIGRg6uu7i_S96sL4-UwcLTw6hyyVoiukHn6YejrM4O966s-kw_uJ00xKCBFsj_ekYMWpTc17rI3HXmq8jb_leXJf9SK3FnVWdt_KYNpMPjgwBCiCOf-1bdL7DPNupZ0-6owr7vD7m1hmxUiZTrqYpbdvcywtGO7n9iMg1PFMAP38XG8zcelkcluXT2yBCjgr5t6unA1bN6",
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuBNrqgLSldRUy9G6IZci-4Qh2Uo0JnN5_QgTDbQeVcRyCy99LsT3A1i5kkMofx-lJLV-UhHz3EpvbMan0e-5tOtLb--SsQmG_5He2HYmz4_ubOVnkr0YmCFGKmpeb7jkzgWcqKuuXnie6dLTIufBi1-4Kp_6p9W1B8ws8C2bjSzlHnVJCTW5N3Dul4ntVF0D-XDYVsGjt7fWCeiV04pIGSRok7iQJK85OJ28D-vTn1JncAYy5MSC2kw9nq3ZyiCkpta1GpGbqSeuPxY",
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuAFXoF95qVH4b49sTaG56J1ioxExda8ZcDi23VAUYDt_2Jo-X8g6S-Ub8s9T8gxWG2V1S0yQg5JGgt8vNpSLE6vgOCES8xrf84JN79KdKLHRRjx-PjRMN5ZxsA7jzdwt1_pZg1vm5SWCd6zQUT_fLiSdWWSsZ43QoKHfAqi0IpBdRCwYnWqkE5l-kt5bXhyRv3Ln2QRnEwTtPEphg3Y0GdW8Ui-4jtcHbai5toxBV_ZaPrqs6Z6JcD3CAvlvxYl3G3NO-mPHFT8qEdW"
                  ].map((url, i) => (
                    <div key={i} className="relative h-24 md:h-32 rounded overflow-hidden group">
                      <img src={url} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all cursor-pointer" />
                      {i === 3 && <div className="absolute inset-0 flex items-center justify-center text-white font-bold bg-black/40 pointer-events-none">+12</div>}
                    </div>
                  ))}
                </div>
                <div className="space-y-6 pt-12">
                  <h2 className="text-4xl font-headline font-black text-white uppercase tracking-tighter">Spotlight: The Obsidian Manor</h2>
                  <p className="text-on-surface-variant leading-relaxed text-lg font-light">
                    This architectural gem in Maitama seamlessly integrates smart home technology with organic aesthetics. Every corner has been crafted using reclaimed Italian marble and sustainable oak. The open-plan living area flows directly into the outdoor heated infinity pool, creating a 12,000 sq ft sanctuary of tranquility.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-8">
                    {[
                      { icon: "ac_unit", label: "Smart Climate" },
                      { icon: "local_parking", label: "8-Car Gallery" },
                      { icon: "wine_bar", label: "Private Cellar" },
                      { icon: "theater_comedy", label: "Dolby Cinema" },
                      { icon: "spa", label: "Zen Garden" },
                      { icon: "bolt", label: "Smart Lighting" }
                    ].map(feat => (
                      <div key={feat.label} className="flex items-center gap-4 text-on-surface">
                        <span className="material-symbols-outlined text-[#8B0000]">{feat.icon}</span>
                        <span className="text-sm font-medium">{feat.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 space-y-8">
                <div className="bg-surface-container-high p-8 rounded-xl border border-white/5 shadow-2xl sticky top-28">
                  {/* <div className="flex items-center gap-4 mb-8">
                     <img className="w-16 h-16 rounded-full object-cover border-2 border-secondary" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDL3IudsS1ehDFEnMh8y3IJXxyD6NBZe15IGCkwoWk53x3C7DCBeq67MZhknWKmUM7b7nh_WG705ueu0IUTEr1B21wg7TPSzM-ADFAul2dVnBCMiJKlS3DAdDlc1Kdsie06O7KbQ2rwsG3TPEPCZdAVCIjLgHWfK5FuCFd78K_Al9PPNJr7i-2lnAu7mHV_TwSCtYAbj3kU25mW_zQXBglg8SNAuWgRlX7Q0t5MJsqBi4zMAcNUhxJxUUNIcKnEHaTvY-NiabnWbMbM" />
                     <div>
                       <h5 className="text-white font-bold">Alexander Thorne</h5>
                       <p className="text-xs text-[#8B0000] uppercase tracking-widest font-bold">Platinum Advisor</p>
                     </div>
                   </div> */}
                  <form className="space-y-4">
                    <input className="w-full bg-surface-container-highest border-none text-white p-4 rounded focus:ring-1 focus:ring-secondary/50 placeholder:text-on-surface-variant/40" placeholder="Full Name" type="text" />
                    <input className="w-full bg-surface-container-highest border-none text-white p-4 rounded focus:ring-1 focus:ring-secondary/50 placeholder:text-on-surface-variant/40" placeholder="Email Address" type="email" />
                    <textarea className="w-full bg-surface-container-highest border-none text-white p-4 rounded focus:ring-1 focus:ring-secondary/50 placeholder:text-on-surface-variant/40" placeholder="Your Inquiry" rows={4}></textarea>
                    <button className="w-full bg-[#8B0000] text-white py-4 font-bold uppercase tracking-widest text-xs rounded-md shadow-lg hover:brightness-110 active:scale-95 transition-all">Submit Inquiry</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
