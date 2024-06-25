import HttpError from "../helpers/HttpError.js";
import { Supplier } from "../model/supplierModel.js";

export const fetchSuppliers = () => {
  return Supplier.find();
};
export const checkSupplierExists = async (filter, throwError = true) => {
  const supplierExists = await Supplier.exists(filter);
  if (supplierExists && throwError) {
    throw HttpError(409, "Supplier already exists..");
  }
  return supplierExists;
};
export const createSupplier = (body) => Supplier.create(body);
export const update = (id, body) =>
  Supplier.findOneAndUpdate({ _id: id }, body, { new: true });
