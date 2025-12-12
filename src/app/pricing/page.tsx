'use client';

import { useState } from 'react';
import MobileNav from '@/components/MobileNav';
import Footer from '@/components/Footer';
import Link from 'next/link';

const PricingPage = () => {
  const [activeCard, setActiveCard] = useState(0);

  const plans = [
    {
      id: 1,
      name: 'Investment Referral Based',
      price: '$0',
      priceLabel: 'Free',
      description: 'Perfect for investors who want guidance on investment decisions',
      features: [
        'Investment strategy review',
        'Portfolio analysis',
        'Investment recommendations',
        'Email support',
        'Quarterly check-ins',
      ],
      cta: 'Get Started',
      badge: 'Popular',
      highlight: false,
      color: 'border-[#0b2139]',
    },
    {
      id: 2,
      name: 'Essential Plan',
      price: '$199',
      priceLabel: 'One-time',
      description: 'Comprehensive financial assessment and personalized recommendations',
      features: [
        'Complete financial assessment',
        'Debt elimination strategy',
        'Savings optimization plan',
        'Investment roadmap',
        'Retirement projection',
        'One consultation call',
      ],
      cta: 'Choose Plan',
      badge: null,
      highlight: false,
      color: 'border-[#e7a832]',
    },
    {
      id: 3,
      name: "I'm Ready!",
      price: '$399',
      priceLabel: 'One-time',
      description: 'Implementation-ready plan with ongoing support',
      features: [
        'All Essential Plan features',
        'Action plan with implementation steps',
        'Account setup assistance',
        '3 months of email support',
        'Quarterly progress reviews',
        'Goal tracking dashboard',
        'Two consultation calls',
      ],
      cta: 'Choose Plan',
      badge: 'Best Value',
      highlight: true,
      color: 'border-[#0b2139]',
    },
    {
      id: 4,
      name: 'FRP - Full Retirement Planning',
      price: '$799',
      priceLabel: 'One-time',
      description: 'Complete comprehensive retirement and wealth management plan',
      features: [
        'All "I\'m Ready!" features',
        'Advanced retirement analysis',
        'Tax optimization strategies',
        'Estate planning guidance',
        'Insurance recommendations',
        'Wealth preservation strategies',
        '12 months of email support',
        'Monthly progress reviews',
        'Unlimited consultation calls',
      ],
      cta: 'Choose Plan',
      badge: 'Premium',
      highlight: false,
      color: 'border-[#e7a832]',
    },
  ];

  const nextCard = () => {
    setActiveCard((prev) => (prev + 1) % plans.length);
  };

  const prevCard = () => {
    setActiveCard((prev) => (prev - 1 + plans.length) % plans.length);
  };

  return (
    <main className="w-full bg-white">
      <MobileNav />

      {/* Hero Section */}
      <section 
        className="relative min-h-[400px] md:min-h-[500px] pt-32 md:pt-24 pb-16 px-4 bg-cover"
        style={{
          backgroundImage: 'url(/images/bg.jpg)',
          backgroundPosition: 'center 100%',
          backgroundSize: 'cover',
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#002349]/70"></div>
        
        {/* Content */}
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              LevPlan Pricing
            </h1>
            <hr className="w-24 border-t-2 border-[#e7a832] mb-6" />
            <p className="text-lg text-white max-w-3xl">
                Choose the plan that best fits your financial goals and start your journey towards financial freedom with LevPlan.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Desktop Grid - 4 Cards */}
          <div className="hidden md:grid grid-cols-1 lg:grid-cols-4 gap-6 mb-12">
            {plans.map((plan, index) => (
              <div
                key={plan.id}
                className={`relative p-8 rounded-lg border-2 ${plan.color} shadow-lg hover:shadow-xl transition-all duration-300 ${
                  plan.highlight
                    ? 'ring-2 ring-[#e7a832] ring-offset-2 transform lg:scale-105'
                    : ''
                }`}
              >
                {/* Badge */}
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="inline-block px-4 py-1 bg-[#e7a832] text-white text-sm font-bold rounded-full">
                      {plan.badge}
                    </span>
                  </div>
                )}

                {/* Top Accent */}
                <div className={`h-1 ${plan.color.replace('border-', 'bg-')} rounded-full mb-6`}></div>

                {/* Plan Name */}
                <h3 className="text-2xl font-bold text-[#031931] mb-2">
                  {plan.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#5a5a57] mb-6 min-h-[40px]">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-6">
                  <div className="text-4xl md:text-5xl font-bold text-[#031931]">
                    {plan.price}
                  </div>
                  <p className="text-sm text-[#5a5a57] font-semibold">
                    {plan.priceLabel}
                  </p>
                </div>

                {/* CTA Button */}
                <Link href="/questionnaire" className="w-full block mb-8">
                  <button
                    className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg ${
                      plan.highlight
                        ? 'bg-gradient-to-r from-[#0b2139] to-[#0b2139] text-[#fff] hover:scale-105'
                        : 'bg-transparent border-2 border-[#031931] text-[#031931] hover:bg-[#031931] hover:text-white'
                    }`}
                  >
                    {plan.cta}
                  </button>
                </Link>

                {/* Features List */}
                <div className="space-y-3 border-t border-gray-200 pt-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-1">
                        <span className="text-[#e7a832] font-bold">✓</span>
                      </div>
                      <span className="text-sm text-[#5a5a57]">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Carousel */}
          <div className="md:hidden">
            {/* Carousel Container */}
            <div className="relative mb-8">
              <div className="overflow-hidden">
                <div
                  className="transition-transform duration-500 ease-out"
                  style={{
                    transform: `translateX(-${activeCard * 100}%)`,
                  }}
                >
                  <div className="flex">
                    {plans.map((plan) => (
                      <div key={plan.id} className="w-full flex-shrink-0 px-4">
                        <div className={`relative p-8 rounded-lg border-2 ${plan.color} shadow-lg`}>
                          {/* Badge */}
                          {plan.badge && (
                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                              <span className="inline-block px-4 py-1 bg-[#e7a832] text-white text-sm font-bold rounded-full">
                                {plan.badge}
                              </span>
                            </div>
                          )}

                          {/* Top Accent */}
                          <div className={`h-1 ${plan.color.replace('border-', 'bg-')} rounded-full mb-6`}></div>

                          {/* Plan Name */}
                          <h3 className="text-2xl font-bold text-[#031931] mb-2">
                            {plan.name}
                          </h3>

                          {/* Description */}
                          <p className="text-sm text-[#5a5a57] mb-6">
                            {plan.description}
                          </p>

                          {/* Price */}
                          <div className="mb-6">
                            <div className="text-4xl font-bold text-[#031931]">
                              {plan.price}
                            </div>
                            <p className="text-sm text-[#5a5a57] font-semibold">
                              {plan.priceLabel}
                            </p>
                          </div>

                          {/* CTA Button */}
                          <Link href="/questionnaire" className="w-full block mb-8">
                            <button className="w-full py-3 bg-gradient-to-r from-[#0b2139] to-[#0b2139] text-[#031931] font-semibold rounded-lg hover:shadow-lg transition-all duration-300">
                              {plan.cta}
                            </button>
                          </Link>

                          {/* Features List */}
                          <div className="space-y-3 border-t border-gray-200 pt-8">
                            {plan.features.map((feature, idx) => (
                              <div key={idx} className="flex items-start gap-3">
                                <div className="flex-shrink-0 mt-1">
                                  <span className="text-[#e7a832] font-bold">✓</span>
                                </div>
                                <span className="text-sm text-[#5a5a57]">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={prevCard}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 bg-[#031931] text-white p-2 rounded-full hover:bg-[#e7a832] transition-colors duration-300"
                aria-label="Previous plan"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextCard}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 bg-[#031931] text-white p-2 rounded-full hover:bg-[#e7a832] transition-colors duration-300"
                aria-label="Next plan"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center gap-2 mb-8">
              {plans.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCard(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === activeCard ? 'bg-[#e7a832] w-8' : 'bg-gray-300 w-2'
                  }`}
                  aria-label={`Go to plan ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Bottom Info */}
          <div className="mt-16 p-8 md:p-12 bg-gradient-to-r from-[#f9f8f6] to-[#f5f5f3] rounded-lg border border-[#e7a832] border-opacity-30 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-[#031931] mb-4">
              Not sure which plan is right for you?
            </h3>
            <p className="text-[#5a5a57] text-base mb-6 max-w-2xl mx-auto">
              Take our free assessment to discover your financial situation and get personalized recommendations on which plan will best serve your goals.
            </p>
            <Link href="/questionnaire">
              <button className="px-8 py-3 bg-gradient-to-r from-[#0b2139] to-[#0b2139] text-[#fff] font-semibold rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
                Take Free Assessment
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default PricingPage;
