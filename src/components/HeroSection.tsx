'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import BackgroundVideo from './BackgroundVideo';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 pt-24 md:pt-0 overflow-hidden"
    >
      {/* <BackgroundVideo /> */}
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
            Your {' '}
            <span className="bg-gradient-to-r from-[var(--foreground)] to-[var(--foreground)] bg-clip-text text-transparent">
            retirement 
            </span> <br></br>
            {' '}
            is the best part of <br className="hidden md:block" />your{' '}
            <span className="bg-gradient-to-r from-[var(--foreground)] to-[var(--foreground)] bg-clip-text text-transparent">
              life story
            </span>
            .
          </h1>
          
          <p className="text-lg md:text-xl text-[#f5f5f3] mb-8 max-w-2xl mx-auto leading-relaxed">
            Get your personalized financial plan today. <br></br>Takes about 3 minutes - Absolutely free - Get 3 instant retirement planning
recommendations.
          </p>

          <div className="flex justify-center mb-12">
            <Link href="/questionnaire">
              <button className="flex items-center gap-3 px-6 md:px-5 py-3 md:py-2 bg-transparent border-2 border-[#e7a832] rounded-[2px] md:rounded-[5px] hover:shadow-lg transition-shadow duration-400 text-base md:text-lg font-semibold text-[white] cursor-pointer">
                <span>Take Our Free Quiz</span>
                <div className="w-9 h-9 md:w-13 md:h-13 bg-[#e7a832] rounded-[2px] md:rounded-[5px] flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-35 h-5 md:w-6 md:h-6"
                    fill="none"
                    stroke="var(--primary)"
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </button>
            </Link>
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