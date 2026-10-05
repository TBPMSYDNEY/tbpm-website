/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      // Renamed to match the service name and search intent.
      {
        source: "/remote-building-management",
        destination: "/part-time-building-management",
        statusCode: 301,
      },
    ];
  },
};

export default nextConfig;
