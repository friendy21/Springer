'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ChevronLeft, ChevronRight, Share2, MapPin, Maximize, ShieldCheck, CheckCircle2 } from 'lucide-react';

const IMAGES = [
  '/images/ok.jpeg',
  '/images/ok1.jpeg',
  '/images/ok2.webp',
  '/images/ok3.jpeg',
];

const HIGHLIGHTS = [
  { label: 'Built', value: '2022' },
  { label: 'Units', value: '345' },
  { label: 'Occupancy', value: '94%' },
  { label: 'Total Area (sq ft)', value: '450,000' },
  { label: 'Lot Size (Acres)', value: '12.4' },
  { label: 'Asset Class', value: 'Class A' },
];

const FEATURES = [
  'Resort-style Pool & Cabanas',
  'State-of-the-Art Fitness Center',
  'Coworking Lounge',
  'Dog Park & Pet Spa',
  'Rooftop Deck',
];

const GALLERY = [
  '/images/ok1.jpeg',
  '/images/ok1.jpeg',
  '/images/ok4.jpeg',
  '/images/ok4.jpeg',
  '/images/ok.jpeg',
  '/images/ok3.jpeg',
  '/images/ok.jpeg',
  '/images/ok3.jpeg',
];

export default function ProjectPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % IMAGES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + IMAGES.length) % IMAGES.length);

  return (
    <>
      <section className="bg-zinc-950 pt-28 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-[0.05] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link href="/" className="inline-flex items-center gap-2 text-zinc-400 hover:text-brand-green transition-colors text-sm font-semibold mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to Portfolio
          </Link>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-green/10 border border-brand-green/20 rounded-full text-xs font-bold uppercase tracking-widest text-brand-green">
                  Featured Asset
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-white tracking-tight leading-none mb-4">
                54 Beverly Park Way
              </h1>
              <div className="flex items-center gap-2 text-zinc-400">
                <MapPin className="w-4 h-4 text-brand-green" />
                <p className="text-sm md:text-base">54 Beverly Hills, Beverly Park, CA</p>
              </div>
            </div>
            <div className="text-left md:text-right">
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-1">Estimated Value</p>
              <p className="text-3xl lg:text-4xl font-bold text-white tracking-tight">$165,000<span className="text-xl text-zinc-500 font-normal">/mo</span></p>
            </div>
          </div>

          <div className="relative w-full aspect-[21/9] md:aspect-[24/9] rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 group">
            <Image
              src={IMAGES[currentSlide]}
              alt="Project Showcase"
              fill
              priority
              className="object-cover transition-transform duration-700 ease-in-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 backdrop-blur border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-brand-green hover:border-brand-green"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 backdrop-blur border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-brand-green hover:border-brand-green"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2">
              {IMAGES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${idx === currentSlide ? 'w-8 bg-brand-green' : 'bg-white/40 hover:bg-white/70'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-zinc-50 relative border-b border-zinc-100">
        <div className="absolute inset-0 line-pattern opacity-50 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            <div className="lg:col-span-4">
              <div className="bg-white rounded-2xl border border-zinc-200 p-8 shadow-sm top-8 sticky">
                <div className="flex items-center gap-3 mb-6">
                  <Maximize className="w-5 h-5 text-brand-green" />
                  <h3 className="text-lg font-bold font-serif text-zinc-900">Highlights</h3>
                </div>
                <div className="divide-y divide-zinc-100">
                  {HIGHLIGHTS.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between py-3.5">
                      <span className="text-sm text-zinc-500 font-medium">{item.label}</span>
                      <span className="text-sm font-semibold text-zinc-900">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-10">
              <div className="bg-white rounded-2xl border border-zinc-200 p-8 md:p-10 shadow-sm">
                <h3 className="text-2xl font-bold font-serif text-zinc-900 mb-6">Property Overview</h3>
                <div className="prose prose-zinc max-w-none text-zinc-600 leading-relaxed text-sm">
                  <p className="mb-4">
                    In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. 
                  </p>
                  <p className="mb-4">
                    Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.
                  </p>
                  <p>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English.
                  </p>
                </div>
                
                <div className="mt-8 pt-8 border-t border-zinc-100">
                  <button className="flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white text-sm font-semibold rounded-lg hover:bg-brand-green transition-colors">
                    <Share2 className="w-4 h-4" /> Share Property
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl border border-zinc-200 p-8 shadow-sm">
                  <h3 className="text-lg font-bold font-serif text-zinc-900 mb-6 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-green" /> Key Features
                  </h3>
                  <ul className="space-y-4">
                    {FEATURES.slice(0,3).map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-green mt-2 flex-shrink-0" />
                        <span className="text-sm text-zinc-600 font-medium">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white rounded-2xl border border-zinc-200 p-8 shadow-sm">
                  <h3 className="text-lg font-bold font-serif text-zinc-900 mb-6 flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-brand-green" /> Amenities
                  </h3>
                  <ul className="space-y-4">
                    {FEATURES.slice(3).map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-green mt-2 flex-shrink-0" />
                        <span className="text-sm text-zinc-600 font-medium">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white relative">
        <div className="absolute inset-0 dot-pattern opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-zinc-900 tracking-tight">Photo Gallery</h2>
            <div className="w-12 h-1 bg-brand-green mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {GALLERY.map((src, idx) => (
              <div key={idx} className="relative group overflow-hidden rounded-xl bg-zinc-100 aspect-square">
                <Image
                  src={src}
                  alt={`Gallery Image ${idx + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <p className="text-white text-xs font-medium">Exterior View {idx + 1}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
