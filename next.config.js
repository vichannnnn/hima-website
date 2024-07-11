const withNextIntl = require('next-intl/plugin')();
const path = require('path');

/** @type {import('next').NextConfig} */
const config = {
  output: 'standalone',
  webpack: (config, { isServer }) => {
    config.resolve.alias['~'] = path.join(__dirname, 'src');
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.himaa.me',
        pathname: '**',
      },
    ],
  },
};

module.exports = withNextIntl(config);
