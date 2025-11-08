# Troubleshooting: "Failed to Load Available Event Types"

## Quick Diagnostic Steps

### Step 1: Check Your Environment Variables

1. Open your `.env.local` file in your project root
2. Verify these variables are set:
   ```bash
   CALENDLY_PERSONAL_ACCESS_TOKEN=xxxx
   CALENDLY_USER_ID=xxxx
   ```

3. **Common mistakes:**
   - ❌ Missing `.env.local` file entirely
   - ❌ Variables have extra spaces: `CALENDLY_PERSONAL_ACCESS_TOKEN = xxxx` (should be `=` with no spaces)
   - ❌ Incomplete token or user ID copied
   - ❌ Using old/expired token

### Step 2: Check Server Logs

1. Look at your terminal where you ran `npm run dev`
2. You should see logs like:
   ```
   🔍 Debugging Event Types Fetch:
   Token exists: true
   User ID: f47ac10b-58cc-4372-a567-0e02b2c3d479
   🔄 Fetching event types for user: f47ac10b-58cc-4372-a567-0e02b2c3d479
   📊 Response status: 200
   ✅ Successfully fetched event types: 3
   ```

3. **If you see:**
   - `Token exists: false` → Variable not set properly
   - `User ID: undefined` → Variable not set properly
   - `Response status: 401` → Token is invalid
   - `Response status: 403` → Token doesn't have permission
   - `Response status: 404` → User ID is wrong

### Step 3: Check Browser Network Tab

1. Open browser DevTools (F12)
2. Go to **Network** tab
3. Reload page and scroll to the Calendly section
4. Look for request to `/api/calendly/event-types`
5. Click on it and check:
   - **Status**: Should be 200 (success) or show the error code
   - **Response**: Shows the error message

### Step 4: Validate Your Tokens

#### Check if Personal Access Token is Valid:

Open a terminal and run:
```bash
curl -H "Authorization: Bearer YOUR_PERSONAL_ACCESS_TOKEN" \
  https://api.calendly.com/users/me
```

**Replace** `YOUR_PERSONAL_ACCESS_TOKEN` with your actual token.

You should see JSON response with your user info. If you get:
- 401 error → Token is invalid/expired
- 403 error → Token doesn't have permission
- Success response → Token is good

#### Verify Your User ID:

1. Log in to Calendly at https://calendly.com
2. Visit: `https://api.calendly.com/users/me` in your browser
3. Look for `"uri"` field in the JSON
4. Copy the UUID after `/users/`
5. Make sure it matches your `.env.local`

---

## Solution Checklist

- [ ] `.env.local` file exists in project root
- [ ] `CALENDLY_PERSONAL_ACCESS_TOKEN` is set (not empty)
- [ ] `CALENDLY_USER_ID` is set (not empty)
- [ ] No extra spaces around `=` sign
- [ ] Personal Access Token is not expired
- [ ] Token was generated from same Calendly account
- [ ] User ID is correct UUID format (e.g., `f47ac10b-58cc-4372-a567-0e02b2c3d479`)
- [ ] Dev server restarted after adding `.env.local`
- [ ] You have at least one active event type in your Calendly calendar

---

## Common Issues & Solutions

### Issue 1: "Token exists: false"
**Cause:** Environment variable not loaded

**Solution:**
1. Make sure `.env.local` file exists in project root
2. Stop dev server (Ctrl+C)
3. Restart: `npm run dev`
4. Delete `node_modules/.cache` if it exists
5. Hard refresh browser (Ctrl+Shift+R)

### Issue 2: "User ID: undefined"
**Cause:** User ID environment variable not set

**Solution:**
1. Open `.env.local`
2. Add: `CALENDLY_USER_ID=your_uuid_here`
3. Save file
4. Restart dev server
5. Reload page

### Issue 3: Response Status: 401
**Cause:** Invalid or expired personal access token

**Solution:**
1. Go to Calendly: https://calendly.com/settings/integrations
2. Regenerate a new Personal Access Token
3. Update `.env.local` with the new token
4. Restart dev server

### Issue 4: Response Status: 403
**Cause:** Token doesn't have required permissions

**Solution:**
1. Regenerate the token with full permissions
2. Go to Calendly Settings → API & Webhooks
3. Delete old token
4. Create new Personal Access Token
5. Update `.env.local`

### Issue 5: Response Status: 404
**Cause:** User ID is incorrect or doesn't exist

**Solution:**
1. Verify your User ID from `https://api.calendly.com/users/me`
2. Make sure it's the UUID (not your username)
3. Update `.env.local` with correct ID
4. Restart dev server

### Issue 6: No Event Types Show Up
**Cause:** You don't have any active event types in Calendly

**Solution:**
1. Log in to Calendly
2. Go to **Event Types**
3. Make sure you have at least one event type created
4. The event type should be active (not archived)
5. Refresh page

---

## Debug Mode: Check Backend Response

1. Open browser DevTools (F12)
2. Go to **Console** tab
3. Check for any error messages
4. Go to **Network** tab
5. Click on request to `/api/calendly/event-types`
6. In **Response** tab, you should see:
   ```json
   {
     "collection": [
       {
         "uri": "https://api.calendly.com/event_types/...",
         "name": "15 Min Consultation",
         "duration_minutes": 15,
         ...
       }
     ]
   }
   ```

If you see an error object instead, read the error message carefully.

---

## Still Not Working?

Run this command in your terminal to check env variables are being read:

```bash
node -e "require('dotenv').config({path: '.env.local'}); console.log('Token:', process.env.CALENDLY_PERSONAL_ACCESS_TOKEN ? 'SET' : 'NOT SET'); console.log('User ID:', process.env.CALENDLY_USER_ID || 'NOT SET');"
```

This will tell you if Node is actually reading your `.env.local` file.

---

## Need More Help?

1. Share the server log output from `npm run dev`
2. Share the Network tab response from the API call
3. Verify your Personal Access Token is still valid:
   ```bash
   curl -H "Authorization: Bearer YOUR_TOKEN" https://api.calendly.com/users/me
   ```
