'use client';

import MobileNav from '@/components/MobileNav';
import Footer from '@/components/Footer';
import Speedometer from '@/components/Speedometer';
import Link from 'next/link';

const InvestmentBuilder1Page = () => {
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
            Investment Builder: Starter
          </h1>
          <p className="text-lg text-[#5a5a57]">
            You're at the foundation stage of building long-term wealth
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
              You're at the foundation stage of building long-term wealth.
            </h2>

            <div className="space-y-4 text-[#5a5a57] leading-relaxed">
              <p className="text-base md:text-lg">
                Starting now gives you the power of compound interest growth.
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
                    Open a TFSA and start with low-cost index funds
                  </h4>
                  <p className="text-[#5a5a57]">
                    Tax-free growth is your friend.
                  </p>
                </div>
              </div>

              <div className="p-6 bg-[#f9f8f6] border-2 border-[#e7a832] rounded-xl hover:shadow-lg transition-shadow duration-300 flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#e7a832] rounded-full flex items-center justify-center">
                  <span className="text-[#031931] font-bold text-lg">2</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#031931] mb-2">
                    Contribute to your employer's group RRSP
                  </h4>
                  <p className="text-[#5a5a57]">
                    Especially if they match contributions.
                  </p>
                </div>
              </div>

              <div className="p-6 bg-[#f9f8f6] border-2 border-[#e7a832] rounded-xl hover:shadow-lg transition-shadow duration-300 flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#e7a832] rounded-full flex items-center justify-center">
                  <span className="text-[#031931] font-bold text-lg">3</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#031931] mb-2">
                    Focus on paying off high-interest debt first
                  </h4>
                  <p className="text-[#5a5a57]">
                    Credit cards, payday loans before aggressive investing.
                  </p>
                </div>
              </div>

              <div className="p-6 bg-[#f9f8f6] border-2 border-[#e7a832] rounded-xl hover:shadow-lg transition-shadow duration-300 flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#e7a832] rounded-full flex items-center justify-center">
                  <span className="text-[#031931] font-bold text-lg">4</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#031931] mb-2">
                    Learn about asset allocation
                  </h4>
                  <p className="text-[#5a5a57]">
                    Younger investors can typically handle more stocks vs bonds.
                  </p>
                </div>
              </div>

              <div className="p-6 bg-[#f9f8f6] border-2 border-[#e7a832] rounded-xl hover:shadow-lg transition-shadow duration-300 flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#e7a832] rounded-full flex items-center justify-center">
                  <span className="text-[#031931] font-bold text-lg">5</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#031931] mb-2">
                    Start with small, regular contributions
                  </h4>
                  <p className="text-[#5a5a57]">
                    Consistency matters more than amount when starting out.
                  </p>
                </div>
              </div>

              <div className="p-6 bg-[#f9f8f6] border-2 border-[#e7a832] rounded-xl hover:shadow-lg transition-shadow duration-300 flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#e7a832] rounded-full flex items-center justify-center">
                  <span className="text-[#031931] font-bold text-lg">6</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#031931] mb-2">
                    Know the power of compound growth
                  </h4>
                  <p className="text-[#5a5a57]">
                    At 7% annual return, $500/month invested for 30 years grows to over $600,000.
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
            <Link href="/calendly">
              <button className="flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 bg-transparent border-2 border-[#e7a832] rounded-lg hover:shadow-lg transition-shadow duration-400 text-base md:text-lg font-semibold text-[#031931] cursor-pointer mx-auto">
                <span>Book Your Free Call</span>
                <div className="w-9 h-9 md:w-10 md:h-10 bg-[#e7a832] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 md:w-6 md:h-6"
                    fill="none"
                    stroke="#031931"
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default InvestmentBuilder1Page;
