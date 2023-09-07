/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["files.stripe.com"], // Add the hostname(s) you want to allow
  },
};

module.exports = nextConfig
