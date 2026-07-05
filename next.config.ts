import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: the site deploys as plain files (Cloudflare Pages, Netlify, any host).
  output: "export",
  trailingSlash: true,
  images: {
    // No runtime optimizer with static export; images are pre-optimized
    // by scripts/optimize-images.mjs (sharp) into public/images/opt/.
    unoptimized: true,
  },
};

export default nextConfig;
