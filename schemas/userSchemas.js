import Joi from "joi";

export const createUserSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

export const LoginUserSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});
