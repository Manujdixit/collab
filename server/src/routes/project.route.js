import { Router } from "express";
import { createProject } from "../controllers/project/createProject.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const projectRouter = Router();

projectRouter.route("/").post(authMiddleware, createProject);

export default projectRouter;
