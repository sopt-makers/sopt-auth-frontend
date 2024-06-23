import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, options) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            // SVGR 옵션을 여기에 추가할 수 있습니다.
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
