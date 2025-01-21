/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'api.charlinasweeps.co.in'],
    unoptimized: true,
  },
  output: "export",
};

export default nextConfig;
