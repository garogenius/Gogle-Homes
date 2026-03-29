"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HERO_IMAGES = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCjEx9USKiw6on3cRTpNSV7i-muzhF-yi8gHS96No7nUJh00tBFoJDOhT9MYaMr2a6YLFOk3au8eYVQktNRe-g0Brk2FzmjfmMaqhamYuMbo5DOEOArL6_aPJA5o4MayeliQ9jQjsc8KWkV6rkcb8JmtUf_5pNsmf46bUSO-k4frBB5r6lp3FPS7AbsREbAE7uhrjZiS1a4qoBDNMWa7UHok9B_81VeTqM8K53dBokIjj64JiLG6-2t3tkO3ULCZeuhykoIpCKoRn91",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAo_YuriHaton7rMhfwb8K7K2ooXz3UViMxOw9AOj8PagC_yCn5KBZ2P5iDvImBotNLc91NYE3YkckMjOrxJZfBy99J5fcJkumRiTnO0q_WIoWY5jRpEmuGfqBh-D9zhHxMaDC_JQRzw8frBaS6w_aTYiFFGcw9CPmKW4hV_r6fbtmSdNn6ubmCoC-fyxzjeePdcATCVBT-xu7S4SONb_icXvXVTW3-vjrxhOke2X-mXJZmVmMUEabHuHbU0QaGxmH_A2b7Fq8x2elg",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDEgzTEk70UXYMPjyYPFHTFweIqMGLlowyuXOtTGXMmXW073t2UnHW-gXYJ2b8wj2JElMJGxE1Nxaj59SQ3Za5QkgedrENOLpEsbPgoxeksvxjveoVOyh8ajhv6RwYnNRxkeWkHxwUSr5OnB3jJSPVJU5tK2l4LuGKkPiNUKFmjpU_l31M4kdDq-4fs-5mQND0mktL9-1nkGTYTilqpBMm7apVrJjNdMtnSBGXuey1uXHBSWwYNbdMsDcIj8DyMKzsrX8AtQWyXizF_",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBro5rfv4RKSKvLdO4RxRAyciu1BNsq-vkFKns1sodjO0NGxo5w2IZ34jMH9_UBvDMgm9aJbQLWs4NU-IWRmlQFOHqAcx8ctwQPznsprW2H5nNCd3P9Dd2WwHX-_3hyFFsKV9D-K01TlVSTodob5X1y6LY_5t3DC4ng3XfYPmrAas696BZK88uX6oVMTnnh1eqxIC0uaxWQ-ll4ZY0i0DzLUw76RcoYSpF8RTje4k4i0y3sy5s6f-8fR0Mqhsd46cblCspdjvxi3Ele"
];

const GALLERY_IMAGES = [
  { id: 1, type: "Villas", title: "The Vertigo Villa", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCSWYbOvuqblnRIBfG_P0TU1487g0z0PHhlxDI1jxyNYIMBuyNOxsSZDsWSy-_U0u8X3zsAgJXFnHS1pOTYXQq_rlH4Tb3ZA-Gdb7nGiF5rC5q22xmAn4kUZaNys_KXF-uW51TDpSVWLMlkUb9SUcolIWVtKNKEO-TUJ93NUIkLpZ01XSt37Q5k4QAzyC2iIMuaSEElIQkMte19Ni5qSJFjN-O7pYvY1rbSy8L6dQXQZHqGVIFFowRqGxAUXteYn47lxrq3giP0A9OH" },
  { id: 2, type: "Apartments", title: "Smart Semi-Detached Duplex", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDWo8d23DCa8UJNT4K6HPNpdC2ZC5UlCr_p9NtDCOTJucAJIADPXyxlFC58QvRmYtvc4Uvw3KvciH-TGlsuv1_QLGHgNm9Uwh2raAIiY3k7TIhw3abXgcGA3u2bUOZM1bFa_sEk06BrM2YhgCg1rfNELRwZL3QV5fO16VPAHgb0xS-24XUg9NnPKZYnYDPWoaJmIud3LFvSampMxtzc01hq3afEf-kkIjKxphnQOgqsynWGzNnMF9yYXV9FiRjp3V3q0479BCEpswD2" },
  { id: 3, type: "Duplexes", title: "Smart Detached Duplex", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCQbqzcyNQigFq8ovdH9zf6J7pB9NqBcjMaXroULfW4iWU7ESopZXuy2NExkrRCMfzAE01DalDKw_10sQtfiHxuYcTD3EG64t3MD75-AsWnuw-xXOJ6lyeAASuY7sKZ_-uaB0Qfb68WfObQ3F-hQhBy3AaK56RjbjfQZvNrP2a2Rs68Fal0QUSi2kio_Ua7oeCxtRo9c-RgQ7wF6yfdYm1ePnmVljbFkxF0tO474-e4JGtowNdjvvUkff3UGiv_jMY4pHfllyNGCZiV" },
  { id: 4, type: "Villas", title: "Luxury Apartments & Condominiums", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAtVSruk0gtSGOJXIBdDvuVm55NKHQDp69aA15uHnwbfBsO-bAZi18myOH-VJNVGGoYBPww72n43x8O6noBprEpBi4tCOdAcVzSSvI1Q1DJlvQAD3qmK1D-EZr4C4S7NXaeySUDwMg4siljtxJ-GdPS0wUgxVU9Wsh6KBW1QLD94-WI4-9ko8jVKAoxnqdZeBEgbs9ri_sI_EsPN4SExOmRNGTXyAkQBvUX8y5pfu2YIO4-ordYFOzZFLqZtSRAq7dhmy5y6jnhvS6k" }
];

const TESTIMONIALS = [
  { quote: "Investing in Gogle Homes is investing in a heritage. Their smart detached duplexes in Maitama are the pinnacle of Abuja luxury.", name: "Alhaji Bashir Danladi", role: "Chairman, BDG Group" },
  { quote: "The architectural finesse and technological integration in our Asokoro villa exceeded all expectations. Truly world-class.", name: "Hajiya Nafisat Bello", role: "Philanthropist & Investor" },
  { quote: "As a tech founder, I appreciate the seamless AI integration. Gogle Homes is indeed building the future of African living.", name: "Usman Garba", role: "Founder, Savanna Tech" },
  { quote: "Their commitment to quality and transparency in property development is why we've trusted them with our entire portfolio.", name: "Jonathan Sterling", role: "CEO, Sterling Ventures" }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState("All Types");
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-surface text-on-surface font-body selection:bg-secondary selection:text-on-secondary min-h-screen">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative h-screen w-full overflow-hidden flex items-center">
          <div className="absolute inset-0 z-0">
            {HERO_IMAGES.map((img, idx) => (
              <div
                key={idx}
                className={`absolute inset-0 transition-opacity duration-1000 ${currentSlide === idx ? 'opacity-100' : 'opacity-0'}`}
              >
                <img
                  className="w-full h-full object-cover scale-105"
                  alt={`Ultra-modern luxury villa exterior ${idx + 1}`}
                  src={img}
                />
              </div>
            ))}
            <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/40 to-transparent"></div>
          </div>
          <div className="relative z-10 px-6 md:px-24 max-w-5xl">
            <span className="text-secondary font-headline font-bold tracking-widest uppercase text-xs md:text-sm mb-4 block">Smart Living Starts Here in Abuja, Nigeria</span>
            <h1 className="text-5xl md:text-8xl font-black font-headline text-white leading-[0.9] tracking-tighter mb-8 -ml-1">
              Modern Homes <br />for <span className="text-[#8B0000]">Modern</span> Families
            </h1>
            <div className="flex flex-wrap gap-4">
              <Link href="/properties">
                <button className="bg-[#8B0000] text-white px-8 md:px-10 py-3 md:py-4 rounded-md font-bold text-base md:text-lg premium-button-inner hover:scale-105 transition-transform">
                  View Properties
                </button>
              </Link>
              <Link href="/contact">
                <button className="backdrop-blur-md bg-white/10 border border-white/20 text-white px-8 md:px-10 py-3 md:py-4 rounded-md font-bold text-base md:text-lg hover:bg-white/20 transition-all">
                  Book for Inspection
                </button>
              </Link>
            </div>
            {/* Slider Dots */}
            <div className="flex space-x-3 mt-12">
              {HERO_IMAGES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${currentSlide === idx ? 'w-10 bg-primary' : 'w-4 bg-white/30 hover:bg-white/50'}`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
          <div className="hidden md:block absolute bottom-12 left-1/2 -translate-x-1/2 w-full max-w-5xl px-4 md:px-8 z-20">
            <div className="glass-panel p-1 rounded-xl shadow-2xl">
              <div className="bg-surface-container/80 p-6 md:p-8 rounded-lg flex flex-col md:flex-row gap-6 items-end">
                <div className="flex-1 w-full space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">Location</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-primary">location_on</span>
                    <input className="w-full bg-surface-container-high border-none rounded-md py-3 pl-10 text-on-surface focus:ring-2 focus:ring-primary/50 transition-all" placeholder="Abuja, FCT" type="text" />
                  </div>
                </div>
                <div className="w-full md:w-48 space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">Type</label>
                  <select className="w-full bg-surface-container-high border-none rounded-md py-3 text-on-surface focus:ring-2 focus:ring-primary/50">
                    <option>Villas</option>
                    <option>Apartments</option>
                    <option>Duplexes</option>
                  </select>
                </div>
                <div className="w-full md:w-48 space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">Price Range</label>
                  <select className="w-full bg-surface-container-high border-none rounded-md py-3 text-on-surface focus:ring-2 focus:ring-primary/50">
                    <option>&#8358;50M - &#8358;150M</option>
                    <option>&#8358;150M - &#8358;500M</option>
                    <option>&#8358;500M+</option>
                  </select>
                </div>
                <button className="w-full md:w-auto bg-primary text-on-primary font-bold px-10 py-3 rounded-md hover:bg-primary-fixed-dim transition-colors flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined">search</span> Search
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Properties Section */}
        <section className="py-32 px-6 md:px-8 max-w-screen-2xl mx-auto bg-surface">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-black font-headline text-white tracking-tighter leading-none mb-6">
                Curated Luxury <br />Portfolios
              </h2>
              <p className="text-on-surface-variant text-lg leading-relaxed">
                Explore our handpicked selection of premium residences in Abuja, where architectural innovation meets timeless elegance. Each property is a statement of prestige.
              </p>
            </div>
            <Link href="/properties">
              <button className="text-primary font-bold flex items-center gap-2 group">
                View All Collections <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Property Card 1 */}
            <div className="group">
              <div className="relative overflow-hidden rounded-lg aspect-[4/5] mb-6">
                <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Modern geometric mansion" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEgzTEk70UXYMPjyYPFHTFweIqMGLlowyuXOtTGXMmXW073t2UnHW-gXYJ2b8wj2JElMJGxE1Nxaj59SQ3Za5QkgedrENOLpEsbPgoxeksvxjveoVOyh8ajhv6RwYnNRxkeWkHxwUSr5OnB3jJSPVJU5tK2l4LuGKkPiNUKFmjpU_l31M4kdDq-4fs-5mQND0mktL9-1nkGTYTilqpBMm7apVrJjNdMtnSBGXuey1uXHBSWwYNbdMsDcIj8DyMKzsrX8AtQWyXizF_" />
                <div className="absolute top-4 left-4">
                  <span className="bg-secondary-container text-on-secondary-container px-3 py-1 text-xs font-bold uppercase tracking-widest rounded-sm">Exclusive</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#041329] to-transparent opacity-60"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="text-2xl font-black font-headline text-white mb-2">&#8358;450,000,000</div>
                  <div className="text-slate-300 text-sm font-medium flex items-center gap-1">
                    <span className="material-symbols-outlined text-xs">location_on</span> Maitama, Abuja
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold font-headline text-white">Smart Detached Duplex - Maitama</h3>
                <div className="flex items-center gap-6 text-on-surface-variant text-sm">
                  <span className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">bed</span> 5 Beds</span>
                  <span className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">bathtub</span> 6 Baths</span>
                  <span className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">square_foot</span> 6,200 sqft</span>
                </div>
                <button className="w-full py-4 border border-outline-variant/30 text-white font-bold rounded-md hover:bg-white/5 transition-colors">View Details</button>
              </div>
            </div>
            {/* Property Card 2 */}
            <div className="group">
              <div className="relative overflow-hidden rounded-lg aspect-[4/5] mb-6">
                <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Contemporary waterfront estate" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBro5rfv4RKSKvLdO4RxRAyciu1BNsq-vkFKns1sodjO0NGxo5w2IZ34jMH9_UBvDMgm9aJbQLWs4NU-IWRmlQFOHqAcx8ctwQPznsprW2H5nNCd3P9Dd2WwHX-_3hyFFsKV9D-K01TlVSTodob5X1y6LY_5t3DC4ng3XfYPmrAas696BZK88uX6oVMTnnh1eqxIC0uaxWQ-ll4ZY0i0DzLUw76RcoYSpF8RTje4k4i0y3sy5s6f-8fR0Mqhsd46cblCspdjvxi3Ele" />
                <div className="absolute top-4 left-4">
                  <span className="bg-surface-container-highest text-white px-3 py-1 text-xs font-bold uppercase tracking-widest rounded-sm">Featured</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#041329] to-transparent opacity-60"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="text-2xl font-black font-headline text-white mb-2">&#8358;320,000,000</div>
                  <div className="text-slate-300 text-sm font-medium flex items-center gap-1">
                    <span className="material-symbols-outlined text-xs">location_on</span> Wuse II, Abuja
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold font-headline text-white">Luxury Apartments & Condominiums</h3>
                <div className="flex items-center gap-6 text-on-surface-variant text-sm">
                  <span className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">bed</span> 4 Beds</span>
                  <span className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">bathtub</span> 4 Baths</span>
                  <span className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">square_foot</span> 4,500 sqft</span>
                </div>
                <button className="w-full py-4 border border-outline-variant/30 text-white font-bold rounded-md hover:bg-white/5 transition-colors">View Details</button>
              </div>
            </div>
            {/* Property Card 3 */}
            <div className="group">
              <div className="relative overflow-hidden rounded-lg aspect-[4/5] mb-6">
                <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="High-concept architectural home" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkhi4CJ0L4LWHQLl7q13MGddGbD2zzZ1OXPDgXZWWRQ9ACXEbaj0KAr1Gt70HBhh9_90tWMJASZ-C0TqwTIkHOLfzr5XhkDxObxEqTLDvSgoCEldEEkRHESJQBaa8VW1mBv2srZSbS806BM3rpqDXu4X8RhPvCkL-r6v26e6m5NkBW-6arFXCMohnbZYRoyCq6SoJbOh5NExn8dtyNG5Ny3MvGK4QWIIcFFTXiRM2kcUesj8tJ7rlQjYCebfMDJ8hbY2xjJSZ0MPVW" />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#8B0000] text-white px-3 py-1 text-xs font-bold uppercase tracking-widest rounded-sm">New Listing</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#041329] to-transparent opacity-60"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="text-2xl font-black font-headline text-white mb-2">&#8358;650,000,000</div>
                  <div className="text-slate-300 text-sm font-medium flex items-center gap-1">
                    <span className="material-symbols-outlined text-xs">location_on</span> Guzape, Abuja
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold font-headline text-white">Smart Semi-Detached Duplex</h3>
                <div className="flex items-center gap-6 text-on-surface-variant text-sm">
                  <span className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">bed</span> 6 Beds</span>
                  <span className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">bathtub</span> 7 Baths</span>
                  <span className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">square_foot</span> 8,100 sqft</span>
                </div>
                <button className="w-full py-4 border border-outline-variant/30 text-white font-bold rounded-md hover:bg-white/5 transition-colors">View Details</button>
              </div>
            </div>
          </div>
        </section>

        {/* About Preview Section (Asymmetric) */}
        <section className="py-24 bg-surface-container relative overflow-hidden">
          <div className="max-w-screen-2xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 border-2 border-[#8B0000]/20 translate-x-8 translate-y-8 rounded-lg group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-500"></div>
              <img className="relative z-10 rounded-lg shadow-2xl w-full h-[600px] object-cover" alt="Modern architect reviewing blueprints" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBERZpEtGi0xK8piFx-MrsRtnwliF6RjkmSEpJcFOuxml-JD8zFe7PQI-qayGROD3w3YDmopWEE8GJE2T_zMzF_XI5gz1LDR-hEjwvE2qp_ybshxWWYux-lEdiUGBlqAKxcaG4z9D976ii6iYaoNeDmUTPYDn0Tl3sP9L0nY1GUIYgDeBZ0TY5eV6koMbMA7Ktd-8A9XBfVuNrHqKqcfSxfGms5B01ai1WMi-XNTkUaK-x5O986AKbGAV8d5nPRvGrBYAwNRYgVDyth" />
              <div className="absolute -bottom-10 -right-10 bg-[#8B0000] p-10 rounded-lg hidden md:block z-20 editorial-shadow">
                <div className="text-4xl font-black text-white leading-none">25+</div>
                <div className="text-white/80 text-sm font-bold uppercase tracking-widest mt-2">Years of Excellence</div>
              </div>
            </div>
            <div className="space-y-8">
              <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs">Redefining Excellence</span>
              <h2 className="text-4xl md:text-6xl font-black font-headline text-white tracking-tighter leading-tight uppercase">
                Featured <span className="text-[#8B0000]">Abuja</span> Legacies
              </h2>
              <p className="text-on-surface-variant text-lg leading-relaxed max-w-xl">
                Gogle Homes Ltd. is a forward-thinking real estate and property development company dedicated to designing and delivering intelligent, sustainable, and high-quality developments in Abuja, FCT.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-4 text-white font-bold">
                  <span className="material-symbols-outlined text-[#8B0000]">check_circle</span>
                  Pioneers in Smart Home Integration
                </li>
                <li className="flex items-center gap-4 text-white font-bold">
                  <span className="material-symbols-outlined text-[#8B0000]">check_circle</span>
                  Sustainability-First Architectural Design
                </li>
              </ul>
              <button className="bg-white text-surface px-10 py-4 rounded-md font-bold hover:bg-secondary hover:text-on-secondary transition-all">Learn Our Story</button>
            </div>
          </div>
        </section>


        {/* Virtual Tours Showcase */}
        <section className="py-32 bg-surface overflow-hidden">
          <div className="max-w-screen-2xl mx-auto px-6 md:px-8">
            <div className="relative rounded-3xl overflow-hidden aspect-video editorial-shadow group">
              <img className="w-full h-full object-cover brightness-75 group-hover:scale-105 transition-transform duration-[2000ms]" alt="Stunning 360 degree panoramic view" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAo_YuriHaton7rMhfwb8K7K2ooXz3UViMxOw9AOj8PagC_yCn5KBZ2P5iDvImBotNLc91NYE3YkckMjOrxJZfBy99J5fcJkumRiTnO0q_WIoWY5jRpEmuGfqBh-D9zhHxMaDC_JQRzw8frBaS6w_aTYiFFGcw9CPmKW4hV_r6fbtmSdNn6ubmCoC-fyxzjeePdcATCVBT-xu7S4SONb_icXvXVTW3-vjrxhOke2X-mXJZmVmMUEabHuHbU0QaGxmH_A2b7Fq8x2elg" />
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent flex flex-col items-center justify-center text-center p-8">
                <div className="mb-8 scale-110">
                  <span className="inline-flex items-center justify-center w-16 h-16 md:w-24 md:h-24 rounded-full bg-white/10 backdrop-blur-xl border border-white/30 text-white animate-pulse">
                    <span className="material-symbols-outlined text-4xl">360</span>
                  </span>
                </div>
                <h2 className="text-3xl md:text-7xl font-black font-headline text-white tracking-tighter mb-6 max-w-4xl">
                  Experience Your Future <br /><span className="text-[#8B0000]">Home Virtually</span>
                </h2>
                <p className="text-white/80 text-base md:text-xl max-w-2xl mb-10 font-medium">
                  Step inside our most exclusive listings in Abuja from anywhere in the world with immersive 4K spatial tours.
                </p>
                <button className="bg-white text-surface px-8 md:px-12 py-3 md:py-5 rounded-full font-bold text-base md:text-lg hover:bg-primary transition-all flex items-center gap-3">
                  <span className="material-symbols-outlined">play_circle</span> Launch Tour
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Core Competencies (Original Bento Grid) */}
        <section className="py-32 px-6 md:px-8 max-w-screen-2xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black font-headline text-white tracking-tighter mb-4">Core Competencies</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">We specialize in a wide range of modern, premium and tech-driven structures across Abuja, Nigeria.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[300px]">
            <div className="md:col-span-2 md:row-span-2 bg-surface-container-high rounded-lg p-10 flex flex-col justify-between group hover:bg-[#8B0000] transition-colors duration-500">
              <div>
                <span className="material-symbols-outlined text-5xl text-primary group-hover:text-white mb-6">home_max</span>
                <h3 className="text-3xl font-black font-headline text-white mb-4">Smart Estate Development</h3>
                <p className="text-on-surface-variant group-hover:text-white/80 leading-relaxed text-lg">AI-powered estates with automated systems, digital monitoring, and connected living environments.</p>
              </div>
              <a className="text-white font-bold flex items-center gap-2" href="#">Explore Portfolio <span className="material-symbols-outlined">arrow_outward</span></a>
            </div>
            <div className="bg-surface-container rounded-lg p-8 flex flex-col justify-center text-center group hover:bg-surface-bright transition-all">
              <span className="material-symbols-outlined text-4xl text-[#8B0000] mb-4">architecture</span>
              <h3 className="text-xl font-bold font-headline text-white mb-2">Design & Planning</h3>
              <p className="text-on-surface-variant text-sm">Modern and sustainable architectural solutions.</p>
            </div>
            <div className="bg-surface-container rounded-lg p-8 flex flex-col justify-center text-center group hover:bg-surface-bright transition-all">
              <span className="material-symbols-outlined text-4xl text-[#8B0000] mb-4">sell</span>
              <h3 className="text-xl font-bold font-headline text-white mb-2">Sales & Investment</h3>
              <p className="text-on-surface-variant text-sm">Serviced plots and high-return opportunities.</p>
            </div>
            <div className="bg-surface-container rounded-lg p-8 flex flex-col justify-center text-center group hover:bg-surface-bright transition-all">
              <span className="material-symbols-outlined text-4xl text-[#8B0000] mb-4">construction</span>
              <h3 className="text-xl font-bold font-headline text-white mb-2">Project Delivery</h3>
              <p className="text-on-surface-variant text-sm">End-to-end development from concept to completion.</p>
            </div>
            <div className="bg-surface-container rounded-lg p-8 flex flex-col justify-center text-center group hover:bg-surface-bright transition-all">
              <span className="material-symbols-outlined text-4xl text-[#8B0000] mb-4">real_estate_agent</span>
              <h3 className="text-xl font-bold font-headline text-white mb-2">Property Management</h3>
              <p className="text-on-surface-variant text-sm">White-glove maintenance and facility services.</p>
            </div>
          </div>
        </section>

        {/* Core Values Section (New) */}
        <section className="py-24 bg-surface-container-low px-6 md:px-8">
          <div className="max-w-screen-2xl mx-auto">
            <h2 className="text-4xl font-black font-headline text-white tracking-tighter mb-12 text-center">OUR CORE VALUES</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Innovation First", icon: "lightbulb", desc: "We lead with cutting-edge design and smart technologies." },
                { title: "Integrity & Transparency", icon: "handshake", desc: "Clear processes and trusted partnerships." },
                { title: "Quality Excellence", icon: "verified", desc: "Premium construction and finishing standards." },
                { title: "Customer-Centricity", icon: "group", desc: "Designed for comfort, lifestyle, and family needs." },
                { title: "Sustainability", icon: "eco", desc: "Eco-friendly materials and energy-efficient solutions." },
                { title: "Security & Reliability", icon: "security", desc: "Safe, smart, and future-ready homes." }
              ].map((value, idx) => (
                <div key={idx} className="bg-surface p-8 rounded-xl border border-white/5 hover:border-[#8B0000]/30 transition-all group">
                  <span className="material-symbols-outlined text-4xl text-[#8B0000] mb-4 group-hover:scale-110 transition-transform block">{value.icon}</span>
                  <h3 className="text-xl font-bold font-headline text-white mb-2">{value.title}</h3>
                  <p className="text-on-surface-variant text-sm">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Market Insights & News (Original Section) */}
        <section className="py-32 bg-surface-container-low">
          <div className="max-w-screen-2xl mx-auto px-6 md:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div className="max-w-2xl">
                <span className="text-primary font-bold uppercase tracking-widest text-xs mb-4 block">Intelligence</span>
                <h2 className="text-4xl md:text-6xl font-black font-headline text-white tracking-tighter leading-none">
                  Market Insights <br />&amp; News
                </h2>
              </div>
              <button className="bg-white/5 border border-white/10 text-white px-8 py-3 rounded-md font-bold hover:bg-white/10 transition-all">Explore All News</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* News Card 1 */}
              <div className="bg-surface group cursor-pointer border border-white/5 hover:border-primary/30 transition-all rounded-xl overflow-hidden">
                <div className="h-64 overflow-hidden">
                  <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Modern buildings" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtVSruk0gtSGOJXIBdDvuVm55NKHQDp69aA15uHnwbfBsO-bAZi18myOH-VJNVGGoYBPww72n43x8O6noBprEpBi4tCOdAcVzSSvI1Q1DJlvQAD3qmK1D-EZr4C4S7NXaeySUDwMg4siljtxJ-GdPS0wUgxVU9Wsh6KBW1QLD94-WI4-9ko8jVKAoxnqdZeBEgbs9ri_sI_EsPN4SExOmRNGTXyAkQBvUX8y5pfu2YIO4-ordYFOzZFLqZtSRAq7dhmy5y6jnhvS6k" />
                </div>
                <div className="p-8 space-y-4">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] bg-primary/10 text-primary px-3 py-1 rounded-full">Investment</span>
                  <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">The Shift to Regenerative Luxury Architecture</h3>
                  <a className="inline-flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-wider group/link" href="#">
                    Read More <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">trending_flat</span>
                  </a>
                </div>
              </div>
              {/* News Card 2 */}
              <div className="bg-surface group cursor-pointer border border-white/5 hover:border-primary/30 transition-all rounded-xl overflow-hidden">
                <div className="h-64 overflow-hidden">
                  <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Interior" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQbqzcyNQigFq8ovdH9zf6J7pB9NqBcjMaXroULfW4iWU7ESopZXuy2NExkrRCMfzAE01DalDKw_10sQtfiHxuYcTD3EG64t3MD75-AsWnuw-xXOJ6lyeAASuY7sKZ_-uaB0Qfb68WfObQ3F-hQhBy3AaK56RjbjfQZvNrP2a2Rs68Fal0QUSi2kio_Ua7oeCxtRo9c-RgQ7wF6yfdYm1ePnmVljbFkxF0tO474-e4JGtowNdjvvUkff3UGiv_jMY4pHfllyNGCZiV" />
                </div>
                <div className="p-8 space-y-4">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] bg-secondary/10 text-secondary px-3 py-1 rounded-full">Design</span>
                  <h3 className="text-xl font-bold text-white group-hover:text-secondary transition-colors">Minimalist Integration: IoT Meets Artisanal Finish</h3>
                  <a className="inline-flex items-center gap-2 text-secondary text-xs font-bold uppercase tracking-wider group/link" href="#">
                    Read More <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">trending_flat</span>
                  </a>
                </div>
              </div>
              {/* News Card 3 */}
              <div className="bg-surface group cursor-pointer border border-white/5 hover:border-primary/30 transition-all rounded-xl overflow-hidden">
                <div className="h-64 overflow-hidden">
                  <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Coastal view" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSWYbOvuqblnRIBfG_P0TU1487g0z0PHhlxDI1jxyNYIMBuyNOxsSZDsWSy-_U0u8X3zsAgJXFnHS1pOTYXQq_rlH4Tb3ZA-Gdb7nGiF5rC5q22xmAn4kUZaNys_KXF-uW51TDpSVWLMlkUb9SUcolIWVtKNKEO-TUJ93NUIkLpZ01XSt37Q5k4QAzyC2iIMuaSEElIQkMte19Ni5qSJFjN-O7pYvY1rbSy8L6dQXQZHqGVIFFowRqGxAUXteYn47lxrq3giP0A9OH" />
                </div>
                <div className="p-8 space-y-4">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] bg-[#8B0000]/10 text-[#8B0000] px-3 py-1 rounded-full">Market</span>
                  <h3 className="text-xl font-bold text-white group-hover:text-[#8B0000] transition-colors">The Rising Demand for Private Island Estates</h3>
                  <a className="inline-flex items-center gap-2 text-[#8B0000] text-xs font-bold uppercase tracking-wider group/link" href="#">
                    Read More <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">trending_flat</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Architectural Showcase Gallery */}
        <section className="py-32 bg-surface">
          <div className="max-w-screen-2xl mx-auto px-6 md:px-8">
            <h2 className="text-4xl font-black font-headline text-white tracking-tighter mb-8 text-center uppercase">Architectural Showcase</h2>
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {["All Types", "Apartments", "Duplexes", "Villas"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-8 py-2 rounded-full font-bold transition-all ${activeTab === tab ? 'bg-primary text-on-primary' : 'bg-surface-container-high text-on-surface hover:bg-surface-bright'}`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 transition-all duration-500">
              {GALLERY_IMAGES.filter(img => activeTab === "All Types" || img.type === activeTab).map((img, idx) => (
                <div
                  key={img.id}
                  className={`${idx === 0 ? 'md:col-span-2 md:row-span-2 h-[600px]' : idx === 3 ? 'md:col-span-2 h-[290px]' : 'md:col-span-1 h-[290px]'} overflow-hidden rounded-lg relative group transition-all duration-500`}
                >
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt={img.title} src={img.src} />
                  <div className="absolute inset-0 bg-surface/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-10">
                    <h4 className="text-2xl font-black text-white">{img.title}</h4>
                    <p className="text-white/80">{img.type} Collection</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Premium Testimonials (Original) */}
        <section className="py-32 bg-surface relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#8B0000] rounded-full blur-[120px]"></div>
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary rounded-full blur-[150px]"></div>
          </div>
          <div className="max-w-screen-xl mx-auto px-6 md:px-8 relative z-10">
            <div className="text-center mb-16">
              <span className="text-primary font-bold uppercase tracking-[0.4em] text-xs mb-4 block">Voices of Distinction</span>
              <h2 className="text-4xl md:text-5xl font-black font-headline text-white tracking-tighter mb-4">Client Testimonials</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <div className="glass-panel p-1 rounded-[2rem] editorial-shadow">
                  <div className="bg-[#0d1c32]/40 backdrop-blur-xl p-10 md:p-16 rounded-[1.9rem] relative overflow-hidden">
                    <span className="material-symbols-outlined text-8xl text-white/5 absolute -top-4 -left-4 font-black">format_quote</span>
                    <div className="relative z-10">
                      <p className="text-2xl md:text-3xl font-headline font-medium text-gradient leading-tight mb-12 italic transition-all duration-500 min-h-[120px]">
                        "{TESTIMONIALS[currentTestimonial].quote}"
                      </p>
                      <div className="flex items-center gap-6">
                        <div>
                          <div className="text-2xl font-black text-white font-headline transition-all duration-500">{TESTIMONIALS[currentTestimonial].name}</div>
                          <div className="text-primary font-bold text-sm uppercase tracking-widest transition-all duration-500">{TESTIMONIALS[currentTestimonial].role}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5 space-y-6">
                <div className="bg-surface-container/50 border border-white/5 p-8 rounded-2xl">
                  <p className="text-on-surface-variant text-lg mb-6 italic leading-relaxed">"The seamless integration of AI in our new villa has redefined what comfort means."</p>
                </div>
                <div className="bg-surface-container/50 border border-white/5 p-8 rounded-2xl">
                  <p className="text-on-surface-variant text-lg mb-6 italic leading-relaxed">"Gogle Homes doesn't sell real estate; they curate lifestyle masterpieces."</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA (Original) */}
        <section className="relative py-40 overflow-hidden text-center px-6">
          <div className="absolute inset-0 z-0">
            <img className="w-full h-full object-cover opacity-30" alt="Aerial" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAo_YuriHaton7rMhfwb8K7K2ooXz3UViMxOw9AOj8PagC_yCn5KBZ2P5iDvImBotNLc91NYE3YkckMjOrxJZfBy99J5fcJkumRiTnO0q_WIoWY5jRpEmuGfqBh-D9zhHxMaDC_JQRzw8frBaS6w_aTYiFFGcw9CPmKW4hV_r6fbtmSdNn6ubmCoC-fyxzjeePdcATCVBT-xu7S4SONb_icXvXVTW3-vjrxhOke2X-mXJZmVmMUEabHuHbU0QaGxmH_A2b7Fq8x2elg" />
            <div className="absolute inset-0 bg-gradient-to-b from-surface via-transparent to-surface"></div>
          </div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-8xl font-black font-headline text-white tracking-tighter mb-8 leading-none uppercase">
              Invest in the <br />Future of Living
            </h2>
            <button className="bg-[#8B0000] text-white px-12 py-5 rounded-md font-bold text-xl premium-button-inner hover:scale-105 transition-transform shadow-2xl">
              Request an Exclusive Invitation
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
