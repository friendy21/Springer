'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, MapPin, Search } from 'lucide-react';

const PORTFOLIO = [
  {
    href: '/project2',
    image: '/images/ok1.jpeg',
    title: 'Featured Residential',
    desc1: 'short description in the first line',
    desc2: 'maybe more in another line'
  },
  {
    href: '/project3',
    image: '/images/ok4.jpeg',
    title: 'Luxury Apartments',
    desc1: 'short description in the first line',
    desc2: 'maybe more in another line'
  },
  {
    href: '/project4',
    image: '/images/ok3.jpeg',
    title: 'Mixed-Use Development',
    desc1: 'short description in the first line',
    desc2: 'maybe more in another line'
  }
];

export default function RealestatePage() {
  return (
    <>
      <section className="relative pt-36 pb-32 bg-zinc-950 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/shutterstock_753807385-2560x852.webp')] bg-cover bg-center opacity-10 z-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-zinc-950/40 z-0" />
        <div className="absolute inset-0 grid-pattern opacity-[0.05] z-0" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="flex items-center justify-center gap-3 mb-7">
            <span className="w-10 h-px bg-brand-green" />
            <span className="section-label text-brand-green/80 border-brand-green/20 bg-brand-green/10">Our Portfolio</span>
            <span className="w-10 h-px bg-brand-green" />
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-serif mb-6 tracking-tight">
            Real Estate <span className="text-brand-green">Portfolio</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-300/80 max-w-2xl mx-auto font-light leading-relaxed">
            We help our clients achieve superior results and strive to outperform their highest expectations.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white relative border-b border-zinc-100">
        <div className="absolute inset-0 dot-pattern opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-zinc-900 tracking-tight">Featured Projects</h2>
            <div className="w-12 h-1 bg-brand-green mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PORTFOLIO.map((item, idx) => (
              <Link key={idx} href={item.href} className="group relative overflow-hidden rounded-2xl bg-zinc-900 aspect-[4/5] md:aspect-square lg:aspect-[4/5] border border-zinc-100 shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:shadow-[0_24px_64px_rgba(42,140,45,0.18)] transition-all duration-500">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="w-10 h-10 mb-4 rounded-full bg-brand-green flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <Search className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold font-serif text-white mb-2">{item.title}</h3>
                  <p className="text-zinc-300 text-sm mb-1">{item.desc1}</p>
                  <p className="text-zinc-400 text-xs">{item.desc2}</p>
                  
                  <div className="mt-6 flex items-center gap-2 text-brand-green text-[11px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>View Property</span>
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-zinc-50 relative overflow-hidden">
        <div className="absolute inset-0 line-pattern pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl border border-zinc-200 p-8 md:p-14 shadow-xl shadow-brand-green/5 max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold font-serif text-zinc-900 tracking-tight">How May We Help You?</h2>
              <p className="mt-4 text-zinc-500 max-w-lg mx-auto">Reach out to our global team to discuss real estate investment and advisory opportunities.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
              <div className="md:col-span-2 space-y-8">
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-900 mb-4 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-brand-green" /> Offices
                  </h4>
                  <ul className="text-zinc-600 text-sm space-y-3">
                    <li>Kangding East road 45 Jingan Shanghai 200020</li>
                    <li>430 Beverly Drive, Wilmette Ilinois 60091</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-900 mb-4">Contact Info</h4>
                  <ul className="text-zinc-600 text-sm space-y-2">
                    <li>+86 13661803041</li>
                    <li>+1 2242163685</li>
                    <li>contact@springer.capital</li>
                  </ul>
                </div>
              </div>

              <div className="md:col-span-3">
                <form action="https://formsubmit.co/contact@springer.capital" method="POST" className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-2">Name</label>
                      <input type="text" name="name" required className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-all" placeholder="John Doe" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-2">Email</label>
                      <input type="email" name="email" required className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-all" placeholder="john@example.com" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-2">Phone</label>
                    <input type="tel" name="phone" required className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-all" placeholder="+1 (555) 000-0000" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-2">Comments</label>
                    <textarea name="comment" rows={4} required className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-all resize-none" placeholder="How can we help?" />
                  </div>
                  <input type="hidden" name="_next" value="https://www.springercapital.com/thankyou" />
                  <input type="text" name="_formsubmit_id" style={{ display: 'none' }} />
                  
                  <button type="submit" className="w-full flex items-center justify-center gap-2 bg-zinc-900 text-white font-semibold py-4 rounded-xl hover:bg-brand-green transition-colors mt-2">
                    Submit Inquiry <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
