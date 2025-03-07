import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";
import { JWT_SECRET } from "../config/secrets.js";

export const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(403).json({ message: "Unauthorized" });
  }

  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET);

    const user = await User.findById(decoded.userId).select("-password");
    if (!user) {
      return res.formatResponse(401, "Unauthorized: User not found");
    }
    req.user = user;
    next();
  } catch (error) {
    console.error("Error verifying token:", error.message);
    return res.status(403).json({ message: "Unauthorized" });
  }
};
