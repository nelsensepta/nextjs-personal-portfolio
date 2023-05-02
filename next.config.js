/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/webp"],
    domains: ["storage.googleapis.com"],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
