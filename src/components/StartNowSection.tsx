'use client';

import Link from 'next/link';

const StartNowSection = () => {
  return (
    <section
      id="start-now"
      className="py-16 md:py-24 px-4 bg-[var(--primary)] text-white"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium mb-6">
          Ready to Take Control of Your Financial Future?
        </h2>
        <hr className="w-24 border-t-4 border-[#e7a832] mx-auto mb-6" />
        <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto">
          Get your personalized financial plan absolutely free. No credit card required. No hidden fees. Just honest, expert guidance tailored to your goals.
        </p>
        <Link href="/questionnaire">
          <button className="px-8 md:px-12 py-4 md:py-5 bg-transparent border-2 border-[#e7a832] text-[#e7a832] font-bold text-lg md:text-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
            Get Your Free Plan Today
          </button>
        </Link>
        <p className="mt-6 text-sm text-white/75">
          Join hundreds of Canadians building their wealth with LevPlan
        </p>
      </div>
    </section>
  );
};

export default StartNowSection;
