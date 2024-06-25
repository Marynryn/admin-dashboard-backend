import { Customer } from "../model/customersModel.js";

export const fetchCustomers = async () => {
  try {
    const customers = await Customer.find();

    return customers;
  } catch (error) {
    throw error;
  }
};
export const fetchOneCustomer = async (id) => {
  try {
    const customer = await Customer.findOne(id);

    return customer;
  } catch (error) {
    throw error;
  }
};
