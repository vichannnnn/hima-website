const withNextIntl = require('next-intl/plugin')();

/** @type {import('next').NextConfig} */
const config = {
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
