/** @type {import('next').NextConfig} */
const nextConfig = {
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

  async rewrites() {
    return [
      {
        source: "/auth/:path*",
        destination: "http://15.252.71.37:8080/auth/:path*",
      },
      {
        source: "/public/:path*",
        destination: "http://15.252.71.37:8080/public/:path*",
      },
    ];
  },
};

export default nextConfig;