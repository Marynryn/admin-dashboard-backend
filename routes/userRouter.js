import express from "express";
import {
  validateCreateUserBody,
  validateLoginUserBody,
} from "../helpers/validateBody.js";
import {
  signup,
  login,
  logout,
  getCurrentUser,
} from "../controllers/usersControllers.js";
import { protect } from "../middlewares/usersMiddlewares.js";

const userRouter = express.Router();

userRouter.post("/auth", validateCreateUserBody, signup);
userRouter.post("/login", validateLoginUserBody, login);
userRouter.post("/logout", logout);
userRouter.get("/user-info", protect, getCurrentUser);

export default userRouter;
