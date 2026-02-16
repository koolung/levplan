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
  coverImage: string | null;
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
        coverImage: true,
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
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.length > 0 ? (
              articles.map((article) => (
                <Link key={article.id} href={`/our-blog/${article.slug}`}>
                  <article
                    className="h-full bg-white border border-[#e0e0e0] shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden flex flex-col"
                  >
                    {/* Image */}
                    <div className="relative h-48 bg-gradient-to-br from-[#002349] to-[#e7a832] overflow-hidden">
                      {article.coverImage ? (
                        <img
                          src={article.coverImage}
                          alt={article.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-white text-center px-4">
                          <span className="text-sm font-semibold">{article.title}</span>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-grow">
                      {/* Category Badge */}
                      <span className="text-sm font-semibold text-white bg-[#002349] px-3 py-1 whitespace-nowrap w-fit mb-4">
                        {article.category}
                      </span>

                      {/* Date and Read Time */}
                      <div className="flex gap-4 text-xs text-[#5a5a57] mb-3">
                        <span>{formatDate(article.publishedAt)}</span>
                        <span>•</span>
                        <span>{article.readTime}</span>
                      </div>

                      {/* Title */}
                      <h2 className="text-lg font-bold text-[#031931] mb-3 line-clamp-2">
                        {article.title}
                      </h2>

                      {/* Description */}
                      <p className="text-[#5a5a57] leading-relaxed text-sm line-clamp-3 flex-grow">
                        {article.excerpt}
                      </p>

                      {/* Read More Link */}
                      <div className="mt-4 pt-4 border-t border-[#e0e0e0]">
                        <span className="text-[#002349] font-semibold text-sm hover:text-[#e7a832] transition-colors duration-200">
                          Read More →
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))
            ) : (
              <div className="text-center py-12 col-span-full">
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
