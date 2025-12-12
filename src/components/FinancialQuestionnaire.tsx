'use client';

import { useState } from 'react';
import MobileNav from './MobileNav';
import Footer from './Footer';
import ResultsPage from './ResultsPage';

interface FormData {
  // Initial Page
  name: string;
  email: string;
  phone: string;
  agreedToTerms: boolean;

  // Questions
  idealRetirement: string;
  monthlyIncome: string;
  retirementFactor: string[];
  lifestyleExpenses: string;
  investmentConfidence: string;
  marketDropPlan: string;
  retirementConcerns: string;
  moneyLegacy: string;
  trustAdvisors: string;
  lastReview: string;
  automaticSavings: string;
  financialAdvisorExperience: string;
  decisionMakers: string;
  futureProjects: string;
  financialRating: string;
}

const FinancialQuestionnaire = () => {
  const [currentStep, setCurrentStep] = useState(0); // 0 = initial page, 1-15 = questions, 16 = results
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    agreedToTerms: false,
    idealRetirement: '',
    monthlyIncome: '',
    retirementFactor: [],
    lifestyleExpenses: '',
    investmentConfidence: '',
    marketDropPlan: '',
    retirementConcerns: '',
    moneyLegacy: '',
    trustAdvisors: '',
    lastReview: '',
    automaticSavings: '',
    financialAdvisorExperience: '',
    decisionMakers: '',
    futureProjects: '',
    financialRating: '',
  });
  const [score, setScore] = useState(0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const target = e.target as HTMLInputElement;
    
    if (type === 'checkbox') {
      if (name === 'retirementFactor') {
        setFormData(prev => ({
          ...prev,
          retirementFactor: target.checked
            ? [...prev.retirementFactor, value]
            : prev.retirementFactor.filter(item => item !== value)
        }));
      } else {
        setFormData(prev => ({
          ...prev,
          [name]: target.checked
        }));
      }
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleNext = () => {
    if (currentStep === 0) {
      // Validate initial page
      if (!formData.name || !formData.email || !formData.agreedToTerms) {
        alert('Please fill in all required fields and agree to the terms.');
        return;
      }
    }
    setCurrentStep(currentStep + 1);
  };

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = () => {
    // Calculate score based on:
    // Q2 (monthlyIncome): $2,000-$5,000=1pt, $5,000-$7,500=2pts, $7,500-$10,000=3pts, $10,000+=4pts
    // Q6 (marketDropPlan): Retire later=0pts, invest more=2pts, work longer=0pts, no difference=1pts, not sure=0pts
    // Q11 (automaticSavings): Yes=1pt, No=0pts
    // Max score = 7

    let calculatedScore = 0;

    // Q2 scoring
    if (formData.monthlyIncome === '$2,000-$5,000') calculatedScore += 1;
    else if (formData.monthlyIncome === '$5,000-$7,500') calculatedScore += 2;
    else if (formData.monthlyIncome === '$7,500-$10,000') calculatedScore += 3;
    else if (formData.monthlyIncome === '$10,000+') calculatedScore += 4;

    // Q6 scoring
    if (formData.marketDropPlan === 'Invest more') calculatedScore += 2;
    else if (formData.marketDropPlan === 'No difference') calculatedScore += 1;

    // Q11 scoring
    if (formData.automaticSavings === 'Yes') calculatedScore += 1;

    setScore(calculatedScore);
    setCurrentStep(16); // Navigate to results
  };

  return (
    <>
      {currentStep === 16 ? (
        <ResultsPage score={score} maxScore={7} />
      ) : (
        <main className="w-full bg-white">
          <MobileNav />
          <section className="min-h-screen pt-32 md:pt-24 pb-16 px-4">
            <div className="max-w-2xl mx-auto">
              {currentStep === 0 ? (
            // Initial Page
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#031931] mb-6">
                Please complete to start your quiz
              </h1>
              
              <form className="space-y-6 mb-8">
                <div>
                  <label className="block text-sm font-semibold text-[#031931] mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-transparent border-b border-[#515151] text-[#031931] placeholder-[#515151] focus:outline-none focus:border-[#e7a832] transition-colors duration-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#031931] mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 bg-transparent border-b border-[#515151] text-[#031931] placeholder-[#515151] focus:outline-none focus:border-[#e7a832] transition-colors duration-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#031931] mb-2">Phone (optional)</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="(123) 456-7890"
                    className="w-full px-4 py-3 bg-transparent border-b border-[#515151] text-[#031931] placeholder-[#515151] focus:outline-none focus:border-[#e7a832] transition-colors duration-300"
                  />
                </div>

                <div className="space-y-3 mt-6 pt-6 border-t border-[#babbb7]">
                  <p className="text-sm text-[#5a5a57]">
                    <strong>We protect and never sell your information</strong>
                  </p>
                  <p className="text-sm text-[#5a5a57]">
                    By providing your information, you agree to receive communications from LEVPLAN. You may unsubscribe at any time.
                  </p>
                  
                  <div className="flex items-start gap-3 mt-4">
                    <input
                      type="checkbox"
                      name="agreedToTerms"
                      checked={formData.agreedToTerms}
                      onChange={handleInputChange}
                      id="agreedToTerms"
                      className="mt-1"
                    />
                    <label htmlFor="agreedToTerms" className="text-sm text-[#5a5a57]">
                      I agree to receive communications from LEVPLAN and understand I can unsubscribe at any time.
                    </label>
                  </div>
                </div>
              </form>

              <button
                onClick={handleNext}
                className="w-full px-6 py-3 bg-[#e7a832] text-white font-bold rounded-lg hover:opacity-90 transition-opacity duration-200"
              >
                Start Quiz
              </button>
            </div>
          ) : (
            // Questions
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-[#031931] mb-2">
                  Question {currentStep} of 15
                </h2>
                <div className="w-full bg-[#babbb7] h-1 rounded-full">
                  <div
                    className="bg-[#e7a832] h-1 rounded-full transition-all duration-300"
                    style={{ width: `${(currentStep / 15) * 100}%` }}
                  />
                </div>
              </div>

              <form className="space-y-6 mb-8">
                {currentStep === 1 && (
                  <div>
                    <h3 className="text-2xl font-semibold text-[#031931] mb-4">
                      What does the "Ideal Retirement" actually look like for you?
                    </h3>
                    <textarea
                      name="idealRetirement"
                      value={formData.idealRetirement}
                      onChange={handleInputChange}
                      placeholder="Describe your ideal retirement..."
                      rows={4}
                      className="w-full px-4 py-3 bg-transparent border border-[#babbb7] rounded-lg text-[#031931] placeholder-[#515151] focus:outline-none focus:ring-2 focus:ring-[#e7a832] transition-all duration-300"
                    />
                  </div>
                )}

                {currentStep === 2 && (
                  <div>
                    <h3 className="text-2xl font-semibold text-[#031931] mb-4">
                      How much monthly income would make you feel secure and free once the paycheques stop?
                    </h3>
                    <div className="space-y-3">
                      {['$2,000-$5,000', '$5,000-$7,500', '$7,500-$10,000', '$10,000+'].map((option) => (
                        <label key={option} className="flex items-center gap-3 p-3 border border-[#babbb7] rounded-lg hover:bg-[#f6f6f6] cursor-pointer">
                          <input
                            type="radio"
                            name="monthlyIncome"
                            value={option}
                            checked={formData.monthlyIncome === option}
                            onChange={handleInputChange}
                          />
                          <span className="text-[#031931]">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}

                {currentStep === 3 && (
                  <div>
                    <h3 className="text-2xl font-semibold text-[#031931] mb-4">
                      What would need to happen financially for you to feel comfortable retiring earlier than you expected?
                    </h3>
                    <div className="space-y-3">
                      {['Save more', 'Pay off mortgage', 'Put kids through school'].map((option) => (
                        <label key={option} className="flex items-center gap-3 p-3 border border-[#babbb7] rounded-lg hover:bg-[#f6f6f6] cursor-pointer">
                          <input
                            type="checkbox"
                            name="retirementFactor"
                            value={option}
                            checked={formData.retirementFactor.includes(option)}
                            onChange={handleInputChange}
                          />
                          <span className="text-[#031931]">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}

                {currentStep === 4 && (
                  <div>
                    <h3 className="text-2xl font-semibold text-[#031931] mb-4">
                      Which expenses in your current lifestyle would you want to keep, reduce, or eliminate after retirement?
                    </h3>
                    <textarea
                      name="lifestyleExpenses"
                      value={formData.lifestyleExpenses}
                      onChange={handleInputChange}
                      placeholder="Describe your lifestyle expenses..."
                      rows={4}
                      className="w-full px-4 py-3 bg-transparent border border-[#babbb7] rounded-lg text-[#031931] placeholder-[#515151] focus:outline-none focus:ring-2 focus:ring-[#e7a832] transition-all duration-300"
                    />
                  </div>
                )}

                {currentStep === 5 && (
                  <div>
                    <h3 className="text-2xl font-semibold text-[#031931] mb-4">
                      How confident are you that your savings and investments are working hard enough to support the life you want?
                    </h3>
                    <textarea
                      name="investmentConfidence"
                      value={formData.investmentConfidence}
                      onChange={handleInputChange}
                      placeholder="Share your thoughts..."
                      rows={4}
                      className="w-full px-4 py-3 bg-transparent border border-[#babbb7] rounded-lg text-[#031931] placeholder-[#515151] focus:outline-none focus:ring-2 focus:ring-[#e7a832] transition-all duration-300"
                    />
                  </div>
                )}

                {currentStep === 6 && (
                  <div>
                    <h3 className="text-2xl font-semibold text-[#031931] mb-4">
                      If markets dropped 20% right before you retired, what would your backup plan be?
                    </h3>
                    <div className="space-y-3">
                      {['Retire later', 'Invest more', 'Work longer', 'No difference', 'Not sure'].map((option) => (
                        <label key={option} className="flex items-center gap-3 p-3 border border-[#babbb7] rounded-lg hover:bg-[#f6f6f6] cursor-pointer">
                          <input
                            type="radio"
                            name="marketDropPlan"
                            value={option}
                            checked={formData.marketDropPlan === option}
                            onChange={handleInputChange}
                          />
                          <span className="text-[#031931]">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}

                {currentStep === 7 && (
                  <div>
                    <h3 className="text-2xl font-semibold text-[#031931] mb-4">
                      What are your biggest concerns or fears when you think about retirement?
                    </h3>
                    <textarea
                      name="retirementConcerns"
                      value={formData.retirementConcerns}
                      onChange={handleInputChange}
                      placeholder="Share your concerns..."
                      rows={4}
                      className="w-full px-4 py-3 bg-transparent border border-[#babbb7] rounded-lg text-[#031931] placeholder-[#515151] focus:outline-none focus:ring-2 focus:ring-[#e7a832] transition-all duration-300"
                    />
                  </div>
                )}

                {currentStep === 8 && (
                  <div>
                    <h3 className="text-2xl font-semibold text-[#031931] mb-4">
                      What kind of legacy—or impact—do you want your money to have after you're gone?
                    </h3>
                    <textarea
                      name="moneyLegacy"
                      value={formData.moneyLegacy}
                      onChange={handleInputChange}
                      placeholder="Describe your legacy..."
                      rows={4}
                      className="w-full px-4 py-3 bg-transparent border border-[#babbb7] rounded-lg text-[#031931] placeholder-[#515151] focus:outline-none focus:ring-2 focus:ring-[#e7a832] transition-all duration-300"
                    />
                  </div>
                )}

                {currentStep === 9 && (
                  <div>
                    <h3 className="text-2xl font-semibold text-[#031931] mb-4">
                      Who are the people you trust to help you make big financial decisions over the next decade?
                    </h3>
                    <textarea
                      name="trustAdvisors"
                      value={formData.trustAdvisors}
                      onChange={handleInputChange}
                      placeholder="List the people you trust..."
                      rows={4}
                      className="w-full px-4 py-3 bg-transparent border border-[#babbb7] rounded-lg text-[#031931] placeholder-[#515151] focus:outline-none focus:ring-2 focus:ring-[#e7a832] transition-all duration-300"
                    />
                  </div>
                )}

                {currentStep === 10 && (
                  <div>
                    <h3 className="text-2xl font-semibold text-[#031931] mb-4">
                      When was the last time you reviewed your plan and updated it to reflect the life you're actually living now?
                    </h3>
                    <textarea
                      name="lastReview"
                      value={formData.lastReview}
                      onChange={handleInputChange}
                      placeholder="When did you last review your plan..."
                      rows={4}
                      className="w-full px-4 py-3 bg-transparent border border-[#babbb7] rounded-lg text-[#031931] placeholder-[#515151] focus:outline-none focus:ring-2 focus:ring-[#e7a832] transition-all duration-300"
                    />
                  </div>
                )}

                {currentStep === 11 && (
                  <div>
                    <h3 className="text-2xl font-semibold text-[#031931] mb-4">
                      Do you automatically save every month?
                    </h3>
                    <div className="space-y-3">
                      {['Yes', 'No', 'Sometimes'].map((option) => (
                        <label key={option} className="flex items-center gap-3 p-3 border border-[#babbb7] rounded-lg hover:bg-[#f6f6f6] cursor-pointer">
                          <input
                            type="radio"
                            name="automaticSavings"
                            value={option}
                            checked={formData.automaticSavings === option}
                            onChange={handleInputChange}
                          />
                          <span className="text-[#031931]">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}

                {currentStep === 12 && (
                  <div>
                    <h3 className="text-2xl font-semibold text-[#031931] mb-4">
                      Have you worked with a financial advisor before?
                    </h3>
                    <div className="space-y-3">
                      {['Yes', 'No', 'Currently working with one'].map((option) => (
                        <label key={option} className="flex items-center gap-3 p-3 border border-[#babbb7] rounded-lg hover:bg-[#f6f6f6] cursor-pointer">
                          <input
                            type="radio"
                            name="financialAdvisorExperience"
                            value={option}
                            checked={formData.financialAdvisorExperience === option}
                            onChange={handleInputChange}
                          />
                          <span className="text-[#031931]">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}

                {currentStep === 13 && (
                  <div>
                    <h3 className="text-2xl font-semibold text-[#031931] mb-4">
                      When you think about your finances, who else is involved in the decision-making process?
                    </h3>
                    <textarea
                      name="decisionMakers"
                      value={formData.decisionMakers}
                      onChange={handleInputChange}
                      placeholder="Describe who is involved..."
                      rows={4}
                      className="w-full px-4 py-3 bg-transparent border border-[#babbb7] rounded-lg text-[#031931] placeholder-[#515151] focus:outline-none focus:ring-2 focus:ring-[#e7a832] transition-all duration-300"
                    />
                  </div>
                )}

                {currentStep === 14 && (
                  <div>
                    <h3 className="text-2xl font-semibold text-[#031931] mb-4">
                      Are you planning any big projects or philanthropy in the future?
                    </h3>
                    <textarea
                      name="futureProjects"
                      value={formData.futureProjects}
                      onChange={handleInputChange}
                      placeholder="Tell us about your plans..."
                      rows={4}
                      className="w-full px-4 py-3 bg-transparent border border-[#babbb7] rounded-lg text-[#031931] placeholder-[#515151] focus:outline-none focus:ring-2 focus:ring-[#e7a832] transition-all duration-300"
                    />
                  </div>
                )}

                {currentStep === 15 && (
                  <div>
                    <h3 className="text-2xl font-semibold text-[#031931] mb-4">
                      On a scale of 1-10, how would you rate your financial situation? What would it take to get you to a 10?
                    </h3>
                    <textarea
                      name="financialRating"
                      value={formData.financialRating}
                      onChange={handleInputChange}
                      placeholder="Share your rating and thoughts..."
                      rows={4}
                      className="w-full px-4 py-3 bg-transparent border border-[#babbb7] rounded-lg text-[#031931] placeholder-[#515151] focus:outline-none focus:ring-2 focus:ring-[#e7a832] transition-all duration-300"
                    />
                  </div>
                )}
              </form>

              <div className="flex gap-4 justify-between">
                <button
                  onClick={handlePrevious}
                  className="px-6 py-3 border-2 border-[#e7a832] text-[#e7a832] font-bold rounded-lg hover:bg-[#f0b94a] hover:text-white transition-all duration-200"
                >
                  Previous
                </button>
                
                {currentStep < 15 ? (
                  <button
                    onClick={handleNext}
                    className="px-6 py-3 bg-[#e7a832] text-white font-bold rounded-lg hover:opacity-90 transition-opacity duration-200"
                  >
                    Next
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    className="px-6 py-3 bg-[#e7a832] text-white font-bold rounded-lg hover:opacity-90 transition-opacity duration-200"
                  >
                    Get your results
                  </button>
                )}
              </div>
            </div>
          )}
            </div>
          </section>

          <Footer />
        </main>
      )}
    </>
  );
};

export default FinancialQuestionnaire;
