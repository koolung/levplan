// src/app/api/auth/calendly/route.ts
// Initiates OAuth flow with Calendly

import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const clientId = process.env.CALENDLY_CLIENT_ID;
    const redirectUri = process.env.CALENDLY_REDIRECT_URI;
    const state = Math.random().toString(36).substring(7);

    // Store state in session/cookie for verification
    const response = new NextResponse(null, {
      status: 307,
      headers: {
        Location: `https://auth.calendly.com/oauth/authorize?client_id=${clientId}&response_type=code&redirect_uri=${encodeURIComponent(redirectUri || '')}&state=${state}`,
      },
    });

    // Store state in httpOnly cookie for security
    response.cookies.set('calendly_oauth_state', state, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 600, // 10 minutes
    });

    return response;
  } catch (error) {
    console.error('OAuth initiation error:', error);
    return NextResponse.json(
      { error: 'Failed to initiate OAuth flow' },
      { status: 500 }
    );
  }
}
