import { isValidObjectId } from "mongoose";
import HttpError from "../helpers/HttpError.js";

export const isIdValid = (req, res, next) => {
  const { id } = req.params;

  if (!isValidObjectId(id)) {
    next(HttpError(400, `${id} is not valid id`));
  }
  next();
};
export const isCustomerIdValid = (req, res, next) => {
  const { customerId } = req.params;
  console.log(customerId);
  if (!isValidObjectId(customerId)) {
    next(HttpError(400, `${customerId} is not valid id`));
  }
  next();
};
