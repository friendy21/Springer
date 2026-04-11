import React from 'react';
import Link from 'next/link';

export default function HospitalityPage() {
  return (
    <>
      {/* Header Banner */}
      <section className="relative pt-32 pb-20 bg-zinc-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-green/80 to-zinc-900/90 z-0"></div>
        <div className="absolute inset-0 bg-[url('/images/98-982689_luxury-resort-at-night-hotel-negril-jamaica.jpg')] bg-cover bg-center opacity-30 z-0 mix-blend-overlay"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white pt-10 pb-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-6 drop-shadow-md">Hospitality <span className="text-white border-b-4 border-white/30 pb-1">Advisory</span></h1>
          <p className="text-xl text-zinc-100 max-w-2xl mx-auto font-light">
            Providing comprehensive advisory and consulting services to investors and sponsors interested in the hospitality real estate asset class.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold font-serif text-zinc-900 mb-6 text-center">Our Hospitality Advisory Service</h2>
          <div className="w-24 h-1 bg-brand-green mx-auto my-8 opacity-50"></div>
          
          <div className="prose prose-zinc prose-lg max-w-none">
            <p>
              Springer Capital specializes in the Hospitality real estate asset class. We offer a suite of consulting and support services to U.S. sponsors and developers seeking to raise capital from Asia, connecting them with our deep pool of investors. Our experienced team of professionals, utilize relevant market data to thoroughly present a sponsor's project, experience, and capability to potential Asian investors.
            </p>
            <p>
              Our primary goal is to protect the integrity of the asset so that the investor can maintain and improve the future economic benefits while sustaining the physical structure. Secondly, we monitor the performance of the management company and brand to ensure compliance with respective agreements. Finally and most importantly, we work collaboratively with all parties to develop strategies and execute tactics that maximize the financial performance (EBITDA) through either revenue growth or expense control.
            </p>

            <h3 className="mt-12 text-zinc-900">Primary Advisory Services</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-0">
              <li className="flex items-center"><span className="w-2 h-2 bg-brand-green rounded-full mr-3 text-transparent">-</span>Hospitality Valuation</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-brand-green rounded-full mr-3 text-transparent">-</span>Asset Management and Optimization</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-brand-green rounded-full mr-3 text-transparent">-</span>Operational Audits</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-brand-green rounded-full mr-3 text-transparent">-</span>Strategic Planning</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-brand-green rounded-full mr-3 text-transparent">-</span>Cost Segregation</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-brand-green rounded-full mr-3 text-transparent">-</span>General Consulting</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why Invest Section */}
      <section className="py-24 bg-zinc-50 border-y border-zinc-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold font-serif text-zinc-900 mb-6 text-center">Why Invest in Hospitality</h2>
          
          <div className="prose prose-zinc prose-lg max-w-none mt-10">
            <h4>High Returns</h4>
            <p>The number one reason that we invest in a hospitality projects is because of the high yield return that's associated with this type of real estate investment. The return mostly comes from the operating cash flow. There can be drawbacks to this fact. So it's important to have an experienced management team in place to help balance the risk that comes from operating in this hospitality industry.</p>
            
            <h4>Tax efficiency</h4>
            <p>Owning a hotel gives us the advantage of possibly reducing your tax burden. The top three reasons for this are depreciation, equity growth, and tax-deferred exchange in business real estate. Depreciation in hotels reduces taxable income. Other reasons that equity growth and tax deferred exchange are possible in hotels is because of investment recapitalization. This results from income derived from various physical properties inside the hotel.</p>
            
            <h4>Asset Diversification</h4>
            <p>Hotels are a great avenue for investors looking to diversify their real estate investment portfolio. As we already know, diversification of investments is important. It limits your risks. Besides, for most investors, investing in hotels is not their first thought, so there are relatively low barriers to entry. This is a positive fact to consider.</p>
            
            <h4>Value-Add Possibilities</h4>
            <p>The core source of revenue from hotels is through the nightly stays and day-to-day operations. However, one benefit of owning hotels is the flexibility to offer value-adds to increase your income. For example, you might buy an older hotel and do renovations to improve quality, alter the way you operate to increase customer loyalty and their ensuing recommendations, or refine some of your major sales and service contracts.</p>
          </div>
        </div>
      </section>
      
      {/* Contact CTA */}
      <section className="py-24 bg-white text-zinc-900 text-center border-t border-zinc-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold font-serif mb-6">Interested In Capital Investments for Hospitality Developments?</h2>
            <p className="text-xl text-zinc-600 mb-10">Please complete the form below to get started on acquiring capital for your hospitality investments.</p>
            <Link href="/contact" className="inline-block bg-brand-green hover:bg-brand-green-light text-white px-8 py-4 rounded-sm font-medium transition-colors">
              Contact Us Today
            </Link>
        </div>
      </section>
    </>
  );
}

