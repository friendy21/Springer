'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-nav transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl tracking-tight text-zinc-800">
              <span className="font-bold font-serif text-brand-green">Springer</span> Capital
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-zinc-600 hover:text-brand-green font-medium transition-colors">
              Home
            </Link>

            <div className="relative group">
              <button className="flex items-center text-zinc-600 hover:text-brand-green font-medium transition-colors cursor-pointer pb-2">
                About <ChevronDown className="ml-1 w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute top-8 left-0 hidden w-48 bg-white shadow-xl rounded-md border border-zinc-100 group-hover:block transition-all opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto">
                <div className="py-2">
                  <Link href="/about" className="block px-4 py-2 text-sm text-zinc-700 hover:bg-brand-green hover:text-white transition-colors">About</Link>
                  <Link href="/team" className="block px-4 py-2 text-sm text-zinc-700 hover:bg-brand-green hover:text-white transition-colors">Management</Link>
                </div>
              </div>
            </div>

            <div className="relative group">
              <button className="flex items-center text-zinc-600 hover:text-brand-green font-medium transition-colors cursor-pointer pb-2">
                Products <ChevronDown className="ml-1 w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute top-8 left-0 hidden w-64 bg-white shadow-xl rounded-md border border-zinc-100 group-hover:block transition-all opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto">
                <div className="py-2">
                  <Link href="/multi" className="block px-4 py-2 text-sm text-zinc-700 hover:bg-brand-green hover:text-white transition-colors">Multi Family & Student</Link>
                  <Link href="/logistics" className="block px-4 py-2 text-sm text-zinc-700 hover:bg-brand-green hover:text-white transition-colors">Logistics</Link>
                  <Link href="/mixed" className="block px-4 py-2 text-sm text-zinc-700 hover:bg-brand-green hover:text-white transition-colors">Mixed Use</Link>
                  <Link href="/hospitality" className="block px-4 py-2 text-sm text-zinc-700 hover:bg-brand-green hover:text-white transition-colors">Hospitality</Link>
                  <Link href="/development" className="block px-4 py-2 text-sm text-zinc-700 hover:bg-brand-green hover:text-white transition-colors">Development Land</Link>
                </div>
              </div>
            </div>

            <Link href="/career" className="text-zinc-600 hover:text-brand-green font-medium transition-colors">
              Careers
            </Link>
            <Link href="/contact" className="text-zinc-600 hover:text-brand-green font-medium transition-colors">
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-zinc-600 hover:text-brand-green focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Content */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-zinc-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium text-zinc-700 hover:text-brand-green hover:bg-zinc-50" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            
            <div>
              <button 
                onClick={() => toggleDropdown('about')}
                className="w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium text-zinc-700 hover:text-brand-green hover:bg-zinc-50"
              >
                About <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'about' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'about' && (
                <div className="pl-6 pb-2 space-y-1">
                  <Link href="/about" className="block px-3 py-2 text-sm text-zinc-600 hover:text-brand-green" onClick={() => setIsOpen(false)}>About</Link>
                  <Link href="/team" className="block px-3 py-2 text-sm text-zinc-600 hover:text-brand-green" onClick={() => setIsOpen(false)}>Management</Link>
                </div>
              )}
            </div>

            <div>
              <button 
                onClick={() => toggleDropdown('products')}
                className="w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium text-zinc-700 hover:text-brand-green hover:bg-zinc-50"
              >
                Products <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'products' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'products' && (
                <div className="pl-6 pb-2 space-y-1">
                  <Link href="/multi" className="block px-3 py-2 text-sm text-zinc-600 hover:text-brand-green" onClick={() => setIsOpen(false)}>Multi Family & Student</Link>
                  <Link href="/logistics" className="block px-3 py-2 text-sm text-zinc-600 hover:text-brand-green" onClick={() => setIsOpen(false)}>Logistics</Link>
                  <Link href="/mixed" className="block px-3 py-2 text-sm text-zinc-600 hover:text-brand-green" onClick={() => setIsOpen(false)}>Mixed Use</Link>
                  <Link href="/hospitality" className="block px-3 py-2 text-sm text-zinc-600 hover:text-brand-green" onClick={() => setIsOpen(false)}>Hospitality</Link>
                  <Link href="/development" className="block px-3 py-2 text-sm text-zinc-600 hover:text-brand-green" onClick={() => setIsOpen(false)}>Development Land</Link>
                </div>
              )}
            </div>

            <Link href="/career" className="block px-3 py-2 rounded-md text-base font-medium text-zinc-700 hover:text-brand-green hover:bg-zinc-50" onClick={() => setIsOpen(false)}>
              Careers
            </Link>
            <Link href="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-zinc-700 hover:text-brand-green hover:bg-zinc-50" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
