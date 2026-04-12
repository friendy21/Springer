'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, Cookie, ShieldCheck } from 'lucide-react';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('sc_cookie_consent');
    if (!accepted) {
      const timer = setTimeout(() => {
        setVisible(true);
        setAnimating(true);
      }, 1800);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('sc_cookie_consent', 'accepted');
    dismiss();
  };

  const decline = () => {
    localStorage.setItem('sc_cookie_consent', 'declined');
    dismiss();
  };

  const dismiss = () => {
    setAnimating(false);
    setTimeout(() => setVisible(false), 420);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[9998] px-4 pb-4 sm:pb-6"
      style={{
        transform: animating ? 'translateY(0)' : 'translateY(100%)',
        opacity: animating ? 1 : 0,
        transition: 'transform 0.42s cubic-bezier(0.16,1,0.3,1), opacity 0.42s ease',
        willChange: 'transform, opacity',
      }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="relative bg-zinc-900 rounded-2xl overflow-hidden shadow-[0_-4px_40px_rgba(0,0,0,0.35)] border border-zinc-700/60">
          {/* Green accent top bar */}
          <div className="h-0.5 w-full bg-gradient-to-r from-brand-green via-brand-green-light to-brand-green" />

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 p-5 sm:p-6">

            {/* Icon */}
            <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-brand-green/10 border border-brand-green/20 flex items-center justify-center">
              <Cookie className="w-5 h-5 text-brand-green" />
            </div>

            {/* Text */}
            <div className="flex-1 min-w-0">
              <p className="text-white text-sm font-semibold mb-1 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-brand-green flex-shrink-0" />
                We value your privacy
              </p>
              <p className="text-zinc-400 text-xs leading-relaxed">
                We use cookies to improve your browsing experience, analyse site traffic, and personalise content. By clicking &ldquo;Accept All&rdquo;, you consent to our use of cookies.{' '}
                <Link href="/privacy" className="text-brand-green hover:text-brand-green-light underline underline-offset-2 transition-colors">
                  Privacy Policy
                </Link>
              </p>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3 flex-shrink-0 w-full sm:w-auto">
              <button
                onClick={decline}
                className="flex-1 sm:flex-none px-4 py-2.5 text-xs font-semibold text-zinc-400 hover:text-white border border-zinc-700 hover:border-zinc-500 rounded-lg transition-colors"
              >
                Decline
              </button>
              <button
                onClick={accept}
                className="flex-1 sm:flex-none px-5 py-2.5 text-xs font-semibold bg-brand-green hover:bg-brand-green-light text-white rounded-lg transition-colors shadow-[0_4px_12px_rgba(42,140,45,0.35)] hover:shadow-[0_6px_20px_rgba(42,140,45,0.5)]"
              >
                Accept All
              </button>
              <button
                onClick={dismiss}
                className="p-2 text-zinc-600 hover:text-white transition-colors rounded-lg hover:bg-zinc-800"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
