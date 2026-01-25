import Footer from '@/components/Footer';
import FinancialQuestionnaire from '@/components/FinancialQuestionnaire';

export const metadata = {
  title: 'Financial Questionnaire - LevPlan',
  description: 'Complete our comprehensive financial questionnaire to get your personalized financial plan.',
};

export default function QuestionnairePage() {
  return (
    <>
      <style>{`
        .calendly-badge-widget {
          display: none;
        }
      `}</style>
      <main className="w-full min-h-screen bg-cover bg-center relative" style={{ backgroundImage: 'url(/images/beach.jpeg)' }}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10">
          <FinancialQuestionnaire />
        </div>
      </main>
    </>
  );
}
