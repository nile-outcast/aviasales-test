module.exports = {
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: '/',
        destination: '/tickets/cheap',
        permanent: true,
      },
    ];
  },
};