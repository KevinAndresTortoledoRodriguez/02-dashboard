/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com'
            },
            {
                protocol: 'https',
                hostname: 'raw.githubusercontent.com'
            },
        ]
    },
    reactStrictMode: true,
    swcMinify: true,
    // added configuration
    webpack: (config, context) => {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300
      }
      return config
    }
};

export default nextConfig;
