'use client';

import { useState } from 'react';
import ResultsPage from './ResultsPage';

interface FormData {
  // Initial Page
  name: string;
  email: string;
  phone: string;
  agreedToTerms: boolean;

  // Questions
  q1_savings: string;
  q2_emergency: string;
  q3_disability: string;
  q4_pension: string;
  q5_planner: string;
  q6_will: string;
  q7_poa: string;
  q8_helper: string;
  q9_budget: string;
  q10_invest: string;
  q11_cc_debt: string;
  q12_charity: string;
  q13_diy: string;
  q14_loans: string;
  q15_other: string;
}

const FinancialQuestionnaire = () => {
  const [currentStep, setCurrentStep] = useState(0); // 0 = initial page, 1-15 = questions, 16 = results
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    agreedToTerms: false,
    q1_savings: '',
    q2_emergency: '',
    q3_disability: '',
    q4_pension: '',
    q5_planner: '',
    q6_will: '',
    q7_poa: '',
    q8_helper: '',
    q9_budget: '',
    q10_invest: '',
    q11_cc_debt: '',
    q12_charity: '',
    q13_diy: '',
    q14_loans: '',
    q15_other: '',
  });
  const [score, setScore] = useState({ powerSaver: 0, riskManager: 0, investmentBuilder: 0 });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const target = e.target as HTMLInputElement;
    
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        [name]: target.checked
      }));
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
    // Calculate scores for 3 categories
    let powerSaverScore = 0;
    let riskManagerScore = 0;
    let investmentBuilderScore = 0;

    // Power Saver questions: 1, 2, 9, 14
    if (formData.q1_savings === 'Yes') powerSaverScore += 1;
    if (formData.q2_emergency === 'Yes') powerSaverScore += 1;
    if (formData.q9_budget === 'Yes') powerSaverScore += 1;
    if (formData.q14_loans === 'No') powerSaverScore += 1;

    // Risk Manager questions: 3, 6, 7, 13
    if (formData.q3_disability === 'Yes') riskManagerScore += 1;
    if (formData.q6_will === 'Yes') riskManagerScore += 1;
    if (formData.q7_poa === 'Yes') riskManagerScore += 1;
    if (formData.q13_diy === 'No') riskManagerScore += 1;

    // Investment Builder questions: 4, 5, 10, 11, 12
    if (formData.q4_pension === 'Yes') investmentBuilderScore += 1;
    if (formData.q5_planner === 'Yes') investmentBuilderScore += 1;
    if (formData.q10_invest === 'Yes') investmentBuilderScore += 1;
    if (formData.q11_cc_debt === 'No') investmentBuilderScore += 1;
    if (formData.q12_charity === 'Yes') investmentBuilderScore += 1;

    setScore({
      powerSaver: powerSaverScore,
      riskManager: riskManagerScore,
      investmentBuilder: investmentBuilderScore
    });
    setCurrentStep(16); // Navigate to results
  };

  return (
    <>
      {currentStep === 16 ? (
        <ResultsPage score={score} />
      ) : (
        <section className="min-h-screen pt-32 md:pt-24 pb-16 px-4">
          <div className="max-w-2xl mx-auto rounded-2xl bg-white/80 backdrop-blur-sm p-8">
            {currentStep === 0 ? (
            // Initial Page
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#031931] mb-6">
                Please complete to start your assessment
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
                Start Assessment
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
                      Do you save more than 10% of your income every year?
                    </h3>
                    <div className="space-y-3">
                      {['Yes', 'No'].map((option) => (
                        <label key={option} className="flex items-center gap-3 p-3 border border-[#babbb7] rounded-lg hover:bg-[#f6f6f6] cursor-pointer">
                          <input
                            type="radio"
                            name="q1_savings"
                            value={option}
                            checked={formData.q1_savings === option}
                            onChange={handleInputChange}
                          />
                          <span className="text-[#031931]">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}

                {currentStep === 2 && (
                  <div>
                    <h3 className="text-2xl font-semibold text-[#031931] mb-4">
                      Have you got any savings set aside that would get you through a difficult 3 months?
                    </h3>
                    <div className="space-y-3">
                      {['Yes', 'No'].map((option) => (
                        <label key={option} className="flex items-center gap-3 p-3 border border-[#babbb7] rounded-lg hover:bg-[#f6f6f6] cursor-pointer">
                          <input
                            type="radio"
                            name="q2_emergency"
                            value={option}
                            checked={formData.q2_emergency === option}
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
                      Do you have short term or long term disability that pays you if you can't work?
                    </h3>
                    <div className="space-y-3">
                      {['Yes', 'No'].map((option) => (
                        <label key={option} className="flex items-center gap-3 p-3 border border-[#babbb7] rounded-lg hover:bg-[#f6f6f6] cursor-pointer">
                          <input
                            type="radio"
                            name="q3_disability"
                            value={option}
                            checked={formData.q3_disability === option}
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
                      Will you have a pension waiting for you upon retirement?
                    </h3>
                    <div className="space-y-3">
                      {['Yes', 'No'].map((option) => (
                        <label key={option} className="flex items-center gap-3 p-3 border border-[#babbb7] rounded-lg hover:bg-[#f6f6f6] cursor-pointer">
                          <input
                            type="radio"
                            name="q4_pension"
                            value={option}
                            checked={formData.q4_pension === option}
                            onChange={handleInputChange}
                          />
                          <span className="text-[#031931]">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}

                {currentStep === 5 && (
                  <div>
                    <h3 className="text-2xl font-semibold text-[#031931] mb-4">
                      Have you seen a financial planner or wealth adviser in the last 2 years?
                    </h3>
                    <div className="space-y-3">
                      {['Yes', 'No'].map((option) => (
                        <label key={option} className="flex items-center gap-3 p-3 border border-[#babbb7] rounded-lg hover:bg-[#f6f6f6] cursor-pointer">
                          <input
                            type="radio"
                            name="q5_planner"
                            value={option}
                            checked={formData.q5_planner === option}
                            onChange={handleInputChange}
                          />
                          <span className="text-[#031931]">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}

                {currentStep === 6 && (
                  <div>
                    <h3 className="text-2xl font-semibold text-[#031931] mb-4">
                      Do you have a will?
                    </h3>
                    <div className="space-y-3">
                      {['Yes', 'No'].map((option) => (
                        <label key={option} className="flex items-center gap-3 p-3 border border-[#babbb7] rounded-lg hover:bg-[#f6f6f6] cursor-pointer">
                          <input
                            type="radio"
                            name="q6_will"
                            value={option}
                            checked={formData.q6_will === option}
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
                      Do you have a POA (Power of Attorney)?
                    </h3>
                    <div className="space-y-3">
                      {['Yes', 'No'].map((option) => (
                        <label key={option} className="flex items-center gap-3 p-3 border border-[#babbb7] rounded-lg hover:bg-[#f6f6f6] cursor-pointer">
                          <input
                            type="radio"
                            name="q7_poa"
                            value={option}
                            checked={formData.q7_poa === option}
                            onChange={handleInputChange}
                          />
                          <span className="text-[#031931]">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}

                {currentStep === 8 && (
                  <div>
                    <h3 className="text-2xl font-semibold text-[#031931] mb-4">
                      Is there another person helping you make important financial decisions?
                    </h3>
                    <div className="space-y-3">
                      {['Yes', 'No'].map((option) => (
                        <label key={option} className="flex items-center gap-3 p-3 border border-[#babbb7] rounded-lg hover:bg-[#f6f6f6] cursor-pointer">
                          <input
                            type="radio"
                            name="q8_helper"
                            value={option}
                            checked={formData.q8_helper === option}
                            onChange={handleInputChange}
                          />
                          <span className="text-[#031931]">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}

                {currentStep === 9 && (
                  <div>
                    <h3 className="text-2xl font-semibold text-[#031931] mb-4">
                      Do you have a monthly budget?
                    </h3>
                    <div className="space-y-3">
                      {['Yes', 'No'].map((option) => (
                        <label key={option} className="flex items-center gap-3 p-3 border border-[#babbb7] rounded-lg hover:bg-[#f6f6f6] cursor-pointer">
                          <input
                            type="radio"
                            name="q9_budget"
                            value={option}
                            checked={formData.q9_budget === option}
                            onChange={handleInputChange}
                          />
                          <span className="text-[#031931]">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}

                {currentStep === 10 && (
                  <div>
                    <h3 className="text-2xl font-semibold text-[#031931] mb-4">
                      Do you regularly invest into stocks, shares or funds?
                    </h3>
                    <div className="space-y-3">
                      {['Yes', 'No'].map((option) => (
                        <label key={option} className="flex items-center gap-3 p-3 border border-[#babbb7] rounded-lg hover:bg-[#f6f6f6] cursor-pointer">
                          <input
                            type="radio"
                            name="q10_invest"
                            value={option}
                            checked={formData.q10_invest === option}
                            onChange={handleInputChange}
                          />
                          <span className="text-[#031931]">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}

                {currentStep === 11 && (
                  <div>
                    <h3 className="text-2xl font-semibold text-[#031931] mb-4">
                      Do you have credit card debt?
                    </h3>
                    <div className="space-y-3">
                      {['Yes', 'No'].map((option) => (
                        <label key={option} className="flex items-center gap-3 p-3 border border-[#babbb7] rounded-lg hover:bg-[#f6f6f6] cursor-pointer">
                          <input
                            type="radio"
                            name="q11_cc_debt"
                            value={option}
                            checked={formData.q11_cc_debt === option}
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
                      Do you want to leave money to charity when you pass away?
                    </h3>
                    <div className="space-y-3">
                      {['Yes', 'No'].map((option) => (
                        <label key={option} className="flex items-center gap-3 p-3 border border-[#babbb7] rounded-lg hover:bg-[#f6f6f6] cursor-pointer">
                          <input
                            type="radio"
                            name="q12_charity"
                            value={option}
                            checked={formData.q12_charity === option}
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
                      Do you like to do everything yourself when it comes to finances and investing?
                    </h3>
                    <div className="space-y-3">
                      {['Yes', 'No'].map((option) => (
                        <label key={option} className="flex items-center gap-3 p-3 border border-[#babbb7] rounded-lg hover:bg-[#f6f6f6] cursor-pointer">
                          <input
                            type="radio"
                            name="q13_diy"
                            value={option}
                            checked={formData.q13_diy === option}
                            onChange={handleInputChange}
                          />
                          <span className="text-[#031931]">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}

                {currentStep === 14 && (
                  <div>
                    <h3 className="text-2xl font-semibold text-[#031931] mb-4">
                      Have you got loans for personal items outside of your home? (e.g., a vehicle, travel trailer)
                    </h3>
                    <div className="space-y-3">
                      {['Yes', 'No'].map((option) => (
                        <label key={option} className="flex items-center gap-3 p-3 border border-[#babbb7] rounded-lg hover:bg-[#f6f6f6] cursor-pointer">
                          <input
                            type="radio"
                            name="q14_loans"
                            value={option}
                            checked={formData.q14_loans === option}
                            onChange={handleInputChange}
                          />
                          <span className="text-[#031931]">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}

                {currentStep === 15 && (
                  <div>
                    <h3 className="text-2xl font-semibold text-[#031931] mb-4">
                      Is there anything else you would like to share?
                    </h3>
                    <textarea
                      name="q15_other"
                      value={formData.q15_other}
                      onChange={handleInputChange}
                      placeholder="Share anything else you'd like us to know..."
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
      )}
    </>
  );
};

export default FinancialQuestionnaire;
