const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      'react': path.join(__dirname, 'node_modules', 'react'), // Adjust for your path to root node_modules
      'react-dom': path.join(__dirname, 'node_modules', 'react-dom'), // Adjust for your path to root node_modules
    };

    return config
  }
}

module.exports = nextConfig
