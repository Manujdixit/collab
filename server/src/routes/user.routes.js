import { Router } from "express";

const userRouter = Router();

userRouter.route("/login").post(loginUser);

export default userRouter;
