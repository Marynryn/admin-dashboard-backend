import express from "express";
import { protect } from "../middlewares/usersMiddlewares.js";
import {
  addNewProduct,
  deleteProduct,
  getAllProducts,
  updateProduct,
} from "../controllers/productsControllers.js";
import {
  validateCreateProduct,
  validateUpdateProduct,
} from "../helpers/validateBody.js";
import { isProductIdValid } from "../middlewares/index.js";

const productsRouter = express.Router();
productsRouter.use(protect);
productsRouter.get("/", getAllProducts);
productsRouter.post("/", validateCreateProduct, addNewProduct);
productsRouter.put(
  "/:productId",
  isProductIdValid,
  validateUpdateProduct,
  updateProduct
);
productsRouter.delete("/:productId", isProductIdValid, deleteProduct);
export default productsRouter;
