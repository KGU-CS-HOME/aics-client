/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  transpilePackages: ['@aics/ui'],
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ['@svgr/webpack'],
    })

    config.resolve.alias.canvas = false
    config.optimization.minimize = false

    return config
  },
}

module.exports = nextConfig
