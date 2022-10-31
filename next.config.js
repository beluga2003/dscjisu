/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
  dest: 'public'
})

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['i.pravatar.cc', 'res.cloudinary.com', "avatars.githubusercontent.com", "github.com", "upload.wikimedia.org", "e7.pngegg.com", "play-lh.googleusercontent.com"],
  },
};

module.exports = withPWA(nextConfig);
