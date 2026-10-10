import posthog from "posthog-js";

// Served by functions/relay-nd in production and by the Vite proxy in dev.
export const POSTHOG_PROXY_PATH = "/relay-nd";

export const posthogToken = import.meta.env.VITE_PUBLIC_POSTHOG_PROJECT_TOKEN;
export const isPostHogConfigured = Boolean(posthogToken);

export function capture(eventName, properties) {
  if (isPostHogConfigured) {
    posthog.capture(eventName, properties);
  }
}

export function captureException(error, properties) {
  if (isPostHogConfigured) {
    posthog.captureException(error, properties);
  }
}

export default posthog;
