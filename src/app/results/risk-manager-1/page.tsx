'use client';

import MobileNav from '@/components/MobileNav';
import Footer from '@/components/Footer';
import Speedometer from '@/components/Speedometer';
import Link from 'next/link';

const RiskManager1Page = () => {
  return (
    <main className="w-full bg-white">
      <MobileNav />

      {/* Hero Section */}
      <section className="pt-32 md:pt-24 pb-12 px-4 bg-gradient-to-b from-[#f9f8f6] to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#031931] mb-4">
            Risk Manager: Starter
          </h1>
          <p className="text-lg text-[#5a5a57]">
            Your risk management foundation needs attention
          </p>
        </div>
      </section>

      {/* Results Content */}
      <section className="py-12 md:py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          {/* Speedometer */}
          <div className="mb-12">
            <Speedometer currentLevel={1} />
          </div>

          {/* Description */}
          <div className="bg-[#fef3c7] border-l-4 border-[#f59e0b] p-8 md:p-12 rounded-lg mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#031931] mb-6">
              Your risk management foundation needs attention.
            </h2>

            <div className="space-y-4 text-[#5a5a57] leading-relaxed">
              <p className="text-base md:text-lg">
                Protecting yourself and your family should be a priority.
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
                  Create a basic will immediately
                </h4>
                <p className="text-[#5a5a57]">
                  Even a simple holographic (on paper) will is better than none.
                </p>
              </div>

              <div className="p-6 bg-[#f9f8f6] border-l-4 border-[#e7a832] rounded-lg">
                <h4 className="text-xl font-bold text-[#031931] mb-2">
                  Get disability insurance quotes
                </h4>
                <p className="text-[#5a5a57]">
                  You're more likely to become disabled than die before retirement (30% vs 3%).
                </p>
              </div>

              <div className="p-6 bg-[#f9f8f6] border-l-4 border-[#e7a832] rounded-lg">
                <h4 className="text-xl font-bold text-[#031931] mb-2">
                  Consider term life insurance
                </h4>
                <p className="text-[#5a5a57]">
                  If you have dependents, it's affordable and provides crucial protection. Get an insurance needs analysis to find out recommended amounts.
                </p>
              </div>

              <div className="p-6 bg-[#f9f8f6] border-l-4 border-[#e7a832] rounded-lg">
                <h4 className="text-xl font-bold text-[#031931] mb-2">
                  Designate beneficiaries
                </h4>
                <p className="text-[#5a5a57]">
                  On all registered accounts (RRSP, TFSA, RESP).
                </p>
              </div>

              <div className="p-6 bg-[#f9f8f6] border-l-4 border-[#e7a832] rounded-lg">
                <h4 className="text-xl font-bold text-[#031931] mb-2">
                  Review employer coverage
                </h4>
                <p className="text-[#5a5a57]">
                  What coverage your employer provides and identify gaps.
                </p>
              </div>

              <div className="p-6 bg-[#f9f8f6] border-l-4 border-[#e7a832] rounded-lg">
                <h4 className="text-xl font-bold text-[#031931] mb-2">
                  Know your provincial laws
                </h4>
                <p className="text-[#5a5a57]">
                  In Canada, dying intestate (without a will) means provincial laws determine asset distribution, which may not match your wishes.
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

export default RiskManager1Page;
