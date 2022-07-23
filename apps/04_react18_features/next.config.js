function rewrites() {
  return [
    {
      source: "/api/:path*",
      destination: "http://localhost:4010/api/:path*",
    },
  ];
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  rewrites,
}

module.exports = nextConfig
