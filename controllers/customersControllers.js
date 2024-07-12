import { catchAsync } from "../helpers/catchAsync.js";
import {
  fetchCustomers,
  fetchOneCustomer,
} from "../services/customersServices.js";

export const getAllCustomers = catchAsync(async (req, res) => {
    const { name } = req.query;
  const filterQuery = {};
  if (name) {
    filterQuery.name = { $regex: new RegExp(name, "i") };
  }
  const customers = await fetchCustomers(filterQuery);
  res.status(200).json(customers);
});
export const getOneCustomer = catchAsync(async (req, res) => {
  const { id } = req.params;
  const customer = await fetchOneCustomer(id);
  res.status(200).json(customer);
});
