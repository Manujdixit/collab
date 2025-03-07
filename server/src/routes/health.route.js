import { Router } from "express";
import { health } from "../controllers/health.controller.js";

const healthRouter = Router();

healthRouter.route("/").get(health);

export default healthRouter;
