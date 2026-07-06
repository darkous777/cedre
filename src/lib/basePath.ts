// Static export can be served from a sub-path (GitHub Pages project site).
// Prefix absolute asset paths with the same basePath next.config.ts applies,
// so <Image src> resolves whether the site is at the root or under /cedre.
const isGitHubPages = process.env.GITHUB_PAGES === "true";
const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "cedre";
const basePath = isGitHubPages ? `/${repositoryName}` : "";

export function withBasePath(src: string) {
  if (!basePath || !src.startsWith("/")) return src;
  return `${basePath}${src}`;
}
