import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// Middleware to check authentication
function checkAuth(request: NextRequest): boolean {
  const session = request.cookies.get('admin_session');
  return session?.value === 'authenticated';
}

// PUT: Update a blog post
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!checkAuth(request)) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { id: idStr } = await params;
    const id = parseInt(idStr);
    const body = await request.json();
    const { title, excerpt, content, category, readTime, coverImage } = body;

    if (!title || !content) {
      return NextResponse.json(
        { message: 'Title and content are required' },
        { status: 400 }
      );
    }

    const post = await prisma.blogPost.update({
      where: { id },
      data: {
        title,
        excerpt: excerpt || title.substring(0, 150),
        content,
        category: category || 'Financial Planning',
        readTime: readTime || '5 min read',
        coverImage: coverImage || null,
      },
    });

    return NextResponse.json(post);
  } catch (error: any) {
    if (error.code === 'P2025') {
      return NextResponse.json(
        { message: 'Post not found' },
        { status: 404 }
      );
    }
    console.error('Failed to update post:', error);
    return NextResponse.json(
      { message: 'Failed to update post' },
      { status: 500 }
    );
  }
}

// DELETE: Delete a blog post
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!checkAuth(request)) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { id: idStr } = await params;
    const id = parseInt(idStr);

    await prisma.blogPost.delete({
      where: { id },
    });

    return NextResponse.json({ message: 'Post deleted successfully' });
  } catch (error: any) {
    if (error.code === 'P2025') {
      return NextResponse.json(
        { message: 'Post not found' },
        { status: 404 }
      );
    }
    console.error('Failed to delete post:', error);
    return NextResponse.json(
      { message: 'Failed to delete post' },
      { status: 500 }
    );
  }
}
