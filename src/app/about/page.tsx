"use client";
import React from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function About() {
  const team = [
    {
      name: "Rilwan Usman",
      role: "Executive Chairman",
      desc: "Veteran real estate developer with over 30 years of experience delivering large-scale housing projects across Nigeria. Founder of Padama Construction & Engineering Ltd.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBW2T7r3SnX4C4DQF2ZZuZE09pV-_EpAefDPySeqDXRIk4FxKhu5f_G2C7Y4TJfJ_zfrLGpHhPOhHfb07rSX4tJuq5S-SXmQTxB09L-sPc3q9BuamajYOapSFfLBnd9IcopmN5AJIxhOffqm_FyPJkiQTeJmR7Vv_NVEMOAV4zCcf-HYz40sG2uW3KtOWXgKNbgsA4L31OVoYkZ9YrsM0yMPJQNogU8u1XXC-ScSkk7ViYOkwwaY9L6kK8B2mC9gWLzAbXSKnUDJcVA"
    },
    {
      name: "Engr. Rabiu Aliyu",
      role: "CEO / Director",
      desc: "Technology leader with a strong background in smart homes and AI. CEO of Syrol Technologies, delivering tech solutions across Africa.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBW1a_xCOsJRqZ_Ss5NrN3x4d6pKc3keupR6JbxO9ww5r6OF1k0YZfR1-2VCvnK3u4snnuzAFqw9FVwwOCPN9ioTHTpbcqWRsHSxib3hzctLI43iiaKNaPX5yb4dOpfJE_MKEFnROFx2PGQMGXd71mdaKq2sB9cc9yWe9hqiH6vtNYrzshv3SE1Y1EUwS_Ahx0JBXdRq82sSALDGCRw-w27KZPp1_vbRNH9l0R68YLxOkebQJnDSrYDfxUeIM-_Sr0xQfRSmUrEaK0O"
    },
    {
      name: "Engr. Chukwunonso Obi",
      role: "Head of Engineering",
      desc: "Visionary engineering leader with over 16 years of experience in construction and real estate in Sub-Saharan Africa.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC3T6O4-kMck4YG_nYjx0EeZBlydT60xWc4M26feIPT9m3T0JvfP6KJ2rzI7tbpHSkUEq6octr9rLDn7k0_fdWGbZerQmTAJBJNSBU2LUExQ-nihqMm8J6We0HogzLAw6ZBFRtgorpIHMFVsODVr5m8wb19n0EiMlP_Gszbl4KtcEDyOWeRdtMp3kEN_WUN4YtTH7v6xE5uy7NPtURU_JEkHuFmZtqZ1r8_ZJgoaWPY58LgfgSfSr1ORw6epnXuLRmN_AuQ94AdX2xr"
    },
    {
      name: "Engr. Onyia Christopher Chukwuka",
      role: "Engineering Head",
      desc: "Expert with over 38 years in oil & gas and infrastructure development. Leading major city engineering projects in Abuja.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDaJUOXn22kAoa_sefbL6iowjILMe2Gtj3OSVp6Oc8mIUmqY_BFKKhrbJAfNtYeHhrrctBQfMGdsnYH9z7MEd-PhRLdhoqSeDM-E9yvURJ6SdJqXiGr4x9bCGvqRdU7jBvx_X_A8s4QLgv1jpIqIXp35Aq65FW_qcTrM0ZZEn5siBi6mjvd8BBjK31MbMYLQ9PXfRDsU7WcVmBxKjNUKyitreSa-63HUJNvbKiPiWqAcP_0ammToyGxOns_ufbFKhD_l2VEzcPc-VlO"
    },
    {
      name: "Engr. Bashir Ridwan Fadama",
      role: "Civil Engineering Manager",
      desc: "Award-winning civil engineer with extensive estate development experience across multiple luxury portfolios.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBro5rfv4RKSKvLdO4RxRAyciu1BNsq-vkFKns1sodjO0NGxo5w2IZ34jMH9_UBvDMgm9aJbQLWs4NU-IWRmlQFOHqAcx8ctwQPznsprW2H5nNCd3P9Dd2WwHX-_3hyFFsKV9D-K01TlVSTodob5X1y6LY_5t3DC4ng3XfYPmrAas696BZK88uX6oVMTnnh1eqxIC0uaxWQ-ll4ZY0i0DzLUw76RcoYSpF8RTje4k4i0y3sy5s6f-8fR0Mqhsd46cblCspdjvxi3Ele"
    },
    {
      name: "Engr. Idiris Yusuf",
      role: "Project Engineering Manager",
      desc: "Expert in project execution and estate development. Leading major developments including Dawaki's largest estates.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCjEx9USKiw6on3cRTpNSV7i-muzhF-yi8gHS96No7nUJh00tBFoJDOhT9MYaMr2a6YLFOk3au8eYVQktNRe-g0Brk2FzmjfmMaqhamYuMbo5DOEOArL6_aPJA5o4MayeliQ9jQjsc8KWkV6rkcb8JmtUf_5pNsmf46bUSO-k4frBB5r6lp3FPS7AbsREbAE7uhrjZiS1a4qoBDNMWa7UHok9B_81VeTqM8K53dBokIjj64JiLG6-2t3tkO3ULCZeuhykoIpCKoRn91"
    },
    {
      name: "Arch. Umar Bala",
      role: "Lead Architect",
      desc: "Architect with over 12 years of experience delivering functional and innovative architectural solutions.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBb1LlPa3WCoBeD5CNrB4llYH4fZkRrdIVzwYGAA6BlkvU-hu_EW8ivTMa2o7iYv88tyNkTUcGJ5LyHC8GvV0GAN0PfKrNPH3fBJevcwMNodzMDd5wMcn5tVfqx_KPfvksHZT8flChJTQNhBGaMlkRHw8ftqTuHUOqnX6S4CCPC10WSIook51-lD1BzRD8W4hdB9cNzvMbFuchVgftUnuw_SGBXzXmQbUS-iq4w2TgIm8um5MK7biy1ufbRdEnObWfEuMbFANzqYJeM"
    },
    {
      name: "Barr. Emeka Chugbo",
      role: "Head of Legal",
      desc: "Legal expert with 20+ years in corporate law and regulatory compliance. Ensuring strong governance across operations.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBb1LlPa3WCoBeD5CNrB4llYH4fZkRrdIVzwYGAA6BlkvU-hu_EW8ivTMa2o7iYv88tyNkTUcGJ5LyHC8GvV0GAN0PfKrNPH3fBJevcwMNodzMDd5wMcn5tVfqx_KPfvksHZT8flChJTQNhBGaMlkRHw8ftqTuHUOqnX6S4CCPC10WSIook51-lD1BzRD8W4hdB9cNzvMbFuchVgftUnuw_SGBXzXmQbUS-iq4w2TgIm8um5MK7biy1ufbRdEnObWfEuMbFANzqYJeM"
    }
  ];

  const workflow = [
    { id: "01", title: "Initiation & Planning", desc: "A comprehensive project roadmap aligned with your goals." },
    { id: "02", title: "Design & Preconstruction", desc: "Approved designs and a project ready for seamless execution." },
    { id: "03", title: "Procurement & Sourcing", desc: "Quality materials secured, partners engaged, and value optimized." },
    { id: "04", title: "Construction & Execution", desc: "Physical progress aligned with approved plans and timelines." },
    { id: "05", title: "Quality Control & Inspection", desc: "A project built right, the first time with rigorous testing." },
    { id: "06", title: "Project Closeout & Handover", desc: "A delighted client and a project built to last legacies." }
  ];

  return (
    <div className="bg-[#041329] text-white selection:bg-[#8B0000] selection:text-white min-h-screen font-body">
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative min-h-[700px] flex items-center overflow-hidden px-6 md:px-24">
          <div className="absolute inset-0 z-0">
            <img className="w-full h-full object-cover opacity-40 scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBW1a_xCOsJRqZ_Ss5NrN3x4d6pKc3keupR6JbxO9ww5r6OF1k0YZfR1-2VCvnK3u4snnuzAFqw9FVwwOCPN9ioTHTpbcqWRsHSxib3hzctLI43iiaKNaPX5yb4dOpfJE_MKEFnROFx2PGQMGXd71mdaKq2sB9cc9yWe9hqiH6vtNYrzshv3SE1Y1EUwS_Ahx0JBXdRq82sSALDGCRw-w27KZPp1_vbRNH9l0R68YLxOkebQJnDSrYDfxUeIM-_Sr0xQfRSmUrEaK0O"/>
            <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/80 to-transparent"></div>
          </div>
          <div className="relative z-10 max-w-screen-2xl mx-auto">
            <span className="inline-block text-secondary font-headline font-bold tracking-[0.3em] uppercase text-xs mb-4">Next-Gen Real Estate</span>
            <h1 className="text-6xl md:text-8xl font-headline font-extrabold text-white leading-tight mb-8 tracking-tighter">
              Defining <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">Modern</span> Living.
            </h1>
            <p className="text-xl md:text-2xl text-on-surface-variant max-w-2xl leading-relaxed mb-10">
              Gogle Homes Ltd. represents the pinnacle of high-end real estate, blending architectural audacity with unparalleled human-centric design. We don't just build houses; we curate legacies.
            </p>
            <div className="flex space-x-8">
              <div className="flex flex-col">
                <span className="text-4xl font-bold text-white">250+</span>
                <span className="text-xs text-secondary font-bold uppercase tracking-widest mt-1">Properties Delivered</span>
              </div>
              <div className="w-px h-12 bg-white/10 mt-2"></div>
              <div className="flex flex-col">
                <span className="text-4xl font-bold text-white">15+</span>
                <span className="text-xs text-secondary font-bold uppercase tracking-widest mt-1">Awards Won</span>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-32 px-6 md:px-8 bg-surface-container">
          <div className="max-w-screen-2xl mx-auto grid md:grid-cols-2 gap-12">
            <div className="p-12 rounded-xl bg-surface-container-high relative overflow-hidden group border border-white/5">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <span className="material-symbols-outlined text-[150px]">visibility</span>
              </div>
              <h2 className="text-3xl font-headline font-bold text-white mb-6 uppercase tracking-tighter">Our Vision</h2>
              <p className="text-lg text-on-surface-variant leading-relaxed">
                To become Africa\u2019s leading smart real estate development company, transforming how people live through innovation, technology, and sustainable infrastructure.
              </p>
            </div>
            <div className="p-12 rounded-xl border border-secondary/10 bg-surface-container-lowest relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <span className="material-symbols-outlined text-[150px]">rocket_launch</span>
              </div>
              <h2 className="text-3xl font-headline font-bold text-white mb-6 uppercase tracking-tighter">Our Mission</h2>
              <p className="text-lg text-on-surface-variant leading-relaxed">
                To develop modern, intelligent, and secure homes that improve quality of life by integrating smart technologies, sustainable practices, and innovative design solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-32 px-6 md:px-8">
          <div className="max-w-screen-2xl mx-auto">
            <div className="mb-20">
              <h2 className="text-4xl font-headline font-extrabold text-white mb-4 uppercase tracking-tighter">Core Values</h2>
              <div className="w-24 h-1 bg-secondary"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Innovation", desc: "Pushing the boundaries of architectural design and smart home technology.", icon: "lightbulb" },
                { title: "Integrity", desc: "Transparent dealings and unwavering commitment to our promises.", icon: "verified_user" },
                { title: "Quality", desc: "Premium materials and meticulous craftsmanship in every detail.", icon: "high_quality" },
                { title: "Customer Focus", desc: "Your vision is our blueprint. We prioritize your lifestyle needs.", icon: "diversity_3" },
                { title: "Sustainability", desc: "Eco-friendly building practices for a greener future.", icon: "eco" },
                { title: "Security", desc: "Advanced smart security systems for ultimate peace of mind.", icon: "shield_lock" }
              ].map((value) => (
                <div key={value.title} className="p-8 bg-surface-container-low hover:bg-[#8B0000]/5 transition-all rounded-lg group border border-white/5">
                  <div className="w-12 h-12 rounded bg-secondary/10 flex items-center justify-center mb-6 group-hover:bg-secondary transition-all">
                    <span className="material-symbols-outlined text-secondary group-hover:text-on-secondary">{value.icon}</span>
                  </div>
                  <h3 className="text-xl font-headline font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Workflow */}
        <section className="py-32 px-6 md:px-8 bg-surface-container-lowest">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-24">
              <h2 className="text-4xl font-headline font-extrabold text-white mb-4 uppercase tracking-tighter">Our Workflow</h2>
              <p className="text-on-surface-variant">A disciplined, client-focused process ensuring precision and excellence.</p>
            </div>
            <div className="relative border-l border-white/10 ml-6 md:ml-0 md:border-l-0">
               {/* Vertical Central Line */}
               <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-white/10 hidden md:block"></div>
               
               {workflow.map((step, idx) => (
                 <div key={step.id} className={`relative mb-24 flex items-center justify-between w-full ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                   <div className={`w-full md:w-5/12 ${idx % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'} ml-10 md:ml-0`}>
                     <h4 className="text-xl font-bold text-white mb-2">{step.title}</h4>
                     <p className="text-sm text-on-surface-variant leading-relaxed">{step.desc}</p>
                   </div>
                   <div className="absolute left-[-1.25rem] md:static z-10 w-10 h-10 rounded-full bg-secondary flex items-center justify-center shadow-xl shadow-secondary/10 border-4 border-surface text-on-secondary font-black text-xs">
                     {step.id}
                   </div>
                   <div className="hidden md:block w-5/12"></div>
                 </div>
               ))}
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="py-32 px-6 md:px-8">
          <div className="max-w-screen-2xl mx-auto">
            <div className="mb-20">
              <h2 className="text-4xl font-headline font-extrabold text-white mb-4 uppercase tracking-tighter">The Leadership</h2>
              <p className="text-on-surface-variant">Visionaries driving the Gogle Homes legacy across Africa.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((m) => (
                <div key={m.name} className="group relative overflow-hidden rounded-xl aspect-[3/4] bg-surface-container border border-white/5">
                  <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" src={m.image} />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent opacity-90"></div>
                  <div className="absolute bottom-0 left-0 p-6 w-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <h4 className="text-xl font-bold text-white">{m.name}</h4>
                    <p className="text-secondary text-xs font-bold uppercase tracking-widest mt-1">{m.role}</p>
                    <p className="text-on-surface-variant text-[10px] mt-4 opacity-0 group-hover:opacity-100 transition-all duration-700 leading-relaxed font-medium">
                      {m.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
