'use client';

import MobileNav from './MobileNav';
import Footer from './Footer';
import Link from 'next/link';

interface ResultsPageProps {
  score: number;
  maxScore: number;
}

const FinancialGauge = ({ score, maxScore }: { score: number; maxScore: number }) => {
  const percentage = (score / maxScore) * 100;
  const rotation = (percentage / 100) * 180 - 90; // -90 to 90 degrees for semicircle

  return (
    <div className="flex flex-col items-center justify-center my-12">
      <div className="relative w-64 h-32 flex items-center justify-center">
        {/* Gauge background */}
        <svg className="absolute w-64 h-32" viewBox="0 0 300 150">
          {/* Gauge arc background */}
          <path
            d="M 30 150 A 120 120 0 0 1 270 150"
            fill="none"
            stroke="#e0e0e0"
            strokeWidth="20"
            strokeLinecap="round"
          />

          {/* Green arc (0-33%) */}
          <path
            d="M 30 150 A 120 120 0 0 1 120 50"
            fill="none"
            stroke="#4ade80"
            strokeWidth="20"
            strokeLinecap="round"
          />

          {/* Yellow arc (33-66%) */}
          <path
            d="M 120 50 A 120 120 0 0 1 210 80"
            fill="none"
            stroke="#facc15"
            strokeWidth="20"
            strokeLinecap="round"
          />

          {/* Red arc (66-100%) */}
          <path
            d="M 210 80 A 120 120 0 0 1 270 150"
            fill="none"
            stroke="#ef4444"
            strokeWidth="20"
            strokeLinecap="round"
          />

          {/* Score labels */}
          <text x="30" y="170" textAnchor="middle" className="text-xs font-semibold" fill="#666">
            0
          </text>
          <text x="150" y="20" textAnchor="middle" className="text-xs font-semibold" fill="#666">
            {maxScore}
          </text>
          <text x="270" y="170" textAnchor="middle" className="text-xs font-semibold" fill="#666">
            {maxScore}
          </text>
        </svg>

        {/* Needle */}
        <div
          className="absolute w-1 h-20 bg-[#031931] rounded-full origin-bottom transition-transform duration-1000 ease-out"
          style={{
            transform: `rotate(${rotation}deg)`,
            bottom: '0%',
          }}
        />

        {/* Center circle */}
        <div className="absolute bottom-0 w-4 h-4 bg-[#031931] rounded-full" />
      </div>

      {/* Score display */}
      <div className="text-center mt-8">
        <div className="text-5xl font-bold text-[#031931] mb-2">
          {score}/{maxScore}
        </div>
        <div className="text-lg text-[#5a5a57] font-semibold">
          {percentage.toFixed(0)}% Financial Readiness
        </div>
      </div>
    </div>
  );
};

const ResultsPage = ({ score, maxScore }: ResultsPageProps) => {
  const percentage = (score / maxScore) * 100;

  let resultLevel = 1;
  if (percentage >= 80) resultLevel = 5;
  else if (percentage >= 60) resultLevel = 4;
  else if (percentage >= 40) resultLevel = 3;
  else if (percentage >= 20) resultLevel = 2;
  else resultLevel = 1;

  const results = {
    1: {
      title: 'Fantastic Start! Your Financial Journey Begins Now.',
      subtitle: 'Financial Readiness Level: Beginner',
      color: 'bg-[#fef3c7]',
      borderColor: 'border-[#f59e0b]',
      badgeColor: 'bg-[#f59e0b]',
      description:
        'Congratulations on taking the first, most important step: assessing your financial readiness! Your score shows you are ready to learn and take action, which is the most critical ingredient for success. We are genuinely excited to help you build a powerful financial future.\n\nYour results indicate that we have a wonderful opportunity to establish a strong, secure foundation. Don\'t worry about the score; think of it as a clear, personalized roadmap to a better financial life. Our immediate focus will be on establishing the core pillars of stability, which will dramatically accelerate your future wealth.',
      actionItems: [
        {
          title: 'Establish a Budget',
          description:
            'Let\'s gain absolute clarity on your cash flow. This is the single most powerful step you can take right now. We can help with this.',
        },
        {
          title: 'Build an Emergency Fund',
          description:
            'Start saving a small, dedicated amount to cover unexpected expenses. This fund is your first line of defence.',
        },
        {
          title: 'Tackle High-Interest Debt',
          description:
            'We\'ll create a focused plan to eliminate costly debt, freeing up funds to invest in yourself.',
        },
      ],
    },
    2: {
      title: 'Great Awareness! Let\'s Turn Knowledge into Action.',
      subtitle: 'Financial Readiness Level: Developing',
      color: 'bg-[#c7f0d8]',
      borderColor: 'border-[#10b981]',
      badgeColor: 'bg-[#10b981]',
      description:
        'Well done! Your score confirms you have a solid understanding of key financial concepts, which is a huge advantage. You are clearly engaged and ready to move forward, and we are here to help you translate that knowledge into powerful, real-world results.\n\nWhile you have the knowledge, your results suggest there are significant gaps in the execution of a comprehensive, long-term strategy. Your current path is stable, but it is not optimized for rapid wealth accumulation. The goal now is to move beyond stability and into acceleration.',
      actionItems: [
        {
          title: 'Maximize Retirement Contributions',
          description:
            'Let\'s ensure you are taking full advantage of every tax-advantaged account available to you (FHSA, RRSP, TFSA).',
        },
        {
          title: 'Strategic Debt Management',
          description:
            'We\'ll review all outstanding debt to see if we can help free up capital for investment.',
        },
        {
          title: 'Automate and Increase Savings',
          description:
            'We will implement a system where your savings and investments happen automatically before you see the money, ensuring consistent growth.',
        },
      ],
    },
    3: {
      title: 'Excellent Progress! Time for High-Impact Optimization.',
      subtitle: 'Financial Readiness Level: Proficient',
      color: 'bg-[#d1fae5]',
      borderColor: 'border-[#059669]',
      badgeColor: 'bg-[#059669]',
      description:
        'Congratulations! Your score confirms you have a solid financial foundation and have established excellent habits. You are doing many things right, which is a significant achievement, and you should be very proud of your progress!\n\nThe next stage of your financial journey is not about radical change, but about refinement and optimization. Your results show that a few small, high-leverage tweaks to your existing plan can maximize efficiency and significantly boost your long-term returns. Let\'s make your money work even harder for you!',
      actionItems: [
        {
          title: 'Investment Portfolio Review',
          description:
            'We\'ll check your asset allocation to ensure it\'s perfectly aligned with your risk tolerance and long-term goals.',
        },
        {
          title: 'Insurance Optimization',
          description:
            'Let\'s review your protection (life, disability, critical illness) to ensure it aligns with your current net worth and future plans.',
        },
        {
          title: 'Tax-Efficient Habits',
          description:
            'We will explore advanced tax-saving strategies to ensure you are keeping as much of your hard-earned money as possible.',
        },
      ],
    },
    4: {
      title: 'Outstanding! You Are a Financial Champion.',
      subtitle: 'Financial Readiness Level: Advanced',
      color: 'bg-[#c7f0d8]',
      borderColor: 'border-[#0891b2]',
      badgeColor: 'bg-[#0891b2]',
      description:
        'This is an outstanding result! You have demonstrated a high level of financial literacy and, more importantly, a commitment to implementing sound financial strategies. You are well on your way to achieving your retirement goals, and we are thrilled to see your success!\n\nWith your financial house in order, the conversation shifts from building to enhancing and protecting your accumulated wealth. Your results show that the next step is to ensure your assets are shielded from unforeseen risks and optimized for maximum tax efficiency and legacy planning.',
      actionItems: [
        {
          title: 'Advanced Risk Management',
          description:
            'We\'ll review your current estate plan (Wills, Trusts, Powers of Attorney) to minimize probate and estate taxes.',
        },
        {
          title: 'Income Enhancement Strategies',
          description:
            'Let\'s explore advanced strategies for generating passive income in retirement, such as Dividends, real estate investment trusts (REITs) or annuity options.',
        },
        {
          title: 'Tax-Loss Harvesting and Rebalancing',
          description: 'We will implement a disciplined, annual process to enhance your after-tax returns.',
        },
      ],
    },
    5: {
      title: 'Exceptional! Welcome to the Master Planner Level.',
      subtitle: 'Financial Readiness Level: Master',
      color: 'bg-[#fef3c7]',
      borderColor: 'border-[#7c3aed]',
      badgeColor: 'bg-[#7c3aed]',
      description:
        'Exceptional! Your score places you in the very top tier. You have not only mastered the fundamentals but are actively managing your wealth with sophistication and foresight. Congratulations on this incredible achievement!\n\nYour financial success allows us to move beyond conventional planning and focus on the great next stages of life. While your plan is robust, the next level involves ensuring your wealth serves your deepest values, legacy, and philanthropic goals (if applicable). We will focus on advanced strategies that only the most prepared clients can implement.',
      actionItems: [
        {
          title: 'Generational Wealth Transfer',
          description:
            'We\'ll discuss advanced trust structures and gifting strategies to efficiently transfer wealth to the next generation while minimizing tax burdens.',
        },
        {
          title: 'Philanthropic Strategy',
          description:
            'Let\'s formalize your charitable giving to maximize tax benefits and social impact.',
        },
        {
          title: 'Retirement Lifestyle Modeling',
          description:
            'We will run sophisticated scenarios to model various retirement lifestyles, ensuring your capital can comfortably support your most ambitious goals.',
        },
      ],
    },
  };

  const currentResult = results[resultLevel as keyof typeof results];

  return (
    <main className="w-full bg-white">
      <MobileNav />

      {/* Hero Section */}
      <section className="pt-32 md:pt-24 pb-12 px-4 bg-gradient-to-b from-[#f9f8f6] to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#031931] mb-4">
            Your Financial Assessment Results
          </h1>
          <p className="text-lg text-[#5a5a57]">
            Discover your personalized roadmap to financial success
          </p>
        </div>
      </section>

      {/* Results Content */}
      <section className="py-12 md:py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          {/* Gauge */}
          <FinancialGauge score={score} maxScore={maxScore} />

          {/* Result Badge */}
          <div className="text-center mb-12">
            <span className={`inline-block px-6 py-2 ${currentResult.badgeColor} text-white font-bold rounded-full text-lg`}>
              {currentResult.subtitle}
            </span>
          </div>

          {/* Result Card */}
          <div className={`${currentResult.color} border-l-4 ${currentResult.borderColor} p-8 md:p-12 rounded-lg mb-12`}>
            <h2 className="text-3xl md:text-4xl font-bold text-[#031931] mb-6">
              {currentResult.title}
            </h2>

            <div className="space-y-4 text-[#5a5a57] leading-relaxed">
              {currentResult.description.split('\n\n').map((paragraph, idx) => (
                <p key={idx} className="text-base md:text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Action Items */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-[#031931] mb-8">
              Top 3 Action Items {resultLevel === 3 ? 'for Optimization' : resultLevel === 4 ? 'for Strategic Planning' : resultLevel === 5 ? 'for Legacy Planning' : 'to Accelerate Your Wealth'}:
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {currentResult.actionItems.map((item, idx) => (
                <div
                  key={idx}
                  className="p-8 bg-gradient-to-br from-[#f9f8f6] to-[#f5f5f3] border border-[#e7a832] border-opacity-30 rounded-lg hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-10 h-10 ${currentResult.badgeColor} rounded-full flex items-center justify-center text-white font-bold`}>
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-[#031931] mb-3">
                        {item.title}
                      </h4>
                      <p className="text-[#5a5a57] text-base leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
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

          {/* Download Results */}
          <div className="text-center mt-12">
            <p className="text-[#5a5a57] text-base mb-4">
              Want to save your results?
            </p>
            <button className="px-6 py-3 border-2 border-[#031931] text-[#031931] font-semibold rounded-lg hover:bg-[#031931] hover:text-white transition-all duration-300">
              Download Results as PDF
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ResultsPage;
