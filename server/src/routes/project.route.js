import { Router } from "express";

import { authMiddleware } from "../middlewares/auth.middleware.js";

const userRouter = Router();

userRouter.route().post();
userRouter.route().post();

userRouter.route("/protected").get(authMiddleware, protect);

export default userRouter;
