import express from "express";

import { protect } from "../middlewares/usersMiddlewares.js";

const customersRouter = express.Router();
customersRouter.use(protect);
customersRouter.get("/", getAllCustomers);

export default customersRouter;
