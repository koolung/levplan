'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Reason {
  title: string;
  description: string;
  image: string;
  details: string[];
}

const WhyLevplanSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedModal, setSelectedModal] = useState<number | null>(null);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  const reasons: Reason[] = [
    {
      image: '/images/why_images/expert.png',
      title: 'Expert Advisors',
      description: 'Work with certified financial planners with years of industry experience.',
      details: [
        'Certified Financial Planners (CFP) with 10+ years of experience',
        'Continuing education in financial planning and investment strategies',
        'Personalized approach to each client relationship',
        'Access to the latest financial tools and resources',
      ],
    },
    {
      image: '/images/why_images/personal.jpg',
      title: 'Personalized Plans',
      description: 'Every plan is customized to your unique financial situation and goals.',
      details: [
        'Comprehensive financial assessment and analysis',
        'Goal-based planning tailored to your life stage',
        'Regular plan reviews and adjustments',
        'Family-focused financial strategies',
      ],
    },
    {
      image: '/images/why_images/data.png',
      title: 'Data-Driven Insights',
      description: 'Advanced tools and analytics to give you actionable financial insights.',
      details: [
        'Proprietary financial planning software',
        'Real-time portfolio analysis and reporting',
        'Market research and economic analysis',
        'Performance tracking and optimization',
      ],
    },
    {
      image: '/images/why_images/trusted.jpg',
      title: 'Trusted Partners',
      description: 'Partnered with leading financial institutions and investment firms.',
      details: [
        'Partnerships with major Canadian financial institutions',
        'Access to exclusive investment opportunities',
        'Competitive rates and fees through partnerships',
        'Trusted network of specialists and advisors',
      ],
    },
    {
      image: '/images/why_images/comprehensive.jpg',
      title: 'Comprehensive Coverage',
      description: 'From retirement to insurance, we cover all aspects of your financial life.',
      details: [
        'Retirement planning and income projections',
        'Tax optimization strategies',
        'Insurance and risk management planning',
        'Estate planning and wealth transfer strategies',
      ],
    },
    {
      image: '/images/why_images/secure.jpg',
      title: 'Secure & Private',
      description: 'Your financial information is protected with enterprise-grade security.',
      details: [
        'Enterprise-grade encryption and security measures',
        'PIPEDA compliance for privacy protection',
        'Regular security audits and updates',
        'Confidential handling of all financial information',
      ],
    },
  ];

  // Autoplay carousel
  useEffect(() => {
    const startAutoplay = () => {
      autoplayRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % reasons.length);
      }, 4000);
    };

    startAutoplay();

    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [reasons.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reasons.length);
    }, 4000);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + reasons.length) % reasons.length);
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reasons.length);
    }, 4000);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reasons.length);
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reasons.length);
    }, 4000);
  };

  return (
    <section
      id="why-levplan"
      className="py-16 md:py-24 px-4 bg-gradient-to-br from-[#f5f5f3] to-white"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl text-[#031931] font-medium mb-4">
            Why Choose LevPlan?
          </h2>
                  <hr className="w-24 border-t-4 border-[#e7a832] mx-auto mb-6" />

          <p className="text-[#5a5a57] text-lg max-w-2xl mx-auto">
            Discover what sets us apart in personalized financial planning and wealth management.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full overflow-hidden flex justify-center items-center min-h-[500px] md:min-h-[450px]">
          {/* Card Display */}
          <div className="relative w-full h-full flex justify-center items-center max-w-4xl mx-auto">
            {reasons.map((reason, index) => {
              const isCenter = index === currentIndex;
              const isNext = index === (currentIndex + 1) % reasons.length;
              const isPrev = index === (currentIndex - 1 + reasons.length) % reasons.length;

              let position = 'opacity-0 scale-0 -z-10';
              if (isCenter) {
                position = 'opacity-100 scale-100 z-30';
              } else if (isNext) {
                position = 'opacity-30 scale-75 translate-x-40 md:translate-x-72 z-10';
              } else if (isPrev) {
                position = 'opacity-30 scale-75 -translate-x-40 md:-translate-x-72 z-10';
              }

              return (
                <div
                  key={index}
                  className={`absolute w-72 md:w-80 transition-all duration-500 ease-out ${position}`}
                >
                  <div className="rounded-[3px] shadow-lg hover:shadow-xl overflow-hidden transition-shadow duration-300 relative min-h-[400px] md:min-h-[450px]">
                    {/* Background Image */}
                    <Image
                      src={reason.image}
                      alt={reason.title}
                      fill
                      className="object-cover -z-10"
                      priority={index < 2}
                    />
                    
                    {/* Dark overlay */}
                    <div className="absolute inset-0" style={{ backgroundColor: 'rgba(7, 22, 45, 0.6)' }}/>
                    
                    {/* Content */}
                    <div className="relative z-10 h-full flex flex-col p-8 justify-between gap-15">
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-2xl font-medium text-white uppercase flex-1 pr-2">
                            {reason.title}
                          </h3>
                          <button
                            onClick={() => setSelectedModal(index)}
                            className="flex-shrink-0 w-6 h-6 rounded-full bg-transparent border-2 border-white text-white flex items-center justify-center text-sm font-bold hover:scale-110 transition-transform duration-200"
                            aria-label="Learn more"
                          >
                            ?
                          </button>
                        </div>
                        <p className="text-white leading-relaxed text-sm md:text-base">
                          {reason.description}
                        </p>
                      </div>
                      <Link href="/questionnaire">
                        <button className="w-full px-6 py-2 bg-transparent border-2 border-[#f0b94a] text-[#f0b94a] font-bold uppercase text-sm hover:bg-[#f0b94a] hover:text-[#031931] transition-colors duration-200">
                          Take a Quiz
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrev}
            className="absolute left-2 md:left-0 top-1/2 -translate-y-1/2 z-40 p-2 md:p-3 text-[var(--primary)] hover:opacity-80 transition-opacity duration-300 hover:scale-110 flex-shrink-0"
            aria-label="Previous card"
          >
            <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={goToNext}
            className="absolute right-2 md:right-0 top-1/2 -translate-y-1/2 z-40 p-2 md:p-3 text-[var(--primary)] hover:opacity-80 transition-opacity duration-300 hover:scale-110 flex-shrink-0"
            aria-label="Next card"
          >
            <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Indicator Dots */}
        <div className="flex gap-2 justify-center md:mt-8">
          {reasons.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                index === currentIndex
                  ? 'bg-[var(--primary)] w-8'
                  : 'bg-[#babbb7] w-2 hover:bg-[#5a5a57]'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Modal */}
        {selectedModal !== null && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedModal(null)}
          >
            <div
              className="bg-white rounded-lg shadow-xl max-w-md w-full p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-[#031931]">
                  {reasons[selectedModal].title}
                </h2>
                <button
                  onClick={() => setSelectedModal(null)}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                  aria-label="Close modal"
                >
                  ×
                </button>
              </div>
              <ul className="space-y-3">
                {reasons[selectedModal].details.map((detail, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[var(--primary)] font-bold flex-shrink-0 mt-1">✓</span>
                    <span className="text-[#5a5a57]">{detail}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setSelectedModal(null)}
                className="mt-6 w-full bg-[var(--primary)] text-white py-2 rounded-lg hover:opacity-90 transition-opacity"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default WhyLevplanSection;

