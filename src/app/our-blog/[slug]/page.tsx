import MobileNav from '@/components/MobileNav';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { prisma } from '@/lib/prisma';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  
  const post = await prisma.blogPost.findUnique({
    where: { slug },
  });

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  
  const post = await prisma.blogPost.findUnique({
    where: { slug },
  });

  if (!post) {
    notFound();
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
      
      {/* Hero Section */}
      <section 
        className="relative min-h-[400px] md:min-h-[500px] pt-32 md:pt-24 pb-16 px-4 bg-cover"
        style={{
          backgroundImage: 'url(/images/bg.jpg)',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center 100%',
          backgroundSize: 'cover',
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        {/* Content */}
        <div className="max-w-3xl mx-auto relative z-10">
          <Link href="/our-blog" className="text-white hover:text-[#e7a832] transition-colors mb-6 inline-block">
            ← Back to Blog
          </Link>
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {post.title}
            </h1>
            <div className="flex flex-col gap-4">
              <span className="text-sm font-semibold text-white bg-[#002349] px-3 py-1 whitespace-nowrap w-fit">
                {post.category}
              </span>
              <div className="flex gap-4 text-sm text-gray-200">
                <span>{formatDate(post.publishedAt)}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <article className="prose prose-invert max-w-none">
            <div className="text-[#5a5a57] leading-relaxed whitespace-pre-wrap">
              {post.content}
            </div>
          </article>

          {/* Back Link */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link 
              href="/our-blog"
              className="inline-flex items-center gap-2 text-[#002349] hover:text-[#e7a832] font-semibold transition-colors"
            >
              ← Back to Blog
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
