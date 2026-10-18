/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },

  // Proxy requests from /api/* to your HTTP EC2 backend
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://15.252.71.37:8080/:path*",
      },
    ];
  },
};

export default nextConfig;