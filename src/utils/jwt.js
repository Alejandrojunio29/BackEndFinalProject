//Logica para token
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;
const User = require("../models/users.js");

module.exports = {
  //Create crea el token
  create: (data) => {
    let token = jwt.sign({ _id: data._id, email: data.email }, JWT_SECRET, {
      expiresIn: "1h",
    });
    return token;
  },
  //Verify es un middleware que autentica el token
  verify: (req, res, next) => {
    //recuperamos el token de los headers
    const token = req.headers["bearerauth"];
    const dateNow = new Date();
    //si existe el token se va descifrar
    if (!token) {
      res.status(401).send({ msg: "Usuario sin autorizacion" });
    }
    //jwt_secret es pa palabra secreta de definimos antes, decode es el token descifrado
    jwt.verify(token, JWT_SECRET, async (err, decode) => {
      if (err) res.status(401).send({ msg: "Token no valido" });
      if (decode.exp < dateNow.getTime()) {
        res.status(401).send({ msg: "Tu sesión expiro" });
      }
      req.loginUser = await User.findById(decode._id);
      next();
    });
  },
};
