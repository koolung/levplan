import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const response = NextResponse.json({ message: 'Logged out successfully' });

  response.cookies.set('admin_session', '', {
    httpOnly: true,
    expires: new Date(0),
  });

  return response;
}
