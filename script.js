require("dotenv").config();

const SECRET_KEY = process.env.API_KEY || "Invalid Key";

console.log(SECRET_KEY);

module.exports = {
  SECRET_KEY,
};
