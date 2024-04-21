/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // This enables static export
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.unsplash.com',
          port: '',
          pathname: '**',
        },
        {
          protocol: 'https',
          hostname: 'res.cloudinary.com',
          port: '',
          pathname: '**',
        },
      ],
    },
  };
  
  export default nextConfig;
  