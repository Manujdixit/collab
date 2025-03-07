import { User } from "../../models/user.model.js";

export const userDetails = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    return res.formatResponse(200, null, user);
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
