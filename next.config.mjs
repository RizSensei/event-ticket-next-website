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
        ]
    }
};

export default nextConfig;
