const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  const token = req.headers["authorization"];
  if (!token) return res.status(401).json({ msg: "No token" });

  try {
    const decoded = jwt.verify(token.split(" ")[1], "SECRET123");
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Invalid token" });
  }
};
