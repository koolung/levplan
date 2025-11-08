// src/app/api/calendly/event-types/route.ts
// Fetches available event types from Calendly

import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const token = process.env.CALENDLY_PERSONAL_ACCESS_TOKEN;

    console.log('🔍 Debugging Event Types Fetch:');
    console.log('Token exists:', !!token);

    if (!token) {
      console.error('❌ CALENDLY_PERSONAL_ACCESS_TOKEN is missing');
      return NextResponse.json(
        { error: 'CALENDLY_PERSONAL_ACCESS_TOKEN environment variable is missing' },
        { status: 500 }
      );
    }

    console.log('🔄 Fetching current user info...');

    // First get user info
    const meResponse = await fetch('https://api.calendly.com/users/me', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!meResponse.ok) {
      const meError = await meResponse.text();
      console.error('❌ Failed to get user info:', meResponse.status, meError);
      return NextResponse.json(
        { error: 'Failed to authenticate with Calendly', status: meResponse.status, details: meError },
        { status: meResponse.status }
      );
    }

    const meData = await meResponse.json();
    const userUri = meData.resource?.uri;
    const orgUri = meData.resource?.current_organization;
    
    console.log('✅ User URI:', userUri);

    if (!userUri) {
      console.error('❌ Could not extract user URI');
      return NextResponse.json(
        { error: 'Could not extract user URI' },
        { status: 500 }
      );
    }

    // Fetch event types with user parameter (correct endpoint for PAT)
    const eventTypesUrl = `https://api.calendly.com/event_types?user=${encodeURIComponent(userUri)}`;
    console.log('📍 API URL:', eventTypesUrl);

    const response = await fetch(eventTypesUrl, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    console.log('📊 Response status:', response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('❌ All attempts failed:', response.status, errorText);
      return NextResponse.json(
        { 
          error: 'Failed to fetch event types from Calendly',
          status: response.status,
          details: errorText 
        },
        { status: response.status }
      );
    }

    const data = await response.json();
    console.log('✅ Successfully fetched event types:', data.collection?.length || 0);
    return NextResponse.json(data);
  } catch (error) {
    console.error('❌ Event types error:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: String(error) },
      { status: 500 }
    );
  }
}
