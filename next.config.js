const withNextIntl = require('next-intl/plugin')();
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

/** @type {import('next').NextConfig} */
const config = {
  webpack: (config, options) => {
    if (!config.resolve.plugins) {
      config.resolve.plugins = [];
    }
    config.resolve.plugins.push(
      new TsconfigPathsPlugin({
        configFile: './tsconfig.json',
      }),
    );

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
