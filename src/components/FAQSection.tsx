'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: 'How much does a financial plan cost?',
      answer: 'We offer a FREE comprehensive financial plan consultation to get you started. This includes a full assessment of your financial situation, goals, and a personalized roadmap. No hidden fees or obligations.',
    },
    {
      question: 'How long does it take to create a financial plan?',
      answer: 'Your initial free plan takes about 1-2 weeks after we gather your financial information. We then schedule a comprehensive review session to discuss findings and recommendations.',
    },
    {
      question: 'Do I need to be wealthy to use LevPlan?',
      answer: 'Absolutely not! We work with people at all income levels and financial situations. Our personalized approach ensures recommendations are tailored to YOUR specific circumstances.',
    },
    {
      question: 'What if my financial situation changes?',
      answer: 'Your plan is designed to be flexible. We recommend annual reviews to adjust your plan based on life changes like job transitions, marriage, children, or market changes.',
    },
    {
      question: 'Are your advisors certified?',
      answer: 'Yes, all our advisors are certified financial planners with extensive industry experience and hold relevant professional designations.',
    },
    {
      question: 'How is my financial information kept secure?',
      answer: 'We use enterprise-grade encryption and comply with all financial privacy regulations including PIPEDA. Your data is never shared without your explicit consent.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-16 md:py-24 px-4 bg-gradient-to-br from-white to-[#f5f5f3]"
    >
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#031931] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-[#5a5a57] text-lg">
            Find answers to common questions about our financial planning services.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-6 bg-white hover:bg-[#f5f5f3] transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-[#031931] text-left">
                  {faq.question}
                </h3>
                <svg
                  className={`w-6 h-6 text-[var(--primary)] flex-shrink-0 ml-4 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {openIndex === index && (
                <div className="bg-[#f5f5f3] px-6 py-4">
                  <p className="text-[#5a5a57] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
