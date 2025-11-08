// src/app/api/auth/calendly/refresh/route.ts
// Refreshes expired Calendly OAuth token

import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const refreshToken = request.cookies.get('calendly_refresh_token')?.value;

    console.log('🔄 Token refresh requested');
    console.log('Refresh token exists:', !!refreshToken);

    if (!refreshToken) {
      return NextResponse.json(
        { error: 'No refresh token available' },
        { status: 401 }
      );
    }

    // Exchange refresh token for new access token
    const tokenResponse = await fetch('https://auth.calendly.com/oauth/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: refreshToken,
        client_id: process.env.CALENDLY_CLIENT_ID || '',
        client_secret: process.env.CALENDLY_CLIENT_SECRET || '',
      }).toString(),
    });

    if (!tokenResponse.ok) {
      const errorData = await tokenResponse.text();
      console.error('❌ Token refresh error:', tokenResponse.status, errorData);
      return NextResponse.json(
        { error: 'Failed to refresh token' },
        { status: tokenResponse.status }
      );
    }

    const tokenData = await tokenResponse.json();
    const newAccessToken = tokenData.access_token;
    const newRefreshToken = tokenData.refresh_token;

    console.log('✅ Token refreshed successfully');

    const response = NextResponse.json({ success: true });

    // Update access token
    response.cookies.set('calendly_access_token', newAccessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 3600, // 1 hour
    });

    // Update refresh token if provided
    if (newRefreshToken) {
      response.cookies.set('calendly_refresh_token', newRefreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 604800, // 7 days
      });
    }

    return response;
  } catch (error) {
    console.error('❌ Token refresh error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
