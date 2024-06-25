import { catchAsync } from "../helpers/catchAsync.js";
import {
  createProduct,
  fetchProducts,
  removeProduct,
  update,
} from "../services/productsServices.js";

export const getAllProducts = catchAsync(async (req, res) => {
  const { name } = req.query;

  const filterQuery = {};
  if (name) {
    filterQuery.name = { $regex: new RegExp(name, "i") };
  }

  const orders = await fetchProducts(filterQuery);
  res.status(200).json(orders);
});
export const addNewProduct = catchAsync(async (req, res) => {
  const newProduct = await createProduct(req.body);

  res.status(201).json(newProduct);
});
export const deleteProduct = catchAsync(async (req, res) => {
  const removedProduct = await removeProduct(req.params.productId);
  if (!removedProduct) {
    return res.status(404).json({
      message: "Not found",
    });
  }
  res.status(200).json(removedProduct);
});
export const updateProduct = catchAsync(async (req, res) => {
  const product = await update(req.params.productId, req.body, {
    new: true,
  });
  if (!product) {
    return res.status(404).json({
      message: "Not found",
    });
  }

  if (Object.keys(req.body).length === 0) {
    return res
      .status(400)
      .json({ message: "Body must have at least one field" });
  }
  res.status(200).json(product);
});
