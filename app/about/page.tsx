import React from 'react';
import Link from 'next/link';
import { ArrowRight, Globe, TrendingUp, Handshake, ShieldCheck } from 'lucide-react';

export default function AboutPage() {
  return (
    <>
      {/* Header Banner */}
      <section className="relative pt-32 pb-20 bg-zinc-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-green/90 to-zinc-900/90 z-0"></div>
        <div className="absolute inset-0 bg-[url('/images/shutterstock_753807385-2560x852.webp')] bg-cover bg-center opacity-20 z-0 mix-blend-overlay"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white pt-10 pb-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-6 drop-shadow-md"><span className="text-white border-b-4 border-white/30 pb-1">About</span> Springer Capital</h1>
          <p className="text-xl md:text-2xl text-zinc-100 max-w-3xl mx-auto font-light">
            Premium real estate investment and advisory focusing on world-class opportunities across global markets.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Globe className="w-16 h-16 text-brand-green mx-auto mb-8 opacity-80" />
          <h1 className="text-4xl font-bold font-serif mb-8 text-zinc-900 border-l-4 border-brand-green pl-4"><span className="text-brand-green">A</span>bout Springer Capital</h1>
          <p className="text-xl md:text-2xl text-zinc-700 leading-relaxed font-medium mb-10">
            Springer Capital is a real estate investment and advisory group with operations in Hong Kong, China, and North America.
          </p>
          <p className="text-lg text-zinc-600 leading-relaxed mb-6">
            Its founding partners are focused on world-class real estate opportunities and serve at the intersection of real estate direct investment and real estate advisory services. We leverage our breadth of global real estate investment experience with sponsors and our access to capital sources looking for yield, growth, and success.
          </p>
          <p className="text-lg text-zinc-600 leading-relaxed">
            Springer Capital offers full advisory service to its clients, ranging from optimal tax and entity structuring, cash management, accounting, asset & property management, work outs and investment reporting.
          </p>
        </div>
      </section>

      {/* Core Values / Who We Are */}
      <section className="py-24 bg-zinc-50 border-t border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif text-zinc-900">Who We Are</h2>
            <div className="w-24 h-1 bg-brand-green mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-zinc-100 group">
              <Handshake className="w-12 h-12 text-brand-green mb-6 bg-brand-green/10 p-2 rounded-xl group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold text-zinc-900 mb-4">Real Estate Investors</h3>
              <p className="text-zinc-600 leading-relaxed">
                We are trusted real estate investment advisors to business owners and senior executives of leading private equity firms and public and privately held companies around the world.
              </p>
            </div>
            
            <div className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-zinc-100 group">
              <TrendingUp className="w-12 h-12 text-brand-green mb-6 bg-brand-green/10 p-2 rounded-xl group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold text-zinc-900 mb-4">Strivers for Greatness</h3>
              <p className="text-zinc-600 leading-relaxed">
                We help our clients achieve superior results and strive to outperform their highest expectations with unique insights derived from deep industry relationships and a tightly integrated global team.
              </p>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-zinc-100 group">
              <ShieldCheck className="w-12 h-12 text-brand-green mb-6 bg-brand-green/10 p-2 rounded-xl group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold text-zinc-900 mb-4">Challenge Takers</h3>
              <p className="text-zinc-600 leading-relaxed">
                We take on clients' challenges as our own, flex our approach and methodology to meet their needs, and proactively share insights and information before, during and long after an engagement is complete.
              </p>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-zinc-100 group">
              <Globe className="w-12 h-12 text-brand-green mb-6 bg-brand-green/10 p-2 rounded-xl group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold text-zinc-900 mb-4">Analytical Advisors</h3>
              <p className="text-zinc-600 leading-relaxed">
                We adopt a rigorous analytical process and a deep respect for the numbers that are used as a baseline to drive unparalleled advice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-24 bg-white border-t border-zinc-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif text-zinc-900">What We do</h2>
            <div className="w-24 h-1 bg-brand-green mx-auto"></div>
          </div>
          <ul className="space-y-6 text-lg text-zinc-600">
            <li className="flex items-start">
              <span className="w-2 h-2 rounded-full bg-brand-green mt-2 mr-4 shrink-0"></span>
              <p>Maintain active dialogue with real estate investors covering multi family, logistics, mixed use, hospitality, development land projects across Asia and the US.</p>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 rounded-full bg-brand-green mt-2 mr-4 shrink-0"></span>
              <p>Design innovative financing solutions including equity, acquisition financing, dividend recapitalization financing, structured capital that meet our clients' needs while optimizing terms.</p>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 rounded-full bg-brand-green mt-2 mr-4 shrink-0"></span>
              <p>Leverage our financial models and data-centric strategies to support clients with actionable and measurable solutions.</p>
            </li>
          </ul>
        </div>
      </section>

      {/* Investment Criteria */}
      <section className="py-24 bg-zinc-50 border-t border-zinc-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif text-zinc-900">Investment Criteria</h2>
            <div className="w-24 h-1 bg-brand-green mx-auto"></div>
          </div>
          <ul className="space-y-4 text-lg text-zinc-700 bg-white p-8 rounded-lg shadow-sm border border-zinc-100">
            <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-brand-green mr-4"></span>Primarily limited partner equity</li>
            <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-brand-green mr-4"></span>One-off investments rather than fund structures</li>
            <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-brand-green mr-4"></span>Target equity ranges from $2M to $20M USD</li>
            <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-brand-green mr-4"></span>Typical 3 - 5 year holding periods</li>
            <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-brand-green mr-4"></span>Focus on high growth cities</li>
          </ul>
        </div>
      </section>

      {/* Offerings */}
      <section className="py-24 bg-white text-zinc-900 border-t border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif bg-[#25a81378] text-white p-4 inline-block">What We Offer</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="prose prose-zinc prose-lg">
              <h3 className="text-2xl font-bold text-zinc-900 mb-6 border-b border-zinc-200 pb-4">Equity Capital Advisory</h3>
              <p className="text-zinc-600 leading-relaxed font-light text-base">
                Springer Capital's Equity Capital Advisory Group focuses on raising equity capital financing for growth-oriented, emerging enterprises ranging from early-stage ventures to more mature middle market companies. Our senior professionals work closely with entrepreneurs to secure equity capital to help fund growth initiatives, recapitalize the balance sheet, provide a level of shareholder liquidity, finance M&A transactions, or support management buyouts. Our team members integrate with the firm's various industry groups and debt advisory group to provide our clients with maximum market coverage and holistic capital solutions.
              </p>
            </div>

            <div className="prose prose-zinc prose-lg">
              <h3 className="text-2xl font-bold text-zinc-900 mb-6 border-b border-zinc-200 pb-4">Debt Capital Advisory</h3>
              <p className="text-zinc-600 leading-relaxed font-light text-base">
                Springer Capital boasts a highly active, fully dedicated Debt Advisory Group that helps privately-owned and sponsor-backed companies secure debt capital or leveraged finance for organic growth, acquisitions, dividend recapitalizations, and refinancings. The team works closely with clients to optimize their debt structures and secure the best long-term institutional partners for the business, leveraging the talents and expertise of our industry specialists to ensure that our financing strategy and positioning results in maximum credit market receptivity.
              </p>
            </div>
          </div>
          
          <div className="mt-16 text-center">
             <Link href="/team" className="inline-flex items-center text-brand-green hover:text-brand-green-light font-medium text-lg transition-colors group">
               Meet our Leadership Team
               <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
             </Link>
          </div>
        </div>
      </section>
    </>
  );
}
