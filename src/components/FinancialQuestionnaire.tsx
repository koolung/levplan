'use client';

import { useState } from 'react';
import Image from 'next/image';

interface FormData {
  // Basic Info
  hasSpouse: boolean;
  age: string;
  spouseAge: string;
  retirementAge: string;
  alreadyRetired: boolean;
  spouseAlreadyRetired: boolean;

  // Personal Info
  firstName: string;
  lastName: string;
  spouseFirstName: string;
  spouseLastName: string;

  // Family
  hasKids: boolean;
  children: Array<{ age: string }>;

  // Risk & Income
  riskTolerance: number;
  spouseRiskTolerance: number;
  annualIncome: string;
  spouseAnnualIncome: string;

  // Investments
  hasInvestments: boolean;
  investmentAccounts: string[];
  accountBalances: Record<string, string>;

  // Workplace Pension
  hasWorkplacePension: boolean;
  spouseHasWorkplacePension: boolean;
  pensionIncome: string;
  spousePensionIncome: string;

  // Monthly Savings
  monthlySavings: string;
  spouseMonthlySavings: string;

  // Housing
  homeOwnership: 'own' | 'rent' | '';
  homeValue: string;
  mortgageBalance: string;
  mortgagePayment: string;
  rentPayment: string;

  // Debt
  hasOtherDebt: boolean;
  debtTypes: string[];
  debtBalances: Record<string, string>;

  // Life Expectancy
  gender: 'male' | 'female' | '';
  spouseGender: 'male' | 'female' | '';
  smoker: boolean;
  spouseSmoker: boolean;

  // Contact
  zipCode: string;
  email: string;
}

const debtOptions = ['Credit Card', 'Real Estate', 'Student Loan', 'Car', 'Other'];
const investmentAccounts = ['TFSA', 'RRSP', 'FHSA', 'Non-Registered', 'Other'];

const FinancialQuestionnaire = () => {
  const [currentStep, setCurrentStep] = useState(1);

  // Calculate total steps dynamically - skip steps based on user answers
  const calculateTotalSteps = (data: FormData) => {
    let steps = 15;
    if (!data.hasInvestments) {
      steps -= 1; // Skip account balances step (step 8)
    }
    if (!data.hasOtherDebt) {
      steps -= 1; // Skip debt balances step (step 13)
    }
    return steps;
  };

  // Map current step to actual step number accounting for skipped steps
  const getActualStep = (step: number, data: FormData): number => {
    if (!data.hasInvestments && step > 8) {
      // Account balances is step 8, so if skipped, shift all subsequent steps
      return step - 1;
    }
    return step;
  };

  const [formData, setFormData] = useState<FormData>({
    hasSpouse: false,
    age: '',
    spouseAge: '',
    retirementAge: '',
    alreadyRetired: false,
    spouseAlreadyRetired: false,
    firstName: '',
    lastName: '',
    spouseFirstName: '',
    spouseLastName: '',
    hasKids: false,
    children: [],
    riskTolerance: 3,
    spouseRiskTolerance: 3,
    annualIncome: '',
    spouseAnnualIncome: '',
    hasInvestments: false,
    investmentAccounts: [],
    accountBalances: {},
    hasWorkplacePension: false,
    spouseHasWorkplacePension: false,
    pensionIncome: '',
    spousePensionIncome: '',
    monthlySavings: '',
    spouseMonthlySavings: '',
    homeOwnership: '',
    homeValue: '',
    mortgageBalance: '',
    mortgagePayment: '',
    rentPayment: '',
    hasOtherDebt: false,
    debtTypes: [],
    debtBalances: {},
    gender: '',
    spouseGender: '',
    smoker: false,
    spouseSmoker: false,
    zipCode: '',
    email: '',
  });

  const handleInputChange = (field: keyof FormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleAddChild = () => {
    setFormData((prev) => ({
      ...prev,
      children: [...prev.children, { age: '' }],
    }));
  };

  const handleRemoveChild = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      children: prev.children.filter((_, i) => i !== index),
    }));
  };

  const handleUpdateChild = (index: number, age: string) => {
    setFormData((prev) => {
      const updated = [...prev.children];
      updated[index].age = age;
      return { ...prev, children: updated };
    });
  };

  const handleAccountToggle = (account: string) => {
    setFormData((prev) => ({
      ...prev,
      investmentAccounts: prev.investmentAccounts.includes(account)
        ? prev.investmentAccounts.filter((a) => a !== account)
        : [...prev.investmentAccounts, account],
    }));
  };

  const handleDebtToggle = (debt: string) => {
    setFormData((prev) => ({
      ...prev,
      debtTypes: prev.debtTypes.includes(debt)
        ? prev.debtTypes.filter((d) => d !== debt)
        : [...prev.debtTypes, debt],
    }));
  };

  const nextStep = () => {
    const totalSteps = calculateTotalSteps(formData);
    let nextStep = currentStep + 1;
    
    // Skip account balances (step 8) if no investments
    if (nextStep === 8 && !formData.hasInvestments) {
      nextStep = 9;
    }
    
    // Skip debt balances (step 13) if no other debt
    if (nextStep === 13 && !formData.hasOtherDebt) {
      nextStep = 14;
    }
    
    // Use 15 as max since that's the actual last step (Contact Information)
    if (nextStep <= 15) {
      setCurrentStep(nextStep);
    }
  };

  const prevStep = () => {
    let prevStepNum = currentStep - 1;
    
    // Skip account balances (step 8) if no investments
    if (prevStepNum === 8 && !formData.hasInvestments) {
      prevStepNum = 7;
    }
    
    // Skip debt balances (step 13) if no other debt
    if (prevStepNum === 13 && !formData.hasOtherDebt) {
      prevStepNum = 12;
    }
    
    if (prevStepNum >= 1) {
      setCurrentStep(prevStepNum);
    }
  };

  const getNextValidStep = (step: number): number => {
    // If account balances (step 8) should be skipped, return 9
    if (step === 8 && !formData.hasInvestments) {
      return 9;
    }
    // If debt balances (step 13) should be skipped, return 14
    if (step === 13 && !formData.hasOtherDebt) {
      return 14;
    }
    return step;
  };

  // Auto-advance to next valid step if current step should be skipped
  const validCurrentStep = getNextValidStep(currentStep);

  const totalSteps = calculateTotalSteps(formData);
  
  // Calculate visible step for progress display (account for skipped steps)
  const getVisibleStep = (step: number, data: FormData): number => {
    let visibleStep = step;
    if (step > 8 && !data.hasInvestments) {
      visibleStep -= 1;
    }
    if (step > 13 && !data.hasOtherDebt) {
      visibleStep -= 1;
    }
    return visibleStep;
  };
  
  const visibleStep = getVisibleStep(validCurrentStep, formData);
  const progressPercentage = (visibleStep / totalSteps) * 100;

  const renderStep = () => {
    const stepToRender = validCurrentStep;
    switch (stepToRender) {
      case 1:
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-[#031931]">How old are you?</h2>
            <input
              type="number"
              placeholder="Your age"
              value={formData.age}
              onChange={(e) => handleInputChange('age', e.target.value)}
              className="w-full px-4 py-3 border-2 border-[#babbb7] rounded-lg focus:border-[var(--primary)] outline-none"
            />
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.hasSpouse}
                onChange={(e) => handleInputChange('hasSpouse', e.target.checked)}
                className="w-5 h-5"
              />
              <span className="text-lg text-[#5a5a57]">I have a spouse/partner</span>
            </label>
            {formData.hasSpouse && (
              <input
                type="number"
                placeholder="Spouse age"
                value={formData.spouseAge}
                onChange={(e) => handleInputChange('spouseAge', e.target.value)}
                className="w-full px-4 py-3 border-2 border-[#babbb7] rounded-lg focus:border-[var(--primary)] outline-none"
              />
            )}
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-[#031931]">When would you like to retire?</h2>
            <input
              type="number"
              placeholder="Retirement age"
              value={formData.retirementAge}
              onChange={(e) => handleInputChange('retirementAge', e.target.value)}
              className="w-full px-4 py-3 border-2 border-[#babbb7] rounded-lg focus:border-[var(--primary)] outline-none"
            />
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.alreadyRetired}
                onChange={(e) => handleInputChange('alreadyRetired', e.target.checked)}
                className="w-5 h-5"
              />
              <span className="text-lg text-[#5a5a57]">I am already retired</span>
            </label>
            {formData.hasSpouse && (
              <>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.spouseAlreadyRetired}
                    onChange={(e) => handleInputChange('spouseAlreadyRetired', e.target.checked)}
                    className="w-5 h-5"
                  />
                  <span className="text-lg text-[#5a5a57]">My spouse is already retired</span>
                </label>
              </>
            )}
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-[#031931]">What's your name?</h2>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First name"
                value={formData.firstName}
                onChange={(e) => handleInputChange('firstName', e.target.value)}
                className="px-4 py-3 border-2 border-[#babbb7] rounded-lg focus:border-[var(--primary)] outline-none"
              />
              <input
                type="text"
                placeholder="Last name"
                value={formData.lastName}
                onChange={(e) => handleInputChange('lastName', e.target.value)}
                className="px-4 py-3 border-2 border-[#babbb7] rounded-lg focus:border-[var(--primary)] outline-none"
              />
            </div>
            {formData.hasSpouse && (
              <>
                <h3 className="text-xl font-semibold text-[#031931] mt-6">Spouse's name</h3>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First name"
                    value={formData.spouseFirstName}
                    onChange={(e) => handleInputChange('spouseFirstName', e.target.value)}
                    className="px-4 py-3 border-2 border-[#babbb7] rounded-lg focus:border-[var(--primary)] outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Last name"
                    value={formData.spouseLastName}
                    onChange={(e) => handleInputChange('spouseLastName', e.target.value)}
                    className="px-4 py-3 border-2 border-[#babbb7] rounded-lg focus:border-[var(--primary)] outline-none"
                  />
                </div>
              </>
            )}
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-[#031931]">Do you have kids?</h2>
            <div className="flex gap-4">
              <button
                onClick={() => {
                  handleInputChange('hasKids', true);
                  if (formData.children.length === 0) {
                    handleAddChild();
                  }
                }}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  formData.hasKids
                    ? 'bg-[var(--primary)] text-white'
                    : 'bg-[#f5f5f3] text-[#031931] border-2 border-[#babbb7]'
                }`}
              >
                Yes
              </button>
              <button
                onClick={() => {
                  handleInputChange('hasKids', false);
                  handleInputChange('children', []);
                }}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  !formData.hasKids
                    ? 'bg-[var(--primary)] text-white'
                    : 'bg-[#f5f5f3] text-[#031931] border-2 border-[#babbb7]'
                }`}
              >
                No
              </button>
            </div>
            {formData.hasKids && (
              <div className="space-y-4 mt-6">
                {formData.children.map((child, index) => (
                  <div key={index} className="flex gap-3 items-end">
                    <div className="flex-1">
                      <label className="block text-sm font-semibold text-[#031931] mb-2">
                        Child {index + 1} Age
                      </label>
                      <input
                        type="number"
                        placeholder="Age"
                        value={child.age}
                        onChange={(e) => handleUpdateChild(index, e.target.value)}
                        className="w-full px-4 py-3 border-2 border-[#babbb7] rounded-lg focus:border-[var(--primary)] outline-none"
                      />
                    </div>
                    {formData.children.length > 1 && (
                      <button
                        onClick={() => handleRemoveChild(index)}
                        className="px-4 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                ))}
                <button
                  onClick={handleAddChild}
                  className="w-full px-4 py-3 border-2 border-[var(--primary)] text-[var(--primary)] rounded-lg font-semibold hover:bg-[#f5f5f3]"
                >
                  + Add Another Child
                </button>
              </div>
            )}
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-[#031931]">Risk Tolerance</h2>
            <p className="text-lg text-[#5a5a57]">How comfortable are you with investment risk?</p>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-3">
                  <span className="font-semibold text-[#031931]">Your risk tolerance</span>
                  <span className="text-[var(--primary)] font-bold text-xl">{formData.riskTolerance}</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="5"
                  value={formData.riskTolerance}
                  onChange={(e) => handleInputChange('riskTolerance', parseInt(e.target.value))}
                  className="w-full h-3 bg-[#babbb7] rounded-lg appearance-none cursor-pointer accent-[var(--primary)]"
                />
                <div className="flex justify-between text-sm text-[#5a5a57] mt-2">
                  <span>1 (Little)</span>
                  <span>3 (Moderate)</span>
                  <span>5 (Large)</span>
                </div>
              </div>
              {formData.hasSpouse && (
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-semibold text-[#031931]">Spouse's risk tolerance</span>
                    <span className="text-[var(--primary)] font-bold text-xl">{formData.spouseRiskTolerance}</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="5"
                    value={formData.spouseRiskTolerance}
                    onChange={(e) => handleInputChange('spouseRiskTolerance', parseInt(e.target.value))}
                    className="w-full h-3 bg-[#babbb7] rounded-lg appearance-none cursor-pointer accent-[var(--primary)]"
                  />
                </div>
              )}
            </div>
          </div>
        );

      case 6:
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-[#031931]">Annual Income</h2>
            <div>
              <label className="block text-sm font-semibold text-[#031931] mb-2">Your gross annual income</label>
              <input
                type="number"
                placeholder="$0"
                value={formData.annualIncome}
                onChange={(e) => handleInputChange('annualIncome', e.target.value)}
                className="w-full px-4 py-3 border-2 border-[#babbb7] rounded-lg focus:border-[var(--primary)] outline-none"
              />
            </div>
            {formData.hasSpouse && (
              <div>
                <label className="block text-sm font-semibold text-[#031931] mb-2">
                  Spouse's gross annual income
                </label>
                <input
                  type="number"
                  placeholder="$0"
                  value={formData.spouseAnnualIncome}
                  onChange={(e) => handleInputChange('spouseAnnualIncome', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-[#babbb7] rounded-lg focus:border-[var(--primary)] outline-none"
                />
              </div>
            )}
          </div>
        );

      case 7:
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-[#031931]">Investment & Savings Accounts</h2>
            <p className="text-lg text-[#5a5a57]">Do you have funds in investment or savings accounts?</p>
            <div className="flex gap-4">
              <button
                onClick={() => {
                  handleInputChange('hasInvestments', true);
                }}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  formData.hasInvestments
                    ? 'bg-[var(--primary)] text-white'
                    : 'bg-[#f5f5f3] text-[#031931] border-2 border-[#babbb7]'
                }`}
              >
                Yes
              </button>
              <button
                onClick={() => {
                  handleInputChange('hasInvestments', false);
                  handleInputChange('investmentAccounts', []);
                }}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  !formData.hasInvestments
                    ? 'bg-[var(--primary)] text-white'
                    : 'bg-[#f5f5f3] text-[#031931] border-2 border-[#babbb7]'
                }`}
              >
                No
              </button>
            </div>
            {formData.hasInvestments && (
              <div className="space-y-3 mt-6">
                <p className="font-semibold text-[#031931]">Which types of accounts do you have?</p>
                {investmentAccounts.map((account) => (
                  <label key={account} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.investmentAccounts.includes(account)}
                      onChange={() => handleAccountToggle(account)}
                      className="w-5 h-5"
                    />
                    <span className="text-lg text-[#5a5a57]">{account}</span>
                  </label>
                ))}
              </div>
            )}
          </div>
        );

      case 8:
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-[#031931]">Account Balances</h2>
            <p className="text-lg text-[#5a5a57]">Enter the balance for each account type</p>
            <div className="space-y-4">
              {formData.investmentAccounts.map((account) => (
                <div key={account}>
                  <label className="block text-sm font-semibold text-[#031931] mb-2">{account} Balance</label>
                  <input
                    type="number"
                    placeholder="$0"
                    value={formData.accountBalances[account] || ''}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        accountBalances: { ...prev.accountBalances, [account]: e.target.value },
                      }))
                    }
                    className="w-full px-4 py-3 border-2 border-[#babbb7] rounded-lg focus:border-[var(--primary)] outline-none"
                  />
                </div>
              ))}
            </div>
          </div>
        );

      case 9:
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-[#031931]">Workplace Pension</h2>
            <p className="text-lg text-[#5a5a57]">Do you have a workplace pension?</p>
            <div className="flex gap-4">
              <button
                onClick={() => handleInputChange('hasWorkplacePension', true)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  formData.hasWorkplacePension
                    ? 'bg-[var(--primary)] text-white'
                    : 'bg-[#f5f5f3] text-[#031931] border-2 border-[#babbb7]'
                }`}
              >
                Yes
              </button>
              <button
                onClick={() => handleInputChange('hasWorkplacePension', false)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  !formData.hasWorkplacePension
                    ? 'bg-[var(--primary)] text-white'
                    : 'bg-[#f5f5f3] text-[#031931] border-2 border-[#babbb7]'
                }`}
              >
                No
              </button>
            </div>
            {formData.hasWorkplacePension && (
              <div>
                <label className="block text-sm font-semibold text-[#031931] mb-2">
                  Annual pension income in retirement
                </label>
                <input
                  type="number"
                  placeholder="$0"
                  value={formData.pensionIncome}
                  onChange={(e) => handleInputChange('pensionIncome', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-[#babbb7] rounded-lg focus:border-[var(--primary)] outline-none"
                />
              </div>
            )}
            {formData.hasSpouse && (
              <>
                <div className="border-t-2 border-[#babbb7] pt-6">
                  <p className="font-semibold text-[#031931] mb-4">Spouse's workplace pension</p>
                  <div className="flex gap-4">
                    <button
                      onClick={() => handleInputChange('spouseHasWorkplacePension', true)}
                      className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                        formData.spouseHasWorkplacePension
                          ? 'bg-[var(--primary)] text-white'
                          : 'bg-[#f5f5f3] text-[#031931] border-2 border-[#babbb7]'
                      }`}
                    >
                      Yes
                    </button>
                    <button
                      onClick={() => handleInputChange('spouseHasWorkplacePension', false)}
                      className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                        !formData.spouseHasWorkplacePension
                          ? 'bg-[var(--primary)] text-white'
                          : 'bg-[#f5f5f3] text-[#031931] border-2 border-[#babbb7]'
                      }`}
                    >
                      No
                    </button>
                  </div>
                  {formData.spouseHasWorkplacePension && (
                    <div className="mt-4">
                      <label className="block text-sm font-semibold text-[#031931] mb-2">
                        Annual pension income in retirement
                      </label>
                      <input
                        type="number"
                        placeholder="$0"
                        value={formData.spousePensionIncome}
                        onChange={(e) => handleInputChange('spousePensionIncome', e.target.value)}
                        className="w-full px-4 py-3 border-2 border-[#babbb7] rounded-lg focus:border-[var(--primary)] outline-none"
                      />
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        );

      case 10:
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-[#031931]">Monthly Savings & Investments</h2>
            <p className="text-lg text-[#5a5a57]">
              How much can you save or invest each month? (Don't worry, this can be adjusted later)
            </p>
            <div>
              <label className="block text-sm font-semibold text-[#031931] mb-2">Monthly amount ($)</label>
              <input
                type="number"
                placeholder="$0"
                value={formData.monthlySavings}
                onChange={(e) => handleInputChange('monthlySavings', e.target.value)}
                className="w-full px-4 py-3 border-2 border-[#babbb7] rounded-lg focus:border-[var(--primary)] outline-none"
              />
            </div>
            {formData.hasSpouse && (
              <div>
                <label className="block text-sm font-semibold text-[#031931] mb-2">
                  Spouse's monthly amount ($)
                </label>
                <input
                  type="number"
                  placeholder="$0"
                  value={formData.spouseMonthlySavings}
                  onChange={(e) => handleInputChange('spouseMonthlySavings', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-[#babbb7] rounded-lg focus:border-[var(--primary)] outline-none"
                />
              </div>
            )}
          </div>
        );

      case 11:
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-[#031931]">Housing</h2>
            <p className="text-lg text-[#5a5a57]">Do you rent or own your home?</p>
            <div className="flex gap-4">
              <button
                onClick={() => {
                  handleInputChange('homeOwnership', 'own');
                }}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  formData.homeOwnership === 'own'
                    ? 'bg-[var(--primary)] text-white'
                    : 'bg-[#f5f5f3] text-[#031931] border-2 border-[#babbb7]'
                }`}
              >
                Own
              </button>
              <button
                onClick={() => {
                  handleInputChange('homeOwnership', 'rent');
                }}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  formData.homeOwnership === 'rent'
                    ? 'bg-[var(--primary)] text-white'
                    : 'bg-[#f5f5f3] text-[#031931] border-2 border-[#babbb7]'
                }`}
              >
                Rent
              </button>
            </div>
            {formData.homeOwnership === 'own' && (
              <div className="space-y-4 mt-6">
                <div>
                  <label className="block text-sm font-semibold text-[#031931] mb-2">Home value ($)</label>
                  <input
                    type="number"
                    placeholder="$0"
                    value={formData.homeValue}
                    onChange={(e) => handleInputChange('homeValue', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-[#babbb7] rounded-lg focus:border-[var(--primary)] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#031931] mb-2">
                    Remaining mortgage balance ($)
                  </label>
                  <input
                    type="number"
                    placeholder="$0"
                    value={formData.mortgageBalance}
                    onChange={(e) => handleInputChange('mortgageBalance', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-[#babbb7] rounded-lg focus:border-[var(--primary)] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#031931] mb-2">
                    Monthly mortgage payment ($)
                  </label>
                  <input
                    type="number"
                    placeholder="$0"
                    value={formData.mortgagePayment}
                    onChange={(e) => handleInputChange('mortgagePayment', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-[#babbb7] rounded-lg focus:border-[var(--primary)] outline-none"
                  />
                </div>
              </div>
            )}
            {formData.homeOwnership === 'rent' && (
              <div>
                <label className="block text-sm font-semibold text-[#031931] mb-2">Monthly rent ($)</label>
                <input
                  type="number"
                  placeholder="$0"
                  value={formData.rentPayment}
                  onChange={(e) => handleInputChange('rentPayment', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-[#babbb7] rounded-lg focus:border-[var(--primary)] outline-none"
                />
              </div>
            )}
          </div>
        );

      case 12:
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-[#031931]">Other Debt</h2>
            <p className="text-lg text-[#5a5a57]">Besides your mortgage, do you have any other debt?</p>
            <div className="flex gap-4">
              <button
                onClick={() => {
                  handleInputChange('hasOtherDebt', true);
                }}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  formData.hasOtherDebt
                    ? 'bg-[var(--primary)] text-white'
                    : 'bg-[#f5f5f3] text-[#031931] border-2 border-[#babbb7]'
                }`}
              >
                Yes
              </button>
              <button
                onClick={() => {
                  handleInputChange('hasOtherDebt', false);
                  handleInputChange('debtTypes', []);
                }}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  !formData.hasOtherDebt
                    ? 'bg-[var(--primary)] text-white'
                    : 'bg-[#f5f5f3] text-[#031931] border-2 border-[#babbb7]'
                }`}
              >
                No
              </button>
            </div>
            {formData.hasOtherDebt && (
              <div className="space-y-3 mt-6">
                <p className="font-semibold text-[#031931]">Which types of debt do you have?</p>
                {debtOptions.map((debt) => (
                  <label key={debt} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.debtTypes.includes(debt)}
                      onChange={() => handleDebtToggle(debt)}
                      className="w-5 h-5"
                    />
                    <span className="text-lg text-[#5a5a57]">{debt}</span>
                  </label>
                ))}
              </div>
            )}
          </div>
        );

      case 13:
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-[#031931]">Debt Balances</h2>
            <p className="text-lg text-[#5a5a57]">Enter the balance for each type of debt</p>
            <div className="space-y-4">
              {formData.debtTypes.map((debt) => (
                <div key={debt}>
                  <label className="block text-sm font-semibold text-[#031931] mb-2">{debt} Balance</label>
                  <input
                    type="number"
                    placeholder="$0"
                    value={formData.debtBalances[debt] || ''}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        debtBalances: { ...prev.debtBalances, [debt]: e.target.value },
                      }))
                    }
                    className="w-full px-4 py-3 border-2 border-[#babbb7] rounded-lg focus:border-[var(--primary)] outline-none"
                  />
                </div>
              ))}
            </div>
          </div>
        );

      case 14:
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-[#031931]">Life Expectancy</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-[#031931] mb-2">Your gender</label>
                <select
                  value={formData.gender}
                  onChange={(e) => handleInputChange('gender', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-[#babbb7] rounded-lg focus:border-[var(--primary)] outline-none"
                >
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.smoker}
                  onChange={(e) => handleInputChange('smoker', e.target.checked)}
                  className="w-5 h-5"
                />
                <span className="text-lg text-[#5a5a57]">I smoke</span>
              </label>
            </div>
            {formData.hasSpouse && (
              <>
                <div className="border-t-2 border-[#babbb7] pt-6 space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-[#031931] mb-2">Spouse's gender</label>
                    <select
                      value={formData.spouseGender}
                      onChange={(e) => handleInputChange('spouseGender', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-[#babbb7] rounded-lg focus:border-[var(--primary)] outline-none"
                    >
                      <option value="">Select gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.spouseSmoker}
                      onChange={(e) => handleInputChange('spouseSmoker', e.target.checked)}
                      className="w-5 h-5"
                    />
                    <span className="text-lg text-[#5a5a57]">Spouse smokes</span>
                  </label>
                </div>
              </>
            )}
          </div>
        );

      case 15:
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-[#031931]">Contact Information</h2>
            <div>
              <label className="block text-sm font-semibold text-[#031931] mb-2">ZIP/Postal Code</label>
              <input
                type="text"
                placeholder="A1A 1A1"
                value={formData.zipCode}
                onChange={(e) => handleInputChange('zipCode', e.target.value)}
                className="w-full px-4 py-3 border-2 border-[#babbb7] rounded-lg focus:border-[var(--primary)] outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#031931] mb-2">Email</label>
              <input
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="w-full px-4 py-3 border-2 border-[#babbb7] rounded-lg focus:border-[var(--primary)] outline-none"
              />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f5f5f3] to-white py-16 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-semibold text-[#5a5a57]">
              Step {visibleStep} of {totalSteps}
            </span>
            <span className="text-sm font-semibold text-[#5a5a57]">{Math.round(progressPercentage)}%</span>
          </div>
          <div className="w-full bg-[#babbb7] rounded-full h-2 overflow-hidden">
            <div
              className="bg-[var(--primary)] h-full transition-all duration-300"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>

        {/* Form Content */}
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
          {renderStep()}
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-4 justify-between">
          <button
            onClick={prevStep}
            disabled={validCurrentStep === 1}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              validCurrentStep === 1
                ? 'bg-[#babbb7] text-white cursor-not-allowed opacity-50'
                : 'bg-[#f5f5f3] text-[#031931] border-2 border-[#babbb7] hover:bg-[#e8e8e8]'
            }`}
          >
            Previous
          </button>
          {validCurrentStep < 15 ? (
            <button
              onClick={nextStep}
              className="px-8 py-3 bg-[var(--primary)] text-white rounded-lg font-semibold hover:opacity-90 transition-all"
            >
              Next
            </button>
          ) : (
            <button className="px-8 py-3 bg-[var(--primary)] text-white rounded-lg font-semibold hover:opacity-90 transition-all">
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default FinancialQuestionnaire;
