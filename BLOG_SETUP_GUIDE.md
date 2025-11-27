# Blog System Setup Guide

This guide will help you set up the integrated Prisma + PostgreSQL blog system for your LevPlan website.

## Prerequisites

Ensure you have:
- Node.js 18+ installed
- PostgreSQL database URL (already in your `.env`)
- Vercel account (for deployment)

## Step 1: Install Prisma Dependencies

```bash
npm install @prisma/client
npm install -D prisma
```

## Step 2: Set Up Environment Variables

Your `.env` file should already have:
```
PRISMA_DATABASE_URL="your-postgres-url"
```

If not, add it:
```
PRISMA_DATABASE_URL="postgres://user:password@host:port/database?sslmode=require"
```

## Step 3: Create Prisma Migration

Run the following command to create and apply the initial migration:

```bash
npx prisma migrate dev --name init
```

This will:
- Create the migration file
- Apply changes to your PostgreSQL database
- Generate Prisma client

## Step 4: Seed Sample Data (Optional)

To populate the database with sample blog posts:

```bash
npx prisma db seed
```

Make sure your `package.json` has the seed script:
```json
{
  "prisma": {
    "seed": "ts-node prisma/seed.ts"
  }
}
```

Install ts-node if needed:
```bash
npm install -D ts-node
```

## Step 5: Verify Setup

Check that everything is working:

```bash
# View database in Prisma Studio
npx prisma studio
```

This will open a web interface where you can view and manage your blog posts.

## Step 6: Start Development Server

```bash
npm run dev
```

Visit `http://localhost:3000/our-blog` to see your blog.

## Project Structure

```
levplan/
├── prisma/
│   ├── schema.prisma       # Database schema
│   └── seed.ts             # Sample data
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── blog/
│   │   │       ├── route.ts        # Get all posts
│   │   │       └── [slug]/
│   │   │           └── route.ts    # Get single post
│   │   └── our-blog/
│   │       ├── page.tsx             # Blog listing page
│   │       └── [slug]/
│   │           └── page.tsx         # Blog post detail page
│   └── lib/
│       └── prisma.ts       # Prisma client
├── .env                    # Environment variables
└── package.json           # Dependencies
```

## Key Features

✅ **Dynamic Blog Posts**: Fetch posts from PostgreSQL database
✅ **Database-Driven**: No more hardcoded blog data
✅ **Individual Post Pages**: Each blog post has its own route `/our-blog/[slug]`
✅ **API Routes**: REST API endpoints for blog posts
✅ **Responsive Design**: Matches your existing blog page design
✅ **SEO Ready**: Dynamic metadata generation for each post
✅ **Vercel Compatible**: Optimized for Vercel deployment

## Creating New Blog Posts

### Via Prisma Studio (GUI)

```bash
npx prisma studio
```

1. Click "BlogPost"
2. Click "Add record"
3. Fill in fields:
   - `title`: Blog post title
   - `slug`: URL-friendly version (e.g., "my-blog-post")
   - `excerpt`: Short description (appears in listing)
   - `content`: Full markdown/text content
   - `category`: Financial Planning, Investing, etc.
   - `readTime`: "5 min read", "8 min read", etc.
   - Leave `publishedAt` and `updatedAt` as auto-generated

### Via API (Programmatic)

You can create a new blog post programmatically:

```typescript
const post = await prisma.blogPost.create({
  data: {
    title: 'Your Blog Title',
    slug: 'your-blog-slug',
    excerpt: 'Short description...',
    content: 'Full content here...',
    category: 'Financial Planning',
    readTime: '5 min read',
  },
});
```

## Deployment to Vercel

1. Push your code to GitHub
2. Connect repository to Vercel
3. Vercel will automatically:
   - Detect `prisma` as build tool
   - Run `npx prisma migrate deploy` (requires `DATABASE_URL` env var)
   - Build your Next.js app

4. Add environment variables in Vercel dashboard:
   ```
   PRISMA_DATABASE_URL=your-prod-database-url
   ```

## Troubleshooting

### "PrismaClient is not configured" Error
- Ensure `PRISMA_DATABASE_URL` is set in `.env`
- Run `npx prisma generate` to regenerate client

### Database Connection Issues
- Verify PostgreSQL URL is correct
- Check database credentials
- Ensure SSL mode is set (`?sslmode=require`)

### Migration Issues
- Reset database: `npx prisma migrate reset` (WARNING: Deletes all data)
- Create new migration: `npx prisma migrate dev --name description`

### Posts Not Showing
- Check database has records: `npx prisma studio`
- Verify API route returns data: `GET /api/blog`
- Check browser console for errors

## API Endpoints

### Get All Blog Posts
```
GET /api/blog

Returns:
[
  {
    "id": 1,
    "title": "...",
    "slug": "...",
    "excerpt": "...",
    "category": "...",
    "readTime": "...",
    "publishedAt": "2024-01-15T..."
  }
]
```

### Get Single Blog Post
```
GET /api/blog/[slug]

Example: GET /api/blog/how-to-retire-early-10-year-plan

Returns:
{
  "id": 1,
  "title": "...",
  "slug": "...",
  "excerpt": "...",
  "content": "...",
  "category": "...",
  "readTime": "...",
  "publishedAt": "2024-01-15T...",
  "updatedAt": "2024-01-15T..."
}
```

## Next Steps

1. Add an admin panel to create/edit blog posts
2. Implement search functionality
3. Add related posts suggestions
4. Implement pagination for blog listing
5. Add comments system (requires additional schema)
6. Set up automatic sitemap generation

For questions or issues, refer to:
- [Prisma Documentation](https://www.prisma.io/docs/)
- [Next.js Documentation](https://nextjs.org/docs)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
