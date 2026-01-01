'use client';

import MobileNav from '@/components/MobileNav';
import Footer from '@/components/Footer';
import Speedometer from '@/components/Speedometer';
import Link from 'next/link';

const RiskManager2Page = () => {
  return (
    <main className="w-full bg-white">
      <MobileNav />

      {/* Hero Section */}
      <section className="pt-32 md:pt-24 pb-12 px-4 bg-gradient-to-b from-[#f9f8f6] to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#031931] mb-4">
            Risk Manager: Accumulator
          </h1>
          <p className="text-lg text-[#5a5a57]">
            Congrats! You're taking steps to protect yourself
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
              Congrats! You're taking steps to protect yourself
            </h2>

            <div className="space-y-4 text-[#5a5a57] leading-relaxed">
              <p className="text-base md:text-lg">
                But there are still important gaps to address for comprehensive protection.
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
                  Create both financial and healthcare POAs
                </h4>
                <p className="text-[#5a5a57]">
                  If you have a will but no POA, create both—essential if you become incapacitated.
                </p>
              </div>

              <div className="p-6 bg-[#f9f8f6] border-l-4 border-[#e7a832] rounded-lg">
                <h4 className="text-xl font-bold text-[#031931] mb-2">
                  Review your disability coverage
                </h4>
                <p className="text-[#5a5a57]">
                  Does it cover 60-70% of your income? Is it sufficient for your lifestyle?
                </p>
              </div>

              <div className="p-6 bg-[#f9f8f6] border-l-4 border-[#e7a832] rounded-lg">
                <h4 className="text-xl font-bold text-[#031931] mb-2">
                  Review and/or update your will
                </h4>
                <p className="text-[#5a5a57]">
                  Every 3-5 years or after major life events (marriage, children, divorce).
                </p>
              </div>

              <div className="p-6 bg-[#f9f8f6] border-l-4 border-[#e7a832] rounded-lg">
                <h4 className="text-xl font-bold text-[#031931] mb-2">
                  Consider critical illness insurance
                </h4>
                <p className="text-[#5a5a57]">
                  Especially if you have family history of serious health conditions.
                </p>
              </div>

              <div className="p-6 bg-[#f9f8f6] border-l-4 border-[#e7a832] rounded-lg">
                <h4 className="text-xl font-bold text-[#031931] mb-2">
                  Keep important documents organized
                </h4>
                <p className="text-[#5a5a57]">
                  Physical copies in a fireproof safe and digital copies in secure cloud storage.
                </p>
              </div>

              <div className="p-6 bg-[#f9f8f6] border-l-4 border-[#e7a832] rounded-lg">
                <h4 className="text-xl font-bold text-[#031931] mb-2">
                  Know about CPP disability
                </h4>
                <p className="text-[#5a5a57]">
                  CPP disability benefits only replace about 25% of income—private disability insurance fills the gap.
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

export default RiskManager2Page;
