# Upstash Redis Setup Guide

This guide will help you set up Upstash Redis for the blog view counter. Upstash works with any hosting provider including Railway, Vercel, Netlify, and more!

## Why Upstash?

- **Works anywhere**: No vendor lock-in, works with Railway, Vercel, Netlify, etc.
- **REST API**: No Redis client needed, just HTTP requests
- **Generous free tier**: 10,000 commands/day
- **Serverless**: Pay only for what you use
- **Fast**: Global edge network

## Step 1: Create an Upstash Account

1. Go to [https://console.upstash.com/](https://console.upstash.com/)
2. Sign up for a free account (you can use GitHub, Google, or email)

## Step 2: Create a Redis Database

1. Once logged in, click **"Create Database"**
2. Configure your database:
   - **Name**: `blog-views` (or any name you prefer)
   - **Type**: Select **Regional** (cheaper and sufficient for a blog)
   - **Region**: Choose the region closest to your Railway deployment (e.g., `us-east-1`)
   - **TLS**: Keep enabled (recommended)
3. Click **"Create"**

## Step 3: Get Your Credentials

After creating the database, you'll see your database details page. You need two values:

1. **UPSTASH_REDIS_REST_URL**: 
   - Look for the section labeled **"REST API"**
   - Copy the **"UPSTASH_REDIS_REST_URL"** value
   - It looks like: `https://your-db-name-12345.upstash.io`

2. **UPSTASH_REDIS_REST_TOKEN**:
   - In the same **"REST API"** section
   - Copy the **"UPSTASH_REDIS_REST_TOKEN"** value
   - It's a long string that starts with `A...`

## Step 4: Configure Environment Variables

### For Local Development

Create a `.env` file in your project root (copy from `env.example`):

```bash
cp env.example .env
```

Then edit `.env` and add your credentials:

```env
UPSTASH_REDIS_REST_URL=https://your-actual-database-url.upstash.io
UPSTASH_REDIS_REST_TOKEN=AYourActualTokenHere...
```

**Important**: Make sure `.env` is in your `.gitignore` (it should be already)

### For Railway Deployment

1. Go to your Railway project dashboard
2. Click on your service
3. Go to the **"Variables"** tab
4. Click **"New Variable"** and add:
   - Variable: `UPSTASH_REDIS_REST_URL`
   - Value: Your Upstash REST URL
5. Click **"New Variable"** again and add:
   - Variable: `UPSTASH_REDIS_REST_TOKEN`
   - Value: Your Upstash REST token
6. Railway will automatically redeploy with the new environment variables

## Step 5: Test It Out

### Local Testing

1. Start your development server:
   ```bash
   pnpm run dev
   ```

2. Visit a blog post page
3. The view counter should increment!

### Production Testing

1. Deploy to Railway (it should pick up the environment variables automatically)
2. Visit your deployed site
3. Navigate to a blog post
4. The view counter should work!

## How It Works

1. When someone visits a blog post, the `BlogLayout` component calls `POST /api/views/:slug`
2. The API makes a REST request to Upstash Redis using the `INCR` command
3. Redis atomically increments the counter and returns the new value
4. The new count is displayed on the page
5. The blog list page fetches all view counts using `GET /api/views/:slug`

## API Endpoints

- `GET /api/views/:slug` - Get the current view count for a blog post
- `POST /api/views/:slug` - Increment the view count for a blog post (returns new count)

## Troubleshooting

### "Upstash Redis credentials not configured" error

- Make sure you've set both environment variables
- Check that the variable names are exactly: `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN`
- For Railway: Verify the variables are set in the Railway dashboard
- Restart your server/redeploy after adding environment variables

### Views showing as 0

- Check the browser console for any API errors
- Verify your Upstash credentials are correct
- Make sure your Upstash database is active (check the Upstash console)

### Local development shows 0 views

- If you haven't set up the `.env` file, the API will return mock data (0 views)
- This is expected behavior - add your credentials to `.env` to test locally

### "Failed to fetch views" error

- Check that your Upstash database is active
- Verify the REST URL and token are correct
- Check if you've exceeded the free tier limits (10,000 commands/day)

## Free Tier Limits

Upstash Redis free tier includes:

- **10,000 commands per day**
- **256 MB storage**
- **Global replication** (if using Global database)

For a personal blog, this should be more than enough!

### Estimating Usage

- Each blog post view = 1 `INCR` command (write)
- Each blog list page load = N `GET` commands (reads), where N = number of blog posts
- Example: 100 blog views + 50 list page loads with 3 blogs = 100 + 150 = 250 commands

With 10,000 commands/day, you can handle:
- ~10,000 blog post views per day, OR
- ~3,000 list page loads per day (with 3 blogs), OR
- A mix of both

## Upgrading

If you exceed the free tier, Upstash has affordable paid plans:

- **Pay as you go**: $0.20 per 100K commands
- **Pro plan**: $10/month for 1M commands

## Alternative: Using Upstash with Redis Client (Optional)

If you prefer using a Redis client instead of REST API, you can install `@upstash/redis`:

```bash
pnpm add @upstash/redis
```

Then update the API to use the SDK instead of REST calls. The REST API approach is simpler and works great for this use case though!

## Security Notes

- Never commit your `.env` file to git
- Never expose your REST token in client-side code
- The API endpoints are server-side only, so your credentials are safe
- Consider adding rate limiting if you expect high traffic

## Resources

- [Upstash Console](https://console.upstash.com/)
- [Upstash Documentation](https://docs.upstash.com/redis)
- [Upstash REST API Docs](https://docs.upstash.com/redis/features/restapi)

