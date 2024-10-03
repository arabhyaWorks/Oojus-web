/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // output: 'export',
  images: {
    unoptimized: true,
    domains: [
      "staticin.sadhguru.org",
      "sa.adanione.com",
      "media-assets.swiggy.com",
      "assets-global.website-files.com",
      "firebasestorage.googleapis.com",
      "vyaparbackend.s3.amazonaws.com",
      "firebasestorage.googleapis.com",
      
    ],
  },
};

module.exports = nextConfig;
