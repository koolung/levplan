'use client';

import MobileNav from '@/components/MobileNav';
import Footer from '@/components/Footer';
import Speedometer from '@/components/Speedometer';
import Link from 'next/link';

const Result5Page = () => {
  return (
    <main className="w-full bg-white">
      <MobileNav />

      {/* Hero Section */}
      <section className="pt-32 md:pt-24 pb-12 px-4 bg-gradient-to-b from-[#f9f8f6] to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#031931] mb-4">
            Exceptional! Welcome to the Master Planner Level.
          </h1>
          <p className="text-lg text-[#5a5a57]">
            Financial Readiness Level: Master
          </p>
        </div>
      </section>

      {/* Results Content */}
      <section className="py-12 md:py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          {/* Speedometer */}
          <Speedometer currentLevel={5} />

          {/* Result Description */}
          <div className="bg-[#fef3c7] border-l-4 border-[#7c3aed] p-8 md:p-12 rounded-lg mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#031931] mb-6">
              You've Achieved Master Status!
            </h2>

            <div className="space-y-4 text-[#5a5a57] leading-relaxed">
              <p className="text-base md:text-lg">
                Exceptional! Your score places you in the very top tier. You have not only mastered the fundamentals but are actively managing your wealth with sophistication and foresight. Congratulations on this incredible achievement!
              </p>
              <p className="text-base md:text-lg">
                Your financial success allows us to move beyond conventional planning and focus on the great next stages of life. While your plan is robust, the next level involves ensuring your wealth serves your deepest values, legacy, and philanthropic goals (if applicable). We will focus on advanced strategies that only the most prepared clients can implement.
              </p>
            </div>
          </div>

          {/* Action Items */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-[#031931] mb-8">
              Top 3 Action Items for Legacy Planning:
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-8 bg-gradient-to-br from-[#f9f8f6] to-[#f5f5f3] border border-[#e7a832] border-opacity-30 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#7c3aed] rounded-full flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#031931] mb-3">
                      Generational Wealth Transfer
                    </h4>
                    <p className="text-[#5a5a57] text-base leading-relaxed">
                      We'll discuss advanced trust structures and gifting strategies to efficiently transfer wealth to the next generation while minimizing tax burdens.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-gradient-to-br from-[#f9f8f6] to-[#f5f5f3] border border-[#e7a832] border-opacity-30 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#7c3aed] rounded-full flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#031931] mb-3">
                      Philanthropic Strategy
                    </h4>
                    <p className="text-[#5a5a57] text-base leading-relaxed">
                      Let's formalize your charitable giving to maximize tax benefits and social impact.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-gradient-to-br from-[#f9f8f6] to-[#f5f5f3] border border-[#e7a832] border-opacity-30 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#7c3aed] rounded-full flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#031931] mb-3">
                      Retirement Lifestyle Modeling
                    </h4>
                    <p className="text-[#5a5a57] text-base leading-relaxed">
                      We will run sophisticated scenarios to model various retirement lifestyles, ensuring your capital can comfortably support your most ambitious goals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="p-8 md:p-12 bg-gradient-to-r from-[#f9f8f6] to-[#f5f5f3] rounded-lg border border-[#e7a832] border-opacity-30 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-[#031931] mb-4">
              Ready for Master-Level Partnership?
            </h3>
            <p className="text-[#5a5a57] text-base mb-8 max-w-2xl mx-auto leading-relaxed">
              Book a complimentary 15-Minute Discovery Call with one of our expert advisors. We'll review your results, answer your immediate questions, and show you exactly how we can help you improve your financial life and accelerate and protect your future wealth even further.
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

export default Result5Page;
