/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "scontent-vie1-1.xx.fbcdn.net",
      "images.unsplash.com",
      "lh3.googleusercontent.com",
    ],
  },
};

module.exports = nextConfig;
