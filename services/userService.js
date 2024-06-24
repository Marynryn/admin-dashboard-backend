import { User } from "../model/userModel.js";
import { jwtService } from "../services/jwtService.js";
import HttpError from "../helpers/HttpError.js";

export const signup = async (userData) => {
  console.log(userData);
  const user = await User.create({
    ...userData,
  });
  await user.hashPassword();
  await user.hashEmail();
  await user.save();
  const token = jwtService.signToken(user.id);

  const newUser = await User.findByIdAndUpdate(
    user._id,
    { token },
    { new: true }
  );

  return newUser;
};

export const checkUserExists = async (filter) => {
  const userExists = await User.exists(filter);
  return userExists;
};
export const updateUserToken = (id, body) => User.findByIdAndUpdate(id, body);
export const login = async ({ email, password }) => {
  const user = await User.findOne({ email }).select("+password");

  if (!user) throw HttpError(401, "Email or password is wrong");

  const isPasswordValid = await user.checkPassword(password, user.password);

  if (!isPasswordValid) throw HttpError(401, "Email or password is wrong..");
  const token = jwtService.signToken(user._id);
  user.token = token;
  await user.save();
  return user;
};
export const getUserById = (id) => User.findById(id);

export const logout = async (token) => {
  if (!token) {
    throw HttpError(401, "Not authorized 6");
  }
  const userId = jwtService.checkToken(token);

  if (!userId) throw HttpError(401, "Not authorized 7 ");

  const currentUser = await getUserById(userId);

  if (!currentUser) throw HttpError(401, "Not authorized 8");

  currentUser.token = null;
  console.log(currentUser);
  await currentUser.save();
  console.log(currentUser.save());
  return;
};

export * as userService from "./userService.js";
