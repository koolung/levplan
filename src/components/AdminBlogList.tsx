'use client';

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  readTime: string;
  coverImage: string | null;
  publishedAt: string;
}

interface AdminBlogListProps {
  posts: BlogPost[];
  onEdit: (post: BlogPost) => void;
  onDelete: (id: number) => void;
}

export default function AdminBlogList({
  posts,
  onEdit,
  onDelete,
}: AdminBlogListProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  if (posts.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-md p-12 text-center">
        <p className="text-[#5a5a57] text-lg">No blog posts yet. Create your first post!</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <div
          key={post.id}
          className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
        >
          <div className="flex gap-6">
            {/* Image */}
            <div className="w-32 h-32 bg-gradient-to-br from-[#002349] to-[#e7a832] rounded-lg overflow-hidden flex-shrink-0">
              {post.coverImage ? (
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-white text-center px-2">
                  <span className="text-xs font-semibold">{post.title}</span>
                </div>
              )}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="min-w-0">
                  <h3 className="text-lg font-bold text-[#002349] mb-2 line-clamp-1">
                    {post.title}
                  </h3>
                  <div className="flex gap-3 flex-wrap mb-2">
                    <span className="text-xs font-semibold text-white bg-[#002349] px-2 py-1">
                      {post.category}
                    </span>
                    <span className="text-xs text-[#5a5a57]">{formatDate(post.publishedAt)}</span>
                    <span className="text-xs text-[#5a5a57]">•</span>
                    <span className="text-xs text-[#5a5a57]">{post.readTime}</span>
                  </div>
                </div>
              </div>

              <p className="text-sm text-[#5a5a57] line-clamp-2 mb-4">
                {post.excerpt}
              </p>

              <div className="flex gap-3">
                <button
                  onClick={() => onEdit(post)}
                  className="px-4 py-2 bg-[#002349] text-white text-sm font-semibold rounded-lg hover:bg-[#003d6b] transition-colors"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(post.id)}
                  className="px-4 py-2 bg-red-500 text-white text-sm font-semibold rounded-lg hover:bg-red-600 transition-colors"
                >
                  Delete
                </button>
                <a
                  href={`/our-blog/${post.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-[#e7a832] text-white text-sm font-semibold rounded-lg hover:bg-[#d99725] transition-colors"
                >
                  View
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
