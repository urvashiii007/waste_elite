require("dotenv").config();

module.exports = {
  MONGOURI: process.env.MONGODB_URI,
  JWT_SECRET: process.env.JWT_SECRET,
  SENDGRID_API: process.env.SENDGRID_API,
  EMAIL: process.env.EMAIL,
  PORT: process.env.PORT || 5000
};
