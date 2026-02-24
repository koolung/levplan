'use client';

import MobileNav from '@/components/MobileNav';
import Footer from '@/components/Footer';
import Speedometer from '@/components/Speedometer';
import Link from 'next/link';

const PowerSaver1Page = () => {
  return (
    <main 
      className="w-full"
      style={{
        backgroundImage: 'url(/images/result-bg.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <MobileNav />

      {/* Hero Section */}
      <section className="pt-32 md:pt-24 pb-12 px-4 bg-transparent">
        <div className="max-w-4xl mx-auto text-center bg-[#ffffff8c]  p-8 md:p-12 backdrop-blur-sm rounded-xl">
          <h1 className="text-4xl md:text-5xl font-bold text-[#031931] mb-4">
            Power Saver: Starter
          </h1>
          <p className="text-lg text-[#5a5a57]">
            You're at the beginning of your savings journey
          </p>
        </div>
      </section>

      {/* Results Content */}
      <section className="py-12 md:py-20 px-4 bg-transparent">
        <div className="max-w-4xl mx-auto" style={{
          backgroundColor: '#ffffff8c',
          backdropFilter: 'blur(21px)',
          borderRadius: '15px',
          padding: '5px 5%'
        }}>
          {/* Speedometer */}
          <div className="mb-12">
            <Speedometer currentLevel={1} />
          </div>

          {/* Description */}
          <div className="bg-[#ffffff54] border-[#e7a832] border-2 p-8 md:p-12 mb-12 backdrop-blur-sm rounded-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[#031931] mb-6">
              You're at the beginning of your savings journey.
            </h2>

            <div className="space-y-4 text-[#5a5a57] leading-relaxed">
              <p className="text-base md:text-lg">
                Building strong savings habits now will set you up for long-term success.
              </p>
            </div>
          </div>

          {/* Action Steps */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-[#031931] mb-8">
              Action Steps:
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-[#f9f8f6] border-2 border-[#e7a832] rounded-xl hover:shadow-lg transition-shadow duration-300 flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#e7a832] rounded-full flex items-center justify-center">
                  <span className="text-[#031931] font-bold text-lg">1</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#031931] mb-2">
                    Start with the "pay yourself first" principle
                  </h4>
                  <p className="text-[#5a5a57]">
                    Set up automatic transfers to a Tax-Free Savings Account (TFSA) or a high interest savings account on payday.
                  </p>
                </div>
              </div>

              <div className="p-6 bg-[#f9f8f6] border-2 border-[#e7a832] rounded-xl hover:shadow-lg transition-shadow duration-300 flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#e7a832] rounded-full flex items-center justify-center">
                  <span className="text-[#031931] font-bold text-lg">2</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#031931] mb-2">
                    Build an emergency fund of 3-6 months expenses
                  </h4>
                  <p className="text-[#5a5a57]">
                    Start small, but make it a priority.
                  </p>
                </div>
              </div>

              <div className="p-6 bg-[#f9f8f6] border-2 border-[#e7a832] rounded-xl hover:shadow-lg transition-shadow duration-300 flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#e7a832] rounded-full flex items-center justify-center">
                  <span className="text-[#031931] font-bold text-lg">3</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#031931] mb-2">
                    Track your spending for one month
                  </h4>
                  <p className="text-[#5a5a57]">
                    If you find things are tight, identify areas where you can cut back. Coffee, Netflix, Spotify, bank fees, etc. They add up.
                  </p>
                </div>
              </div>

              <div className="p-6 bg-[#f9f8f6] border-2 border-[#e7a832] rounded-xl hover:shadow-lg transition-shadow duration-300 flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#e7a832] rounded-full flex items-center justify-center">
                  <span className="text-[#031931] font-bold text-lg">4</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#031931] mb-2">
                    Consider the 50/30/20 budget rule
                  </h4>
                  <p className="text-[#5a5a57]">
                    50% needs, 30% wants, 20% savings
                  </p>
                </div>
              </div>

              <div className="p-6 bg-[#f9f8f6] border-2 border-[#e7a832] rounded-xl hover:shadow-lg transition-shadow duration-300 flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#e7a832] rounded-full flex items-center justify-center">
                  <span className="text-[#031931] font-bold text-lg">5</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#031931] mb-2">
                    Take advantage of employer RRSP matching programs
                  </h4>
                  <p className="text-[#5a5a57]">
                    It's free money
                  </p>
                </div>
              </div>

              <div className="p-6 bg-[#f9f8f6] border-2 border-[#e7a832] rounded-xl hover:shadow-lg transition-shadow duration-300 flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#e7a832] rounded-full flex items-center justify-center">
                  <span className="text-[#031931] font-bold text-lg">6</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#031931] mb-2">
                    Canada Learning Bond and Canada Education Savings Grant
                  </h4>
                  <p className="text-[#5a5a57]">
                    If you have kids, these can help with children's education savings.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 pt-12 border-t border-gray-200 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-[#031931] mb-6">
              Free Gift
            </h3>
            <p className="text-lg text-[#5a5a57] mb-8 max-w-2xl mx-auto">
              Book a 15 free minute call to discuss your results in more detail with one of our registered advisors.
            </p>
            <Link
              href="/calendly"
              className="inline-block px-8 py-4 bg-gradient-to-r from-[#293745] to-[#082849] text-white font-bold text-lg hover:shadow-lg transition-all duration-300 rounded-lg"
            >
              Book Your Free Call
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default PowerSaver1Page;
