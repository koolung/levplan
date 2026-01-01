'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import MobileNav from './MobileNav';
import Footer from './Footer';

interface ResultsPageProps {
  score: {
    powerSaver: number;
    riskManager: number;
    investmentBuilder: number;
  };
}

const ResultsPage = ({ score }: ResultsPageProps) => {
  const router = useRouter();

  // Determine which result to display
  // 1 point = Starter, 2-3 points = Accumulator, 4 points = Achiever
  useEffect(() => {
    // Find the highest score to determine the category
    const scores = [
      { type: 'power-saver', score: score.powerSaver },
      { type: 'risk-manager', score: score.riskManager },
      { type: 'investment-builder', score: score.investmentBuilder },
    ];

    // Sort by score (descending) to find the highest
    const sorted = scores.sort((a, b) => b.score - a.score);
    const highestCategory = sorted[0].type;
    const highestScore = sorted[0].score;

    // Determine the level (1 = starter, 2-3 = accumulator, 4 = achiever)
    let level = 1;
    if (highestScore >= 4) level = 3;
    else if (highestScore >= 2) level = 2;
    else level = 1;

    // Navigate to the appropriate result page
    const resultPath = `/results/${highestCategory}-${level}`;
    router.push(resultPath);
  }, [score, router]);

  return (
    <main className="w-full bg-white">
      <MobileNav />

      {/* Loading Section */}
      <section className="min-h-screen pt-32 md:pt-24 pb-16 px-4 bg-gradient-to-b from-[#f9f8f6] to-white flex items-center justify-center">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#031931] mb-6">
            Analyzing Your Results...
          </h1>
          <p className="text-lg text-[#5a5a57] mb-8">
            We're personalizing your financial assessment based on your answers.
          </p>
          
          {/* Loading animation */}
          <div className="flex justify-center">
            <div className="w-12 h-12 border-4 border-[#e7a832] border-t-[#031931] rounded-full animate-spin"></div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ResultsPage;
