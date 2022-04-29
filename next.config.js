const WindiCSSWebpackPlugin = require('windicss-webpack-plugin')

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({ test: /\.svg$/, use: ['@svgr/webpack'] })
    config.plugins.push(new WindiCSSWebpackPlugin())
    return config
  }
}
