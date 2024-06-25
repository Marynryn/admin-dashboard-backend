import { model, Schema } from "mongoose";

const productSchema = new Schema(
  {
    photo: String,
    name: String,
    suppliers: String,
    stock: String,
    price: String,
    category: String,
  },
  { versionKey: false }
);

const Product = model("products", productSchema);

export { Product };
