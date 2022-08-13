/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images : {
    domains : ["www.logo.wine"]
  }
}

module.exports = nextConfig
