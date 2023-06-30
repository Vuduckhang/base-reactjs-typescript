/** @type {import('next').NextConfig} */
const path = require('path')

module.exports = {
  reactStrictMode: true,
  transpilePackages: ['redux-persist'],
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}
