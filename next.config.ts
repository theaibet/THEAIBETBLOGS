import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // WordPress media library — set WORDPRESS_MEDIA_HOST in Vercel env
      ...(process.env.WORDPRESS_MEDIA_HOST
        ? [{ protocol: "https" as const, hostname: process.env.WORDPRESS_MEDIA_HOST }]
        : []),
    ],
  },
  async redirects() {
    return [];
  },
};

export default nextConfig;
