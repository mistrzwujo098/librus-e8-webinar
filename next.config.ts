import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/librus/e8",
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
