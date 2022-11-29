const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.i.imgur.com',
        port: '80',
        pathname: '/**',
      },
    ],
  },
}