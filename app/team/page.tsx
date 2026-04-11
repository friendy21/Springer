import React from 'react';

export default function TeamPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-zinc-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/14.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">Meet Our <span className="text-brand-green">Management</span></h1>
          <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
            Springer Capital delivers ideas and solutions that make organizations better. Our arsenal of capital advisory services has been tailored to best fit the needs of our clients today and for the future.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            
            {/* Patrick Kelly */}
            <div className="flex flex-col md:flex-row gap-12 items-start bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-zinc-100">
              <div className="w-full md:w-1/3 shrink-0">
                <div className="rounded-xl overflow-hidden aspect-[3/4] bg-zinc-100 mb-6">
                  <img src="/images/patrick2.png" alt="Patrick Kelly" className="w-full h-full object-cover" />
                </div>
                <h2 className="text-3xl font-bold font-serif text-zinc-900 mb-2">Patrick Kelly</h2>
                <p className="text-brand-green font-medium uppercase tracking-wider text-sm mb-4">Investments Director</p>
              </div>
              <div className="w-full md:w-2/3 prose prose-zinc max-w-none">
                <p className="text-lg text-zinc-600 leading-relaxed mb-6">
                  Patrick Kelly is a real estate professional, investor and businessman and has extensive experience in both the Chinese and North American markets. Over the years Patrick has actively been involved in many aspects of the real estate lifecycle including acquisitions, financing, development, repositioning, marketing, leasing, sales, and operations.
                </p>
                <p className="text-lg text-zinc-600 leading-relaxed mb-6">
                  He frequently works as an advisor to international real estate investors, including Mr Wang Jianlin, Chairman of Dalian Wanda, where he served as GM for the Americas acquisitions team for Dalian Wanda Commercial Properties and for Mr Richard Cheung, Chairman of Sheshan International Golf Club and Estate, home of Asia's major the WGC HSBC Champions as Director of International Development. Previously, Patrick was with Cushman and Wakefield as Head of Developer Services based in their Shanghai office.
                </p>
                <p className="text-lg text-zinc-600 leading-relaxed mb-6">
                  Patrick first went to China in 1988 and was back forth several times before moving from Vancouver, settling in Shanghai in 1997. He speaks Chinese with an expat's accent and prefers English with Canadian spellings. He is married with two children.
                </p>
              </div>
            </div>

            {/* Isaac Rosenthal */}
            <div className="flex flex-col md:flex-row-reverse gap-12 items-start bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-zinc-100">
              <div className="w-full md:w-1/3 shrink-0">
                <div className="rounded-xl overflow-hidden aspect-[3/4] bg-zinc-100 mb-6">
                  <img src="/images/isaac2.png" alt="Isaac Rosenthal" className="w-full h-full object-cover object-top" />
                </div>
                <h2 className="text-3xl font-bold font-serif text-zinc-900 mb-2">Isaac Rosenthal</h2>
                <p className="text-brand-green font-medium uppercase tracking-wider text-sm mb-4">Operations Director</p>
              </div>
              <div className="w-full md:w-2/3 prose prose-zinc max-w-none">
                <p className="text-lg text-zinc-600 leading-relaxed mb-6">
                  Isaac Rosenthal, operating director of Greentree is responsible for investor relations, corporate strategy, internal SOPs and IT. Isaac is a serial entrepreneur who started a real estate leasing and management company Link People at the age of 23. Link People had 300 share flat apartments with 1500 tenants under management rented to young expat professionals in downtown Shanghai. In 2016, Link People was sold to Dothink Group, a top 50, Hong Kong listed Chinese real estate developer. Since 2017, Isaac, focused on capital fundraising and real estate acquisition projects for Dothink before joining Springer Capital.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
