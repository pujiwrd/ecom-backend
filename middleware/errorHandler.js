module.exports = (err, req, res, next) => {
    let code = 0;
    let name = err.name;
    let message = "";
  
    switch (name) {
      case "UNAUTHORIZED_TOKEN":
        code = 401;
        message = "Unauthorized!!";
        break;
      case "MISSING_TOKEN":
        code = 401;
        message = "Akses Token Hilang (Anda Belum Login)!!";
        break;
      case "INVALID_TOKEN":
        code = 401;
        message = "Akses Token Tidak Benar!!";
        break;
      case "UNAUTHORIZED_EMAIL":
        code = 400;
        message = "Email Not Match!!";
        break;
      case "UNAUTHORIZED_PASSWORD":
        code = 400;
        message = "Password Not Match!!";
        break;
      case "YOU_CANNOT_ATTACK":
        code = 401;
        message = "Failed! Your Troop Has Empty To Attack!";
        break;
      case "CANNOT_ATTACK_ENEMY":
        code = 401;
        message = "Failed! Troops Enemy Less Than 50!";
        break;
      default:
        code = 500;
        message = "Internal Server Error!";
        break;
    }
  
    res.status(code).json({ Succes: false, Message: message });
  };
  