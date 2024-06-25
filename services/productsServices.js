import { Product } from "../model/productModel.js";

export const fetchProducts = (filterQuery = {}) => {
  return Product.find(filterQuery);
};
export const createProduct = (body) => Product.create(body);
export const removeProduct = (id) => Product.findOneAndDelete({ _id: id });
export const update = (id, body) =>
  Product.findOneAndUpdate({ _id: id }, body, { new: true });
