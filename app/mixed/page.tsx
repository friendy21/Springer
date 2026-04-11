import React from 'react';
import Link from 'next/link';

export default function MixedPage() {
  return (
    <>
      {/* Header Banner */}
      <section className="relative pt-32 pb-20 bg-zinc-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-green/80 to-zinc-900/90 z-0"></div>
        <div className="absolute inset-0 bg-[url('/images/HPA-2018-Blog-Hennepin-Mixed-Use.jpg')] bg-cover bg-center opacity-30 z-0 mix-blend-overlay"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white pt-10 pb-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-6 drop-shadow-md">Mixed Use <span className="text-white border-b-4 border-white/30 pb-1">Advisory</span></h1>
          <p className="text-xl text-zinc-100 max-w-2xl mx-auto font-light">
            Providing comprehensive advisory and consulting services to investors and sponsors interested in the mixed use real estate asset class.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold font-serif text-zinc-900 mb-6 text-center">Mixed Use Property Advisory</h2>
          <div className="w-24 h-1 bg-brand-green mx-auto my-8 opacity-50"></div>
          
          <div className="prose prose-zinc prose-lg max-w-none">
            <p>
              Springer Capital specializes in the Mixed Use real estate asset class. We offer a suite of consulting and support services to U.S. sponsors and developers seeking to raise capital from Asia, connecting them with our deep pool of investors. Our experienced team of professionals utilize relevant market data to thoroughly present a sponsor's project, experience, and capability to potential Asian investors.
            </p>
            <p>
              Mixed-use is a form of integrated and pedestrian-friendly development that typically combines two or more uses, including residential, commercial, and institutional. In fact, mixed-use developments were the preferred form of living prior to the early 1900s, until increased industrialization and the automobile boom spurred the creation of suburbs.
            </p>
          </div>
        </div>
      </section>

      {/* Why Invest Section */}
      <section className="py-24 bg-zinc-50 border-y border-zinc-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold font-serif text-zinc-900 mb-6 text-center">Why Invest in Mixed Use Developments</h2>
          
          <div className="prose prose-zinc prose-lg max-w-none mt-10">
            <p>
              In the last few years there has been an increased demand for mixed-use developments as consumers' preferences for integrated urban-lifestyle centers that cater to the “live, shop, work, play” mantra have become more pronounced. Interestingly, this lifestyle preference is not coming just from millennials, but also from older generations, who want to live in walkable and well-connected urban locales.
            </p>
            <p>
              In addition to consumer demand, there are business reasons for developers to focus on mixed-use projects. First, tenants stand to benefit from increased exposure to consumers, since these spaces attract more foot traffic for diverse purposes. As a result, tenant attraction and retention can be improved through focus on mixed-use. Second, portfolio risk is diversified across different property types and uses, especially at a time when disruptive forces have rendered many single-use properties underutilized or irrelevant.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact CTA */}
      <section className="py-24 bg-white text-zinc-900 text-center border-t border-zinc-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold font-serif mb-6">Interested In Mixed Use Capital Investments?</h2>
            <p className="text-xl text-zinc-600 mb-10">Please complete the form below to get started on acquiring capital for your mixed-use investments.</p>
            <Link href="/contact" className="inline-block bg-brand-green hover:bg-brand-green-light text-white px-8 py-4 rounded-sm font-medium transition-colors">
              Contact Us Today
            </Link>
        </div>
      </section>
    </>
  );
}

