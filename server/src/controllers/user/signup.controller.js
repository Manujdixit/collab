import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { signupSchema } from "../../schemas/signup.schema.js";
import { User } from "../../models/user.model.js";
import { JWT_SECRET } from "../../config/secrets.js";

//signup route
export const signup = async (req, res) => {
  try {
    const result = signupSchema.safeParse(req.body);

    if (!result.success) {
      return res.formatResponse(
        400,
        "invalid Input",
        null,
        result.error.format()
      );
    }

    const { name, email, password, role } = result.data;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.formatResponse(400, "Email already taken");
    }

    //hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
    });

    const token = jwt.sign({ userId: newUser._id }, JWT_SECRET);

    return res.formatResponse(200, "User created successfully", { token });
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
