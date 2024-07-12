import { Customer } from "../model/customersModel.js";

export const fetchCustomers = (filterQuery = {}) => {
  return Customer.find(filterQuery);
};
export const fetchOneCustomer = async (id) => {
  try {
    const customer = await Customer.findOne(id);

    return customer;
  } catch (error) {
    throw error;
  }
};
