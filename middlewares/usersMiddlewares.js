import { catchAsync } from "../helpers/catchAsync.js";
import { jwtService } from "../services/jwtService.js";
import { userService } from "../services/userService.js";

import HttpError from "./../helpers/HttpError.js";

export const protect = catchAsync(async (req, res, next) => {
  const token =
    req.headers.authorization?.startsWith("Bearer ") &&
    req.headers.authorization.split(" ")[1];

  const userId = jwtService.checkToken(token);

  if (!userId) throw HttpError(401, "Not authorized 1");
  const currentUser = await userService.getUserById(userId);

  if (!currentUser) {
    throw HttpError(401, "Not authorized 2");
  }

  if (currentUser.token != token) {
    throw HttpError(401, "Not authorized 3");
  }

  req.user = currentUser;
  next();
});
