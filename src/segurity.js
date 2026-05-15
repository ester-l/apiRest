const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
  windowMs: 60 * 1000, 
  max: 10, 
  message: "Muitas requisições, tente novamente depois Ester Lima RGM 2417757."
 
});

module.exports = limiter;