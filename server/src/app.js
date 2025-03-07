import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

//routes import
import healthRouter from "./routes/health.route.js";

//routes declaration
app.use("/api/v1/health", healthRouter);

export { app };
