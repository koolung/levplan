# LevPlan Blog System - Complete Implementation

This is a fully integrated blog system for the LevPlan website using Prisma ORM with PostgreSQL, maintaining your existing blog page design.

## 📁 What's Been Created

### Database & ORM
- ✅ `prisma/schema.prisma` - Database schema with BlogPost model
- ✅ `prisma/seed.ts` - Sample blog post seeder
- ✅ `src/lib/prisma.ts` - Prisma client singleton

### API Routes
- ✅ `src/app/api/blog/route.ts` - GET all blog posts
- ✅ `src/app/api/blog/[slug]/route.ts` - GET single blog post by slug

### Frontend Pages
- ✅ `src/app/our-blog/page.tsx` - Updated to fetch posts from database
- ✅ `src/app/our-blog/[slug]/page.tsx` - Individual blog post detail page

### Configuration & Documentation
- ✅ `BLOG_SETUP_GUIDE.md` - Comprehensive setup guide
- ✅ `setup-blog.sh` - Automated setup script (macOS/Linux)
- ✅ `setup-blog.bat` - Automated setup script (Windows)
- ✅ Updated `package.json` with Prisma dependencies

## 🚀 Quick Start

### Option 1: Automated Setup (Recommended)

**Windows:**
```bash
.\setup-blog.bat
```

**macOS/Linux:**
```bash
chmod +x setup-blog.sh
./setup-blog.sh
```

### Option 2: Manual Setup

```bash
# 1. Install dependencies
npm install

# 2. Create database migration
npx prisma migrate dev --name init

# 3. Seed sample data (optional)
npx prisma db seed

# 4. Start development server
npm run dev
```

## 📊 Database Schema

```sql
BlogPost {
  id          Int       @id @default(autoincrement())
  title       String    -- Blog post title
  slug        String    @unique -- URL slug
  excerpt     String    -- Short summary
  content     String    -- Full post content
  coverImage  String?   -- Optional cover image
  category    String    -- Post category
  readTime    String    -- "X min read"
  publishedAt DateTime  @default(now())
  updatedAt   DateTime  @updatedAt
}
```

## 🔗 API Endpoints

### Get All Blog Posts
```http
GET /api/blog

Response:
[
  {
    "id": 1,
    "title": "How to Retire Early",
    "slug": "how-to-retire-early",
    "excerpt": "Discover proven strategies...",
    "category": "Retirement Planning",
    "readTime": "8 min read",
    "publishedAt": "2024-01-15T10:30:00Z"
  }
]
```

### Get Single Blog Post
```http
GET /api/blog/how-to-retire-early

Response:
{
  "id": 1,
  "title": "How to Retire Early",
  "slug": "how-to-retire-early",
  "excerpt": "Discover proven strategies...",
  "content": "Full article content...",
  "category": "Retirement Planning",
  "readTime": "8 min read",
  "publishedAt": "2024-01-15T10:30:00Z",
  "updatedAt": "2024-01-15T10:30:00Z"
}
```

## ✏️ Managing Blog Posts

### Method 1: Prisma Studio (Visual)
```bash
npx prisma studio
```
Opens a web UI for managing posts at `http://localhost:5555`

### Method 2: Create Programmatically
```typescript
import { prisma } from '@/lib/prisma';

const post = await prisma.blogPost.create({
  data: {
    title: 'Your Blog Post',
    slug: 'your-blog-post',
    excerpt: 'Short description...',
    content: 'Full article content...',
    category: 'Financial Planning',
    readTime: '5 min read',
  },
});
```

### Method 3: SQL Query
```sql
INSERT INTO "BlogPost" (title, slug, excerpt, content, category, "readTime")
VALUES (
  'Post Title',
  'post-title',
  'Excerpt...',
  'Content...',
  'Category',
  '5 min read'
);
```

## 🎨 Design Integration

The blog system maintains your existing design:
- ✅ Background image hero section with dark overlay
- ✅ White text on dark background
- ✅ Same card layout for blog posts
- ✅ Responsive design (mobile/desktop)
- ✅ Same color scheme (#031931, #e7a832)
- ✅ Individual post pages with full content display

## 📱 Features

### Blog Listing Page (`/our-blog`)
- Displays all blog posts from database
- Sorted by publish date (newest first)
- Clickable cards linking to individual posts
- Category badges
- Read time estimates
- Formatted publication dates
- "Back to Blog" link on individual posts

### Individual Post Page (`/our-blog/[slug]`)
- Full article content
- Hero section with post title
- Category and metadata
- Dynamic SEO metadata
- Navigation links back to listing

## 🔧 Environment Variables

Required in `.env`:
```
PRISMA_DATABASE_URL="postgres://user:password@host:port/database?sslmode=require"
```

Already configured in your `.env` file.

## 📦 Dependencies Added

```json
{
  "dependencies": {
    "@prisma/client": "^5.8.0"
  },
  "devDependencies": {
    "prisma": "^5.8.0",
    "ts-node": "^10.9.2"
  }
}
```

## 🚢 Deployment to Vercel

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Add Prisma blog system"
   git push origin main
   ```

2. **Connect to Vercel:**
   - Import project from GitHub
   - Add environment variable in Vercel dashboard:
     ```
     PRISMA_DATABASE_URL=<your-production-database-url>
     ```

3. **Vercel will automatically:**
   - Install dependencies
   - Run Prisma migrations
   - Build your Next.js app

## 🐛 Troubleshooting

### Database Connection Failed
```bash
# Verify connection string
echo $PRISMA_DATABASE_URL

# Test connection
npx prisma db execute --stdin < /dev/null
```

### Missing Blog Posts
1. Check Prisma Studio: `npx prisma studio`
2. Verify API: `curl http://localhost:3000/api/blog`
3. Check browser console for errors

### Migration Issues
```bash
# Reset database (WARNING: deletes all data!)
npx prisma migrate reset

# Create new migration
npx prisma migrate dev --name migration_name
```

### Prisma Client Generation
```bash
# Regenerate Prisma client
npx prisma generate

# Check generated files
ls node_modules/.prisma/
```

## 📚 Useful Commands

```bash
# View database UI
npx prisma studio

# Create migration
npx prisma migrate dev --name migration_name

# Reset database
npx prisma migrate reset

# Seed database
npx prisma db seed

# View migration history
npx prisma migrate status

# Generate Prisma client
npx prisma generate

# Format schema
npx prisma format
```

## 🎯 Next Steps

1. ✅ Run automated setup: `setup-blog.bat` or `setup-blog.sh`
2. ✅ Start dev server: `npm run dev`
3. ✅ Visit `/our-blog` to see blog
4. ✅ Use Prisma Studio to add more posts
5. ✅ Deploy to Vercel when ready

## 💡 Tips

- Use slugs without spaces (e.g., "my-blog-post")
- Keep excerpts under 160 characters for SEO
- Add 5-8 min read time for typical articles
- Format content with proper line breaks
- Consider adding images to `public/` for featured images

## 🔐 Security Notes

- Database credentials are in `.env` (never commit!)
- `.env` is in `.gitignore` for safety
- API is read-only (no admin endpoints yet)
- Consider adding authentication for admin panel

## 📝 Sample Posts Included

The seed script includes 3 sample blog posts:
1. How to Retire Early: A 10-Year Plan
2. The Ultimate Debt Payoff Strategy
3. TFSA vs RRSP: Which Should You Max Out First?

These are automatically created during setup.

## 🤝 Support

For issues with:
- **Prisma**: https://www.prisma.io/docs/
- **Next.js**: https://nextjs.org/docs
- **PostgreSQL**: https://www.postgresql.org/docs/

---

**Blog System Status:** ✅ Ready for Production

All files are configured and ready to use. Follow the Quick Start section above to begin!
