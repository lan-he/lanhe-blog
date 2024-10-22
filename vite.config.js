import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
    assetsInclude: ['**/*.md', '**/*.lottie'],
    server: {
        port: 8000,
        host: '0.0.0.0',
        hmr: true,
        proxy: {
            '/api': {
                // target: 'https://lanhe-blog-express.vercel.app', // prod
                target: 'http://localhost:3000',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, 'api/'),
            },
        },
    },
})
