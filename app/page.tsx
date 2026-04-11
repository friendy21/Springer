import React from 'react';
import Link from 'next/link';
import { ArrowRight, Building2, TrendingUp, ShieldCheck, BarChart3 } from 'lucide-react';

export default function Home() {
  return (
    <>
      <div id="top" />
      
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center">
        <div 
          className="absolute inset-0 z-0 bg-white bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/sh.png')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
              Real Estate <span className="text-brand-green">Investors</span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-300 mb-10 font-light leading-relaxed">
              Trusted real estate investment advisors to business owners and executives.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="#aboutUs" className="bg-brand-green hover:bg-brand-green-light text-white px-8 py-4 rounded-sm font-medium transition-colors inline-flex items-center group">
                Read more
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Sub-Hero */}
      <section id="aboutUs" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold font-serif mb-8 text-zinc-900 border-l-4 border-brand-green pl-4"><span className="text-brand-green">S</span>pringer Capital</h1>
            
            <h2 className="text-3xl font-bold text-zinc-900 mb-6 font-serif mt-12 bg-[#25a81378] text-white p-4">
              Your Full Service Real Estate Advisor
            </h2>
            <p className="text-lg text-zinc-600 leading-relaxed mb-6">
              Springer Capital is a real estate investment and advisory group with operations in Hong Kong, China, and North America. Its founding partners are focused on world-class real estate opportunities and serve at the intersection of real estate direct investment and real estate advisory services. We leverage our breadth of global real estate investment experience with sponsors and our access to capital sources looking for yield, growth, and success.
            </p>
            <p className="text-lg text-zinc-600 leading-relaxed">
              Springer Capital offers full advisory service to its clients, ranging from optimal tax and entity structuring, cash management, accounting, asset & property management, work outs and investment reporting.
            </p>

            <h2 className="text-3xl font-bold text-zinc-900 mb-6 font-serif mt-12 bg-[#25a81378] text-white p-4">
              Who We Are
            </h2>
            <p className="text-lg text-zinc-600 leading-relaxed mb-6">
              We are trusted real estate investment advisors to business owners and senior executives of leading private equity firms and public and privately held companies around the world.
            </p>
            <p className="text-lg text-zinc-600 leading-relaxed mb-6">
              We help our clients achieve superior results and strive to outperform their highest expectations with unique insights derived from deep industry relationships and a tightly integrated global team.
            </p>
            <p className="text-lg text-zinc-600 leading-relaxed mb-6">
              We take on clients' challenges as our own, flex our approach and methodology to meet their needs, and proactively share insights and information before, during, and long after an engagement is complete.
            </p>
            <p className="text-lg text-zinc-600 leading-relaxed">
              We adopt a rigorous analytical process and deep respect for the numbers that are used as a baseline to drive unparalleled advice.
            </p>

            <h2 className="text-3xl font-bold text-zinc-900 mb-6 font-serif mt-12 bg-[#25a81378] text-white p-4">
              What We Do
            </h2>
            <p className="text-lg text-zinc-600 leading-relaxed mb-6">
              We maintain active dialogue with real estate investors covering multi-family, logistics, mixed use, hospitality, and development land projects across Asia and US.
            </p>
            <p className="text-lg text-zinc-600 leading-relaxed mb-6">
              Design innovative financing solutions including equity, acquisition financing, dividend recapitalization financing, and structured capital that meet our client's needs while optimizing terms.
            </p>
            <p className="text-lg text-zinc-600 leading-relaxed mb-6">
              Leverage our financial models and data-centric strategies to support clients with actionable and measurable solution.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-zinc-50 border-t border-zinc-200 text-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif"><span className="text-brand-green">P</span>rimary Advisory Services</h1>
            <div className="w-24 h-1 bg-brand-green mx-auto opacity-80 mt-6"></div>
          </div>

          <div className="max-w-3xl mx-auto">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xl font-medium text-zinc-700">
              <li className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm border border-zinc-100">
                <span className="w-2 h-2 rounded-full bg-brand-green"></span>
                <span>Multi Family and Student Accomodations</span>
              </li>
              <li className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm border border-zinc-100">
                <span className="w-2 h-2 rounded-full bg-brand-green"></span>
                <span>Logistics</span>
              </li>
              <li className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm border border-zinc-100">
                <span className="w-2 h-2 rounded-full bg-brand-green"></span>
                <span>Mixed Use</span>
              </li>
              <li className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm border border-zinc-100">
                <span className="w-2 h-2 rounded-full bg-brand-green"></span>
                <span>Hospitality</span>
              </li>
              <li className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm border border-zinc-100">
                <span className="w-2 h-2 rounded-full bg-brand-green"></span>
                <span>Development Land</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white border-t border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif text-zinc-900">Our Team</h2>
            <div className="w-24 h-1 bg-brand-green mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-center max-w-3xl mx-auto">
            {/* Team Member 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group border border-zinc-100 pb-6 text-center">
              <Link href="/team">
                <div className="overflow-hidden bg-zinc-100 aspect-square rounded-full w-48 h-48 mx-auto mt-6 mb-4 ring-4 ring-zinc-50 hover:ring-brand-green/20 transition-all">
                  <img src="/images/patrick2.png" alt="Patrick Kelly" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
              </Link>
              <div className="px-4">
                <Link href="/team">
                  <h3 className="text-lg font-bold text-zinc-900 group-hover:text-brand-green transition-colors">Patrick Kelly</h3>
                </Link>
                <p className="text-zinc-500 font-medium text-xs mt-1 uppercase tracking-wide">Investments Director</p>
              </div>
            </div>
            
            {/* Team Member 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group border border-zinc-100 pb-6 text-center">
              <Link href="/team">
                <div className="overflow-hidden bg-zinc-100 aspect-square rounded-full w-48 h-48 mx-auto mt-6 mb-4 ring-4 ring-zinc-50 hover:ring-brand-green/20 transition-all">
                  <img src="/images/isaac2.png" alt="Isaac Rosenthal" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                </div>
              </Link>
              <div className="px-4">
                <Link href="/team">
                  <h3 className="text-lg font-bold text-zinc-900 group-hover:text-brand-green transition-colors">Isaac Rosenthal</h3>
                </Link>
                <p className="text-zinc-500 font-medium text-xs mt-1 uppercase tracking-wide">Operations Director</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
