/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/webp"],
    domains: ["res.cloudinary.com"],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
