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
    return [
      // Byline change (Zac Reid -> Zac Christie): keep the old author URL alive
      // so anything already indexed or linked lands on the new page.
      {
        source: "/author/zac-reid",
        destination: "/author/zac-christie",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
