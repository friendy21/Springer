'use client';

import React from 'react';
import Image from 'next/image';

const MANAGEMENT = [
  {
    name: 'Patrick Kelly',
    title: 'Investments Director',
    image: '/images/patrick2.png',
    bio: "Patrick Kelly is a real estate professional, investor and businessman and has extensive experience in both the Chinese and North American markets. Over the years Patrick has actively been involved in many aspects of the real estate lifecycle including acquisitions, financing, development, repositioning, marketing, leasing, sales, and operations. He frequently works as an advisor to international real estate investors, including Mr Wang Jianlin, Chairman of Dalian Wanda, where he served as GM for the Americas acquisitions team for Dalian Wanda Commercial Properties and for Mr Richard Cheung, Chairman of Sheshan International Golf Club and Estate, home of Asia's major the WGC HSBC Champions as Director of International Development. Previously, Patrick was with Cushman and Wakefield as Head of Developer Services based in their Shanghai office. Patrick first went to China in 1988 and was back forth several times before moving from Vancouver, settling in Shanghai in 1997. He speaks Chinese with an expat's accent and prefers English with Canadian spellings. He is married with two children."
  },
  {
    name: 'Isaac Rosenthal',
    title: 'Operations Director',
    image: '/images/isaac2.png',
    bio: "Isaac Rosenthal, operating director of Greentree is responsible for investor relations, corporate strategy, internal SOPs and IT. Isaac is a serial entrepreneur who started a real estate leasing and management company Link People at the age of 23. Link People had 300 share flat apartments with 1500 tenants under management rented to young expat professionals in downtown Shanghai. In 2016, Link People was sold to Dothink Group, a top 50, Hong Kong listed Chinese real estate developer. Since 2017, Isaac, focused on capital fundraising and real estate acquisition projects for Dothink before joining Springer Capital."
  }
];

export default function ManagementPage() {
  return (
    <>
      <section className="relative pt-36 pb-32 bg-zinc-950 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/shutterstock_753807385-2560x852.webp')] bg-cover bg-center opacity-10 z-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-zinc-950/40 z-0" />
        <div className="absolute inset-0 grid-pattern opacity-[0.05] z-0" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="flex items-center justify-center gap-3 mb-7">
            <span className="w-10 h-px bg-brand-green" />
            <span className="section-label text-brand-green/80 border-brand-green/20 bg-brand-green/10">Leadership</span>
            <span className="w-10 h-px bg-brand-green" />
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-serif mb-6 tracking-tight">
            Meet Our <span className="text-brand-green">Management</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-300/80 max-w-3xl mx-auto font-light leading-relaxed">
            Springer Capital delivers ideas and solutions that make organizations better. Our arsenal of capital advisory services has been tailored to best fit the needs of our clients today and for the future.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white relative">
        <div className="absolute inset-0 dot-pattern opacity-20 pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="space-y-20">
            {MANAGEMENT.map((member, idx) => (
              <div key={idx} className="flex flex-col md:flex-row gap-10 lg:gap-16 items-start bg-zinc-50 border border-zinc-100 rounded-3xl p-8 lg:p-12 shadow-sm hover:shadow-md transition-shadow">
                
                {/* Profile Image */}
                <div className="w-full md:w-1/3 flex-shrink-0">
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-zinc-200 border border-zinc-200">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Profile Content */}
                <div className="w-full md:w-2/3">
                  <div className="mb-6 pb-6 border-b border-zinc-200">
                    <h2 className="text-3xl lg:text-4xl font-bold font-serif text-zinc-900 tracking-tight mb-2">
                      {member.name}
                    </h2>
                    <p className="text-sm font-bold uppercase tracking-widest text-brand-green">
                      {member.title}
                    </p>
                  </div>
                  <div className="prose prose-zinc max-w-none text-zinc-600 leading-[1.85] text-sm md:text-base">
                    <p>{member.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
