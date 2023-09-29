/** @type {import('next').NextConfig} */

const nextConfig = {
     images: {
    domains: ["lh3.googleusercontent.com"],
  },
  experimental: {
    forceSwcTransforms: true,
  }
}

module.exports = nextConfig;

