import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/librus",
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
