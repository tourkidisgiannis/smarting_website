import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [],
    qualities: [100, 75, 90],
  },

  // CRITICAL for shared hosting / CloudLinux
  experimental: {
    workerThreads: false,
    cpus: 1,
  },
};

export default nextConfig;
