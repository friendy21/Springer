import React from 'react';
import Link from 'next/link';

export default function LogisticsPage() {
  return (
    <>
      {/* Header Banner */}
      <section className="relative pt-32 pb-20 bg-zinc-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-green/80 to-zinc-900/90 z-0"></div>
        <div className="absolute inset-0 bg-[url('/images/shutterstock_753807385-2560x852.webp')] bg-cover bg-center opacity-30 z-0 mix-blend-overlay"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white pt-10 pb-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-6 drop-shadow-md">Logistics <span className="text-white border-b-4 border-white/30 pb-1">Advisory</span></h1>
          <p className="text-xl text-zinc-100 max-w-2xl mx-auto font-light">
            Providing comprehensive advisory and consulting services to investors and sponsors interested in the logistics real estate asset class.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold font-serif text-zinc-900 mb-6 text-center">Our Logistics Advisory Service</h2>
          <div className="w-24 h-1 bg-brand-green mx-auto my-8 opacity-50"></div>
          
          <div className="prose prose-zinc prose-lg max-w-none">
            <p>
              Springer Capital capitalizes on an expanding e-commerce sector triggered by COVID-19 disruptors. The rising demand for additional logistics facilities to support the unprecedented growth of whole-sale providers, retailers, and third-party delivery services presents a unique opportunity for Springer to share its expertise and advise clients.
            </p>
            <p>
              Springer Capital acts as a provider of Asia financing for the U.S. logistics real estate business by connecting sponsors and developers of such projects to GreenTree's expansive network of investors from the APAC region. In addition, Springer offers advisory services for customers aiming to target logistics market investment opportunities by consulting clients in areas such as acquisitions, sale and leasebacks, and build-to-suit developments. Springer provides a variety of services, including investment sourcing and acquisition, financial analysis, market analysis, contract negotiation, transaction management, and due diligence, allowing clients to make informed real estate investment decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Why Invest Section */}
      <section className="py-24 bg-zinc-50 border-y border-zinc-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold font-serif text-zinc-900 mb-6 text-center">Why Invest in Logistics</h2>
          
          <div className="prose prose-zinc prose-lg max-w-none mt-10">
            <p>
              We live in a fast-paced, on-demand society. The rise in e-commerce and the on-demand culture of society today has meant more need for modern, well-located industrial real estate: all types of properties where goods and products are manufactured, prepared for delivery or stored.
            </p>
            <p>
              Urbanisation has added to that demand. The need for inner-city housing has meant higher property prices that have forced tenants in previous inner-city manufacturing and distribution hubs to seek alternative, fit-for-purpose locations close to the major cities they serve. This is happening all over the world.
            </p>
            <p>
              These trends have combined to cause an imbalance between supply and demand: more space is needed by tenants than there is available for them to rent. To make matters worse, any new supply is taking longer than ever to be made available because of labour and material delays exacerbated by Covid-19.
            </p>
            <p>
              This reality means that new properties are quickly being pre-leased, and vacancy rates (the amount of space within a property that remains empty) are low across most of the world. Analysts are forecasting that low vacancy and increasing rents will continue to shape the market in 2022 and beyond.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact CTA */}
      <section className="py-24 bg-white text-zinc-900 text-center border-t border-zinc-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold font-serif mb-6">Interested in Capital for Logistics Investments?</h2>
            <p className="text-xl text-zinc-600 mb-10">Please complete the form below to get started on raising capital for your logistics investments.</p>
            <Link href="/contact" className="inline-block bg-brand-green hover:bg-brand-green-light text-white px-8 py-4 rounded-sm font-medium transition-colors">
              Contact Us Today
            </Link>
        </div>
      </section>
    </>
  );
}

