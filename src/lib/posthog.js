import posthog from "posthog-js";

export const posthogToken = import.meta.env.VITE_PUBLIC_POSTHOG_PROJECT_TOKEN;
export const posthogHost = import.meta.env.VITE_PUBLIC_POSTHOG_HOST;
export const isPostHogConfigured = Boolean(posthogToken && posthogHost);

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
