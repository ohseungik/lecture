import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dst6jalxvbuf5.cloudfront.net"
      }
    ]
  }
};

export default nextConfig;
