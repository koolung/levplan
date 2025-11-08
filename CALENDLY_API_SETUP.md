# Calendly API Integration Guide for levplan.com

## Overview
This guide will help you integrate Calendly API to allow users to book appointments directly from your website.

---

## Step 1: Create a Calendly Account & Get Your Personal Access Token

### 1.1 Sign up or log in to Calendly
- Visit: https://calendly.com
- Sign up or log in to your existing account
- Go to your profile settings

### 1.2 Generate Personal Access Token
1. Go to **Settings** (gear icon) → **Integrations & Apps**
2. Look for **API & Webhooks** or **Developer** section
3. Click **Generate a Personal Access Token**
4. Copy and save the token safely (you won't be able to see it again)
   - Store it as: `CALENDLY_PERSONAL_ACCESS_TOKEN`

### 1.3 Get Your Calendly User ID
1. Visit: `https://api.calendly.com/users/me` in your browser while logged in
2. This will show your user ID (looks like: `https://api.calendly.com/users/YOUR_USER_ID`)
3. Copy your USER_ID and save it
   - Store it as: `CALENDLY_USER_ID`

---

## Step 2: Create Calendly OAuth App (for OAuth 2.0 Integration)

### 2.1 Register OAuth Application
1. Go to Calendly Developer Portal: https://calendly.com/integrations/new
2. Click **Create New App**
3. Fill in the following details:
   - **App Name**: "LevPlan Financial Planning"
   - **Description**: "Calendar booking integration for financial consultation scheduling"
   - **App Type**: "Web app" or "Server"

### 2.2 Set Up OAuth Redirect URI
1. In your app settings, add **Redirect URI**:
   ```
   https://levplan.com/api/auth/calendly/callback
   ```
   Also add for local development:
   ```
   http://localhost:3000/api/auth/calendly/callback
   ```

2. Calendly will provide:
   - **Client ID** (store as: `CALENDLY_CLIENT_ID`)
   - **Client Secret** (store as: `CALENDLY_CLIENT_SECRET`)

---

## Step 3: Set Up Environment Variables

### 3.1 Create `.env.local` file in your project root
```bash
# Calendly API Configuration
CALENDLY_PERSONAL_ACCESS_TOKEN=your_personal_access_token_here
CALENDLY_USER_ID=your_user_id_here
CALENDLY_CLIENT_ID=your_client_id_here
CALENDLY_CLIENT_SECRET=your_client_secret_here
CALENDLY_REDIRECT_URI=https://levplan.com/api/auth/calendly/callback
```

### 3.2 For Production (levplan.com)
Update your hosting environment variables:
- **Vercel Dashboard** (if using Vercel):
  1. Go to your project settings
  2. **Environment Variables**
  3. Add each variable for `Production` environment

---

## Step 4: Create API Routes for Calendly Integration

### 4.1 OAuth Authorization Route
Create: `src/app/api/auth/calendly/route.ts`

### 4.2 Callback Route  
Create: `src/app/api/auth/calendly/callback/route.ts`

### 4.3 Fetch Availability Route
Create: `src/app/api/calendly/availability/route.ts`

### 4.4 Create Event Route
Create: `src/app/api/calendly/events/route.ts`

---

## Step 5: Update CalendlySection Component

Update your component to:
1. Fetch user's calendar data
2. Display available time slots
3. Handle booking submissions
4. Store booking data

---

## Step 6: Deployment Checklist

### Before deploying to levplan.com:
- [ ] Calendly OAuth app created
- [ ] Client ID and Client Secret obtained
- [ ] Redirect URI set to: `https://levplan.com/api/auth/calendly/callback`
- [ ] Environment variables configured on hosting platform
- [ ] API routes created and tested locally
- [ ] CalendlySection component updated
- [ ] HTTPS enabled on levplan.com (required for OAuth)

### Hosting Platform Setup (Vercel Example):
1. Deploy project to Vercel
2. Connect to your domain (levplan.com)
3. Update Calendly OAuth redirect URI if domain changes
4. Set environment variables in Vercel dashboard

---

## Calendly API Endpoints You'll Use

### Get Authenticated User
```
GET https://api.calendly.com/users/me
Header: Authorization: Bearer {PERSONAL_ACCESS_TOKEN}
```

### Get User's Calendars
```
GET https://api.calendly.com/users/{user_id}/calendars
Header: Authorization: Bearer {PERSONAL_ACCESS_TOKEN}
```

### Get Event Types
```
GET https://api.calendly.com/users/{user_id}/event_types
Header: Authorization: Bearer {PERSONAL_ACCESS_TOKEN}
```

### Get Available Time Slots
```
GET https://api.calendly.com/event_types/{event_type_id}/availability
Header: Authorization: Bearer {PERSONAL_ACCESS_TOKEN}
```

### Create Event (Booking)
```
POST https://api.calendly.com/scheduled_events
Header: Authorization: Bearer {PERSONAL_ACCESS_TOKEN}
Body: {
  "event_type_uri": "https://api.calendly.com/event_types/{event_type_id}",
  "invitees_emails": ["email@example.com"],
  "start_time": "2025-12-01T10:00:00.000Z",
  "end_time": "2025-12-01T11:00:00.000Z"
}
```

---

## Security Best Practices

1. **Never expose tokens in frontend code** - Use backend API routes only
2. **Validate all inputs** on the server side
3. **Use HTTPS** (required for OAuth)
4. **Rotate tokens regularly**
5. **Store sensitive data** in environment variables
6. **Rate limit API calls** to prevent abuse
7. **Add CSRF protection** for form submissions

---

## Testing Locally

1. Update `.env.local` with your test credentials
2. Start dev server: `npm run dev`
3. Test OAuth flow: `http://localhost:3000/api/auth/calendly`
4. Test callbacks work properly
5. Verify availability fetching
6. Test booking creation

---

## Troubleshooting

### Issue: "Invalid redirect_uri"
- Ensure redirect URI in Calendly matches exactly (including protocol)
- Check for trailing slashes

### Issue: "Unauthorized" when calling API
- Verify personal access token is correct
- Ensure token has not expired
- Check authorization header format: `Bearer {token}`

### Issue: CORS errors
- Use backend API routes (not frontend fetch)
- Configure CORS in your API routes if needed

### Issue: Events not showing
- Verify calendar is active in Calendly
- Check event type is public/available
- Ensure time zone is set correctly

---

## Next Steps

1. Generate your Calendly tokens
2. Create `.env.local` file
3. Create the API routes (see files provided)
4. Update CalendlySection component
5. Test locally
6. Deploy to levplan.com
