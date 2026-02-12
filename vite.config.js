import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  build: {
    // Use esbuild for minification (built-in, no extra deps)
    minify: 'esbuild',
    // Optimize chunk splitting
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor code into separate chunk
          vendor: ['react', 'react-dom', 'react-router-dom'],
          // Split Ant Design into separate chunk
          antd: ['antd'],
        },
      },
    },
    // Source maps for production debugging (optional, remove to reduce bundle size)
    sourcemap: false,
    // Chunk size warning limit
    chunkSizeWarningLimit: 1000,
  },
})
