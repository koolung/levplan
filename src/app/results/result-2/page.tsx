'use client';

import MobileNav from '@/components/MobileNav';
import Footer from '@/components/Footer';
import Speedometer from '@/components/Speedometer';
import Link from 'next/link';

const Result2Page = () => {
  return (
    <main className="w-full bg-white">
      <MobileNav />

      {/* Hero Section */}
      <section className="pt-32 md:pt-24 pb-12 px-4 bg-gradient-to-b from-[#f9f8f6] to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#031931] mb-4">
            Great Awareness! Let's Turn Knowledge into Action.
          </h1>
          <p className="text-lg text-[#5a5a57]">
            Financial Readiness Level: Developing
          </p>
        </div>
      </section>

      {/* Results Content */}
      <section className="py-12 md:py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          {/* Speedometer */}
          <Speedometer currentLevel={2} />

          {/* Result Description */}
          <div className="bg-[#c7f0d8] border-l-4 border-[#10b981] p-8 md:p-12 rounded-lg mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#031931] mb-6">
              Excellent Foundation Building!
            </h2>

            <div className="space-y-4 text-[#5a5a57] leading-relaxed">
              <p className="text-base md:text-lg">
                Well done! Your score confirms you have a solid understanding of key financial concepts, which is a huge advantage. You are clearly engaged and ready to move forward, and we are here to help you translate that knowledge into powerful, real-world results.
              </p>
              <p className="text-base md:text-lg">
                While you have the knowledge, your results suggest there are significant gaps in the execution of a comprehensive, long-term strategy. Your current path is stable, but it is not optimized for rapid wealth accumulation. The goal now is to move beyond stability and into acceleration.
              </p>
            </div>
          </div>

          {/* Action Items */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-[#031931] mb-8">
              Top 3 Action Items to Accelerate Your Wealth:
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-8 bg-gradient-to-br from-[#f9f8f6] to-[#f5f5f3] border border-[#e7a832] border-opacity-30 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#10b981] rounded-full flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#031931] mb-3">
                      Maximize Retirement Contributions
                    </h4>
                    <p className="text-[#5a5a57] text-base leading-relaxed">
                      Let's ensure you are taking full advantage of every tax-advantaged account available to you (FHSA, RRSP, TFSA).
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-gradient-to-br from-[#f9f8f6] to-[#f5f5f3] border border-[#e7a832] border-opacity-30 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#10b981] rounded-full flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#031931] mb-3">
                      Strategic Debt Management
                    </h4>
                    <p className="text-[#5a5a57] text-base leading-relaxed">
                      We'll review all outstanding debt to see if we can help free up capital for investment.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-gradient-to-br from-[#f9f8f6] to-[#f5f5f3] border border-[#e7a832] border-opacity-30 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#10b981] rounded-full flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#031931] mb-3">
                      Automate and Increase Savings
                    </h4>
                    <p className="text-[#5a5a57] text-base leading-relaxed">
                      We will implement a system where your savings and investments happen automatically before you see the money, ensuring consistent growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="p-8 md:p-12 bg-gradient-to-r from-[#f9f8f6] to-[#f5f5f3] rounded-lg border border-[#e7a832] border-opacity-30 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-[#031931] mb-4">
              Ready to Accelerate Your Progress?
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

export default Result2Page;
