import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir:'dist',
    rollupOptions: {
      output: {
        manualChunks: {
          antd: ['antd'], // Split Ant Design into a separate chunk
        },
      },
    },
    chunkSizeWarningLimit: 1000, // Increase chunk size warning limit if needed
  },
})
