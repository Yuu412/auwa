/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.microcms-assets.io", "scdn.line-apps.com"],
  },
};

module.exports = nextConfig;
