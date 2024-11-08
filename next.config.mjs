/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["placehold.co"], // Replace with your domain
    dangerouslyAllowSVG: true,
  },
  env: {
    //  NEXT_PUBLIC_API_HOST: 'https://api.affitechbio.com/api',
    NEXT_PUBLIC_API_HOST: 'http://192.168.100.66:8800/gentaur',
  },
  async rewrites() {
    return [
      {
        source: '/gentaur/:path*',
        // destination: 'https://api.affitechbio.com/api/:path*', // Proxy to Backend
        destination: 'http://192.168.100.66:8800/gentaur/:path*', // Proxy to Backend
      },
    ];
  },
};

export default nextConfig
