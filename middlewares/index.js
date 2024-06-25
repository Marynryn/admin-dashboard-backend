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

  if (!isValidObjectId(customerId)) {
    next(HttpError(400, `${customerId} is not valid id`));
  }
  next();
};
export const isSupplierIdValid = (req, res, next) => {
  const { supplierId } = req.params;

  if (!isValidObjectId(supplierId)) {
    next(HttpError(400, `${supplierId} is not valid id`));
  }
  next();
};
export const isProductIdValid = (req, res, next) => {
  const { productId } = req.params;

  if (!isValidObjectId(productId)) {
    next(HttpError(400, `${productId} is not valid id`));
  }
  next();
};
