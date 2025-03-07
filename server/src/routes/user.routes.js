import { Router } from "express";
import { signin } from "../controllers/user/signin.controller.js";
import { signup } from "../controllers/user/signup.controller.js";
import { protect } from "../controllers/protect.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const userRouter = Router();

userRouter.route("/signin").post(signin);
userRouter.route("/signup").post(signup);

userRouter.route("/protected").get(authMiddleware, protect);

export default userRouter;
