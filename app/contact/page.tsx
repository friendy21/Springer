import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-zinc-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/ok4.jpeg')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">Contact <span className="text-brand-green">Us</span></h1>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <div>
              <h1 className="text-4xl font-bold text-zinc-900 mb-8 font-serif"><span className="text-brand-green">C</span>ontact the Springer Capital Team</h1>
              <p className="text-lg text-zinc-600 mb-10">
                We'd love to hear from you! If you want to connect with us, please fill out the contact form below.
              </p>

              <div className="space-y-8 mt-12">
                <div className="flex items-start">
                  <div className="bg-zinc-50 border border-zinc-100 p-4 rounded-lg mr-6">
                    <MapPin className="w-8 h-8 text-brand-green" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-zinc-900 mb-2">Address</h3>
                    <p className="text-zinc-600">Springer Capital<br/>430 Beverly Drive, Wilmette Illinois 60091</p>
                    <p className="text-zinc-600 mt-2">Kangding East road 45 Jingan Shanghai 200020</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-zinc-50 border border-zinc-100 p-4 rounded-lg mr-6">
                    <Phone className="w-8 h-8 text-brand-green" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-zinc-900 mb-2">Phone</h3>
                    <p className="text-zinc-600 font-medium">+1 224 216 3685</p>
                    <p className="text-zinc-600 font-medium mt-2">+86 136 6180 3041</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-zinc-50 border border-zinc-100 p-4 rounded-lg mr-6">
                    <Mail className="w-8 h-8 text-brand-green" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-zinc-900 mb-2">Email Address</h3>
                    <a href="mailto:contact@springer.capital" className="text-brand-green hover:text-brand-green-light transition-colors font-medium text-lg">
                      contact@springer.capital
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-zinc-50 border border-zinc-100 p-8 md:p-12 rounded-xl shadow-sm">
              <h2 className="text-3xl font-bold text-zinc-900 mb-6 font-serif text-center">How May We Help You?</h2>
              <form action="/thankyou" method="POST" className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-zinc-700 mb-2">Name</label>
                  <input type="text" name="name" required className="w-full px-4 py-3 border border-zinc-200 rounded-md focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition-all" placeholder="Enter name" title="Please enter your name (at least 2 characters)" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-zinc-700 mb-2">Email</label>
                  <input type="email" name="email" required className="w-full px-4 py-3 border border-zinc-200 rounded-md focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition-all" placeholder="Enter email" title="Please enter a valid email address" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-zinc-700 mb-2">Phone</label>
                  <input type="tel" name="phone" required className="w-full px-4 py-3 border border-zinc-200 rounded-md focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition-all" placeholder="Enter phone number" title="Please enter a valid phone number (at least 10 characters)" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-zinc-700 mb-2">Comments</label>
                  <textarea name="comment" rows={5} required className="w-full px-4 py-3 border border-zinc-200 rounded-md focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition-all resize-none" placeholder="Enter your message…" title="Please enter your message (at least 10 characters)"></textarea>
                </div>

                <input type="hidden" name="_next" value="https://www.greentree.group/Springer/thankyou.html" />
                <input name="_formsubmit_id" type="text" style={{display: 'none'}} />
                
                <button type="submit" className="w-full bg-brand-green hover:bg-brand-green-light text-white font-medium py-4 px-8 rounded-md transition-all flex items-center justify-center group">
                  Submit
                  <Send className="w-5 h-5 ml-2 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
}
