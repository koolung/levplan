'use client';

import { useEffect, useRef, useState } from 'react';

const KeyAreasSection = () => {
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
              delay += 250; // 250ms delay between each card
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

  const keyAreas = [
    {
      title: 'Saving Habits',
      description: 'Understand your spending patterns and identify opportunities to increase savings. Discover how much you can realistically save each month and optimize your financial contributions.',
      color: 'from-[#6eefff]',
      borderColor: 'border-[#6eefff]',
    },
    {
      title: 'Cash Flow',
      description: 'Analyze your income and expenses to optimize your monthly budget. Get actionable recommendations on improving cash flow and allocating funds toward your financial goals.',
      color: 'from-[#e7a832]',
      borderColor: 'border-[#e7a832]',
    },
    {
      title: 'Retirement Readiness',
      description: 'Evaluate your current retirement plan and see how on-track you are. Receive personalized recommendations to ensure you\'re prepared for the retirement lifestyle you desire.',
      color: 'from-[#6eefff]',
      borderColor: 'border-[#6eefff]',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="key-areas"
      className="py-16 md:py-24 px-4 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-[#031931] mb-4">
            You Will Gain Immediate Insights
          </h2>
          <p className="text-[#5a5a57] text-lg max-w-2xl mx-auto">
            Our assessment analyzes your finances across 3 key areas to provide actionable recommendations tailored to your situation.
          </p>
        </div>

        {/* Key Areas Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {keyAreas.map((area, index) => (
            <div
              key={index}
              className={`relative p-8 md:p-10 bg-white rounded-lg border-2 ${area.borderColor} shadow-lg hover:shadow-xl transition-all duration-500 transform ${
                visibleCards[index]
                  ? 'opacity-100 translate-y-0 scale-100'
                  : 'opacity-0 translate-y-8 scale-95'
              }`}
            >
              {/* Top Accent Bar */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${area.color} to-transparent rounded-t-lg`}></div>


              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-bold text-[#031931] mb-4">
                {area.title}
              </h3>

              {/* Description */}
              <p className="text-[#5a5a57] text-base leading-relaxed mb-6">
                {area.description}
              </p>

              {/* Arrow Icon */}
              <div className="flex items-center gap-2 text-[#031931] font-semibold hover:gap-3 transition-all duration-300">
                <span>Learn More</span>
                <span className="text-xl">→</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Info Section */}
        <div className="mt-16 md:mt-20 p-8 md:p-12 bg-gradient-to-r from-[#f9f8f6] to-[#f5f5f3] rounded-lg border border-[#e7a832] border-opacity-30">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-[#031931] mb-4">
              Get Your Complete Financial Picture
            </h3>
            <p className="text-[#5a5a57] text-base leading-relaxed mb-8">
              Each of these key areas has been carefully selected to give you a comprehensive understanding of your financial health. Our assessment evaluates where you stand today and provides specific, actionable recommendations to help you reach your goals faster.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center justify-center gap-3">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-6 w-6 rounded-full bg-[#e7a832] bg-opacity-20">
                    <span className="text-[#e7a832] text-sm font-bold">✓</span>
                  </div>
                </div>
                <span className="text-[#031931] font-semibold">Data-Driven Analysis</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-6 w-6 rounded-full bg-[#e7a832] bg-opacity-20">
                    <span className="text-[#e7a832] text-sm font-bold">✓</span>
                  </div>
                </div>
                <span className="text-[#031931] font-semibold">Personalized Insights</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-6 w-6 rounded-full bg-[#e7a832] bg-opacity-20">
                    <span className="text-[#e7a832] text-sm font-bold">✓</span>
                  </div>
                </div>
                <span className="text-[#031931] font-semibold">Actionable Steps</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyAreasSection;
