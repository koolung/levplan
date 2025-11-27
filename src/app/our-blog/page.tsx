import MobileNav from '@/components/MobileNav';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { prisma } from '@/lib/prisma';

export const metadata = {
  title: 'Our Blog - LevPlan',
  description: 'Financial tips, strategies, and insights from LevPlan experts.',
};

interface BlogArticle {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishedAt: Date;
}

export default async function Blog() {
  let articles: BlogArticle[] = [];

  try {
    articles = await prisma.blogPost.findMany({
      orderBy: { publishedAt: 'desc' },
      select: {
        id: true,
        title: true,
        slug: true,
        excerpt: true,
        category: true,
        readTime: true,
        publishedAt: true,
      },
    });
  } catch (error) {
    console.error('Failed to fetch blog posts:', error);
  }

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <main className="w-full bg-white">
      <MobileNav />
      <section 
        className="relative min-h-[400px] md:min-h-[500px] pt-32 md:pt-24 pb-16 px-4 bg-cover"
        style={{
          backgroundImage: 'url(/images/bg.jpg)',
          backgroundPosition: 'center 100%',
          backgroundSize: 'cover',
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#002349]/70"></div>
        
        {/* Content */}
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              LevPlan Blog
            </h1>
            <hr className="w-24 border-t-2 border-[#e7a832] mb-6" />
            <p className="text-lg text-white max-w-3xl">
              Expert financial tips, strategies, and insights to help you make informed decisions about your money.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-6">
            {articles.length > 0 ? (
              articles.map((article) => (
                <Link key={article.id} href={`/our-blog/${article.slug}`}>
                  <article
                    className="p-6 md:p-8 bg-[#f6f6f6] shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex flex-col gap-4 mb-3">
                      <h2 className="text-2xl font-bold text-[#031931]">
                        {article.title}
                      </h2>
                      <span className="text-sm font-semibold text-white bg-[#002349] px-3 py-1 whitespace-nowrap w-fit">
                        {article.category}
                      </span>
                    </div>
                    <p className="text-[#5a5a57] mb-4 leading-relaxed">
                      {article.excerpt}
                    </p>
                    <div className="flex gap-4 text-sm text-[#5a5a57]">
                      <span>{formatDate(article.publishedAt)}</span>
                      <span>•</span>
                      <span>{article.readTime}</span>
                    </div>
                  </article>
                </Link>
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-[#5a5a57] text-lg">No blog posts yet. Check back soon!</p>
              </div>
            )}
          </div>

          {articles.length > 0 && (
            <div className="mt-12 text-center">
              <button className="px-8 py-3 bg-[#002349] text-white uppercase font-light hover:shadow-lg transition-shadow duration-300">
                Load More Articles
              </button>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </main>
  );
}
