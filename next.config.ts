import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "cedre";
const basePath = isGitHubPages ? `/${repositoryName}` : undefined;

const nextConfig: NextConfig = {
  // Static export: the site deploys as plain files (Cloudflare Pages, Netlify, any host).
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath,
  images: {
    // No runtime optimizer with static export; images are pre-optimized
    // by scripts/optimize-images.mjs (sharp) into public/images/opt/.
    unoptimized: true,
  },
};

export default nextConfig;
