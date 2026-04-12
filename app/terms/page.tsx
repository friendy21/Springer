import React from 'react';

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

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-zinc max-w-none prose-headings:font-serif prose-headings:font-bold prose-headings:text-zinc-900 prose-h3:text-[1.35rem] prose-h3:mt-12 prose-h3:mb-6 border-l-[3px] border-brand-green/20 pl-8 prose-p:text-zinc-500 prose-p:leading-[1.85] prose-p:mb-6 prose-li:text-zinc-500 prose-li:leading-[1.85] marker:text-brand-green prose-a:text-brand-green hover:prose-a:text-brand-green-light prose-a:transition-colors">
            <p><strong>Last Updated:</strong> March 2026</p>

            <h3>1. Terms</h3>
            <p>By accessing the website at springer.capital, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law.</p>

            <h3>2. Use License</h3>
            <p>Permission is granted to temporarily download one copy of the materials (information or software) on Springer Capital's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
            <ul>
              <li>modify or copy the materials;</li>
              <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
              <li>attempt to decompile or reverse engineer any software contained on Springer Capital's website;</li>
              <li>remove any copyright or other proprietary notations from the materials; or</li>
              <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
            </ul>

            <h3>3. Disclaimer</h3>
            <p>The materials on Springer Capital's website are provided on an 'as is' basis. Springer Capital makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
            <p>Further, Springer Capital does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.</p>

            <h3>4. Limitations</h3>
            <p>In no event shall Springer Capital or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Springer Capital's website, even if Springer Capital or a Springer Capital authorized representative has been notified orally or in writing of the possibility of such damage.</p>

            <h3>5. Governing Law</h3>
            <p>These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which Springer Capital operates, and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.</p>
          </div>
        </div>
      </section>
    </>
  );
}
