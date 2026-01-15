import MobileNav from '@/components/MobileNav';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Mission Statement - LevPlan',
  description: 'Learn about LevPlan\'s mission and commitment to your retirement success.',
};

export default function MissionStatement() {
  return (
    <main className="w-full bg-white">
      <MobileNav />
      <section className="pt-32 md:pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-[#031931] mb-12">
            LevPlan Mission Statement
          </h1>

          <div className="space-y-8 text-lg text-[#5a5a57] leading-relaxed">
            <div className="border-l-4 border-[#e7a832] pl-6 py-4">
              <p className="text-xl font-semibold text-[#031931] mb-4">
                LevPlan helps pre-retirees and retirees gain absolute clarity on when they can retire and confidently achieve the future they've worked so hard to build.
              </p>
            </div>

            <p>
              We create a privileged network of support where clients are truly heard, understood, and guided with unwavering ethics. Through detailed, relatable financial planning and honest conversations—even when the truth is difficult—we help you protect your family from unnecessary risks, save thousands in excessive fees and taxes, and retire with complete peace of mind.
            </p>

            <div className="border-l-4 border-[#e7a832] pl-6 py-4">
              <p className="text-lg font-semibold text-[#031931]">
                We put your best interest first, always.
              </p>
            </div>

            <p>
              We never recommend products or solutions that don't advance your goals in the greatest way possible, and we're committed to continuously advancing our knowledge and improving your success.
            </p>

            <p>
              LevPlan was created to be more competitive than large firms and comes a promise to always show up and be accountable.
            </p>

            <div className="border-l-4 border-[#e7a832] pl-6 py-4">
            <p className="text-lg font-semibold text-[#031931]">
              We're the advisors you can rely on for life.
            </p>
            </div>

            <div className="bg-[#031931] text-white p-8 rounded-lg">
              <p className="text-lg font-semibold">
                LevPlan is where people come when they need a start date for their retirement—and a trusted partner to help them get there.
              </p>
            </div>

            <p className="text-lg leading-relaxed mb-6 mt-8">
              I tell you this because retirement planning isn't just about money. It's about believing you deserve the life you want and having the courage to build it.
            </p>

            <h3 className="text-2xl font-bold text-[#031931] mt-10 mb-6">My Ideal Client</h3>

            <p className="text-lg leading-relaxed mb-6">
              My ideal clients are people aged 30-60 who have excellent saving habits and are open to working with an advisor to optimize their situation. You're already doing the right things—saving consistently, thinking ahead, being responsible. You don't need someone to scold you or start from scratch. You need someone to take what you're already doing and make it work exponentially harder for you.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              You want expert advice and a real relationship. You value transparency and you're willing to be open and honest about your finances, your goals, and your fears. And ideally, you're fun to talk to. This is your future we're designing—it should be engaging, even exciting.
            </p>

            <h3 className="text-2xl font-bold text-[#031931] mt-10 mb-6">My Promise to You</h3>

            <p className="text-lg leading-relaxed mb-6">
              When you work with me, I promise:
            </p>

            <ul className="space-y-4 mb-6 list-disc list-inside">
              <li className="text-lg"><strong>Accountability</strong>—I do what I say I'll do</li>
              <li className="text-lg"><strong>Availability</strong>—you're not a file number, and I'm here for quick consults and fast service</li>
              <li className="text-lg"><strong>Transparency</strong>—no jargon designed to confuse you, no hidden fees, no strategies I can't explain in plain English</li>
            </ul>

            <p className="text-lg leading-relaxed mb-6">
              In return, I hope you'll be open and honest with me. The best plans come from real conversations about what matters most to you—not just what the spreadsheet says.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              That's why I do this. I remember what it felt like to not believe in myself, to miss opportunities, to feel stuck. Now I get to spend my days showing people they have more options, more freedom, and more possibilities than they realized.
            </p>

            <h3 className="text-2xl font-bold text-[#031931] mt-10 mb-6">Let's Talk</h3>

            <p className="text-lg leading-relaxed mb-6">
              If you value expert advice, clear communication, and a genuine partnership in planning your retirement, I'd love to hear from you.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              Whether you're 35 and just starting to think seriously about retirement, 50 and trying to figure out if early retirement is possible, or 62 and optimizing your CPP and OAS strategy, I can help.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}