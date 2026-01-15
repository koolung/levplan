'use client';

import { useEffect } from 'react';

// Extend Window interface to include Calendly
declare global {
  interface Window {
    Calendly: {
      initBadgeWidget: (options: {
        url: string;
        text: string;
        color: string;
        textColor: string;
        branding: boolean;
      }) => void;
    };
  }
}

const CalendlySection = () => {
  useEffect(() => {
    // Load Calendly widget CSS
    const link = document.createElement('link');
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Load Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    // Initialize badge widget
    script.onload = () => {
      if (window.Calendly) {
        window.Calendly.initBadgeWidget({
          url: 'https://calendly.com/robert-levplan/30min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=002349&text_color=ffffff&primary_color=e7a832',
          text: 'Schedule Your Call',
          color: '#002349',
          textColor: '#ffffff',
          branding: true
        });
      }
    };

    return () => {
      // Clean up on unmount
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return null;
};

export default CalendlySection;
