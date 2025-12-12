'use client';

import MobileNav from '@/components/MobileNav';
import Footer from '@/components/Footer';
import Speedometer from '@/components/Speedometer';
import Link from 'next/link';

const Result1Page = () => {
  return (
    <main className="w-full bg-white">
      <MobileNav />

      {/* Hero Section */}
      <section className="pt-32 md:pt-24 pb-12 px-4 bg-gradient-to-b from-[#f9f8f6] to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#031931] mb-4">
            Fantastic Start! Your Financial Journey Begins Now.
          </h1>
          <p className="text-lg text-[#5a5a57]">
            Financial Readiness Level: Beginner
          </p>
        </div>
      </section>

      {/* Results Content */}
      <section className="py-12 md:py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          {/* Speedometer */}
          <Speedometer currentLevel={1} />

          {/* Result Description */}
          <div className="bg-[#fef3c7] border-l-4 border-[#f59e0b] p-8 md:p-12 rounded-lg mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#031931] mb-6">
              Congratulations on Your Assessment!
            </h2>

            <div className="space-y-4 text-[#5a5a57] leading-relaxed">
              <p className="text-base md:text-lg">
                Congratulations on taking the first, most important step: assessing your financial readiness! Your score shows you are ready to learn and take action, which is the most critical ingredient for success. We are genuinely excited to help you build a powerful financial future.
              </p>
              <p className="text-base md:text-lg">
                Your results indicate that we have a wonderful opportunity to establish a strong, secure foundation. Don't worry about the score; think of it as a clear, personalized roadmap to a better financial life. Our immediate focus will be on establishing the core pillars of stability, which will dramatically accelerate your future wealth.
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
                  <div className="flex-shrink-0 w-10 h-10 bg-[#f59e0b] rounded-full flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#031931] mb-3">
                      Establish a Budget
                    </h4>
                    <p className="text-[#5a5a57] text-base leading-relaxed">
                      Let's gain absolute clarity on your cash flow. This is the single most powerful step you can take right now. We can help with this.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-gradient-to-br from-[#f9f8f6] to-[#f5f5f3] border border-[#e7a832] border-opacity-30 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#f59e0b] rounded-full flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#031931] mb-3">
                      Build an Emergency Fund
                    </h4>
                    <p className="text-[#5a5a57] text-base leading-relaxed">
                      Start saving a small, dedicated amount to cover unexpected expenses. This fund is your first line of defence.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-gradient-to-br from-[#f9f8f6] to-[#f5f5f3] border border-[#e7a832] border-opacity-30 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#f59e0b] rounded-full flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#031931] mb-3">
                      Tackle High-Interest Debt
                    </h4>
                    <p className="text-[#5a5a57] text-base leading-relaxed">
                      We'll create a focused plan to eliminate costly debt, freeing up funds to invest in yourself.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="p-8 md:p-12 bg-gradient-to-r from-[#f9f8f6] to-[#f5f5f3] rounded-lg border border-[#e7a832] border-opacity-30 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-[#031931] mb-4">
              Ready to Take the Next Step?
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

export default Result1Page;
