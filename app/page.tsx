'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, TrendingUp, ShieldCheck, Handshake, MapPin, Globe, Building2, Warehouse, Hotel, Layers, TreePine, ChevronDown, DollarSign, Clock, Target, ChartBar as BarChart2 } from 'lucide-react';
import Tilt3D from '@/components/Tilt3D';
import AnimatedCounter from '@/components/AnimatedCounter';

const SERVICES = [
  {
    href: '/multi',
    label: 'Multi Family & Student Accommodations',
    short: 'Residential income assets in high-demand urban submarkets.',
    icon: Building2,
    num: '01',
    image: '/images/student-housing-banner(4).jpg',
  },
  {
    href: '/logistics',
    label: 'Logistics',
    short: 'Industrial and last-mile distribution driven by e-commerce growth.',
    icon: Warehouse,
    num: '02',
    image: '/images/shutterstock_753807385-2560x852.webp',
  },
  {
    href: '/mixed',
    label: 'Mixed Use',
    short: 'Live–work–play communities with diversified revenue stacks.',
    icon: Layers,
    num: '03',
    image: '/images/HPA-2018-Blog-Hennepin-Mixed-Use.jpg',
  },
  {
    href: '/hospitality',
    label: 'Hospitality',
    short: 'Value-add hotel and resort assets across primary gateway cities.',
    icon: Hotel,
    num: '04',
    image: '/images/98-982689_luxury-resort-at-night-hotel-negril-jamaica.jpg',
  },
  {
    href: '/development',
    label: 'Development Land',
    short: 'Raw and entitled land with clear path-to-value through development.',
    icon: TreePine,
    num: '05',
    image: '/images/bnr_InfrastructurePlanningandManagement.jpg',
  },
];

const STATS = [
  { value: 3,  prefix: '',  suffix: '',     label: 'Global Offices',   sub: 'HK · CN · US',         icon: Globe },
  { value: 20, prefix: '$', suffix: 'M+',   label: 'Max Equity Range', sub: 'Per investment',        icon: DollarSign },
  { value: 5,  prefix: '',  suffix: '',     label: 'Asset Classes',    sub: 'Covered globally',      icon: Target },
  { value: 5,  prefix: '',  suffix: ' Yrs', label: 'Holding Period',   sub: 'Typical max horizon',   icon: Clock },
];

const VALUES = [
  {
    icon: Handshake,
    title: 'Real Estate Investors',
    desc: 'Trusted advisors to business owners and senior executives of leading private equity firms and companies around the world.',
  },
  {
    icon: TrendingUp,
    title: 'Strivers for Greatness',
    desc: 'We strive to outperform the highest expectations with unique insights derived from deep industry relationships.',
  },
  {
    icon: ShieldCheck,
    title: 'Challenge Takers',
    desc: "We take on clients' challenges as our own and proactively share insights before, during, and long after an engagement.",
  },
  {
    icon: BarChart2,
    title: 'Analytical Advisors',
    desc: 'We adopt a rigorous analytical process and deep respect for numbers to drive unparalleled advice.',
  },
];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);

  const scrollDown = () => {
    const next = heroRef.current?.nextElementSibling as HTMLElement | null;
    next?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div id="top" />

      {/* ═══════ HERO ═══════ */}
      <section ref={heroRef} className="relative h-screen min-h-[680px] max-h-[1100px] flex flex-col justify-end overflow-hidden bg-zinc-950">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('/images/sh.png')" }} />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
        </div>
        <div className="absolute inset-0 z-[1] grid-pattern opacity-[0.035] pointer-events-none" />

        <div className="absolute top-0 left-0 z-10 pointer-events-none">
          <div className="w-16 h-px bg-brand-green" />
          <div className="w-px h-16 bg-brand-green" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-20">
          <div className="hero-text-reveal mb-6">
            <span className="inline-flex items-center gap-2.5 border border-brand-green/35 bg-black/25 backdrop-blur-sm px-4 py-1.5 rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-green" />
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-brand-green/90">Global Real Estate Advisory</span>
            </span>
          </div>

          <h1 className="hero-text-reveal-2 font-bold font-serif text-white tracking-tight mb-5" style={{ fontSize: 'clamp(2.75rem, 6vw, 5.5rem)', lineHeight: '1.02', letterSpacing: '-0.025em' }}>
            Real Estate<br />
            <span className="text-brand-green">Investors.</span>
          </h1>

          <p className="hero-text-reveal-3 text-zinc-300/80 font-light leading-relaxed mb-10 max-w-md" style={{ fontSize: 'clamp(1rem, 1.8vw, 1.2rem)' }}>
            Trusted advisors to business owners and senior executives across global real estate markets.
          </p>

          <div className="hero-text-reveal-4 flex flex-wrap items-center gap-4">
            <Link href="/about" className="btn-primary group px-7 py-3.5 text-sm">
              Read more
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/contact" className="group flex items-center gap-2.5 text-zinc-400 hover:text-white transition-colors text-sm font-medium">
              <span className="w-8 h-px bg-zinc-600 group-hover:w-12 group-hover:bg-brand-green transition-all duration-300" />
              Contact Us
            </Link>
          </div>
        </div>

        <button
          onClick={scrollDown}
          className="absolute bottom-7 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 text-zinc-500 hover:text-brand-green transition-colors"
          aria-label="Scroll down"
        >
          <span className="text-[9px] font-bold uppercase tracking-[0.22em]">Scroll</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </button>

        <div className="absolute bottom-8 right-6 z-10 hidden md:flex flex-col items-end gap-2">
          {['North America', 'Shanghai', 'Hong Kong'].map((loc) => (
            <div key={loc} className="flex items-center gap-2 text-[9px] font-semibold uppercase tracking-widest text-zinc-500/70">
              <Globe className="w-2.5 h-2.5 text-brand-green/60" />
              {loc}
            </div>
          ))}
        </div>
      </section>

      {/* ═══════ STATS BAND ═══════ */}
      <section className="bg-white border-b border-zinc-100 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-zinc-100">
            {STATS.map((s, i) => (
              <div key={s.label} className={`reveal stagger-${i + 1} group px-8 py-10 relative overflow-hidden cursor-default`}>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-green to-brand-green-light scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-brand-green/8 flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-brand-green/15 transition-colors">
                    <s.icon className="w-4 h-4 text-brand-green" />
                  </div>
                  <div>
                    <div className="text-[2rem] font-bold text-zinc-900 leading-none tabular-nums group-hover:text-brand-green transition-colors duration-300 mb-1">
                      {s.prefix}<AnimatedCounter end={s.value} suffix={s.suffix} />
                    </div>
                    <div className="text-[11px] font-bold uppercase tracking-widest text-zinc-500">{s.label}</div>
                    <div className="text-[10px] text-zinc-400 mt-0.5">{s.sub}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ ABOUT ═══════ */}
      <section id="aboutUs" className="py-32 bg-white relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-1/2 dot-pattern opacity-[0.18] pointer-events-none" />
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-brand-green/20 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div className="reveal-left">
              <div className="flex items-center gap-3 mb-10">
                <span className="w-10 h-px bg-brand-green" />
                <span className="section-label">About Springer Capital</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold font-serif text-zinc-900 mb-8 tracking-tight" style={{ lineHeight: '1.08' }}>
                Your Full Service<br />
                <span className="text-brand-green">Real Estate Advisor</span>
              </h2>
              <div className="space-y-5 text-zinc-600 leading-[1.9] text-base">
                <p>
                  Springer Capital is a real estate investment and advisory group with operations in Hong Kong, China, and North America. Its founding partners are focused on world-class real estate opportunities and serve at the intersection of real estate direct investment and real estate advisory services.
                </p>
                <p>
                  We leverage our breadth of global real estate investment experience with sponsors and our access to capital sources looking for yield, growth, and success.
                </p>
                <p>
                  Springer Capital offers full advisory service to its clients, ranging from optimal tax and entity structuring, cash management, accounting, asset & property management, work outs and investment reporting.
                </p>
              </div>
              <div className="mt-10 flex items-center gap-5">
                <Link href="/about" className="btn-primary group text-sm px-7 py-3.5">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/team" className="group flex items-center gap-2 text-zinc-500 hover:text-brand-green text-sm font-medium transition-colors">
                  Meet the Team
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="reveal-right space-y-4">
              <div className="flex flex-wrap gap-2 mb-6">
                {[
                  { city: 'Hong Kong', flag: '🇭🇰' },
                  { city: 'Shanghai', flag: '🇨🇳' },
                  { city: 'North America', flag: '🇺🇸' },
                ].map((loc) => (
                  <span key={loc.city} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-zinc-50 border border-zinc-200 rounded-full text-xs font-semibold text-zinc-700">
                    <span>{loc.flag}</span>
                    {loc.city}
                  </span>
                ))}
              </div>
              {VALUES.map((v, i) => (
                <Tilt3D key={v.title} intensity={6} className={`reveal stagger-${i + 1}`}>
                  <div className="group flex items-start gap-4 p-5 bg-white border border-zinc-100 rounded-2xl hover:border-brand-green/20 hover:shadow-[0_8px_32px_rgba(0,0,0,0.07)] transition-all duration-300 cursor-default">
                    <div className="icon-box flex-shrink-0">
                      <v.icon className="w-5 h-5 text-brand-green" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-zinc-900 mb-1">{v.title}</h3>
                      <p className="text-xs text-zinc-500 leading-relaxed">{v.desc}</p>
                    </div>
                  </div>
                </Tilt3D>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ SERVICES ═══════ */}
      <section className="bg-zinc-950 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-[0.05] pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-green/35 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 reveal">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="w-8 h-px bg-brand-green" />
                <span className="section-label bg-brand-green/10 border-brand-green/20 text-brand-green">Services</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold font-serif text-white tracking-tight" style={{ lineHeight: '1.06' }}>
                Primary Advisory<br /><span className="text-brand-green">Services</span>
              </h2>
            </div>
            <p className="text-zinc-500 text-sm max-w-xs leading-relaxed">
              Five asset classes. Two continents. One integrated capital advisory platform.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-px bg-zinc-800/50 rounded-2xl overflow-hidden border border-zinc-800/60">
            {SERVICES.map((svc, i) => (
              <Link
                key={svc.href}
                href={svc.href}
                className={`reveal stagger-${i + 1} group relative flex flex-col overflow-hidden bg-zinc-900 hover:bg-zinc-800 transition-colors duration-300 min-h-[280px] md:min-h-[340px]`}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-10 group-hover:opacity-[0.18] transition-opacity duration-500"
                  style={{ backgroundImage: `url('${svc.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/30 to-transparent" />
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-green to-brand-green-light scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />

                <div className="relative z-10 flex flex-col h-full p-6">
                  <span className="text-[11px] font-bold text-zinc-600 group-hover:text-brand-green/70 transition-colors mb-auto">{svc.num}</span>
                  <div className="w-10 h-10 rounded-xl bg-zinc-800 group-hover:bg-brand-green/15 border border-zinc-700 group-hover:border-brand-green/30 flex items-center justify-center mb-4 mt-6 transition-all duration-300">
                    <svc.icon className="w-5 h-5 text-zinc-500 group-hover:text-brand-green transition-colors" />
                  </div>
                  <h3 className="text-sm font-bold text-zinc-200 group-hover:text-white transition-colors leading-snug mb-2">{svc.label}</h3>
                  <p className="text-xs text-zinc-600 group-hover:text-zinc-400 leading-relaxed transition-colors duration-300 mb-4">{svc.short}</p>
                  <div className="flex items-center gap-2 text-zinc-600 group-hover:text-brand-green transition-colors text-[11px] font-bold uppercase tracking-widest">
                    <span>Explore</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ WHAT WE DO ═══════ */}
      <section className="py-32 bg-zinc-50 relative overflow-hidden">
        <div className="absolute inset-0 line-pattern pointer-events-none opacity-60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-20 reveal">
            <span className="section-label mb-5 inline-flex">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-green" />
              Our Approach
            </span>
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-zinc-900 mt-5 tracking-tight" style={{ lineHeight: '1.08' }}>What We Do</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                num: '01',
                title: 'Active Market Dialogue',
                body: 'We maintain active dialogue with real estate investors covering multi-family, logistics, mixed use, hospitality, and development land projects across Asia and the US.',
              },
              {
                num: '02',
                title: 'Innovative Financing Solutions',
                body: 'We design innovative financing solutions including equity, acquisition financing, dividend recapitalization financing, and structured capital that meet our clients\' needs while optimizing terms.',
              },
              {
                num: '03',
                title: 'Data-Centric Strategies',
                body: 'We leverage our financial models and data-centric strategies to support clients with actionable and measurable solutions.',
              },
            ].map((step, i) => (
              <div key={step.num} className={`reveal stagger-${i + 1} group relative bg-white rounded-2xl p-8 border border-zinc-100 hover:border-brand-green/20 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-all duration-300 cursor-default`}>
                <div className="absolute left-0 top-6 bottom-6 w-0.5 bg-gradient-to-b from-brand-green/0 via-brand-green/40 to-brand-green/0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                <div className="text-5xl font-bold font-serif text-zinc-100 group-hover:text-brand-green/15 transition-colors mb-6 leading-none">{step.num}</div>
                <h3 className="text-base font-bold text-zinc-900 mb-3">{step.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ TEAM ═══════ */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-[0.15] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="reveal-left">
              <div className="flex items-center gap-3 mb-10">
                <span className="w-10 h-px bg-brand-green" />
                <span className="section-label">Leadership</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold font-serif text-zinc-900 mb-6 tracking-tight" style={{ lineHeight: '1.08' }}>
                Meet Our<br /><span className="text-brand-green">Management</span>
              </h2>
              <p className="text-zinc-600 text-base leading-relaxed mb-8 max-w-sm">
                Springer Capital delivers ideas and solutions that make organizations better. Our leadership team brings decades of cross-market expertise.
              </p>
              <Link href="/team" className="btn-outline group text-sm px-7 py-3.5 inline-flex">
                Full Bios
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="reveal-right flex flex-col sm:flex-row gap-6">
              {[
                { name: 'Patrick Kelly',   title: 'Investments Director', img: '/images/patrick2.png',  offset: '' },
                { name: 'Isaac Rosenthal', title: 'Operations Director',  img: '/images/isaac2.png',    offset: 'sm:mt-10' },
              ].map((m) => (
                <Link href="/team" key={m.name} className={`group flex-1 ${m.offset}`}>
                  <div className="relative overflow-hidden rounded-2xl aspect-[3/4] bg-zinc-100 shadow-[0_16px_48px_rgba(0,0,0,0.12)] group-hover:shadow-[0_24px_64px_rgba(42,140,45,0.18)] transition-all duration-500">
                    <img src={m.img} alt={m.name} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/75 to-transparent">
                      <p className="text-white font-bold text-sm">{m.name}</p>
                      <p className="text-brand-green text-[10px] font-bold uppercase tracking-widest mt-0.5">{m.title}</p>
                    </div>
                    <div className="absolute inset-0 rounded-2xl border-2 border-brand-green/0 group-hover:border-brand-green/30 transition-all duration-500" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ INVESTMENT CRITERIA ═══════ */}
      <section className="py-28 bg-zinc-950 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-[0.05] pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-green/30 to-transparent" />
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-96 h-64 bg-brand-green/[0.07] blur-3xl rounded-full pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal-left">
              <div className="flex items-center gap-3 mb-8">
                <span className="w-8 h-px bg-brand-green" />
                <span className="section-label bg-brand-green/10 border-brand-green/20 text-brand-green">Investment Criteria</span>
              </div>
              <h2 className="text-4xl font-bold font-serif text-white mb-6 tracking-tight" style={{ lineHeight: '1.08' }}>
                How We <span className="text-brand-green">Deploy Capital</span>
              </h2>
              <p className="text-zinc-400 text-base leading-relaxed mb-10">
                Disciplined parameters that maximise risk-adjusted returns for our investor base.
              </p>
              <Link href="/contact" className="btn-primary group text-sm px-7 py-3.5 inline-flex">
                Start a Conversation
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="reveal-right">
              <div className="bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden">
                <div className="h-0.5 bg-gradient-to-r from-brand-green to-brand-green-light" />
                {[
                  { label: 'Structure',     value: 'Primarily LP equity' },
                  { label: 'Deal Type',     value: 'One-off investments' },
                  { label: 'Equity Range',  value: '$2M — $20M USD' },
                  { label: 'Hold Period',   value: '3 — 5 years' },
                  { label: 'Geography',     value: 'High-growth cities' },
                ].map((row, i) => (
                  <div key={row.label} className={`flex items-center justify-between px-7 py-4 ${i < 4 ? 'border-b border-zinc-800' : ''} group hover:bg-zinc-800/50 transition-colors cursor-default`}>
                    <span className="text-zinc-500 text-xs font-bold uppercase tracking-widest">{row.label}</span>
                    <span className="text-white text-sm font-semibold group-hover:text-brand-green transition-colors">{row.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ CTA STRIP ═══════ */}
      <section className="py-24 bg-brand-green relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-[0.08] pointer-events-none" />
        <div className="floating-shape shape-ring w-48 h-48 -top-12 -right-12 opacity-10" style={{ borderColor: 'rgba(255,255,255,0.2)' }} />
        <div className="floating-shape shape-ring w-32 h-32 bottom-0 left-16 opacity-8" style={{ borderColor: 'rgba(255,255,255,0.15)', animationDelay: '-6s' }} />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
          <div className="flex items-center justify-center gap-3 mb-7">
            <MapPin className="w-4 h-4 text-white/70" />
            <span className="text-white/70 text-[10px] font-bold uppercase tracking-[0.25em]">HK · Shanghai · North America</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-white mb-5 tracking-tight" style={{ lineHeight: '1.08' }}>
            Ready to discuss your investment goals?
          </h2>
          <p className="text-white/70 text-lg font-light mb-10 max-w-lg mx-auto leading-relaxed">
            Connect with the Springer Capital team today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="group inline-flex items-center gap-2 bg-white text-brand-green font-semibold px-8 py-4 rounded-lg text-sm hover:bg-zinc-50 transition-colors shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)]">
              Contact Us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/about" className="group inline-flex items-center gap-2 border border-white/30 text-white/85 hover:text-white hover:border-white/60 font-medium px-8 py-4 rounded-lg text-sm transition-colors">
              Learn More
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
