# Quick Reference Card - Blog System

## ⚡ One-Line Setup

**Windows:**
```powershell
npm install; .\setup-blog.bat
```

**macOS/Linux:**
```bash
npm install && chmod +x setup-blog.sh && ./setup-blog.sh
```

## 📍 Key Files

| File | Purpose |
|------|---------|
| `prisma/schema.prisma` | Database schema |
| `prisma/seed.ts` | Sample data |
| `src/lib/prisma.ts` | DB client |
| `src/app/api/blog/route.ts` | Get all posts API |
| `src/app/api/blog/[slug]/route.ts` | Get single post API |
| `src/app/our-blog/page.tsx` | Blog listing page |
| `src/app/our-blog/[slug]/page.tsx` | Blog post page |

## 🔧 Common Commands

```bash
# Manage database
npx prisma studio              # Visual database manager
npx prisma migrate dev         # Create/apply migration
npx prisma db seed             # Seed sample data
npx prisma db reset            # ⚠️  DANGEROUS - deletes all data

# Development
npm run dev                     # Start dev server
npm run build                   # Build for production
npm start                       # Start production server

# Database
npx prisma generate            # Regenerate Prisma client
npx prisma format              # Format schema.prisma
npx prisma validate            # Check schema validity
```

## 📍 URLs After Setup

```
Blog Listing:      http://localhost:3000/our-blog
Blog Post:         http://localhost:3000/our-blog/[slug]
Prisma Studio:     http://localhost:5555
API All Posts:     http://localhost:3000/api/blog
API Single Post:   http://localhost:3000/api/blog/[slug]
```

## ✏️ Add a Blog Post (3 Ways)

### Way 1: Prisma Studio (Easiest)
```bash
npx prisma studio
# Click "Add record" in UI
```

### Way 2: Direct API Call
```typescript
import { prisma } from '@/lib/prisma';

await prisma.blogPost.create({
  data: {
    title: 'My Post',
    slug: 'my-post',
    excerpt: 'Summary...',
    content: 'Content...',
    category: 'Financial Planning',
    readTime: '5 min read'
  }
});
```

### Way 3: SQL
```sql
INSERT INTO "BlogPost" 
(title, slug, excerpt, content, category, "readTime")
VALUES 
('Title', 'slug', 'excerpt', 'content', 'Category', '5 min read');
```

## 🗄️ BlogPost Schema

```typescript
model BlogPost {
  id          Int      @id @default(autoincrement())
  title       String   // Required: post title
  slug        String   @unique  // Required: URL slug
  excerpt     String   // Required: short summary
  content     String   // Required: full content
  coverImage  String?  // Optional: image path
  category    String   // Default: "Financial Planning"
  readTime    String   // Default: "5 min read"
  publishedAt DateTime @default(now())
  updatedAt   DateTime @updatedAt
}
```

## 🔐 Environment Variable

```bash
# Required in .env
PRISMA_DATABASE_URL="postgres://user:pass@host:port/db?sslmode=require"

# Already configured! ✅
```

## 🚀 Deployment

```bash
# Vercel auto-deploys on git push
# Just ensure this env var is set in Vercel dashboard:
PRISMA_DATABASE_URL=<your-prod-database-url>
```

## ❌ If Something Goes Wrong

```bash
# Blog posts not showing?
curl http://localhost:3000/api/blog

# Database issue?
npx prisma studio  # Check if posts exist

# Reset everything (WARNING: deletes all!)
npx prisma migrate reset
npx prisma db seed
```

## 📊 What Gets Seeded

3 sample blog posts:
- "How to Retire Early: A 10-Year Plan"
- "The Ultimate Debt Payoff Strategy"
- "TFSA vs RRSP: Which Should You Max Out First?"

Edit slugs to match: `how-to-retire-early-10-year-plan`

## 🎯 Next Steps

1. ✅ Run setup script
2. ✅ Start dev server: `npm run dev`
3. ✅ Visit `/our-blog`
4. ✅ Add posts via Prisma Studio
5. ✅ Deploy to Vercel

## 💡 Pro Tips

- Keep slugs lowercase and hyphenated
- Use short excerpts (160 chars for SEO)
- Format content with proper line breaks
- Use categories: Financial Planning, Investing, etc.
- Read time format: "5 min read", "8 min read", etc.

## 📞 Support

- Prisma Docs: https://www.prisma.io/docs/
- Next.js Docs: https://nextjs.org/docs
- Errors? Check `BLOG_SYSTEM_README.md`

---

**Status:** ✅ Ready to use!
