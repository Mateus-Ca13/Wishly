import type { NextConfig } from "next";
import withPWAInit from "@ducanh2912/next-pwa";
import packageJson from "./package.json";
import createNextIntlPlugin from 'next-intl/plugin';

// 1. Inicializa o plugin do i18n
const withNextIntl = createNextIntlPlugin('./src/lib/i18n/request.ts');

// 2. Inicializa o plugin do PWA
const withPWA = withPWAInit({
  dest: "public",
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  disable: process.env.NODE_ENV === "development",
});

// 3. Sua configuração base do Next.js
const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_APP_VERSION: packageJson.version,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  experimental: {
    serverActions: {
      allowedOrigins: [
        'localhost:3000',
        // Adicione aqui outros domínios se necessário
      ],
    },
  },
};

// 4. A MAGIA ACONTECE AQUI: Composição de funções
// Pense assim: withPWA( withNextIntl( config ) )
export default withPWA(withNextIntl(nextConfig));