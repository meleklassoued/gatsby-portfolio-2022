module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '6266142488b1bacaa7401159064502e6'),
  },
});
