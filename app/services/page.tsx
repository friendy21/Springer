'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Settings, Leaf, Gauge, Eye, Database, Smartphone, ArrowRight } from 'lucide-react';

const SERVICES_GRID = [
  {
    icon: Settings,
    title: 'Responsive Design',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.'
  },
  {
    icon: Leaf,
    title: 'Modern Architecture',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.'
  },
  {
    icon: Gauge,
    title: 'Performance Optimization',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.'
  },
  {
    icon: Eye,
    title: 'Visual Identity',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.'
  },
  {
    icon: Database,
    title: 'Data Management',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.'
  },
  {
    icon: Smartphone,
    title: 'Mobile First approach',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.'
  }
];

const PORTFOLIO_IMAGES = [
  '/images/ok1.jpeg',
  '/images/ok2.webp',
  '/images/ok3.jpeg',
  '/images/ok4.jpeg'
];

export default function ServicesPage() {
  return (
    <>
      {/* ═══════ HEADER ═══════ */}
      <section className="relative pt-36 pb-32 bg-zinc-950 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/shutterstock_753807385-2560x852.webp')] bg-cover bg-center opacity-10 z-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-zinc-950/40 z-0" />
        <div className="absolute inset-0 grid-pattern opacity-[0.05] z-0" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="flex items-center justify-center gap-3 mb-7">
            <span className="w-10 h-px bg-brand-green" />
            <span className="section-label text-brand-green/80 border-brand-green/20 bg-brand-green/10">What We Do</span>
            <span className="w-10 h-px bg-brand-green" />
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-serif mb-6 tracking-tight">
            Our <span className="text-brand-green">Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-300/80 max-w-2xl mx-auto font-light leading-relaxed">
            Delivering exceptional value through innovative solutions and unparalleled expertise.
          </p>
        </div>
      </section>

      {/* ═══════ PORTFOLIO CAROUSEL PREVIEW ═══════ */}
      <section className="py-24 bg-white relative">
        <div className="absolute inset-0 dot-pattern opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-12">
            <h2 className="text-3xl font-bold font-serif text-zinc-900 tracking-tight">Recent Projects</h2>
            <div className="w-12 h-1 bg-brand-green mt-6" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PORTFOLIO_IMAGES.map((img, idx) => (
              <div key={idx} className="group relative bg-white rounded-2xl overflow-hidden border border-zinc-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_40px_rgba(42,140,45,0.12)] transition-all duration-300">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-100">
                  <Image
                    src={img}
                    alt={`Project ${idx + 1}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="bg-brand-green text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full cursor-pointer hover:bg-white hover:text-brand-green transition-colors">
                      Read More
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-bold font-serif text-zinc-900 mb-2">Praesent Commodo</h4>
                  <p className="text-sm text-zinc-500 mb-4 line-clamp-2">Nullam Condimentum Nibh Etiam Sem consectetur adipiscing elit.</p>
                  <Link href="/project" className="text-[11px] font-bold uppercase tracking-widest text-brand-green flex items-center gap-1 group/link">
                    Explore <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SERVICES GRID ═══════ */}
      <section className="py-24 bg-zinc-50 relative border-t border-zinc-100">
        <div className="absolute inset-0 line-pattern pointer-events-none opacity-50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-zinc-900 tracking-tight">Core Capabilities</h2>
            <div className="w-12 h-1 bg-brand-green mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_GRID.map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-zinc-200 p-8 shadow-sm hover:shadow-lg hover:border-brand-green/20 transition-all duration-300 group">
                <div className="w-14 h-14 rounded-xl bg-zinc-50 group-hover:bg-brand-green/10 border border-zinc-100 group-hover:border-brand-green/20 flex items-center justify-center mb-6 transition-colors">
                  <item.icon className="w-6 h-6 text-zinc-500 group-hover:text-brand-green transition-colors" />
                </div>
                <h3 className="text-xl font-bold font-serif text-zinc-900 mb-4">{item.title}</h3>
                <p className="text-sm text-zinc-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ ARTICLE OVERVIEW ═══════ */}
      <section className="py-24 bg-white relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-zinc max-w-none text-zinc-600">
            <h3 className="text-2xl font-bold font-serif text-zinc-900 mb-6">Responsive Website</h3>
            <p className="mb-10 text-base leading-[1.85]">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>

            <h3 className="text-2xl font-bold font-serif text-zinc-900 mb-6">Modern Technology</h3>
            <p className="text-base leading-[1.85]">
              Standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
