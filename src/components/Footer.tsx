"use client";
import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#041329] py-16 px-6 md:px-8 border-t border-white/5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-screen-2xl mx-auto">
        <div className="space-y-6">
          <Link href="/">
            <img src="/logo.png" alt="Gogle Homes Ltd." className="h-8 md:h-10 w-auto object-contain" />
          </Link>
          <p className="text-slate-500 text-sm leading-relaxed">
            Setting the gold standard in smart luxury real estate and architectural innovation across Nigeria. Your vision, expertly crafted.
          </p>
          <div className="flex space-x-4">
            <span className="text-slate-400 font-bold text-sm">@goglehomes</span>
          </div>
        </div>
        <div className="space-y-6">
          <h4 className="text-white font-bold font-headline uppercase tracking-widest text-xs">Quick Actions</h4>
          <ul className="space-y-4 text-sm font-headline font-bold">
            <li><Link className="text-slate-500 hover:text-[#8B0000] transition-colors" href="/">Home</Link></li>
            <li><Link className="text-slate-500 hover:text-[#8B0000] transition-colors" href="/about">About</Link></li>
            <li><Link className="text-slate-500 hover:text-[#8B0000] transition-colors" href="/properties">Properties</Link></li>
            <li><Link className="text-slate-500 hover:text-[#8B0000] transition-colors" href="/offers">Offers</Link></li>
            <li><Link className="text-slate-500 hover:text-[#8B0000] transition-colors" href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="space-y-6">
          <h4 className="text-white font-bold font-headline uppercase tracking-widest text-xs">Contact Details</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-[#8B0000] text-lg">call</span>
              <span className="text-slate-500">08064160204, 08065393938, 08088015345</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-[#8B0000] text-lg">location_on</span>
              <span className="text-slate-500 text-xs md:text-sm">Iheasiaba Court, Ishaya Shekari Crescent, Federal Staff Housing Estate, Gwarinpa, Abuja, FCT, Nigeria.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-[#8B0000] text-lg">public</span>
              <span className="text-slate-500">www.goglehomes.com</span>
            </li>
          </ul>
        </div>
        <div className="space-y-6">
          <h4 className="text-white font-bold font-headline uppercase tracking-widest text-xs">Inquiries</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-[#8B0000] text-lg">mail</span>
              <span className="text-slate-500">info@goglehomes.com</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-[#8B0000] text-lg">mail</span>
              <span className="text-slate-500">partnerships@goglehomes.com</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-screen-2xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between gap-4">
        <p className="text-slate-500 text-[10px] text-center md:text-left">© 2024 Gogle Homes Ltd. All rights reserved.</p>
        <div className="flex justify-center md:justify-end gap-6 text-[10px] text-slate-500">
          <Link className="hover:text-white transition-colors" href="#">Privacy Policy</Link>
          <Link className="hover:text-white transition-colors" href="#">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
