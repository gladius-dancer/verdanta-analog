/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  nextConfig,
  env: {
    // url: "https://massagethotel.com:8000",
    // url: "https://94.198.217.101:8000",
  },
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
};
