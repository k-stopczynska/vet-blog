/** @type {import('next').NextConfig} */

const nextConfig = {
     images: {
    domains: ["lh3.googleusercontent.com"],
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  experimental: {
appDir: true,
},
}

module.exports = nextConfig;

