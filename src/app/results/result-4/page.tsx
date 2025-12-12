'use client';

import MobileNav from '@/components/MobileNav';
import Footer from '@/components/Footer';
import Speedometer from '@/components/Speedometer';
import Link from 'next/link';

const Result4Page = () => {
  return (
    <main className="w-full bg-white">
      <MobileNav />

      {/* Hero Section */}
      <section className="pt-32 md:pt-24 pb-12 px-4 bg-gradient-to-b from-[#f9f8f6] to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#031931] mb-4">
            Outstanding! You Are a Financial Champion.
          </h1>
          <p className="text-lg text-[#5a5a57]">
            Financial Readiness Level: Advanced
          </p>
        </div>
      </section>

      {/* Results Content */}
      <section className="py-12 md:py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          {/* Speedometer */}
          <Speedometer currentLevel={4} />

          {/* Result Description */}
          <div className="bg-[#c7f0d8] border-l-4 border-[#0891b2] p-8 md:p-12 rounded-lg mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#031931] mb-6">
              Exceptional Work and Dedication!
            </h2>

            <div className="space-y-4 text-[#5a5a57] leading-relaxed">
              <p className="text-base md:text-lg">
                This is an outstanding result! You have demonstrated a high level of financial literacy and, more importantly, a commitment to implementing sound financial strategies. You are well on your way to achieving your retirement goals, and we are thrilled to see your success!
              </p>
              <p className="text-base md:text-lg">
                With your financial house in order, the conversation shifts from building to enhancing and protecting your accumulated wealth. Your results show that the next step is to ensure your assets are shielded from unforeseen risks and optimized for maximum tax efficiency and legacy planning.
              </p>
            </div>
          </div>

          {/* Action Items */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-[#031931] mb-8">
              Top 3 Action Items for Strategic Planning:
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-8 bg-gradient-to-br from-[#f9f8f6] to-[#f5f5f3] border border-[#e7a832] border-opacity-30 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#0891b2] rounded-full flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#031931] mb-3">
                      Advanced Risk Management
                    </h4>
                    <p className="text-[#5a5a57] text-base leading-relaxed">
                      We'll review your current estate plan (Wills, Trusts, Powers of Attorney) to minimize probate and estate taxes.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-gradient-to-br from-[#f9f8f6] to-[#f5f5f3] border border-[#e7a832] border-opacity-30 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#0891b2] rounded-full flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#031931] mb-3">
                      Income Enhancement Strategies
                    </h4>
                    <p className="text-[#5a5a57] text-base leading-relaxed">
                      Let's explore advanced strategies for generating passive income in retirement, such as Dividends, real estate investment trusts (REITs) or annuity options.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-gradient-to-br from-[#f9f8f6] to-[#f5f5f3] border border-[#e7a832] border-opacity-30 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#0891b2] rounded-full flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#031931] mb-3">
                      Tax-Loss Harvesting and Rebalancing
                    </h4>
                    <p className="text-[#5a5a57] text-base leading-relaxed">
                      We will implement a disciplined, annual process to enhance your after-tax returns.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="p-8 md:p-12 bg-gradient-to-r from-[#f9f8f6] to-[#f5f5f3] rounded-lg border border-[#e7a832] border-opacity-30 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-[#031931] mb-4">
              Ready to Protect and Enhance Your Wealth?
            </h3>
            <p className="text-[#5a5a57] text-base mb-8 max-w-2xl mx-auto leading-relaxed">
              Book a complimentary 15-Minute Discovery Call with one of our expert advisors. We'll review your results, answer your immediate questions, and show you exactly how we can help you improve your financial life and accelerate your future wealth.
            </p>
            <Link href="/">
              <button className="px-8 py-3 bg-gradient-to-r from-[#6eefff] to-[#6ae0ff] text-[#031931] font-semibold rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
                Schedule Your Discovery Call
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Result4Page;
