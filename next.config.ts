import type { NextConfig } from "next";
import withPWAInit from "@ducanh2912/next-pwa";
import packageJson from "./package.json";

// 1. Configuração do PWA
const withPWA = withPWAInit({
  dest: "public",
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  disable: process.env.NODE_ENV === "development", // Desativa PWA em modo dev
});

// 2. Sua Configuração Original do Next.js
const nextConfig: NextConfig = {


  env: {
    NEXT_PUBLIC_APP_VERSION: packageJson.version,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Cuidado: isso libera imagens de QUALQUER lugar
      },
    ],
  },
  experimental: {
    serverActions: {
      allowedOrigins: [
        'localhost:3000',
      ],
    },
  },
};

// 3. Exportação combinada (Envolvemos sua config com a função do PWA)
export default withPWA(nextConfig);