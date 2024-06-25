import express from "express";
import { protect } from "../middlewares/usersMiddlewares.js";
import { getOrders } from "../controllers/ordersControllers.js";

const ordersRouter = express.Router();
ordersRouter.use(protect);
ordersRouter.get("/", getOrders);

export default ordersRouter;
