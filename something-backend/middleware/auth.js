const jwt = require("jsonwebtoken");
// require("dotenv").config();

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization.split(" ")[1];
  ("Bearer some-value -> ['Bearer', 'some-value']");
  if (!authHeader && authHeader.length < 0) {
    res.status(403).json("A token is required for authentication");
  }

  // console.log("found authHeader", authHeader);
  try {
    const decode = jwt.verify(authHeader, "thisissomesecret");
    req.user = decode; // injection point
    console.log("the decoded value", decode);
  } catch (error) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};

module.exports = verifyToken;
