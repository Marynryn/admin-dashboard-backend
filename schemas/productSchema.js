import Joi from "joi";

export const createProductSchema = Joi.object({
  photo: Joi.string().required(),
  name: Joi.string().required(),
  suppliers: Joi.string().required(),
  stock: Joi.string().required(),
  price: Joi.string().required(),
  category: Joi.string().required(),
});
export const updateProductSchema = Joi.object({
  photo: Joi.string(),
  name: Joi.string(),
  suppliers: Joi.string(),
  stock: Joi.string(),
  price: Joi.string(),
  category: Joi.string(),
});