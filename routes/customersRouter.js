import express from "express";
import { protect } from "../middlewares/usersMiddlewares.js";
import {
  getAllCustomers,
  getOneCustomer,
} from "../controllers/customersControllers.js";
import { isCustomerIdValid } from "../middlewares/index.js";

const customersRouter = express.Router();
customersRouter.use(protect);
customersRouter.get("/", getAllCustomers);
customersRouter.get("/:customerId", isCustomerIdValid, getOneCustomer);

export default customersRouter;
