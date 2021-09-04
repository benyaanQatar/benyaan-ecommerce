/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/register',
        destination: '/register/en',
        permanent: true,
      },
    ];
  },
};
