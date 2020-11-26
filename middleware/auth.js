import jwt from "jsonwebtoken";

export default auth = (req, res, next) => {
  const token = req.header("x-auth-token");
  if (!tokn) return res.status(401).send("Access denied. No token Provided");

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(400).send("Invalid Token");
  }
};
