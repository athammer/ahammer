# SolidStart

Everything you need to build a Solid project, powered by [`solid-start`](https://start.solidjs.com);

## Creating a project

```bash
# create a new project in the current directory
npm init solid@latest

# create a new project in my-app
npm init solid@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

Solid apps are built with _presets_, which optimise your project for deployment to different environments.

By default, `npm run build` will generate a Node app that you can run with `npm start`. To use a different preset, add it to the `devDependencies` in `package.json` and specify in your `app.config.js`.

## Blog View Counter with Upstash Redis

This project uses Upstash Redis to store and track blog post view counts. Upstash works with any hosting provider (Railway, Vercel, Netlify, etc.) and has a generous free tier!

See [UPSTASH_SETUP.md](./UPSTASH_SETUP.md) for detailed setup instructions.

### Quick Setup

1. Create a free account at [https://console.upstash.com/](https://console.upstash.com/)
2. Create a new Redis database
3. Copy your `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN`
4. Add them to your `.env` file locally (copy from `env.example`)
5. Add them as environment variables in Railway:
   - Go to your Railway project → Variables tab
   - Add `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN`
6. Deploy and enjoy real-time view counts!

## This project was created with the [Solid CLI](https://github.com/solidjs-community/solid-cli)
