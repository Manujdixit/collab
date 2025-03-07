import { Router } from "express";
import { signin } from "../controllers/user/signin.controller.js";
import { signup } from "../controllers/user/signup.controller.js";

const userRouter = Router();

userRouter.route("/signin").post(signin);
userRouter.route("/signup").post(signup);

export default userRouter;
