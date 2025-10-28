'use client';

import { useEffect, useRef, useState } from 'react';

interface Portfolio {
  title: string;
  category: string;
  description: string;
}

const PortfolioSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const portfolioItems: Portfolio[] = [
    {
      title: 'E-Commerce Platform',
      category: 'Web Development',
      description: 'A complete e-commerce solution with payment integration.',
    },
    {
      title: 'SaaS Dashboard',
      category: 'UI/UX Design',
      description: 'Modern analytics dashboard for business intelligence.',
    },
    {
      title: 'Mobile App',
      category: 'Mobile Development',
      description: 'Cross-platform mobile application for iOS and Android.',
    },
    {
      title: 'Corporate Website',
      category: 'Web Development',
      description: 'Professional website for Fortune 500 company.',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
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
      id="portfolio"
      ref={sectionRef}
      className="py-16 md:py-24 px-4 bg-gradient-to-br from-[#f5f5f3] to-white"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#031931] mb-4">
            Recent Projects
          </h2>
          <p className="text-[#5a5a57] text-lg max-w-2xl mx-auto">
            Check out some of our latest and most successful projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-lg bg-white border border-[#babbb7] hover:shadow-xl transition-all duration-500 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : '0ms',
              }}
            >
              {/* Placeholder image background */}
              <div className="w-full h-64 bg-gradient-to-br from-[#e7a832] to-[#d49226] relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl opacity-20">📦</span>
                </div>
              </div>

              {/* Content overlay */}
              <div className="p-6 md:p-8">
                <p className="text-[#e7a832] text-sm font-semibold mb-2">
                  {item.category}
                </p>
                <h3 className="text-xl md:text-2xl font-bold text-[#031931] mb-3">
                  {item.title}
                </h3>
                <p className="text-[#5a5a57] mb-4">{item.description}</p>
                <button className="inline-block px-4 py-2 text-[#e7a832] font-semibold hover:text-[#d49226] transition-colors duration-200">
                  View Case Study →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
