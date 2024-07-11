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
  // async redirects() {
  //   return [
  //     {
  //       source: '/:path((?!ja|en|favicon.ico).*)',
  //       destination: '/en',
  //       permanent: true,
  //       has: [
  //         {
  //           type: 'host',
  //           value: '(.*?)',
  //         },
  //       ],
  //     },
  //   ];
  // },
};

module.exports = withNextIntl(config);
