import { model, Schema } from "mongoose";

const customerSchema = new Schema(
  {
    _id: Schema.Types.ObjectId,
    photo: String,
    name: String,
    email: String,
    spent: String,
    phone: String,
    address: String,
    register_date: String,
  },
  { versionKey: false }
);

const Customer = model("customers", customerSchema);

export { Customer };
