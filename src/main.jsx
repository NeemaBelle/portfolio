import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { PostHogErrorBoundary, PostHogProvider } from '@posthog/react'
import './index.css'
import App from './App.jsx'
import posthog, {
  isPostHogConfigured,
  posthogHost,
  posthogToken,
} from './lib/posthog.js'

if (isPostHogConfigured) {
  posthog.init(posthogToken, {
    api_host: posthogHost,
    defaults: '2026-01-30',
  })
} else if (import.meta.env.DEV) {
  if (!posthogToken) {
    console.error(
      'VITE_PUBLIC_POSTHOG_PROJECT_TOKEN variable required by PostHog is missing or un-configured, this causes events to be silently missed. This error stops appearing once VITE_PUBLIC_POSTHOG_PROJECT_TOKEN is configured',
    )
  }
  if (!posthogHost) {
    console.error(
      'VITE_PUBLIC_POSTHOG_HOST variable required by PostHog is missing or un-configured, this causes events to be silently missed. This error stops appearing once VITE_PUBLIC_POSTHOG_HOST is configured',
    )
  }
}

const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {isPostHogConfigured ? (
      <PostHogProvider client={posthog}>
        <PostHogErrorBoundary>{app}</PostHogErrorBoundary>
      </PostHogProvider>
    ) : (
      app
    )}
  </StrictMode>,
)
