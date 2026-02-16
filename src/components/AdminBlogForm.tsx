'use client';

import { FormEvent, useState, useEffect } from 'react';

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

interface AdminBlogFormProps {
  post?: BlogPost | null;
  onSaved: () => void;
}

export default function AdminBlogForm({ post, onSaved }: AdminBlogFormProps) {
  const [title, setTitle] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('Financial Planning');
  const [readTime, setReadTime] = useState('5 min read');
  const [coverImage, setCoverImage] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [uploadingImage, setUploadingImage] = useState(false);

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setExcerpt(post.excerpt);
      setContent(post.content);
      setCategory(post.category);
      setReadTime(post.readTime);
      setCoverImage(post.coverImage);
    }
  }, [post]);

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setImageFile(file);
    setUploadingImage(true);

    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('/api/admin/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const data = await response.json();
        setError(data.message || 'Image upload failed');
        return;
      }

      const data = await response.json();
      setCoverImage(data.url);
      setError('');
    } catch (err) {
      setError('Failed to upload image');
      console.error(err);
    } finally {
      setUploadingImage(false);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const method = post ? 'PUT' : 'POST';
      const url = post ? `/api/admin/blog/${post.id}` : '/api/admin/blog';

      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title,
          excerpt,
          content,
          category,
          readTime,
          coverImage,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        setError(data.message || 'Failed to save post');
        return;
      }

      onSaved();
    } catch (err) {
      setError('An error occurred. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-8 max-w-4xl">
      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-700">{error}</p>
        </div>
      )}

      <div className="space-y-6">
        {/* Title */}
        <div>
          <label className="block text-sm font-semibold text-[#002349] mb-2">
            Title *
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 border border-[#e0e0e0] rounded-lg focus:outline-none focus:border-[#e7a832]"
            placeholder="Blog post title"
            required
          />
        </div>

        {/* Excerpt */}
        <div>
          <label className="block text-sm font-semibold text-[#002349] mb-2">
            Excerpt (Auto-generated from title if left empty)
          </label>
          <textarea
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
            className="w-full px-4 py-2 border border-[#e0e0e0] rounded-lg focus:outline-none focus:border-[#e7a832] min-h-20"
            placeholder="Short description of the post"
          />
        </div>

        {/* Cover Image */}
        <div>
          <label className="block text-sm font-semibold text-[#002349] mb-2">
            Cover Image
          </label>
          <div className="space-y-3">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              disabled={uploadingImage}
              className="block w-full text-sm text-[#5a5a57] file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-[#e7a832] file:text-white hover:file:bg-[#d99725]"
            />
            {uploadingImage && <p className="text-sm text-[#5a5a57]">Uploading image...</p>}
            {coverImage && (
              <div className="w-full h-48 bg-[#f5f5f5] rounded-lg border border-[#e0e0e0] overflow-hidden">
                <img
                  src={coverImage}
                  alt="Cover preview"
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-semibold text-[#002349] mb-2">
            Category
          </label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-4 py-2 border border-[#e0e0e0] rounded-lg focus:outline-none focus:border-[#e7a832]"
            placeholder="Financial Planning"
          />
        </div>

        {/* Read Time */}
        <div>
          <label className="block text-sm font-semibold text-[#002349] mb-2">
            Estimated Read Time
          </label>
          <input
            type="text"
            value={readTime}
            onChange={(e) => setReadTime(e.target.value)}
            className="w-full px-4 py-2 border border-[#e0e0e0] rounded-lg focus:outline-none focus:border-[#e7a832]"
            placeholder="5 min read"
          />
        </div>

        {/* Content */}
        <div>
          <label className="block text-sm font-semibold text-[#002349] mb-2">
            Content (Markdown supported) *
          </label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full px-4 py-2 border border-[#e0e0e0] rounded-lg focus:outline-none focus:border-[#e7a832] font-mono text-sm min-h-96"
            placeholder="Write your blog post content here. You can use Markdown formatting."
            required
          />
          <p className="text-xs text-[#5a5a57] mt-2">
            💡 Tip: You can use Markdown formatting for headings, bold, lists, etc.
          </p>
        </div>

        {/* Submit Button */}
        <div className="flex gap-4 pt-4">
          <button
            type="submit"
            disabled={loading || uploadingImage}
            className="flex-1 py-3 bg-[#e7a832] text-white font-semibold rounded-lg hover:bg-[#d99725] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Saving...' : post ? 'Update Post' : 'Create Post'}
          </button>
        </div>
      </div>
    </form>
  );
}
