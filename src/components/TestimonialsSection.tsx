'use client';

import { useState } from 'react';

interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
}

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      name: 'Sarah Johnson',
      role: 'Small Business Owner',
      content: 'LevPlan helped me create a comprehensive retirement plan that gave me peace of mind. Their personalized approach made all the difference.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Freelance Consultant',
      content: 'The debt elimination strategy was eye-opening. I never realized how much I could save by following their plan.',
      rating: 5,
    },
    {
      name: 'Emma Williams',
      role: 'Corporate Professional',
      content: 'Working with LevPlan advisors was professional and straightforward. They answered all my questions and made complex topics easy to understand.',
      rating: 5,
    },
    {
      name: 'David Rodriguez',
      role: 'Entrepreneur',
      content: 'Their investment strategy has performed beyond my expectations. I trust their expertise and guidance completely.',
      rating: 5,
    },
    {
      name: 'Lisa Anderson',
      role: 'Healthcare Professional',
      content: 'The insurance planning recommendations were exactly what my family needed. Highly recommend LevPlan to anyone serious about their financial future.',
      rating: 5,
    },
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="testimonials"
      className="py-16 md:py-24 px-4 bg-white"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-medium text-[#031931] mb-4">
            What Our Clients Say
          </h2>
          <hr className="w-24 border-t-4 border-[#e7a832] mx-auto mb-6" />
          <p className="text-[#5a5a57] text-lg">
            Real stories from real people who transformed their financial lives with LevPlan.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative flex items-center justify-between gap-4 md:gap-8">
          {/* Left Navigation Button */}
          <button
            onClick={handlePrev}
            className="flex-shrink-0 p-2 md:p-3 text-[var(--primary)] hover:opacity-80 transition-opacity duration-300 hover:scale-110"
            aria-label="Previous testimonial"
          >
            <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Testimonial Card */}
          <div className="flex-1 bg-[#002349] p-8 md:p-12">
            <div className="transition-all duration-500">

              {/* Quote */}
              <p className="text-lg md:text-xl text-[#ffffff] font-semibold mb-6 italic">
                "{testimonials[activeIndex].content}"
              </p>

              {/* Author */}
              <div>
                <p className="font-bold text-[#e7a832]">
                  {testimonials[activeIndex].name}
                </p>
                <p className="text-[#babbb7]">
                  {testimonials[activeIndex].role}
                </p>
              </div>
            </div>
          </div>

          {/* Right Navigation Button */}
          <button
            onClick={handleNext}
            className="flex-shrink-0 p-2 md:p-3 text-[var(--primary)] hover:opacity-80 transition-opacity duration-300 hover:scale-110"
            aria-label="Next testimonial"
          >
            <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots */}
        <div className="flex gap-2 justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? 'bg-[var(--primary)] w-8'
                  : 'bg-[#babbb7] w-2'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
