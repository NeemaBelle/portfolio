// Reverse proxy for PostHog, so ad blockers don't drop analytics requests.
// Keep the path in sync with POSTHOG_PROXY_PATH in src/lib/posthog.js.
const API_HOST = "us.i.posthog.com";
const ASSET_HOST = "us-assets.i.posthog.com";

export async function onRequest(context) {
  const { request, params } = context;
  const url = new URL(request.url);
  const path = `/${(params.path ?? []).join("/")}${url.search}`;

  if (path.startsWith("/static/") || path.startsWith("/array/")) {
    return retrieveAsset(request, path, context);
  }
  return forwardRequest(request, path);
}

async function retrieveAsset(request, path, context) {
  let response = await caches.default.match(request);
  if (!response) {
    response = await fetch(`https://${ASSET_HOST}${path}`);
    context.waitUntil(caches.default.put(request, response.clone()));
  }
  return response;
}

async function forwardRequest(request, path) {
  const headers = new Headers(request.headers);
  headers.delete("cookie");
  headers.delete("authorization");
  headers.set("X-Forwarded-For", request.headers.get("CF-Connecting-IP") || "");

  return fetch(`https://${API_HOST}${path}`, {
    method: request.method,
    headers,
    body:
      request.method !== "GET" && request.method !== "HEAD"
        ? await request.arrayBuffer()
        : null,
    redirect: request.redirect,
  });
}
