module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '7da34e38acb2565b78233e766a850e10'),
  },
});
