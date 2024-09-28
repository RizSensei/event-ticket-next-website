/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        dangerouslyAllowSVG: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'eventmx.com'
            },
            {
                protocol: 'https',
                hostname: 'cdn.ticketsanjal.com'
            },
            {
                protocol: 'https',
                hostname: 'i.pinimg.com'
            },
            {
                protocol: 'https',
                hostname: 'img.freepik.com'
            },
        ]
    }
};

export default nextConfig;
