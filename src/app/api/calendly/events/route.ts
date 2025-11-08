// src/app/api/calendly/events/route.ts
// Creates a scheduled event in Calendly

import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const {
      eventTypeUri,
      inviteeEmail,
      inviteeName,
      startTime,
      endTime,
      notes,
    } = await request.json();

    console.log('🔍 Debugging Event Creation:');
    console.log('Event Type URI:', eventTypeUri);
    console.log('Invitee Email:', inviteeEmail);

    // Validate required fields
    if (!eventTypeUri || !inviteeEmail || !startTime || !endTime) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Use personal access token
    const token = process.env.CALENDLY_PERSONAL_ACCESS_TOKEN;

    if (!token) {
      return NextResponse.json(
        { error: 'Calendly token not configured' },
        { status: 500 }
      );
    }

    // Create the event
    console.log('📍 Creating event in Calendly...');
    const response = await fetch('https://api.calendly.com/scheduled_events', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        event_type_uri: eventTypeUri,
        invitees_emails: [inviteeEmail],
        invitees_names: [inviteeName || 'Guest'],
        start_time: startTime,
        end_time: endTime,
        additional_note: notes || '',
      }),
    });

    console.log('📊 Response status:', response.status);

    if (!response.ok) {
      const errorData = await response.text();
      console.error('❌ Event creation error:', response.status, errorData);
      return NextResponse.json(
        { error: 'Failed to create event', details: errorData },
        { status: response.status }
      );
    }

    const data = await response.json();
    console.log('✅ Event created successfully');

    // Return success with event details
    return NextResponse.json(
      {
        success: true,
        message: 'Event scheduled successfully',
        event: data,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Event creation error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
