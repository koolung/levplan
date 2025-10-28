'use client';

import { useEffect, useRef, useState } from 'react';

interface Service {
  icon: string;
  title: string;
  description: string;
}

const ServicesSection = () => {
  const [visibleItems, setVisibleItems] = useState<boolean[]>(new Array(6).fill(false));
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const services: Service[] = [
    {
      icon: '�',
      title: 'Retirement Planning',
      description: 'Calculate your ideal retirement age and income with personalized strategies.',
    },
    {
      icon: '💳',
      title: 'Debt Elimination',
      description: 'Strategic debt payoff plans to free up more cash flow and build equity.',
    },
    {
      icon: '�',
      title: 'Investment Strategy',
      description: 'Tailored investment portfolios aligned with your risk tolerance and goals.',
    },
    {
      icon: '�️',
      title: 'Insurance Planning',
      description: 'Comprehensive coverage to protect your family and assets from unexpected events.',
    },
    {
      icon: '�',
      title: 'Wealth Building',
      description: 'Long-term strategies to accumulate and preserve your wealth.',
    },
    {
      icon: '👨‍�',
      title: 'Expert Guidance',
      description: 'Work with certified financial planners who understand your unique situation.',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = cardRefs.current.indexOf(entry.target as HTMLDivElement);
          if (index !== -1) {
            if (entry.isIntersecting) {
              setVisibleItems((prev) => {
                const updated = [...prev];
                updated[index] = true;
                return updated;
              });
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      className="py-16 md:py-24 px-4 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#031931] mb-4">
            Our Financial Planning Services
          </h2>
          <p className="text-[#5a5a57] text-lg max-w-2xl mx-auto">
            Comprehensive financial planning solutions to help you achieve your goals and build lasting wealth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) cardRefs.current[index] = el;
              }}
              className={`p-6 md:p-8 bg-[#f5f5f3] rounded-lg hover:shadow-lg transition-all duration-500 transform ${
                visibleItems[index]
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-[#031931] mb-3">
                {service.title}
              </h3>
              <p className="text-[#5a5a57] leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
