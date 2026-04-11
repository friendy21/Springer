import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, ChevronUp } from 'lucide-react';

export default function Footer() {
  return (
    <>
      <footer className="bg-zinc-900 border-t border-brand-green/20 pt-16 pb-8 text-zinc-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            
            {/* Menu Sections */}
            <div>
              <h4 className="text-xl font-semibold mb-6 text-white border-b border-zinc-800 pb-2 inline-block">Menu</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <ul className="space-y-3">
                  <li><Link href="/about" className="hover:text-brand-green transition-colors">About</Link></li>
                  <li><Link href="/team" className="hover:text-brand-green transition-colors">Our Team</Link></li>
                  <li><Link href="/multi" className="hover:text-brand-green transition-colors">Multi-family & Student</Link></li>
                  <li><Link href="/logistics" className="hover:text-brand-green transition-colors">Logistics</Link></li>
                  <li><Link href="/mixed" className="hover:text-brand-green transition-colors">Mixed Use</Link></li>
                </ul>
                <ul className="space-y-3">
                  <li><Link href="/hospitality" className="hover:text-brand-green transition-colors">Hospitality</Link></li>
                  <li><Link href="/development" className="hover:text-brand-green transition-colors">Development Land</Link></li>
                  <li><Link href="/career" className="hover:text-brand-green transition-colors">Careers</Link></li>
                  <li><Link href="/contact" className="hover:text-brand-green transition-colors">Contact</Link></li>
                </ul>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-xl font-semibold mb-6 text-white border-b border-zinc-800 pb-2 inline-block">Contact Info</h4>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Mail className="w-5 h-5 text-brand-green mr-3 mt-1 flex-shrink-0" />
                  <a href="mailto:contact@springer.capital" className="hover:text-white transition-colors">contact@springer.capital</a>
                </li>
                <li className="flex items-start">
                  <Phone className="w-5 h-5 text-brand-green mr-3 mt-1 flex-shrink-0" />
                  <span>+1 224-216-3685<br/>+86 136-6180-3041</span>
                </li>
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 text-brand-green mr-3 mt-1 flex-shrink-0" />
                  <span>430 Beverly Drive<br/>Wilmette, Illinois 60091</span>
                </li>
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 text-brand-green mr-3 mt-1 flex-shrink-0" />
                  <span>Kangding East Road 45<br/>Jingan District, Shanghai 200020</span>
                </li>
              </ul>
            </div>
            
          </div>
        </div>
      </footer>

      {/* Copyright */}
      <section className="bg-black py-6 text-sm text-zinc-500 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center">
          <div className="mb-4 sm:mb-0 text-center sm:text-left">
            Copyright &copy; {new Date().getFullYear()} All Rights Reserved
            <span className="ml-0 sm:ml-4 inline-block mt-2 sm:mt-0">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <span className="mx-2">|</span>
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            </span>
          </div>
          <div className="font-serif text-brand-green font-bold text-base tracking-widest uppercase">
            Springer Capital
          </div>
        </div>
      </section>

      {/* Back to top */}
      <a href="#top" className="fixed bottom-6 right-6 bg-brand-green/80 hover:bg-brand-green text-white p-3 rounded-full shadow-lg transition-all backdrop-blur-sm group z-50">
        <ChevronUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
      </a>
    </>
  );
}
