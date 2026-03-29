"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Properties', href: '/properties' },
    { name: 'Offers', href: '/offers' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-[#041329]/95 backdrop-blur-xl border-b border-white/5 shadow-2xl">
        <nav className="flex justify-between items-center px-4 md:px-8 py-4 max-w-screen-2xl mx-auto">
          <div className="flex items-center">
            <Link href="/">
              <img src="/logo.png" alt="Gogle Homes Ltd." className="h-10 md:h-12 w-auto object-contain" />
            </Link>
          </div>
          
          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`font-headline font-bold tracking-tight transition-all duration-300 p-1 rounded-sm ${
                    isActive 
                      ? 'text-white border-b-2 border-[#8B0000]' 
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center space-x-4">
            <Link href="/contact" className="hidden sm:block">
              <button className="bg-[#8B0000] text-white px-6 py-2.5 rounded-md font-bold tracking-tight premium-button-inner hover:brightness-110 active:scale-95 transition-all text-sm whitespace-nowrap">
                Book for Inspection
              </button>
            </Link>
            
            {/* Mobile Toggle Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-white w-10 h-10 flex items-center justify-center hover:bg-white/5 rounded-md transition-colors"
              aria-label="Toggle menu"
            >
              <span className="material-symbols-outlined text-3xl">
                {isMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Sidebar Menu Overlay & Menu */}
      <div className={`fixed inset-0 z-[100] lg:hidden transition-all duration-500 ${isMenuOpen ? 'visible' : 'invisible'}`}>
        {/* Semi-transparent Overlay */}
        <div 
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm z-0 transition-opacity duration-500 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setIsMenuOpen(false)}
        ></div>
        
        {/* Sidebar Menu */}
        <div 
          className={`absolute right-0 top-0 h-full w-[85%] max-w-[320px] shadow-2xl border-l border-white/10 p-8 z-20 transform transition-transform duration-500 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          style={{ backgroundColor: '#041329', opacity: 1 }}
        >
          <div className="flex justify-between items-center mb-12">
            <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
            <button 
              onClick={() => setIsMenuOpen(false)} 
              className="text-white w-10 h-10 flex items-center justify-center hover:bg-white/5 rounded-full transition-colors"
            >
               <span className="material-symbols-outlined text-3xl">close</span>
            </button>
          </div>
          
          <div className="flex flex-col space-y-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-xl font-headline font-bold tracking-tight border-b border-white/5 pb-4 ${
                    isActive ? 'text-[#8B0000] border-[#8B0000]/50' : 'text-white hover:text-[#8B0000]'
                  } transition-all`}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="pt-8">
              <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                <button className="w-full bg-[#8B0000] text-white py-4 rounded-md font-bold tracking-tight premium-button-inner hover:brightness-110 active:scale-95 transition-all">
                  Book for Inspection
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
