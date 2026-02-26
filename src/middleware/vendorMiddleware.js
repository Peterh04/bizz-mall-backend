import User from "../models/User.js";

export const verifyIsAdmin = async (req, res, next) => {
  const user = await User.findByPk(req.user.id);

  if (user.role !== "admin") {
    return res.status(403).json({
      message: "Only Admin can access!",
    });
  }
  next();
};
