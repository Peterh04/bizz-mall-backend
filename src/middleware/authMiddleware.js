import jwt from "jsonwebtoken";
import dotev from "dotenv";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.admin_token;

  if (!token) {
    return res.status(403).json({
      message: "A token is required for authorization.",
    });
  }
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: "The token is invalid" });
    req.user = user;
    next();
  });
};

export default verifyToken;
