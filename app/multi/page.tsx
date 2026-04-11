import React from 'react';
import Link from 'next/link';

export default function MultiPage() {
  return (
    <>
      {/* Header Banner */}
      <section className="relative pt-32 pb-20 bg-zinc-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-green/80 to-zinc-900/90 z-0"></div>
        <div className="absolute inset-0 bg-[url('/images/student-housing-banner(4).jpg')] bg-cover bg-center opacity-30 z-0 mix-blend-overlay"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white pt-10 pb-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-6 drop-shadow-md">Multi Family & <span className="text-white border-b-4 border-white/30 pb-1">Student</span></h1>
          <p className="text-xl text-zinc-100 max-w-2xl mx-auto font-light">
            Comprehensive advisory and consulting services for investors in the Multi-family and Student Housing real estate asset class.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold font-serif text-zinc-900 mb-6 text-center">Our Multi Family and Student Accommodations Advisory Service</h2>
          <div className="w-24 h-1 bg-brand-green mx-auto my-8 opacity-50"></div>
          
          <div className="prose prose-zinc prose-lg max-w-none">
            <p>
              Springer Capital specializes in the Multi-family and Student Housing real estate asset class. We offer a suite of consulting and support services to U.S. sponsors and developers seeking to raise capital from Asia, connecting them with our deep pool of investors. Our experienced team of professionals utilize relevant market data to thoroughly present a sponsor's project, experience, and capability to potential Asian investors.
            </p>
            <p>
              Our experience and data driven process allows us to evaluate residential properties and provide owners and investors with relevant guidance on the acquisition and disposition of residential rental properties, allowing for successful growth and yield in all our projects. Our strategy and outlook are shaped by a top-down demographic study identifying and measuring sector drivers, and our project evaluation process employs a bottom up, data-driven approach in target submarkets to identify and present the best opportunities for investors.
            </p>
            <p>
              Springer has diversified experience within the multi-family real estate sector and a focus on the student housing sub-sector. As student housing helps colleges and universities recruit and retain students thereby distinguishing them from the competition, there is a growing need for new, cutting-edge student housing at institutions of higher education across the United States. Our team assesses the value and security of projects, assessing trends of future off-campus residencies among the top U.S. schools, to properly educate investors on the project's viability.
            </p>
          </div>
        </div>
      </section>

      {/* Why Invest Section */}
      <section className="py-24 bg-zinc-50 border-y border-zinc-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold font-serif text-zinc-900 mb-6 text-center">Why We Invest in Multi Family and Student Accommodations</h2>
          
          <div className="prose prose-zinc prose-lg max-w-none mt-10">
            <p>
              Multi-family assets are the most attractive investments nationwide and forecasts indicate positive trends will continue given pandemic and inflation disruptors. Additionally, given the supply and demand imbalance of multifamily housing paired with the rising interest rate environment that has become a barrier for middle-class Americans to purchase single-family homes, multifamily assets provide a solution to some of these housing obstacles.
            </p>
            <p>
              Likewise, the rising demand for new student housing paired with the benefit of higher university recruitment and retention levels associated with state-of-the-art accommodations provides an opportunity to capitalize in this asset class.
            </p>
            <p>
              Our team is in tune with these market challenges. At Springer, we offer a suite of consulting and support services to U.S. sponsors and developers of multi-family and student housing projects seeking to raise capital from Asia, connecting them with our deep pool of investors. Our company's data driven and market-oriented strategy yields superior results for our clients as our team of experts analyze market trends and identify opportune submarkets to fill the voids within these sectors.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact CTA */}
      <section className="py-24 bg-white text-zinc-900 text-center border-t border-zinc-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold font-serif mb-6">Interested In Capital Investments for Multi Family and Student Accommodations?</h2>
            <p className="text-xl text-zinc-600 mb-10">Please complete the form below to get started on acquiring capital for your multi family real estate investment.</p>
            <Link href="/contact" className="inline-block bg-brand-green hover:bg-brand-green-light text-white px-8 py-4 rounded-sm font-medium transition-colors">
              Contact Us Today
            </Link>
        </div>
      </section>
    </>
  );
}

