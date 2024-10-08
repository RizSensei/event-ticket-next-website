/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        dangerouslyAllowSVG: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.ticketsanjal.com'
            },
            {
                protocol: 'https',
                hostname: 'images.pexels.com'
            },
            {
                protocol: 'http',
                hostname: '128.199.23.2',
                port: '8080',
                pathname: '/uploads/**',
              },
        ]
    }
};

export default nextConfig;
