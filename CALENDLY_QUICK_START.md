# Calendly API Integration - Step-by-Step Setup

## Summary of What Was Created

✅ API Routes:
- `/api/auth/calendly` - OAuth initialization
- `/api/auth/calendly/callback` - OAuth callback handler
- `/api/calendly/event-types` - Fetch available event types
- `/api/calendly/availability` - Fetch available time slots
- `/api/calendly/events` - Create bookings

✅ Updated Components:
- `CalendlySection.tsx` - Full booking form with API integration

✅ Documentation:
- `CALENDLY_API_SETUP.md` - Comprehensive setup guide

---

## QUICK START - What You Need to Do Now

### Step 1: Get Your Calendly Credentials (5 minutes)

#### 1a. Generate Personal Access Token
1. Log in to Calendly at https://calendly.com
2. Click your profile icon (top right) → **Settings**
3. Go to **Integrations & Apps** → **API & Webhooks**
4. Click **Generate a Personal Access Token**
5. Copy and save it immediately

#### 1b. Get Your Calendly User ID
1. In your browser, visit: `https://api.calendly.com/users/me` (while logged into Calendly)
2. Look at the JSON response for the `uri` field
3. It will look like: `https://api.calendly.com/users/XXXX-XXXX-XXXX-XXXX`
4. Copy everything after `/users/` (the UUID part)

---

### Step 2: Set Up Calendly OAuth App (10 minutes)

#### 2a. Create OAuth Application
1. Go to https://calendly.com/integrations/new
2. Click **Create New App**
3. Fill in:
   - **App Name**: "LevPlan Financial Planning"
   - **Description**: "Calendar booking for financial consultation"
   - **App Type**: "Web app"
4. Click **Create**

#### 2b. Configure Redirect URIs
1. In your app settings, find **Redirect URIs** section
2. Add these two URIs:
   ```
   https://levplan.com/api/auth/calendly/callback
   http://localhost:3000/api/auth/calendly/callback
   ```
3. Save changes

#### 2c. Copy Your OAuth Credentials
1. Copy **Client ID**
2. Copy **Client Secret** (save securely!)

---

### Step 3: Add Environment Variables (2 minutes)

Create `.env.local` file in your project root:

```bash
# Calendly Configuration
CALENDLY_PERSONAL_ACCESS_TOKEN=your_personal_access_token_here
CALENDLY_USER_ID=your_user_id_uuid_here
CALENDLY_CLIENT_ID=your_client_id_here
CALENDLY_CLIENT_SECRET=your_client_secret_here
CALENDLY_REDIRECT_URI=https://levplan.com/api/auth/calendly/callback
```

**Example (.env.local):**
```bash
CALENDLY_PERSONAL_ACCESS_TOKEN=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
CALENDLY_USER_ID=f47ac10b-58cc-4372-a567-0e02b2c3d479
CALENDLY_CLIENT_ID=abc123def456
CALENDLY_CLIENT_SECRET=xyz789uvw123
CALENDLY_REDIRECT_URI=https://levplan.com/api/auth/calendly/callback
```

---

### Step 4: Test Locally (5 minutes)

1. Install dependencies (if not done):
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. Visit http://localhost:3000 in your browser

4. Scroll to the "Schedule Your Consultation" section

5. Test the booking form:
   - Fill in your name and email
   - Select a service type
   - Pick a date
   - Select a time slot
   - Click "Book Appointment"

6. Check for success message

---

### Step 5: Deploy to Production (levplan.com)

#### If using Vercel:

1. Push your code to GitHub:
   ```bash
   git add .
   git commit -m "Add Calendly API integration"
   git push origin main
   ```

2. Go to your Vercel dashboard: https://vercel.com/dashboard

3. Select your project

4. Go to **Settings** → **Environment Variables**

5. Add each variable:
   - `CALENDLY_PERSONAL_ACCESS_TOKEN`
   - `CALENDLY_USER_ID`
   - `CALENDLY_CLIENT_ID`
   - `CALENDLY_CLIENT_SECRET`
   - `CALENDLY_REDIRECT_URI` = `https://levplan.com/api/auth/calendly/callback`

6. Redeploy the project

#### If using a different host (Netlify, AWS, etc.):

Follow your hosting provider's documentation to add environment variables. Key points:
- Set production environment only (not preview)
- Use exact same variable names
- Ensure HTTPS is enabled

---

### Step 6: Update Calendly Embed URL (Optional)

If you want to keep the fallback Calendly embed widget:

1. Go to your Calendly profile page (https://calendly.com/your-username)
2. Get your public Calendly URL
3. In `CalendlySection.tsx`, find this line:
   ```tsx
   data-url="https://calendly.com/your-username"
   ```
4. Replace `your-username` with your actual Calendly username

---

## File Structure Created

```
src/
├── app/
│   └── api/
│       ├── auth/
│       │   └── calendly/
│       │       ├── route.ts           (OAuth init)
│       │       └── callback/
│       │           └── route.ts       (OAuth callback)
│       └── calendly/
│           ├── availability/route.ts  (Time slots)
│           ├── event-types/route.ts   (Service types)
│           └── events/route.ts        (Create booking)
└── components/
    └── CalendlySection.tsx            (Updated booking form)
```

---

## How It Works

### User Flow:

1. User fills booking form with name & email
2. Selects service type (fetches from Calendly)
3. Picks date (loads available times)
4. Chooses time slot
5. Submits form
6. Backend API creates event in Calendly
7. User receives confirmation email from Calendly

### API Flow:

```
CalendlySection (Frontend)
    ↓
/api/calendly/event-types (Backend) → Calendly API
    ↓
User selects date
    ↓
/api/calendly/availability (Backend) → Calendly API
    ↓
User submits booking
    ↓
/api/calendly/events (Backend) → Calendly API
    ↓
Success response back to user
```

---

## Troubleshooting

### "Failed to fetch event types"
- Check env variables are set correctly
- Verify personal access token is valid
- Check Calendly API status: https://status.calendly.com

### "Redirect URI mismatch"
- Ensure your `.env.local` matches exactly what's in Calendly OAuth app
- For production: `https://levplan.com/api/auth/calendly/callback`
- For local: `http://localhost:3000/api/auth/calendly/callback`

### "No time slots available"
- Ensure you have availability set in your Calendly calendar
- Check date is in the future
- Verify event type is active in Calendly

### OAuth not working
- Ensure HTTPS is enabled (required for OAuth)
- Check Client ID and Secret are correct
- Verify state cookie is being saved

---

## Security Notes

✅ **What's Protected:**
- Access tokens stored in httpOnly cookies (not accessible via JavaScript)
- State parameter prevents CSRF attacks
- All API calls use Bearer token authentication
- Environment variables never exposed to frontend

⚠️ **Important:**
- Never commit `.env.local` to Git (add to `.gitignore`)
- Rotate tokens periodically
- Use environment variables on production server
- Keep Client Secret private

---

## Next Steps (Optional Enhancements)

1. **Database Storage**: Store bookings in database for records
2. **Email Notifications**: Send custom confirmation emails
3. **Calendar Sync**: Sync other calendar systems (Google, Outlook)
4. **Payment Integration**: Add payment processing
5. **Auto-Responses**: Send questionnaires pre-appointment
6. **Analytics**: Track booking metrics

---

## Support

For issues:
1. Check Calendly API documentation: https://developer.calendly.com
2. Review your environment variables
3. Check browser console for errors
4. Check server logs in Vercel dashboard

---

**You're all set! Your Calendly booking system is ready to go.** 🎉
