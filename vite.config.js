import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: [
        'favicon.ico',
        'favicon-16x16.png',
        'favicon-32x32.png',
        'magicsqlogo.png',
      ],
      manifest: {
        id: '/',
        short_name: 'Magic Square',
        name: 'Magic Square - Daily Mathematical Puzzle Game',
        description:
          'Boost your brainpower with daily mathematical puzzles! Solve equations using order of operations in a fun 5x5 grid game.',
        start_url: '/',
        scope: '/',
        display: 'standalone',
        orientation: 'portrait-primary',
        theme_color: '#495057',
        background_color: '#f8f9fa',
        categories: ['games', 'education', 'puzzle'],
        icons: [
          {
            src: '/icons/icon-192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: '/icons/icon-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: '/icons/icon-maskable-192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'maskable',
          },
          {
            src: '/icons/icon-maskable-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
      workbox: {
        navigateFallback: '/index.html',
        globPatterns: ['**/*.{js,css,html,ico,png,svg,webp,json}'],
        runtimeCaching: [
          {
            // Google Analytics / gtag — always go to network, never cached
            urlPattern: ({ url }) =>
              url.hostname === 'www.googletagmanager.com',
            handler: 'NetworkOnly',
          },
        ],
      },
      devOptions: {
        // Enable SW in `vite dev` too, so install/offline can be tested locally
        enabled: true,
        type: 'module',
      },
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(dirname(fileURLToPath(import.meta.url)), "./src"),
    },
  },
})
