'use client';

import { useEffect, useRef, useState } from 'react';

interface RoadmapStep {
  number: number;
  title: string;
  description: string;
  icon: string;
  details: string[];
}

const RoadmapSection = () => {
  const [visibleSteps, setVisibleSteps] = useState<boolean[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  const steps: RoadmapStep[] = [
    {
      number: 1,
      title: 'Retirement Age & Income',
      icon: '🎂',
      description: 'Determine your ideal retirement age and the income you\'ll need to maintain your lifestyle.',
      details: [
        'Calculate retirement needs based on current lifestyle',
        'Project inflation impact on purchasing power',
        'Estimate CPP/OAS benefits',
        'Create income replacement strategy',
      ],
    },
    {
      number: 2,
      title: 'Debt Elimination Plan',
      icon: '📉',
      description: 'Strategic plan to eliminate debt and optimize your cash flow.',
      details: [
        'Prioritize high-interest debt',
        'Create payoff timeline',
        'Reduce financial stress',
        'Improve credit score',
      ],
    },
    {
      number: 3,
      title: 'Investment Strategy',
      icon: '📈',
      description: 'Develop a diversified investment portfolio aligned with your risk tolerance.',
      details: [
        'Asset allocation strategy',
        'Risk assessment',
        'Tax-efficient investing',
        'Rebalancing schedule',
      ],
    },
    {
      number: 4,
      title: 'Insurance Protection',
      icon: '🛡️',
      description: 'Ensure adequate coverage to protect your family and financial future.',
      details: [
        'Life insurance needs analysis',
        'Disability insurance',
        'Critical illness coverage',
        'Long-term care planning',
      ],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Stagger visibility
            steps.forEach((_, index) => {
              setTimeout(() => {
                setVisibleSteps((prev) => {
                  const updated = [...prev];
                  updated[index] = true;
                  return updated;
                });
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="roadmap"
      ref={sectionRef}
      className="py-16 md:py-24 px-4 bg-gradient-to-br from-[#f5f5f3] to-white"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#031931] mb-4">
            Your Financial Roadmap
          </h2>
          <p className="text-[#5a5a57] text-lg max-w-2xl mx-auto">
            A sequential path to financial freedom. Here's what you'll get from your free financial plan.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="space-y-8 md:space-y-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`transition-all duration-700 transform ${
                visibleSteps[index]
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="flex gap-4 md:gap-8">
                {/* Left side - Icon and connector */}
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-[var(--primary)] to-[var(--primary-light)] rounded-full flex items-center justify-center text-4xl md:text-5xl shadow-lg">
                    {step.icon}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-1 h-16 md:h-20 bg-gradient-to-b from-[var(--primary)] to-transparent mt-2"></div>
                  )}
                </div>

                {/* Right side - Content */}
                <div className="flex-1 pt-2 md:pt-4">
                  <div className="bg-white rounded-lg p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex flex-col items-start gap-2 mb-3">
                      <span className="text-xs font-bold text-[#5a5a57] uppercase tracking-wide">
                        Step {step.number}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-bold text-[#031931]">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-[#5a5a57] mb-4 text-base md:text-lg">
                      {step.description}
                    </p>
                    <ul className="space-y-2">
                      {step.details.map((detail, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-[#5a5a57]"
                        >
                          <span className="text-[var(--foreground)] font-bold mt-1">✓</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
