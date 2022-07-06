/** @type {import('next').NextConfig} */

module.exports = {
  compress: true,
  reactStrictMode: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en"
  },
  webpack: (config, { dev }) => {
    config.module.rules.push(
      {
        test: /\.test.js$/,
        loader: 'ignore-loader'
      }
    );
    return config;
  }
}
