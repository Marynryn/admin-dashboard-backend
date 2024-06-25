import express from "express";
import { protect } from "../middlewares/usersMiddlewares.js";
import {
  addNewSupplier,
  getAllSuppliers,
  updateSupplier,
} from "../controllers/suppliersControllers.js";
import {
  validateCreateSupplier,
  validateUpdateSupplier,
} from "../helpers/validateBody.js";

const suppliersRouter = express.Router();
suppliersRouter.use(protect);
suppliersRouter.get("/", getAllSuppliers);
suppliersRouter.post("/", validateCreateSupplier, addNewSupplier);
suppliersRouter.put(
  "/:supplierId",

  validateUpdateSupplier,
  updateSupplier
);

export default suppliersRouter;
