module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '957bac020ae565790644d1d0d6245601'),
  },
});
