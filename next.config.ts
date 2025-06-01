import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    useCache: true,
  },
  images: {
    domains: [
      "https://image.tmdb.org/t/p/original",
      "https://img.youtube.com/vi/",
    ],
  },
  /* config options here */
};

export default nextConfig;
