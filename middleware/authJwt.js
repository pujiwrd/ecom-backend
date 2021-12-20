const jwt = require("jsonwebtoken");

class authJwt {

  static authentication(req, res, next) {
    const { accesstoken } = req.headers;
    if (!accesstoken) {
      throw { name: "MISSING_TOKEN" };
    }
    const decoded = jwt.verify(accesstoken, "secretpass", (err, decoded) => {
      if (err) {
        throw { name: "INVALID_TOKEN" };
      }
    req.userData = decoded;
    next();
    });
    
  }
}

module.exports = authJwt;