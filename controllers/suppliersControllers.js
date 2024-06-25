import { catchAsync } from "../helpers/catchAsync.js";
import {
  checkSupplierExists,
  createSupplier,
  fetchSuppliers,
  update,
} from "../services/suppliersServices.js";

export const getAllSuppliers = catchAsync(async (req, res) => {
  const suppliers = await fetchSuppliers();
  res.status(200).json(suppliers);
});
export const addNewSupplier = catchAsync(async (req, res) => {
  const supplier = await checkSupplierExists({
    name: req.body.name,
  });
  if (!supplier) {
    const newSupplier = await createSupplier(req.body);

    res.status(201).json(newSupplier);
  }
});
export const updateSupplier = catchAsync(async (req, res) => {
  const supplier = await update(req.params.supplierId, req.body, {
    new: true,
  });
  if (!supplier) {
    return res.status(404).json({
      message: "Not found",
    });
  }

  if (Object.keys(req.body).length === 0) {
    return res
      .status(400)
      .json({ message: "Body must have at least one field" });
  }
  res.status(200).json(supplier);
});
