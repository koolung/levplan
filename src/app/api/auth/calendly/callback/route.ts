// src/app/api/auth/calendly/callback/route.ts
// Handles OAuth callback from Calendly

import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const code = searchParams.get('code');
    const state = searchParams.get('state');
    const error = searchParams.get('error');

    // Check for errors from Calendly
    if (error) {
      console.error('Calendly OAuth error:', error);
      return NextResponse.redirect(
        new URL(`/calendly-error?error=${error}`, request.url)
      );
    }

    // Verify state matches
    const storedState = request.cookies.get('calendly_oauth_state')?.value;
    if (!state || state !== storedState) {
      console.error('State mismatch - possible CSRF attack');
      return NextResponse.redirect(
        new URL('/calendly-error?error=state_mismatch', request.url)
      );
    }

    if (!code) {
      return NextResponse.redirect(
        new URL('/calendly-error?error=no_code', request.url)
      );
    }

    // Exchange code for access token
    const tokenResponse = await fetch('https://auth.calendly.com/oauth/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'authorization_code',
        code,
        redirect_uri: process.env.CALENDLY_REDIRECT_URI || '',
        client_id: process.env.CALENDLY_CLIENT_ID || '',
        client_secret: process.env.CALENDLY_CLIENT_SECRET || '',
      }).toString(),
    });

    if (!tokenResponse.ok) {
      const errorData = await tokenResponse.json();
      console.error('Token exchange error:', errorData);
      return NextResponse.redirect(
        new URL(`/calendly-error?error=token_exchange_failed`, request.url)
      );
    }

    const tokenData = await tokenResponse.json();
    const accessToken = tokenData.access_token;
    const refreshToken = tokenData.refresh_token;

    // Store tokens securely (in production, use database)
    // For now, store in httpOnly cookie
    const response = NextResponse.redirect(
      new URL('/calendly-success', request.url)
    );

    response.cookies.set('calendly_access_token', accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 3600, // 1 hour
    });

    if (refreshToken) {
      response.cookies.set('calendly_refresh_token', refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 604800, // 7 days
      });
    }

    // Clear state cookie
    response.cookies.delete('calendly_oauth_state');

    return response;
  } catch (error) {
    console.error('OAuth callback error:', error);
    return NextResponse.redirect(
      new URL('/calendly-error?error=callback_error', request.url)
    );
  }
}
