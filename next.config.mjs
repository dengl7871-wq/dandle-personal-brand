/** @type {import('next').NextConfig} */
const nextConfig = {
  ...(process.env.STATIC_EXPORT === "true"
    ? {
        output: "export",
        trailingSlash: true
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
