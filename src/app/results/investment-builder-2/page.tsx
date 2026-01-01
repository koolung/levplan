'use client';

import MobileNav from '@/components/MobileNav';
import Footer from '@/components/Footer';
import Speedometer from '@/components/Speedometer';
import Link from 'next/link';

const InvestmentBuilder2Page = () => {
  return (
    <main className="w-full bg-white">
      <MobileNav />

      {/* Hero Section */}
      <section className="pt-32 md:pt-24 pb-12 px-4 bg-gradient-to-b from-[#f9f8f6] to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#031931] mb-4">
            Investment Builder: Accumulator
          </h1>
          <p className="text-lg text-[#5a5a57]">
            You're building momentum!
          </p>
        </div>
      </section>

      {/* Results Content */}
      <section className="py-12 md:py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          {/* Speedometer */}
          <div className="mb-12">
            <Speedometer currentLevel={2} />
          </div>

          {/* Description */}
          <div className="bg-[#fef3c7] border-l-4 border-[#f59e0b] p-8 md:p-12 rounded-lg mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#031931] mb-6">
              You're building momentum!
            </h2>

            <div className="space-y-4 text-[#5a5a57] leading-relaxed">
              <p className="text-base md:text-lg">
                You have some investments in place and are thinking about your financial future.
              </p>
            </div>
          </div>

          {/* Action Steps */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-[#031931] mb-8">
              Action Steps:
            </h3>

            <div className="space-y-6">
              <div className="p-6 bg-[#f9f8f6] border-l-4 border-[#e7a832] rounded-lg">
                <h4 className="text-xl font-bold text-[#031931] mb-2">
                  Meet with a fee-only financial planner
                </h4>
                <p className="text-[#5a5a57]">
                  To create a comprehensive retirement plan.
                </p>
              </div>

              <div className="p-6 bg-[#f9f8f6] border-l-4 border-[#e7a832] rounded-lg">
                <h4 className="text-xl font-bold text-[#031931] mb-2">
                  Calculate your retirement needs
                </h4>
                <p className="text-[#5a5a57]">
                  Typically 70-80% of pre-retirement income.
                </p>
              </div>

              <div className="p-6 bg-[#f9f8f6] border-l-4 border-[#e7a832] rounded-lg">
                <h4 className="text-xl font-bold text-[#031931] mb-2">
                  Understand the CPP and OAS benefits
                </h4>
                <p className="text-[#5a5a57]">
                  CPP at 65 averages $8,500-12,000/year.
                </p>
              </div>

              <div className="p-6 bg-[#f9f8f6] border-l-4 border-[#e7a832] rounded-lg">
                <h4 className="text-xl font-bold text-[#031931] mb-2">
                  Diversify beyond just stocks
                </h4>
                <p className="text-[#5a5a57]">
                  Consider bonds, REITs, and international exposure.
                </p>
              </div>

              <div className="p-6 bg-[#f9f8f6] border-l-4 border-[#e7a832] rounded-lg">
                <h4 className="text-xl font-bold text-[#031931] mb-2">
                  Understand your pension type
                </h4>
                <p className="text-[#5a5a57]">
                  If you have a pension, know whether it's defined benefit or defined contribution.
                </p>
              </div>

              <div className="p-6 bg-[#f9f8f6] border-l-4 border-[#e7a832] rounded-lg">
                <h4 className="text-xl font-bold text-[#031931] mb-2">
                  Review your investment fees
                </h4>
                <p className="text-[#5a5a57]">
                  High MER fees (2%+) can cost you hundreds of thousands over a career.
                </p>
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

export default InvestmentBuilder2Page;
