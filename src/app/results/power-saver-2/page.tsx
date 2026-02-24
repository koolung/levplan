'use client';

import MobileNav from '@/components/MobileNav';
import Footer from '@/components/Footer';
import Speedometer from '@/components/Speedometer';
import Link from 'next/link';

const PowerSaver2Page = () => {
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
            Power Saver: Accumulator
          </h1>
          <p className="text-lg text-[#5a5a57]">
            You're making steady progress with your savings
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
            <Speedometer currentLevel={2} />
          </div>

          {/* Description */}
          <div className="bg-[#ffffff54] border-[#e7a832] border-2 p-8 md:p-12 mb-12 backdrop-blur-sm rounded-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[#031931] mb-6">
              You're making progress!
            </h2>

            <div className="space-y-4 text-[#5a5a57] leading-relaxed">
              <p className="text-base md:text-lg">
                You have some good savings habits in place, but there's room to strengthen your financial foundation.
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
                    Maximize your TFSA contributions
                  </h4>
                  <p className="text-[#5a5a57]">
                    $7,000 annual limit for 2024, plus any unused room.
                  </p>
                </div>
              </div>

              <div className="p-6 bg-[#f9f8f6] border-2 border-[#e7a832] rounded-xl hover:shadow-lg transition-shadow duration-300 flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#e7a832] rounded-full flex items-center justify-center">
                  <span className="text-[#031931] font-bold text-lg">2</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#031931] mb-2">
                    Prioritize paying off high-interest debt
                  </h4>
                  <p className="text-[#5a5a57]">
                    If you have consumer debt, prioritize paying off high-interest loans while maintaining minimum savings.
                  </p>
                </div>
              </div>

              <div className="p-6 bg-[#f9f8f6] border-2 border-[#e7a832] rounded-xl hover:shadow-lg transition-shadow duration-300 flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#e7a832] rounded-full flex items-center justify-center">
                  <span className="text-[#031931] font-bold text-lg">3</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#031931] mb-2">
                    Review your budget quarterly
                  </h4>
                  <p className="text-[#5a5a57]">
                    Adjust as income or expenses change.
                  </p>
                </div>
              </div>

              <div className="p-6 bg-[#f9f8f6] border-2 border-[#e7a832] rounded-xl hover:shadow-lg transition-shadow duration-300 flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#e7a832] rounded-full flex items-center justify-center">
                  <span className="text-[#031931] font-bold text-lg">4</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#031931] mb-2">
                    Consider debt consolidation
                  </h4>
                  <p className="text-[#5a5a57]">
                    If you're carrying multiple loans, consolidate them to reduce interest costs.
                  </p>
                </div>
              </div>

              <div className="p-6 bg-[#f9f8f6] border-2 border-[#e7a832] rounded-xl hover:shadow-lg transition-shadow duration-300 flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#e7a832] rounded-full flex items-center justify-center">
                  <span className="text-[#031931] font-bold text-lg">5</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#031931] mb-2">
                    Automate your savings
                  </h4>
                  <p className="text-[#5a5a57]">
                    Even small amounts add up over time through consistent, automated contributions.
                  </p>
                </div>
              </div>

              <div className="p-6 bg-[#f9f8f6] border-2 border-[#e7a832] rounded-xl hover:shadow-lg transition-shadow duration-300 flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#e7a832] rounded-full flex items-center justify-center">
                  <span className="text-[#031931] font-bold text-lg">6</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#031931] mb-2">
                    Tax & Planning Insight
                  </h4>
                  <p className="text-[#5a5a57]">
                    Use the CRA My Account to track your TFSA contribution room and avoid over-contribution penalties. And never trade stocks in a TFSA.
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

export default PowerSaver2Page;
