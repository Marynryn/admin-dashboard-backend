import { Order } from "../model/orderModel.js";

export const fetchOrders = (filterQuery = {}) => {
  return Order.find(filterQuery);
};
