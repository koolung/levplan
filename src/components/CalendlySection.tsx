'use client';

import { useEffect } from 'react';

const CalendlySection = () => {
  useEffect(() => {
    // Load Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section
      id="calendly"
      className="py-16 md:py-24 px-4 bg-gradient-to-br from-[#f5f5f3] to-white"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#031931] mb-4">
            Schedule Your Consultation
          </h2>
          <p className="text-[#5a5a57] text-lg max-w-2xl mx-auto">
            Book a time that works best for you. Our financial advisors are ready to help.
          </p>
        </div>

        {/* Calendly Embed - Full Size */}
        <div className="w-full" style={{ height: '100vh' }}>
          <div
            className="calendly-inline-widget w-full h-full"
            data-url="https://calendly.com/bedfordwebservices-info/30min"
            style={{ minWidth: '320px', width: '100%', height: '100%' }}
          />
        </div>
      </div>
    </section>
  );
};

export default CalendlySection;
