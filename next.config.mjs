/** @type {import('next').NextConfig} */
const nextConfig = {
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
