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

    // Use OAuth token from cookie
    const oauthToken = request.cookies.get('calendly_access_token')?.value;

    if (!oauthToken) {
      return NextResponse.json(
        { 
          error: 'User not authenticated',
          message: 'Please authenticate with Calendly first'
        },
        { status: 401 }
      );
    }

    console.log('✅ OAuth token found, proceeding with event creation');

    // Create the event
    console.log('📍 Creating event in Calendly...');
    console.log('Request body:', {
      event_type_uri: eventTypeUri,
      invitees_emails: [inviteeEmail],
      invitees_names: [inviteeName || 'Guest'],
      start_time: startTime,
      end_time: endTime,
    });

    // Try the correct endpoint for scheduled events
    const eventEndpoint = 'https://api.calendly.com/scheduled_events';
    console.log('📍 Endpoint:', eventEndpoint);

    let response = await fetch(eventEndpoint, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${oauthToken}`,
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
      
      // Log the full error for debugging
      try {
        const errorJson = JSON.parse(errorData);
        console.error('📋 Error details:', errorJson);
      } catch (e) {
        console.error('📋 Error details:', errorData);
      }

      // If 404, the endpoint might not exist - provide helpful error
      if (response.status === 404) {
        console.error('⚠️  Endpoint not found. This endpoint may require OAuth token instead of Personal Access Token.');
      }
      
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
