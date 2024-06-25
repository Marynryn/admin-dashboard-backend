import HttpError from "../helpers/HttpError.js";
import {
  createSupplierSchema,
  updateSupplierSchema,
} from "../schemas/suppliersSchema.js";

import { createUserSchema, LoginUserSchema } from "../schemas/userSchemas.js";

const validateBody = (schema) => {
  const func = (req, _, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      next(HttpError(400, error.message));
    }
    next();
  };

  return func;
};

export const validateCreateUserBody = validateBody(createUserSchema);
export const validateLoginUserBody = validateBody(LoginUserSchema);
export const validateCreateSupplier = validateBody(createSupplierSchema);
export const validateUpdateSupplier = validateBody(updateSupplierSchema);
