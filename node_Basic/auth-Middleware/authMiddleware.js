const jwt = require("jsonwebtoken");
const User = require("../schemas/users");

module.exports = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    const [tokenType, tokenValue] = authorization.split(" ");

    if (tokenType !== "Bearer") {
      res.json({
        msg: "TypeIncorrect",
      });
      return;
    }
    const { userId } = jwt.verify(tokenValue, 'junhee916');
    console.log(userId)
    console.log(tokenValue)

    User.findById(userId)
      .exec()
      .then((user) => {
        console.log("User정보:"+user)
        res.locals.user = user;
        next();
      });
  } catch (error) {
    res.json({
      msg: "not_login",
    });
    return;
  }
};
