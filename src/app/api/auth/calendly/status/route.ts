// src/app/api/auth/calendly/status/route.ts
// Checks if user has valid OAuth token

import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const accessToken = request.cookies.get('calendly_access_token')?.value;

    console.log('🔍 Checking OAuth status');
    console.log('Access token exists:', !!accessToken);

    if (!accessToken) {
      return NextResponse.json(
        { 
          authenticated: false,
          message: 'No OAuth token found. Please authenticate with Calendly.'
        },
        { status: 200 }
      );
    }

    // Verify token is still valid by calling API
    const response = await fetch('https://api.calendly.com/users/me', {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      console.log('⚠️  Token may be expired');
      return NextResponse.json(
        { 
          authenticated: false,
          message: 'Token expired. Please re-authenticate.'
        },
        { status: 200 }
      );
    }

    const userData = await response.json();
    console.log('✅ OAuth token is valid');

    return NextResponse.json(
      {
        authenticated: true,
        user: userData.resource,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('❌ Status check error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
