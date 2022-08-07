module.exports = ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET", "0bd0b8f7117f739eff457c6e6e89e949"),
  },
});
