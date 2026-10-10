import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    // Mirrors functions/relay-nd so PostHog works in `vite dev` and `vite preview`.
    proxy: {
      '^/relay-nd/(static|array)/': {
        target: 'https://us-assets.i.posthog.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/relay-nd/, ''),
      },
      '/relay-nd': {
        target: 'https://us.i.posthog.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/relay-nd/, ''),
      },
    },
  },
})
