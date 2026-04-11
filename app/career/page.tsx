import React from 'react';
import Link from 'next/link';

export default function CareerPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-zinc-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-green/80 to-zinc-900/90 z-0"></div>
        <div className="absolute inset-0 bg-[url('/images/shutterstock_753807385-2560x852.webp')] bg-cover bg-center opacity-30 z-0 mix-blend-overlay"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white pt-10 pb-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-6 drop-shadow-md">Careers at <span className="text-white border-b-4 border-white/30 pb-1">Springer</span></h1>
          <p className="text-xl text-zinc-100 max-w-2xl mx-auto font-light">
            Join a cutting-edge team dedicated to global real estate excellence.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white min-h-[50vh]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="prose prose-zinc prose-lg mx-auto">
            <h2>Current Openings</h2>
            <p className="text-zinc-500 italic mt-8">We currently don't have any openings available. Check back soon for future opportunities, or reach out to our team directly.</p>
          </div>
          
          <div className="mt-16">
            <Link href="/contact" className="inline-block border-2 border-brand-green text-brand-green hover:bg-brand-green hover:text-white px-8 py-4 rounded-sm font-medium transition-colors">
              Contact Us Openly
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
