import MobileNav from '@/components/MobileNav';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Our Blog - LevPlan',
  description: 'Financial tips, strategies, and insights from LevPlan experts.',
};

export default function Blog() {
  const articles = [
    {
      title: 'How to Retire Early: A 10-Year Plan',
      date: 'January 15, 2024',
      category: 'Retirement Planning',
      excerpt: 'Discover proven strategies to accelerate your path to early retirement. Learn about RRSP optimization, tax-efficient investing, and more.',
      readTime: '8 min read',
    },
    {
      title: 'The Ultimate Debt Payoff Strategy',
      date: 'January 12, 2024',
      category: 'Debt Management',
      excerpt: 'Compare popular debt elimination methods like the snowball and avalanche strategies. Find out which is best for your situation.',
      readTime: '6 min read',
    },
    {
      title: 'TFSA vs RRSP: Which Should You Max Out First?',
      date: 'January 8, 2024',
      category: 'Investing',
      excerpt: 'A detailed comparison of registered accounts and which one deserves your contributions first based on your income and goals.',
      readTime: '10 min read',
    },
    {
      title: 'Life Insurance 101: What You Actually Need',
      date: 'January 1, 2024',
      category: 'Insurance Planning',
      excerpt: 'Understand different types of life insurance and how much coverage your family needs to stay protected.',
      readTime: '7 min read',
    },
    {
      title: 'Investment Myths That Cost You Money',
      date: 'December 28, 2023',
      category: 'Investing',
      excerpt: 'We debunk common investment myths that prevent people from building real wealth. Don\'t fall for these misconceptions.',
      readTime: '9 min read',
    },
    {
      title: 'Building a 6-Month Emergency Fund',
      date: 'December 21, 2023',
      category: 'Financial Planning',
      excerpt: 'Why emergency funds matter and how to build one without sacrificing your investment goals.',
      readTime: '5 min read',
    },
  ];

  return (
    <main className="w-full bg-white">
      <MobileNav />
      <section className="min-h-screen pt-32 md:pt-24 pb-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-[#031931] mb-6">
              LevPlan Blog
            </h1>
            <p className="text-lg text-[#5a5a57] max-w-3xl">
              Expert financial tips, strategies, and insights to help you make informed decisions about your money.
            </p>
          </div>

          <div className="space-y-6">
            {articles.map((article, index) => (
              <article
                key={index}
                className="p-6 md:p-8 bg-[#f6f6f6] rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                <div className="flex flex-col gap-4 mb-3">
                  <h2 className="text-2xl font-bold text-[#031931]">
                    {article.title}
                  </h2>
                  <span className="text-sm font-semibold text-white bg-[var(--primary)] px-3 py-1 rounded-full whitespace-nowrap w-fit">
                    {article.category}
                  </span>
                </div>
                <p className="text-[#5a5a57] mb-4 leading-relaxed">
                  {article.excerpt}
                </p>
                <div className="flex gap-4 text-sm text-[#5a5a57]">
                  <span>{article.date}</span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button className="px-8 py-3 bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)] text-white font-bold rounded-lg hover:shadow-lg transition-shadow duration-300">
              Load More Articles
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
