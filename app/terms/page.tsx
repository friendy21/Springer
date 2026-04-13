import React from 'react';
import Link from 'next/link';

export const metadata = { title: 'Terms of Service', description: 'Terms of Service' };


export default function TermsPage() {
  return (
    <>
      <section className="relative pt-32 pb-16 bg-zinc-900 overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-green z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/95 to-zinc-900/70" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-12 h-px bg-brand-green" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-green/80">Legal</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4" style={{ letterSpacing: '-0.01em' }}>
            Terms of <span className="text-brand-green">Service</span>
          </h1>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg prose-zinc max-w-none prose-headings:font-serif prose-headings:font-medium prose-headings:text-zinc-900 prose-h3:text-2xl prose-h3:mt-14 prose-h3:mb-6 prose-h3:tracking-tight prose-p:text-zinc-600 prose-p:leading-relaxed prose-p:mb-8 prose-li:text-zinc-600 prose-li:leading-relaxed marker:text-brand-green prose-a:text-brand-green hover:prose-a:text-brand-green-light prose-a:transition-colors prose-strong:text-zinc-900 prose-strong:font-medium">

            <h3>1. Introduction and Agreement</h3>
            <p>By accessing the website at springer.capital, you agree to be bound by these Terms of Service. If you do not agree with any of these terms, you are prohibited from using or accessing this site. Your use of this site is also explicitly governed by our <Link href="/privacy">Privacy Policy</Link>, which is incorporated into these Terms by reference.</p>

            <h3>2. No Investment or Financial Advice</h3>
            <p>The content provided on this website is strictly for informational and educational purposes only. Nothing on this website constitutes investment, legal, tax, or financial advice. Past performance is not indicative of, and does not guarantee, future results. Visitors and prospective clients should consult with qualified independent advisors before making any commercial or investment decisions.</p>

            <h3>3. Electronic Communications</h3>
            <p>By voluntarily submitting our contact forms, you expressly consent to receive electronic communications from Springer Capital regarding your inquiry. These include:</p>
            <ul className="space-y-4 my-6">
              <li><strong>Transactional Communications</strong> &mdash; Direct responses to your specific questions or service requests. These do not require marketing opt-in consent.</li>
              <li><strong>Marketing Communications</strong> &mdash; If you explicitly opt in, you may receive updates, market insights, and news regarding our services. You maintain the right to withdraw this consent to marketing communications at any time by utilizing the unsubscribe mechanism provided in every promotional email.</li>
            </ul>

            <h3>4. Intellectual Property Rights</h3>
            <p>All content displayed on this website—including text, editorial materials, images, architectural layouts, logos, branding, and design elements—is the exclusive intellectual property of <strong>Springer Capital LLC</strong> and is protected by applicable international copyright and trademark laws. Visitors are granted a limited license to view the materials temporarily for personal, non-commercial use.</p>

            <h3>5. Acceptable Use and Prohibited Activities</h3>
            <p>When interacting with our website and our contact systems, you agree strictly to the following acceptable use boundaries:</p>
            <ul className="space-y-4 my-6">
              <li>No automated scraping, data mining, or malicious penetration testing.</li>
              <li>No use of our integrated contact forms to distribute spam, solicitations, or unsolicited commercial messaging.</li>
              <li>No submission of false, fraudulent, or systematically misleading personal information.</li>
            </ul>
            <p>We reserve the right to block access or ignore communications arising from prohibited activities, and log malicious traffic for regulatory reporting.</p>

            <h3>6. Limitation of Liability</h3>
            <p>In no event shall Springer Capital, its directors, or its suppliers be held liable for any damages (including, without limitation, direct, indirect, incidental, or consequential damages resulting from lost data, interrupted business, or lost profits) arising from the use or inability to access the materials on this website. Our operations are provided on an &quot;as is&quot; and &quot;as available&quot; basis without implied warranties.</p>

            <h3>7. Governing Law and Jurisdiction</h3>
            <p>These Terms, and any disputes arising from your use of the website or our services, are governed exclusively by and construed in accordance with the <strong>laws of the State of Illinois, United States of America</strong>, without regard to its conflict of law principles.</p>

            <h3>8. Dispute Resolution</h3>
            <p>Any disputes arising out of these Terms shall first be addressed through a formal, good-faith negotiation period lasting no less than thirty (30) days. If a resolution cannot be reached, the dispute shall be resolved via binding arbitration or exclusive litigation strictly within the state and federal courts located in <strong>Cook County, Illinois</strong>. You irrevocably submit to the exclusive jurisdiction and venue of such courts.</p>

            <h3>9. SMS Communications Program</h3>
            <p>
              By opting into SMS communications from Springer Capital LLC, you agree to 
              the following terms:
            </p>
            <ul className="space-y-4 my-6">
              <li><strong>Program</strong> &mdash; Springer Capital LLC sends SMS to 
              respond to inquiries and, where separately consented, to share real estate 
              advisory updates.</li>
              <li><strong>Frequency</strong> &mdash; Message frequency varies. Marketing 
              updates: no more than 2&ndash;4 per month.</li>
              <li><strong>Rates</strong> &mdash; Message and data rates may apply.</li>
              <li><strong>Opt-Out</strong> &mdash; Reply STOP, QUIT, CANCEL, UNSUBSCRIBE, 
              or END at any time. One confirmation message will be sent.</li>
              <li><strong>Opt-In</strong> &mdash; Reply START or YES to re-subscribe.</li>
              <li><strong>Help</strong> &mdash; Reply HELP or contact 
              contact@springer.capital or +1 224 216 3685.</li>
              <li><strong>Carrier Liability</strong> &mdash; Carriers are not liable for 
              delayed or undelivered messages.</li>
              <li><strong>Privacy</strong> &mdash; Mobile numbers are not shared with 
              third parties for marketing. See our{' '}
              <Link href="/privacy">Privacy Policy</Link>.</li>
            </ul>

          </div>
        </div>
      </section>
    </>
  );
}
