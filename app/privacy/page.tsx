import React from 'react';

export default function PrivacyPage() {
  return (
    <>
      <section className="relative pt-32 pb-16 bg-zinc-900 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl font-bold font-serif mb-4">Privacy <span className="text-brand-green">Policy</span></h1>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-zinc prose-a:text-brand-green hover:prose-a:text-brand-green-light">
          <h3>Information We Collect</h3>
          <p>We may collect personal information such as your name, email address, phone number, and any other details you voluntarily provide when you communicate with us through forms on our site or via email.</p>
          
          <h3>How We Use Your Information</h3>
          <p>The information we collect is used to:</p>
          <ul>
            <li>Provide, operate, and maintain our site.</li>
            <li>Improve, personalize, and expand our site.</li>
            <li>Understand and analyze how you use our site.</li>
            <li>Develop new products, services, features, and functionality.</li>
            <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the site, and for marketing and promotional purposes.</li>
          </ul>

          <h3>Cookies and Tracking Technologies</h3>
          <p>We use cookies and similar tracking technologies to track the activity on our site and hold certain information. Cookies are files with small amount of data which may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.</p>

          <h3>Third-Party Privacy Policies</h3>
          <p>Springer Capital's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information.</p>
        </div>
      </section>
    </>
  );
}
