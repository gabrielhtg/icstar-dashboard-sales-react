/** @type {import('next').NextConfig} */
const nextConfig = {
  //   async rewrites() {
  //     return [
  //       {
  //         source: "/api/:path*",
  //         destination: "http://localhost:8080/:path*", // Proxy to Backend
  //       },
  //     ];
  //   },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://192.168.141.126:8080/api/:path*", // Sesuaikan dengan URL Spring Boot Anda
      },
    ];
  },
};

module.exports = nextConfig;
