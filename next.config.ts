import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    /* Liberar de todo lugar */
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
        'sqn0466t-3000.brs.devtunnels.ms', 
      ],
    },
  },
};

export default nextConfig;
