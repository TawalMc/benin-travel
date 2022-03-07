/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    styledComponents: true
  },
  env: {
    MAILCHIMP_AUDIENCE_ID: process.env.MAILCHIMP_AUDIENCE_ID
  },
  images: {
    domains: ["images.ctfassets.net"]
  }
}

module.exports = nextConfig
