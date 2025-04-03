const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Otras configuraciones...
  experimental: {
    turbo: {
      resolveAlias: {
        "@": path.resolve(__dirname),
      },
    },
  },
};

module.exports = nextConfig;
