// src/app/api/calendly/availability/route.ts
// Fetches available time slots from Calendly

import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { eventTypeUri, startDate, endDate } = await request.json();

    // Use personal access token for availability check
    const token = process.env.CALENDLY_PERSONAL_ACCESS_TOKEN;

    console.log('🔍 Debugging Availability Fetch:');
    console.log('Event Type URI:', eventTypeUri);
    console.log('Start Date:', startDate);
    console.log('End Date:', endDate);

    if (!token) {
      return NextResponse.json(
        { error: 'Calendly token not configured' },
        { status: 500 }
      );
    }

    if (!eventTypeUri) {
      return NextResponse.json(
        { error: 'Event type URI is required' },
        { status: 400 }
      );
    }

    // Fetch available time slots with proper parameters
    const params = new URLSearchParams();
    params.append('event_type', eventTypeUri);
    // API requires start_time and end_time in ISO format
    params.append('start_time', `${startDate}T00:00:00.000Z`);
    params.append('end_time', `${endDate}T23:59:59.999Z`);

    const url = `https://api.calendly.com/event_type_available_times?${params.toString()}`;
    console.log('📍 API URL:', url);

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    console.log('📊 Response status:', response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('❌ Availability fetch error:', response.status, errorText);
      return NextResponse.json(
        { error: 'Failed to fetch availability', details: errorText },
        { status: response.status }
      );
    }

    const data = await response.json();
    console.log('✅ Successfully fetched availability:', data.collection?.length || 0, 'slots');
    
    // Transform response to match expected format
    const timeSlots = (data.collection || []).map((slot: any) => ({
      time: slot.start_time,
      available: true,
    }));
    
    return NextResponse.json({ collection: timeSlots });
  } catch (error) {
    console.error('❌ Availability fetch error:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: String(error) },
      { status: 500 }
    );
  }
}
