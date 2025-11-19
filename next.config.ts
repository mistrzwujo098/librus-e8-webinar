import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/librus/e8",
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'paulinaodmatematyki.com',
      },
    ],
  },
};

export default nextConfig;
