const jwt = require("jsonwebtoken");

const getJWTSecret = () => {
  // retrieving secret key
  const secret = process.env.JWT_SECRET_KEY;
  if (!secret) {
    throw new Error("Missing secrets to sign JWT token");
  }
  return secret;
};

const createJWTToken = (username) => {
  const today = new Date();
  const exp = new Date(today);

  const secret = getJWTSecret();
  exp.setDate(today.getDate() + 60); // set expiry date on payload + 2 months

  // set expiry date on payload

  // Method 1
  // const payload = { username: username, exp: parseInt(exp.getTime() / 1000) };
  // const token = jwt.sign(payload, secret, { expiresIn: "7d" });

  // Method 2
  const payload = { username };
  const token = jwt.sign(payload, secret, { expiresIn: "7d" });

  return token;
};

module.exports = createJWTToken;
