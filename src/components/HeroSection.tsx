'use client';

import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen hero-bg flex items-center justify-center px-4 pt-24 md:pt-0"
    >
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Your{' '}
            <span className="bg-gradient-to-r from-[var(--foreground)] to-[var(--foreground)] bg-clip-text text-transparent">
              Financial Future
            </span>
            {' '}Starts Here
          </h1>
          
          <p className="text-lg md:text-xl text-[#f5f5f3] mb-8 max-w-2xl mx-auto leading-relaxed">
            Get your personalized financial plan today. Achieve your retirement goals, eliminate debt, and build lasting wealth with expert guidance tailored to you.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
            <button className="px-8 md:px-10 py-3 md:py-4 bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)] text-white font-bold rounded-lg hover:shadow-xl transition-shadow duration-400 text-base md:text-lg">
              Get Your Free Plan
            </button>
            <button className="px-8 md:px-10 py-3 md:py-4 bg-white text-[var(--primary)] font-bold rounded-lg hover:bg-[#f5f5f3] transition-colors duration-300 text-base md:text-lg">
              Learn More
            </button>
          </div>
        </div>

        {/* Animated scroll indicator */}
        <div className={`flex justify-center mt-12 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="animate-bounce">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              style={{ color: 'white' }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
