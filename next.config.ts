import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["images.unsplash.com","source.unsplash.com","/*"],
    loader: "default",
  },
  /* config options here */
  env:{
    // SUPPRESS_NO_ENV_WARNING: "true", // Suppresses .env warnings

  }
};

export default nextConfig;
