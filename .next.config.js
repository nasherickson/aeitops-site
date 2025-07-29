/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      turbo: false, // Disable Turbopack, force Webpack
    },
  }
  
  module.exports = nextConfig