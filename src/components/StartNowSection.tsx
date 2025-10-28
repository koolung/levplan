'use client';

import Link from 'next/link';

const StartNowSection = () => {
  return (
    <section
      id="start-now"
      className="py-16 md:py-24 px-4 bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)] text-white"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
          Ready to Take Control of Your Financial Future?
        </h2>
        <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto">
          Get your personalized financial plan absolutely free. No credit card required. No hidden fees. Just honest, expert guidance tailored to your goals.
        </p>
        <Link href="/questionnaire">
          <button className="px-8 md:px-12 py-4 md:py-5 bg-white text-[var(--primary)] font-bold text-lg md:text-xl rounded-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
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
