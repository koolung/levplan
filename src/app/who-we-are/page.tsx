import MobileNav from '@/components/MobileNav';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Who We Are - LevPlan',
  description: 'Learn about LevPlan\'s mission, team, and commitment to your financial success.',
};

export default function WhoWeAre() {
  return (
    <main className="w-full bg-white">
      <MobileNav />
      <section className="min-h-screen pt-32 md:pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-[#031931] mb-8">
            Who We Are
          </h1>
          
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-[#031931] mb-4">Our Mission</h2>
              <p className="text-lg text-[#5a5a57] leading-relaxed">
                At LevPlan, we believe everyone deserves access to expert financial guidance. Our mission is to empower Canadians to take control of their financial future through personalized, comprehensive planning that adapts to their unique goals and circumstances.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#031931] mb-4">Our Story</h2>
              <p className="text-lg text-[#5a5a57] leading-relaxed">
                Founded by a team of certified financial planners, LevPlan emerged from a simple observation: most financial advice is either too generic or too expensive. We decided to change that. By combining deep industry expertise with innovative technology, we've created a platform that delivers personalized financial planning to everyone—not just the wealthy.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#031931] mb-4">Our Values</h2>
              <ul className="space-y-4 text-lg text-[#5a5a57]">
                <li className="flex gap-3">
                  <span className="text-[var(--foreground)] font-bold">✓</span>
                  <span><strong>Transparency:</strong> We believe in clear, honest communication about fees, strategies, and recommendations.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[var(--foreground)] font-bold">✓</span>
                  <span><strong>Expertise:</strong> Our team consists of certified financial planners with years of industry experience.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[var(--foreground)] font-bold">✓</span>
                  <span><strong>Client-Centric:</strong> Your goals drive our recommendations, not commissions or sales targets.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[var(--foreground)] font-bold">✓</span>
                  <span><strong>Innovation:</strong> We continuously improve our tools and strategies to deliver better results.</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
