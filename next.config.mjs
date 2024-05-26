/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.zdnet.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "imgs.search.brave.com",
        port: "",
        pathname: "/**",
      },
      // Add more domains as needed
    ],
  },
};

export default nextConfig;
