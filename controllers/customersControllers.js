import { catchAsync } from "../helpers/catchAsync.js";
import {
  fetchCustomers,
  fetchOneCustomer,
} from "../services/customersServices.js";

export const getAllCustomers = catchAsync(async (req, res) => {
  const customers = await fetchCustomers();
  res.status(200).json(customers);
});
export const getOneCustomer = catchAsync(async (req, res) => {
  const { id } = req.params;
  const customer = await fetchOneCustomer(id);
  res.status(200).json(customer);
});
