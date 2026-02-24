'use client';

import { useRouter } from 'next/navigation';
import MobileNav from './MobileNav';
import Footer from './Footer';
import { getProfilePath, getProfileName } from '@/lib/profileHelper';

interface ResultsPageProps {
  score: {
    powerSaver: number;
    riskManager: number;
    investmentBuilder: number;
  };
}

const ResultsPage = ({ score }: ResultsPageProps) => {
  const router = useRouter();
  const profilePath = getProfilePath(score);
  const profileName = getProfileName(score);

  const handleViewProfile = () => {
    router.push(profilePath);
  };

  return (
    <main className="w-full bg-white">
      <MobileNav />

      {/* Results Section */}
      <section className="min-h-screen pt-32 md:pt-24 pb-16 px-4 bg-gradient-to-b from-[#f9f8f6] to-white flex items-center justify-center">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#031931] mb-6">
            Your Assessment Complete
          </h1>
          <p className="text-lg text-[#5a5a57] mb-4">
            Based on your responses, your primary financial profile is:
          </p>
          
          <div className="mb-8">
            <div className="inline-block bg-[#e7a832] text-white px-8 py-4 rounded-lg text-3xl font-bold mb-8">
              {profileName}
            </div>
          </div>

          <p className="text-base text-[#5a5a57] mb-12 max-w-2xl mx-auto">
            Click below to view your personalized financial profile and recommendations tailored to your unique situation.
          </p>
          
          <button
            onClick={handleViewProfile}
            className="px-8 py-4 bg-[#e7a832] text-white font-bold rounded-lg hover:opacity-90 transition-opacity duration-200 text-lg"
          >
            View Your Profile
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ResultsPage;
