import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { signinSchema } from "../../schemas/signin.schema.js";
import { User } from "../../models/user.model.js";
import { JWT_SECRET } from "../../config/secrets.js";

export const signin = async (req, res) => {
  try {
    const result = signinSchema.safeParse(req.body);
    if (!result.success) {
      return res.formatResponse(
        400,
        "invalid Input",
        null,
        result.error.format()
      );
    }

    const { email, password } = result.data;

    const user = await User.findOne({ email });
    if (!user) {
      return res.formatResponse(400, "User not found");
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.formatResponse(401, "Invalid credentials");
    }

    const token = jwt.sign({ userId: user._id }, JWT_SECRET);

    return res.formatResponse(200, "User login successfully", { token });
  } catch (error) {
    console.error("error in signup", error);
    return res.formatResponse(
      500,
      "Internal server error",
      null,
      error.message
    );
  }
};
