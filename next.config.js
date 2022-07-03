/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['rickandmortyapi.com', 'api/character/avatar/']
  },
}

module.exports = nextConfig
