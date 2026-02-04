import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Wishly - Sua lista de desejos online',
        short_name: 'Wishly',
        description: 'Crie e compartilhe suas listas de desejos com facilidade.',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#000000',
        icons: [
            {
                src: '/icon-192x192.png',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                src: '/icon-512x512.png',
                sizes: '512x512',
                type: 'image/png',
            },
            {
                src: "/icon-512x512.png",
                sizes: "512x512",
                type: "image/png",
                purpose: "maskable"
            }

        ],
    }
}