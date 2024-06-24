import express from "express";
import morgan from "morgan";
import cors from "cors";
import mongoose from "mongoose";
import contactsRouter from "./routes/contactsRouter.js";
import dotenv from "dotenv";
import userRouter from "./routes/userRouter.js";
import dashboardRouter from "./routes/dashboardRouter.js";

dotenv.config();

const app = express();
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Database connection successful");
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
app.use(express.static("tmp"));

app.use("/api/dashboard", dashboardRouter);
app.use("/api/user", userRouter);
app.use("/api/customers", customersRouter);
// app.use("/api/products", productsRouter);
// app.use("/api/suppliers", suppliersRouter);
// app.use("/api/orders", ordersRouter);

app.use((_, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

app.listen(3000, () => {
  console.log("Server is running. Use our API on port: 3000");
});
