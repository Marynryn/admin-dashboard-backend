import { model, Schema } from "mongoose";

const dashboardSchema = new Schema(
  {
    _id: Schema.Types.ObjectId,
    totalProducts: Number,
    totalSuppliers: Number,
    totalCustomers: Number,
    recentCustomers: [
      {
        image: String,
        name: String,
        email: String,
        spent: String,
        phone: String,
        address: String,
        register_date: String,
      },
    ],
    transactions: [
      {
        name: String,
        amount: String,
        type: String,
      },
    ],
  },
  { versionKey: false }
);

const Dashboard = model("dashboard", dashboardSchema);

export { Dashboard };
