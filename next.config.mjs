const isStaticExport = process.env.STATIC_EXPORT === "true";
const isGitHubPages = process.env.GITHUB_PAGES === "true";
const githubPagesBasePath = "/dandle-personal-brand";

/** @type {import('next').NextConfig} */
const nextConfig = {
  ...(isStaticExport
    ? {
        output: "export",
        trailingSlash: true
      }
    : {}),
  ...(isGitHubPages
    ? {
        basePath: githubPagesBasePath,
        assetPrefix: `${githubPagesBasePath}/`
      }
    : {}),
  typescript: {
    ignoreBuildErrors: true
  },
  experimental: {
    cpus: 1,
    workerThreads: true,
    webpackBuildWorker: false,
    parallelServerCompiles: false,
    parallelServerBuildTraces: false
  }
};

export default nextConfig;
