import React from 'react';

export default function PrivacyPage() {
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
            Privacy <span className="text-brand-green">Policy</span>
          </h1>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg prose-zinc max-w-none prose-headings:font-serif prose-headings:font-medium prose-headings:text-zinc-900 prose-h3:text-2xl prose-h3:mt-14 prose-h3:mb-6 prose-h3:tracking-tight prose-p:text-zinc-600 prose-p:leading-relaxed prose-p:mb-8 prose-li:text-zinc-600 prose-li:leading-relaxed marker:text-brand-green prose-a:text-brand-green hover:prose-a:text-brand-green-light prose-a:transition-colors prose-strong:text-zinc-900 prose-strong:font-medium">

            <h3>1. Identity of the Data Controller</h3>
            <p><strong>Springer Capital LLC</strong> ("we," "our," or "us") is the data controller responsible for your personal information. We are registered in the State of Illinois, USA.</p>
            <ul>
              <li><strong>Physical Address:</strong> 430 Beverly Drive, Wilmette, Illinois 60091</li>
              <li><strong>Primary Privacy Contact:</strong> <a href="mailto:contact@springer.capital">contact@springer.capital</a></li>
            </ul>

            <h3>2. Information We Collect & Lawful Basis for Processing</h3>
            <p>We process your personal data under the following lawful bases (in compliance with GDPR and applicable laws):</p>
            <ul>
              <li><strong>Contact Form Submissions:</strong> Processed under <em>Legitimate Interest</em> and <em>Contractual Necessity</em> to respond to your specific inquiries.</li>
              <li><strong>Email Follow-up Communications:</strong> Processed under <em>Legitimate Interest</em> to provide relevant business updates (with a right to opt out).</li>
              <li><strong>Analytics & Cookies:</strong> Processed strictly under <em>Consent</em> obtained via our Cookie Banner.</li>
            </ul>
            <p>Information collected may include your name, email address, phone number, and any details you voluntarily provide when communicating with us.</p>

            <h3>3. Data Retention Policy</h3>
            <p>We do not retain your data indefinitely. The retention schedules are as follows:</p>
            <ul>
              <li><strong>Contact Form Data:</strong> Retained for <strong>12 months</strong> after the inquiry is resolved, after which it is securely deleted.</li>
              <li><strong>Email Correspondence:</strong> Retained for up to <strong>7 years</strong> solely to comply with legal, tax, and business record-keeping obligations.</li>
              <li><strong>Cookie/Analytics Data:</strong> Retained per the cookie provider's default term or until you clear your browser cache/preferences.</li>
            </ul>

            <h3>4. Email Communication and Opt-Out Mechanism</h3>
            <p>By submitting the contact form on our website, you may receive follow-up emails from Springer Capital regarding your inquiry or our services. You have the right to control these communications:</p>
            <ul>
              <li><strong>Unsubscribe Link:</strong> Every marketing or promotional email we send contains a clear unsubscribe link at the bottom.</li>
              <li><strong>Timeframe:</strong> Opt-out requests are honored promptly and within <strong>10 business days</strong> in compliance with the CAN-SPAM Act.</li>
              <li><strong>Manual Opt-Out:</strong> You may opt out by emailing <a href="mailto:contact@springer.capital">contact@springer.capital</a> with the subject line "Unsubscribe".</li>
              <li><strong>Suppression:</strong> Once opted out, your email address will be placed on a suppression list to guarantee you do not receive future marketing communications.</li>
            </ul>

            <h3>5. Cookies and Tracking Technologies</h3>
            <p>We use cookies to improve your browsing experience. Types of cookies used include:</p>
            <ul>
              <li><strong>Essential Cookies:</strong> Required for basic site functionality.</li>
              <li><strong>Analytics/Performance Cookies:</strong> Used to understand site traffic (provided by services such as Google Analytics).</li>
            </ul>
            <p>You can manage or refuse non-essential cookies via the designated cookie consent banner upon visiting our website. Refusing cookies will not significantly restrict your use of the website.</p>

            <h3>6. Third-Party Data Processors</h3>
            <p>We do not sell personal data to third parties. We use the following selected third-party processors to operate our website securely:</p>
            <ul>
              <li><strong>formsubmit.co:</strong> Handles routing for our website contact forms. Data is securely relayed through their infrastructure. Please review the <a href="https://formsubmit.co/privacy.pdf" target="_blank" rel="noopener">FormSubmit Privacy Policy</a>.</li>
              <li><strong>Amazon Web Services (SES):</strong> Utilized to securely transmit email communications. Please refer to the <a href="https://aws.amazon.com/privacy/" target="_blank" rel="noopener">AWS Privacy Notice</a>.</li>
            </ul>

            <h3>7. International Data Transfers</h3>
            <p>Springer Capital operates globally with offices in the United States, Hong Kong, and China. Your data may be transferred to and processed in these jurisdictions. We utilize legally recognized transfer mechanisms, such as Standard Contractual Clauses, to ensure your data is protected. For users in Hong Kong, we comply with the Personal Data (Privacy) Ordinance (PDPO) Cap. 486.</p>

            <h3>8. Your Rights</h3>
            <p>Depending on your jurisdiction, you possess the following rights regarding your personal data:</p>
            <ul>
              <li><strong>Right to Access:</strong> Request a copy of your data.</li>
              <li><strong>Right to Rectification:</strong> Request correction of inaccurate data.</li>
              <li><strong>Right to Erasure:</strong> Request the deletion of your data ("Right to be Forgotten").</li>
              <li><strong>Right to Restrict / Object:</strong> Object to processing based on legitimate interest.</li>
              <li><strong>Right to Data Portability:</strong> Obtain your data in a portable format.</li>
              <li><strong>Right to Withdraw Consent:</strong> Withdraw consent for marketing emails at any time.</li>
            </ul>
            <p>To exercise these rights, please contact us directly at <a href="mailto:contact@springer.capital">contact@springer.capital</a>.</p>

            <h3>9. Children's Privacy</h3>
            <p>Our website and services are not directed at children under the age of 13 (in the US) or under 16 (in the EU). We do not knowingly collect personal data from children.</p>

            <h3>10. Policy Updates and Complaints</h3>
            <p>We will notify you of any material changes to this Privacy Policy by updating the Last Updated date atop this page, and for significant changes, via a prominent notice on our website.</p>
            <p>If you have any questions or wish to file a privacy complaint, please email <a href="mailto:contact@springer.capital">contact@springer.capital</a>. We respond to all privacy inquiries within <strong>30 days</strong>. You also maintain the right to lodge a complaint with your local supervisory authority or Data Protection Authority.</p>

          </div>
        </div>
      </section>
    </>
  );
}
