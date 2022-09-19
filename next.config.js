/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/mail',
        destination: 'https://mail.zoho.com',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
