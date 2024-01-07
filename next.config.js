/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  nextConfig,
  env: {
    url: "https://www.ayziya.uz:8000/api",
  },
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
};
