/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.freepik.com",
        port: "",
        pathname: "/fotos-gratis/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/painel",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
