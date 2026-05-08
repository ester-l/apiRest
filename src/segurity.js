const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minuto
  max: 5, // máximo 5 requisições por minuto
  message: "Muitas requisições, tente novamente depois Ester Lima RGM 2417757."
 
});

module.exports = limiter;