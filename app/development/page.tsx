import React from 'react';
import Link from 'next/link';

export default function DevelopmentPage() {
  return (
    <>
      {/* Header Banner */}
      <section className="relative pt-32 pb-20 bg-zinc-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-green/80 to-zinc-900/90 z-0"></div>
        <div className="absolute inset-0 bg-[url('/images/bnr_InfrastructurePlanningandManagement.jpg')] bg-cover bg-center opacity-30 z-0 mix-blend-overlay"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white pt-10 pb-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-6 drop-shadow-md">Development Land <span className="text-white border-b-4 border-white/30 pb-1">Advisory</span></h1>
          <p className="text-xl text-zinc-100 max-w-2xl mx-auto font-light">
            Comprehensive advisory and consulting services to investors and sponsors interested in the development land real estate asset class.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold font-serif text-zinc-900 mb-6 text-center">Our Development Land Advisory Service</h2>
          <div className="w-24 h-1 bg-brand-green mx-auto my-8 opacity-50"></div>
          
          <div className="prose prose-zinc prose-lg max-w-none">
            <p>
              Whether you're an owner, investor or developer, Springer can help you determine the best use of your land to maximize your investment. By partnering with our Land Advisory Services professionals, you can tap into the expertise of a specialized team with the technical knowledge to move your project forward.
            </p>
            <p>
              Our land advisory experts can provide you with a range of acquisition and disposition services including mapping, site planning, market analysis, and valuation and appraisal. But even more importantly, we know the key players and we know the nuances of your market.
            </p>
            <p>
              With us, you have access to a well-established network of lenders, investors, developers and others you may need to work with to achieve your goals. We stay on top of the latest regulatory, environmental, transportation and legal issues to ensure you can overcome any hurdle and achieve the results you need in the shortest time possible.
            </p>
          </div>
        </div>
      </section>

      {/* Why Invest Section */}
      <section className="py-24 bg-zinc-50 border-y border-zinc-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold font-serif text-zinc-900 mb-6 text-center">Why Invest in Development Land</h2>
          
          <div className="prose prose-zinc prose-lg max-w-none mt-10">
            <h4>Less Expensive Than Buying Developed Property</h4>
            <p>As compared to buying a developed land, the acquisition of raw land is fairly inexpensive. Not only does raw land have minimal property insurance and taxes, but it also has lower maintenance costs.</p>
            
            <h4>Lower Competition</h4>
            <p>We look for developed properties, such as commercial or residential properties that can provide immediate income. In light of this fact, raw land has lower competition and can be acquired easily.</p>
            
            <h4>A Wide Range of Opportunities</h4>
            <p>Raw land offers several opportunities for investors. Not only can investors earn long-term appreciation but can also develop this land into single-family or multifamily properties and condominiums.</p>
          </div>
        </div>
      </section>
      
      {/* Contact CTA */}
      <section className="py-24 bg-white text-zinc-900 text-center border-t border-zinc-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold font-serif mb-6">Interested In Acquiring Capital For Land Developments?</h2>
            <p className="text-xl text-zinc-600 mb-10">Please complete the form below to get started on acquiring capital for your development project.</p>
            <Link href="/contact" className="inline-block bg-brand-green hover:bg-brand-green-light text-white px-8 py-4 rounded-sm font-medium transition-colors">
              Contact Us Today
            </Link>
        </div>
      </section>
    </>
  );
}

