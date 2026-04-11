import React from 'react';
import Link from 'next/link';
import Script from 'next/script';

export default function ThankYouPage() {
  return (
    <>
      <link rel="stylesheet" href="/css/thanks.css" />
      <div className="thanks" style={{ marginTop: '50px', marginBottom: '50px' }}>
          Thank you for contacting us!
          <br /><br />
          <Link href="/">Click to go back.</Link>
      </div>
    </>
  );
}
