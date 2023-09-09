const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req?.headers?.authorization?.split(" ")[1];
  console.log(authHeader);

  if (!authHeader || authHeader.length <= 0) {
    return res.status(403).json("A token is required for authentication");
  }

  try {
    const decode = jwt.verify(authHeader, "thisissomesecret");
    req.user = decode; // injection point
    console.log("the decoded value", decode);
    // Authentication successful, proceed to the next middleware
    next();
  } catch (error) {
    return res.status(401).send("Invalid Token");
  }
};

module.exports = verifyToken;
