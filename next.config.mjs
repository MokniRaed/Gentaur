/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'placehold.co' },
      { protocol: 'https', hostname: 'cdn.gentaur.co.uk' },
      { protocol: 'https', hostname: 'media.licdn.com' },
      { protocol: 'https', hostname: 'www.leinco.com' },
      { protocol: 'https', hostname: 'flowbite.s3.amazonaws.com' }
    ],
    dangerouslyAllowSVG: true,
  },

  env: {
    //  NEXT_PUBLIC_API_HOST: 'https://api.affitechbio.com/api',
    NEXT_PUBLIC_API_HOST: 'http://localhost:8800/gentaur',
  },
  async rewrites() {
    return [
      {
        source: '/gentaur/:path*',
        // destination: 'https://api.affitechbio.com/api/:path*', // Proxy to Backend
        destination: 'http://192.168.100.66:8800/gentau/:path*', // Proxy to Backend
      },
    ];
  },
};

export default nextConfig
