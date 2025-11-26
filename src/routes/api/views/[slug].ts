import { APIEvent } from "@solidjs/start/server";

const UPSTASH_REDIS_REST_URL = process.env.UPSTASH_REDIS_REST_URL;
const UPSTASH_REDIS_REST_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN;

/**
 * Helper function to make requests to Upstash Redis REST API
 */
async function upstashRequest(command: string[]) {
  if (!UPSTASH_REDIS_REST_URL || !UPSTASH_REDIS_REST_TOKEN) {
    throw new Error("Upstash Redis credentials not configured");
  }

  const response = await fetch(
    `${UPSTASH_REDIS_REST_URL}/${command.join("/")}`,
    {
      headers: {
        Authorization: `Bearer ${UPSTASH_REDIS_REST_TOKEN}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error(`Upstash request failed: ${response.statusText}`);
  }

  return response.json();
}

/**
 * GET /api/views/:id - Get view count for a blog post by ID
 * POST /api/views/:id - Increment view count for a blog post by ID
 */
export async function GET({ params }: APIEvent) {
  const id = params.slug; // Keep param name as 'slug' for URL compatibility

  if (!id) {
    return new Response(JSON.stringify({ error: "Blog ID is required" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    // Check if Upstash is configured
    if (!UPSTASH_REDIS_REST_URL || !UPSTASH_REDIS_REST_TOKEN) {
      console.error(
        "Upstash credentials not configured! URL:",
        UPSTASH_REDIS_REST_URL ? "SET" : "MISSING",
        "TOKEN:",
        UPSTASH_REDIS_REST_TOKEN ? "SET" : "MISSING"
      );
      // Fallback for local development without Upstash configured
      return new Response(JSON.stringify({ id, views: 0 }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }

    const key = `blog:id:${id}`;
    console.log(`Fetching view count for key: ${key}`);
    const result = await upstashRequest(["GET", key]);
    const viewCount = result.result ? parseInt(result.result, 10) : 0;
    console.log(`View count for blog ${id}: ${viewCount}`);

    return new Response(JSON.stringify({ id, views: viewCount }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, s-maxage=60, stale-while-revalidate=120",
      },
    });
  } catch (error) {
    console.error("Error fetching view count:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch views" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function POST({ params }: APIEvent) {
  const id = params.slug; // Keep param name as 'slug' for URL compatibility

  if (!id) {
    return new Response(JSON.stringify({ error: "Blog ID is required" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    // Check if Upstash is configured
    if (!UPSTASH_REDIS_REST_URL || !UPSTASH_REDIS_REST_TOKEN) {
      console.error(
        "Upstash credentials not configured! URL:",
        UPSTASH_REDIS_REST_URL ? "SET" : "MISSING",
        "TOKEN:",
        UPSTASH_REDIS_REST_TOKEN ? "SET" : "MISSING"
      );
      // Fallback for local development without Upstash configured
      return new Response(JSON.stringify({ id, views: 1 }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }

    const key = `blog:id:${id}`;
    console.log(`Incrementing view count for key: ${key}`);
    // Use INCR command to atomically increment the counter
    const result = await upstashRequest(["INCR", key]);
    const newViewCount = result.result;
    console.log(`New view count for blog ${id}: ${newViewCount}`);

    return new Response(JSON.stringify({ id, views: newViewCount }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error incrementing view count:", error);
    return new Response(
      JSON.stringify({ error: "Failed to increment views" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
