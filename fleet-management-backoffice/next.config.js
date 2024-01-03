/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/quadro",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
