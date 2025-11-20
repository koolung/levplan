import MobileNav from '@/components/MobileNav';
import Footer from '@/components/Footer';
import Image from 'next/image';

export const metadata = {
  title: 'Free YouTube Guidance - LevPlan',
  description: 'Free financial planning videos and tutorials from LevPlan experts.',
};

export default function YouTubeGuidance() {
  const videos = [
    {
      title: 'How to Build a Diversified Investment Portfolio',
      duration: '12:45',
      category: 'Investing',
      uploadDate: 'December 2024',
      uploadedBy: 'Robert Levesque',
    },
    {
      title: 'Retirement Planning 101: The Basics',
      duration: '15:30',
      category: 'Retirement',
      uploadDate: 'November 2024',
      uploadedBy: 'Robert Levesque',
    },
    {
      title: 'Debt Elimination Strategies That Work',
      duration: '18:15',
      category: 'Debt Management',
      uploadDate: 'October 2024',
      uploadedBy: 'Robert Levesque',
    },
    {
      title: 'RRSP vs TFSA: Complete Comparison',
      duration: '10:20',
      category: 'Tax Planning',
      uploadDate: 'September 2024',
      uploadedBy: 'Robert Levesque',
    },
    {
      title: 'Life Insurance: Do You Need It?',
      duration: '14:50',
      category: 'Insurance',
      uploadDate: 'August 2024',
      uploadedBy: 'Robert Levesque',
    },
    {
      title: 'Emergency Fund: How Much Do You Need?',
      duration: '9:35',
      category: 'Financial Basics',
      uploadDate: 'July 2024',
      uploadedBy: 'Robert Levesque',
    },
    {
      title: 'Tax Optimization Strategies for 2024',
      duration: '16:40',
      category: 'Tax Planning',
      uploadDate: 'June 2024',
      uploadedBy: 'Robert Levesque',
    },
    {
      title: 'Estate Planning 101',
      duration: '13:20',
      category: 'Estate Planning',
      uploadDate: 'May 2024',
      uploadedBy: 'Robert Levesque',
    },
  ];

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
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Free Financial Guidance Videos
            </h1>
            <hr className="w-24 border-t-2 border-[#e7a832] mb-6" />

            <p className="text-lg text-white max-w-3xl">
              Subscribe to our YouTube channel for free financial planning tips, strategies, and tutorials from certified experts. No signup required!
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-6">
            {videos.map((video, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row gap-0 md:gap-6 bg-[#f6f6f6] shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden"
              >
                {/* Video Thumbnail */}
                <div className="relative bg-gray-400 w-full md:w-48 md:flex-shrink-0 h-32 md:h-40 flex items-center justify-center text-4xl text-white overflow-hidden">
                  <Image
                    src="/images/thumbnail.jpg"
                    alt={video.title}
                    fill
                    className="object-cover"
                  />
                  <span className="relative bg-[transparent] z-10">▶</span>
                </div>

                {/* Article Content */}
                <article className="p-6 md:p-8 flex-1 flex flex-col justify-center">
                  <div className="flex flex-col gap-4 mb-3">
                    <h2 className="text-2xl font-medium text-[#031931]">
                      {video.title}
                    </h2>
                    <span className="text-sm font-semibold text-white bg-[#002349] px-3 py-1 whitespace-nowrap w-fit">
                      {video.category}
                    </span>
                  </div>
                  <div className="flex gap-4 text-sm text-[#5a5a57]">
                    <span>{video.duration}</span>
                    <span>•</span>
                    <span>{video.uploadDate}</span>
                    <span>•</span>
                    <span>by {video.uploadedBy}</span>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
