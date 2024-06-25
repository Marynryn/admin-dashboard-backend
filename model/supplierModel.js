import { model, Schema } from "mongoose";

const supplierSchema = new Schema(
  {
    name: String,
    address: String,
    suppliers: String,
    date: String,
    amount: String,
    status: String,
  },
  { versionKey: false }
);

const Supplier = model("suppliers", supplierSchema);

export { Supplier };
