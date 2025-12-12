'use client';

import { useEffect, useRef, useState } from 'react';

const ResearchSection = () => {
  const [visibleCards, setVisibleCards] = useState<boolean[]>(new Array(3).fill(false));
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Sequentially reveal cards with delay
            let delay = 0;
            for (let i = 0; i < 3; i++) {
              setTimeout(() => {
                setVisibleCards((prev) => {
                  const updated = [...prev];
                  updated[i] = true;
                  return updated;
                });
              }, delay);
              delay += 300; // 300ms delay between each card
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="research"
      className="py-16 md:py-24 px-4 bg-gradient-to-b from-white to-[#f9f8f6]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-[#031931] mb-4">
            Research-Backed Planning
          </h2>
          <p className="text-[#5a5a57] text-lg max-w-2xl mx-auto">
            Discover why working with experienced advisors makes a measurable difference in your financial future.
          </p>
        </div>

        {/* Research Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {/* Card 1: RBC Study */}
          <div
            className={`p-8 md:p-10 bg-white border-2 border-[#e7a832] shadow-lg hover:shadow-xl transition-all duration-500 transform ${
              visibleCards[0]
                ? 'opacity-100 translate-y-0 scale-100'
                : 'opacity-0 translate-y-8 scale-95'
            }`}
          >
            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-[#e7a832] bg-opacity-20 text-[#313131] rounded-full text-sm font-semibold">
                Research Insights
              </span>
            </div>
            <p className="text-[#031931] text-sm font-semibold mb-4 text-opacity-60">
              RBC Wealth Study
            </p>
            <h3 className="text-2xl md:text-3xl font-bold text-[#031931] mb-4 leading-tight">
              <span className="font-bold text-[#e7a832]">3.9x</span> More Value
            </h3>
            <p className="text-[#5a5a57] text-base leading-relaxed mb-6">
              Working with an experienced advisor can add <span className="font-bold text-[#031931]">3.9x more value</span> and up to <span className="font-bold text-[#031931]">4x more assets</span> over time compared to DIY investors.
            </p>
            <div className="pt-6 border-t border-gray-200">
              <p className="text-xs text-[#5a5a57] font-semibold">
                Source: RBC Gamut Study
              </p>
            </div>
          </div>

          {/* Card 2: LEVPLAN Heritage */}
          <div
            className={`p-8 md:p-10 bg-white border-2 border-[#031931] shadow-lg hover:shadow-xl transition-all duration-500 transform ${
              visibleCards[1]
                ? 'opacity-100 translate-y-0 scale-100'
                : 'opacity-0 translate-y-8 scale-95'
            }`}
          >
            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-[#031931] bg-opacity-20 text-[#f9f9f9] rounded-full text-sm font-semibold">
                Heritage
              </span>
            </div>
            <p className="text-[#031931] text-sm font-semibold mb-4 text-opacity-60">
              LEVPLAN Story
            </p>
            <h3 className="text-2xl md:text-3xl font-bold text-[#031931] mb-4 leading-tight">
              Since <span className="font-bold text-[#e7a832]">2006</span>
            </h3>
            <p className="text-[#5a5a57] text-base leading-relaxed mb-6">
              LEVPLAN has been building <span className="font-bold text-[#031931]">comprehensive Canadian financial plans</span> for nearly two decades, serving thousands of families across the country.
            </p>
            <div className="pt-6 border-t border-gray-200">
              <p className="text-xs text-[#5a5a57] font-semibold">
                Trusted by Canadian Families
              </p>
            </div>
          </div>

          {/* Card 3: Expert Team */}
          <div
            className={`p-8 md:p-10 bg-white border-2 border-[#e7a832] shadow-lg hover:shadow-xl transition-all duration-500 transform ${
              visibleCards[2]
                ? 'opacity-100 translate-y-0 scale-100'
                : 'opacity-0 translate-y-8 scale-95'
            }`}
          >
            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-[#e7a832] bg-opacity-20 text-[#313131] rounded-full text-sm font-semibold">
                Our Expertise
              </span>
            </div>
            <p className="text-[#031931] text-sm font-semibold mb-4 text-opacity-60">
              Partnership & Credentials
            </p>
            <h3 className="text-2xl md:text-3xl font-bold text-[#031931] mb-4 leading-tight">
              Regulatory Backed
            </h3>
            <p className="text-[#5a5a57] text-base leading-relaxed mb-6">
              Our experienced team of <span className="font-bold text-[#031931]">certified experts</span> works hand in hand with trusted partners and regulatory organizations to ensure the highest standards of professional practice.
            </p>
            <div className="pt-6 border-t border-gray-200">
              <p className="text-xs text-[#5a5a57] font-semibold">
                Industry Certified & Regulated
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA - Enhanced */}
        <div className="mt-16 md:mt-20 pt-12 md:pt-16 border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left: Info Section */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#031931] mb-6">
                Get Your Personalized Assessment
              </h3>
              <p className="text-[#5a5a57] text-base leading-relaxed mb-6">
                Answer <span className="font-bold text-[#031931]">15 key questions</span> and you will gain immediate insights based on the 
following <span className="font-bold text-[#031931]">3</span> key areas: 
              </p>
              
              {/* Features List */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-[#e7a832] bg-opacity-20">
                      <span className="text-[#313131] font-bold">1</span>
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-[#031931]">Saving Habits</p>
                    <p className="text-sm text-[#5a5a57]">Build a stronger financial foundation.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-[#e7a832] bg-opacity-20">
                      <span className="text-[#313131] font-bold">2</span>
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-[#031931]">Cash Flow</p>
                    <p className="text-sm text-[#5a5a57]">Optimize your monthly budget and improve cash flow.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-[#e7a832] bg-opacity-20">
                      <span className="text-[#313131] font-bold">3</span>
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-[#031931]">Retirement Readiness</p>
                    <p className="text-sm text-[#5a5a57]">Evaluate your current retirement plan and see how on-track you are.</p>
                  </div>
                </div>
              </div>

              <p className="text-sm text-[#5a5a57] italic">
                This assessment has been carefully developed to quickly and easily produce valuable insights based on your answers.
              </p>
            </div>

            {/* Right: CTA Button Section */}
            <div className="flex flex-col items-center justify-center bg-gradient-to-br from-[#f9f8f6] to-[#f5f5f3] p-8 md:p-12 border border-[#e7a832] border-opacity-30">
              <div className="text-center mb-8">
                <div className="text-4xl md:text-5xl font-bold text-[#e7a832] mb-3">
                  3<span className="text-lg">min</span>
                </div>
                <p className="text-[#5a5a57] font-semibold mb-2">
                  Assessment Time
                </p>
                <p className="text-sm text-[#5a5a57]">
                  Just answer our simple questions <br></br>to jump start 
your financial clarity journey!
                </p>
              </div>

              <a
                href="/questionnaire"
                className="w-full px-8 py-4 bg-gradient-to-r from-[#293745] to-[#082849] text-[#ffffff] font-bold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center mb-4"
              >
                Take the Assessment
              </a>

              <p className="text-xs text-[#5a5a57] text-center">
                Answer 15 questions • Get instant insights • No email required
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
