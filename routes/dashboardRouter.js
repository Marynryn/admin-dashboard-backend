import express from "express";
import { getDashboard } from "../controllers/dashboardControllers.js";
import { protect } from "../middlewares/usersMiddlewares.js";

const dashboardRouter = express.Router();
dashboardRouter.use(protect);
dashboardRouter.get("/", getDashboard);

export default dashboardRouter;
