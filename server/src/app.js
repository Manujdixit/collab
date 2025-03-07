import express from "express";
import cors from "cors";
import formatResponse from "./middlewares/formatResponse.js";

const app = express();

app.use(cors());

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(formatResponse);

//routes import
import healthRouter from "./routes/health.route.js";
import userRouter from "./routes/user.routes.js";
import projectRouter from "./routes/project.route.js";

//routes declaration
app.use("/api/v1/", healthRouter);
app.use("/api/v1/", userRouter);
app.use("/api/v1/project", projectRouter);

export { app };
