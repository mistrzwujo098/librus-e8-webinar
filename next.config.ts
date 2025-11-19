import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // basePath removed - Worker handles routing via PREFIX /librus
  // This allows favicon and assets to work correctly
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'paulinaodmatematyki.com',
      },
    ],
  },
};

export default nextConfig;
