import { catchAsync } from "../helpers/catchAsync.js";
import { fetchOrders } from "../services/ordersServices.js";

export const getOrders = catchAsync(async (req, res) => {
  const { name } = req.query;

  const filterQuery = {};
  if (name) {
    filterQuery.name = { $regex: new RegExp(name, "i") };
  }

  const orders = await fetchOrders(filterQuery);
  res.status(200).json(orders);
});
