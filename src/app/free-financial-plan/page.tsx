import MobileNav from '@/components/MobileNav';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Get Your Free Financial Plan - LevPlan',
  description: 'Start your personalized financial planning journey with a free consultation from LevPlan.',
};

export default function FreeFinancialPlan() {
  return (
    <main className="w-full bg-white">
      <MobileNav />
      <section className="min-h-screen pt-32 md:pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-[#031931] mb-6">
              Get Your Free Financial Plan
            </h1>
            <p className="text-lg text-[#5a5a57] max-w-2xl mb-8">
              Take the first step towards financial freedom. Our free consultation gives you a personalized financial roadmap tailored to your unique situation and goals.
            </p>

            <div className="bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)] text-white p-6 rounded-lg mb-8">
              <p className="font-semibold mb-2">✓ Completely Free - No Credit Card Required</p>
              <p className="font-semibold mb-2">✓ No Sales Pressure - Honest Expert Advice</p>
              <p className="font-semibold">✓ Personalized Plan - Built Just For You</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Left column - Form */}
            <div className="lg:col-span-2 bg-[#f5f5f3] p-8 rounded-lg border-2 border-[#babbb7]">
              <h2 className="text-2xl font-bold text-[#031931] mb-6">
                Schedule Your Free Consultation
              </h2>

              <form className="space-y-4">
                <div>
                  <label className="block text-[#031931] font-semibold mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-2 border-2 border-[#babbb7] rounded-lg focus:border-[var(--primary)] focus:outline-none"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#031931] font-semibold mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full px-4 py-2 border-2 border-[#babbb7] rounded-lg focus:border-[var(--primary)] focus:outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[#031931] font-semibold mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      placeholder="(123) 456-7890"
                      className="w-full px-4 py-2 border-2 border-[#babbb7] rounded-lg focus:border-[var(--primary)] focus:outline-none"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#031931] font-semibold mb-2">
                    Annual Income Range
                  </label>
                  <select className="w-full px-4 py-2 border-2 border-[#babbb7] rounded-lg focus:border-[var(--primary)] focus:outline-none">
                    <option>$0 - $50,000</option>
                    <option>$50,000 - $100,000</option>
                    <option>$100,000 - $250,000</option>
                    <option>$250,000+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[#031931] font-semibold mb-2">
                    Primary Financial Goal
                  </label>
                  <select className="w-full px-4 py-2 border-2 border-[#babbb7] rounded-lg focus:border-[var(--primary)] focus:outline-none">
                    <option>Retirement Planning</option>
                    <option>Debt Elimination</option>
                    <option>Investment Strategy</option>
                    <option>Insurance Planning</option>
                    <option>Wealth Building</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[#031931] font-semibold mb-2">
                    Preferred Consultation Method
                  </label>
                  <div className="space-y-2">
                    {['Phone Call', 'Video Conference', 'In-Person'].map((method) => (
                      <label key={method} className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="method" value={method} defaultChecked={method === 'Phone Call'} />
                        <span className="text-[#031931]">{method}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-[#031931] font-semibold mb-2">
                    Tell Us About Yourself (Optional)
                  </label>
                  <textarea
                    placeholder="Share any additional information about your financial situation..."
                    className="w-full px-4 py-2 border-2 border-[#babbb7] rounded-lg focus:border-[var(--primary)] focus:outline-none h-24"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)] text-white font-bold rounded-lg hover:shadow-lg transition-shadow duration-300"
                >
                  Get Started Now - It's Free!
                </button>

                <p className="text-xs text-[#5a5a57] text-center">
                  We'll contact you within 24 business hours to schedule your free consultation.
                </p>
              </form>
            </div>

            {/* Right column - Benefits */}
            <div>
              <h2 className="text-2xl font-bold text-[#031931] mb-6">
                What You'll Get
              </h2>

              <div className="space-y-6">
                {[
                  { icon: '🎯', title: 'Retirement Analysis', desc: 'Calculate your ideal retirement age and income' },
                  { icon: '📉', title: 'Debt Strategy', desc: 'Personalized debt elimination plan' },
                  { icon: '📈', title: 'Investment Plan', desc: 'Tailored investment strategy' },
                  { icon: '🛡️', title: 'Insurance Review', desc: 'Coverage analysis and recommendations' },
                  { icon: '👨‍💼', title: 'Expert Advice', desc: 'One-on-one consultation with a CFP' },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="text-3xl mb-2">{item.icon}</div>
                    <h3 className="font-bold text-[#031931] mb-1">{item.title}</h3>
                    <p className="text-sm text-[#5a5a57]">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-[#f5f5f3] rounded-lg border-2 border-[#babbb7]">
                <p className="text-sm font-semibold text-[#031931] mb-2">
                  🔒 Your Information is Secure
                </p>
                <p className="text-xs text-[#5a5a57]">
                  We use enterprise-grade encryption and never share your information without consent.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-white border-2 border-[#babbb7] p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-[#031931] mb-6">
              Common Questions
            </h2>

            <div className="space-y-4">
              {[
                { q: 'Is this really free?', a: 'Yes! Your initial consultation and financial plan assessment are completely free with no hidden fees.' },
                { q: 'Do I need to have investments to get a plan?', a: 'Not at all. We help people at all financial stages build their wealth from the ground up.' },
                { q: 'How long does the consultation take?', a: 'Your initial consultation typically takes 30-45 minutes. Our comprehensive review takes about 1-2 weeks.' },
                { q: 'Will you pressure me to buy products?', a: 'No. We focus on your best interests with no sales targets or commission incentives.' },
              ].map((item, i) => (
                <div key={i}>
                  <h3 className="font-bold text-[#031931] mb-2">{item.q}</h3>
                  <p className="text-[#5a5a57] text-sm mb-4">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
