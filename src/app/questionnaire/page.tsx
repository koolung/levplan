import MobileNav from '@/components/MobileNav';
import Footer from '@/components/Footer';
import FinancialQuestionnaire from '@/components/FinancialQuestionnaire';

export const metadata = {
  title: 'Financial Questionnaire - LevPlan',
  description: 'Complete our comprehensive financial questionnaire to get your personalized financial plan.',
};

export default function QuestionnairePage() {
  return (
    <main className="w-full bg-white">
      <MobileNav />
      <FinancialQuestionnaire />
      <Footer />
    </main>
  );
}
