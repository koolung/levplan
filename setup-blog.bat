@echo off
setlocal enabledelayedexpansion

echo 🚀 LevPlan Blog System Setup
echo ================================

echo.
echo Step 1: Installing dependencies...
call npm install @prisma/client prisma ts-node

echo.
echo Step 2: Generating Prisma Client...
call npx prisma generate

echo.
echo Step 3: Running database migration...
call npx prisma migrate dev --name init

echo.
echo Step 4: Seeding sample blog posts...
call npx prisma db seed

echo.
echo ✅ Blog system setup complete!
echo.
echo Next steps:
echo 1. Run 'npm run dev' to start the development server
echo 2. Visit http://localhost:3000/our-blog to see your blog
echo 3. Run 'npx prisma studio' to manage blog posts visually
echo.
echo To create new blog posts:
echo - Use Prisma Studio: npx prisma studio
echo - Or add directly to database using the API
echo.

pause
