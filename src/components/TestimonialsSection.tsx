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
  const [expandedMobile, setExpandedMobile] = useState(false);

  const testimonials: Testimonial[] = [
    {
      name: 'G. & D. Mallet',
      role: 'Long-time Clients',
      content: 'We are extremely satisfied with our experience with Robert, who has been our financial advisor for nearly 15 years. His personalized and friendly approach immediately put us at ease. He truly takes the time to listen to our needs, understand our situation, and tailor his advice accordingly. Thanks to his expertise and thoughtful recommendations, we have been able to make well-considered and appropriate financial decisions. His support goes far beyond simple advice — he is a true partner in managing our finances. Always available and always attentive, Robert has made topics that can sometimes seem complex much more accessible.',
      rating: 5,
    },
    {
      name: 'Christina & Rick M.',
      role: 'Investment Clients',
      content: 'Robert Levesque has been our financial advisor for a number of years. We have great faith in all the decisions that he has made in our investments and we have reaped the benefits of his wise decisions in all our monetary affairs. Robert displays the essence of a true professional always putting his clients interests and concerns first and foremost, and always responding to any questions in a prompt, efficient and personal manner. We are very fortunate to have acquired Robert Levesque as our advisor.',
      rating: 5,
    },
    {
      name: 'A. Roy',
      role: 'Long-term Client',
      content: 'I have been working with Robert for over fifteen years and multiple career changes. I am consistently impressed by his ability to analyze my current financial situation, and make recommendations for changes that are always in my best interest. I always feel like Robert puts my needs first and I have never hesitated to recommend him to family members and friends. Your financial future couldn\'t be in better hands.',
      rating: 5,
    },
    {
      name: 'Nev & Janice G.',
      role: 'Retirement Planning Clients',
      content: 'We have known Robert Levesque for approximately 15 years as our investment consultant/advisor. He has been there for us in our retirement years to help us focus on a maintenance plan for our investment funds. He has provided us with quality service in determining our financial future. We trust him implicitly! He keeps us updated and helps us solve any problems or issues that arise.',
      rating: 5,
    },
    {
      name: 'Gino P.',
      role: 'Satisfied Client',
      content: 'Robert is a very genuine person, he makes all his choices based on helping his clients. I trust and support his business. I actually like paying less fees and making more!',
      rating: 5,
    },
    {
      name: 'Diane and Steve S.',
      role: 'Long-time Partners',
      content: 'We have been Robert\'s clients for over 15 years, even before he started his own company (LevPlan). We were so pleased with his service, we moved our business without question, over to his new company. Robert has offered us sound advice and helped us with our transition from working full time through to retirement. He is available whenever you need him. You do not have to wait days or weeks for a response, like other companies.',
      rating: 5,
    },
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    setExpandedMobile(false);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    setExpandedMobile(false);
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
              <div className="overflow-hidden transition-all duration-300 ease-in-out">
                <p className={`text-lg md:text-xl text-[#ffffff] font-semibold mb-6 italic transition-all duration-300 ease-in-out ${
                  expandedMobile ? 'max-h-none' : 'md:max-h-none max-h-24'
                }`}>
                  "{testimonials[activeIndex].content}"
                </p>
              </div>

              {/* Show More/Less Button - Mobile Only */}
              <button
                onClick={() => setExpandedMobile(!expandedMobile)}
                className="md:hidden text-[#e7a832] font-semibold text-sm mb-4 hover:opacity-80 transition-opacity duration-200"
              >
                {expandedMobile ? 'Show Less' : 'Show More'}
              </button>

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
              onClick={() => {
                setActiveIndex(index);
                setExpandedMobile(false);
              }}
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
