'use client';

import MobileNav from '@/components/MobileNav';
import Footer from '@/components/Footer';
import Speedometer from '@/components/Speedometer';
import Link from 'next/link';

const RiskManager3Page = () => {
  return (
    <main className="w-full bg-white">
      <MobileNav />

      {/* Hero Section */}
      <section className="pt-32 md:pt-24 pb-12 px-4 bg-gradient-to-b from-[#f9f8f6] to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#031931] mb-4">
            Risk Manager: Achiever
          </h1>
          <p className="text-lg text-[#5a5a57]">
            Outstanding! You've put comprehensive protections in place
          </p>
        </div>
      </section>

      {/* Results Content */}
      <section className="py-12 md:py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          {/* Speedometer */}
          <div className="mb-12">
            <Speedometer currentLevel={3} />
          </div>

          {/* Description */}
          <div className="bg-[transparent] border-[#e7a832] border-2 p-8 md:p-12 mb-12 backdrop-blur-sm">
            <h2 className="text-3xl md:text-4xl font-bold text-[#031931] mb-6">
              Outstanding! You've put comprehensive protections in place.
            </h2>

            <div className="space-y-4 text-[#5a5a57] leading-relaxed">
              <p className="text-base md:text-lg">
                You're well-prepared for life's uncertainties. Though a full comprehensive review may find savings or improvements.
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
                    Review and update your estate plan annually
                  </h4>
                  <p className="text-[#5a5a57]">
                    Especially beneficiary designations.
                  </p>
                </div>
              </div>

              <div className="p-6 bg-[#f9f8f6] border-2 border-[#e7a832] rounded-xl hover:shadow-lg transition-shadow duration-300 flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#e7a832] rounded-full flex items-center justify-center">
                  <span className="text-[#031931] font-bold text-lg">2</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#031931] mb-2">
                    Consider an estate freeze strategy
                  </h4>
                  <p className="text-[#5a5a57]">
                    If you have significant assets or a family business.
                  </p>
                </div>
              </div>

              <div className="p-6 bg-[#f9f8f6] border-2 border-[#e7a832] rounded-xl hover:shadow-lg transition-shadow duration-300 flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#e7a832] rounded-full flex items-center justify-center">
                  <span className="text-[#031931] font-bold text-lg">3</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#031931] mb-2">
                    Ensure your POAs are registered
                  </h4>
                  <p className="text-[#5a5a57]">
                    With financial institutions and healthcare providers.
                  </p>
                </div>
              </div>

              <div className="p-6 bg-[#f9f8f6] border-2 border-[#e7a832] rounded-xl hover:shadow-lg transition-shadow duration-300 flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#e7a832] rounded-full flex items-center justify-center">
                  <span className="text-[#031931] font-bold text-lg">4</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#031931] mb-2">
                    Review insurance coverage every 2-3 years
                  </h4>
                  <p className="text-[#5a5a57]">
                    Your needs change as your wealth grows.
                  </p>
                </div>
              </div>

              <div className="p-6 bg-[#f9f8f6] border-2 border-[#e7a832] rounded-xl hover:shadow-lg transition-shadow duration-300 flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#e7a832] rounded-full flex items-center justify-center">
                  <span className="text-[#031931] font-bold text-lg">5</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#031931] mb-2">
                    Work with an estate lawyer
                  </h4>
                  <p className="text-[#5a5a57]">
                    To minimize probate fees through joint ownership and beneficiary designations.
                  </p>
                </div>
              </div>

              <div className="p-6 bg-[#f9f8f6] border-2 border-[#e7a832] rounded-xl hover:shadow-lg transition-shadow duration-300 flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#e7a832] rounded-full flex items-center justify-center">
                  <span className="text-[#031931] font-bold text-lg">6</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#031931] mb-2">
                    Consider establishing a living trust
                  </h4>
                  <p className="text-[#5a5a57]">
                    For privacy and efficient asset transfer.
                  </p>
                </div>
              </div>

              <div className="p-6 bg-[#f9f8f6] border-2 border-[#e7a832] rounded-xl hover:shadow-lg transition-shadow duration-300 flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#e7a832] rounded-full flex items-center justify-center">
                  <span className="text-[#031931] font-bold text-lg">7</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#031931] mb-2">
                    Know about probate fees
                  </h4>
                  <p className="text-[#5a5a57]">
                    In some provinces they're 1.5% on estates over $50,000—proper planning can significantly reduce or eliminate these costs.
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

export default RiskManager3Page;
