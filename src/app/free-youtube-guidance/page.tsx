import MobileNav from '@/components/MobileNav';
import Footer from '@/components/Footer';

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
      views: '5.2K',
    },
    {
      title: 'Retirement Planning 101: The Basics',
      duration: '15:30',
      category: 'Retirement',
      views: '8.9K',
    },
    {
      title: 'Debt Elimination Strategies That Work',
      duration: '18:15',
      category: 'Debt Management',
      views: '12.4K',
    },
    {
      title: 'RRSP vs TFSA: Complete Comparison',
      duration: '10:20',
      category: 'Tax Planning',
      views: '3.7K',
    },
    {
      title: 'Life Insurance: Do You Need It?',
      duration: '14:50',
      category: 'Insurance',
      views: '6.1K',
    },
    {
      title: 'Emergency Fund: How Much Do You Need?',
      duration: '9:35',
      category: 'Financial Basics',
      views: '4.3K',
    },
    {
      title: 'Tax Optimization Strategies for 2024',
      duration: '16:40',
      category: 'Tax Planning',
      views: '7.8K',
    },
    {
      title: 'Estate Planning 101',
      duration: '13:20',
      category: 'Estate Planning',
      views: '2.9K',
    },
  ];

  return (
    <main className="w-full bg-white">
      <MobileNav />
      <section className="min-h-screen pt-32 md:pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-[#031931] mb-6">
              Free Financial Guidance Videos
            </h1>
            <p className="text-lg text-[#5a5a57] max-w-3xl">
              Subscribe to our YouTube channel for free financial planning tips, strategies, and tutorials from certified experts. No signup required!
            </p>
          </div>

          <div className="mb-12">
            <button className="px-6 py-3 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition-colors duration-300 flex items-center gap-2">
              ▶ Subscribe on YouTube
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {videos.map((video, index) => (
              <div
                key={index}
                className="bg-[#f5f5f3] rounded-lg overflow-hidden border-2 border-[#babbb7] hover:border-[var(--foreground)] transition-all duration-300 cursor-pointer hover:shadow-lg"
              >
                {/* Video Thumbnail */}
                <div className="bg-gray-400 h-32 flex items-center justify-center text-4xl text-white">
                  ▶
                </div>

                {/* Video Info */}
                <div className="p-4">
                  <h3 className="font-bold text-[#031931] mb-2 text-sm line-clamp-2">
                    {video.title}
                  </h3>
                  <div className="space-y-2 text-xs text-[#5a5a57]">
                    <div className="flex justify-between">
                      <span>{video.duration}</span>
                      <span className="text-[var(--primary)] font-semibold">{video.views}</span>
                    </div>
                    <div className="inline-block bg-white px-2 py-1 rounded border border-[#babbb7]">
                      {video.category}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)] text-white p-8 md:p-12 rounded-lg">
            <h2 className="text-3xl font-bold mb-4">Popular Playlists</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { name: 'Investing Basics', count: '12 videos' },
                { name: 'Retirement Planning', count: '8 videos' },
                { name: 'Debt Elimination', count: '6 videos' },
                { name: 'Tax Strategies', count: '10 videos' },
              ].map((playlist, i) => (
                <div key={i} className="flex items-center justify-between cursor-pointer hover:opacity-80 transition-opacity">
                  <span className="text-lg font-semibold">{playlist.name}</span>
                  <span className="text-sm opacity-75">{playlist.count}</span>
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
