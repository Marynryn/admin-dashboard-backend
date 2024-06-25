import { model, Schema } from "mongoose";

const orderSchema = new Schema(
  {
    _id: Schema.Types.ObjectId,
    photo: String,
    name: String,
    address: String,
    products: String,
    price: String,
    status: String,
    order_date: String,
  },
  { versionKey: false }
);

const Order = model("orders", orderSchema);

export { Order };
