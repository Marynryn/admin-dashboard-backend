import { userService } from "../services/userService.js";
import { catchAsync } from "../helpers/catchAsync.js";

export const signup = catchAsync(async (req, res) => {
  const { email } = req.body;
  const userExists = await userService.checkUserExists({
    email: req.body.email,
  });

  if (userExists) {
    return res.status(409).json({
      message: "Email  in use",
    });
  }

  const newUser = await userService.signup({
    ...req.body,
  });

  res.status(201).json({
    user: {
      name: newUser.name,
      email: newUser.email,
    },
  });
});

export const login = catchAsync(async (req, res) => {
  const user = await userService.login(req.body);

  res.status(200).json({
    user: {
      name: user.name,
      email: user.email,
    },
    token: user.token,
  });
});
export const logout = catchAsync(async (req, res) => {
  const token =
    req.headers.authorization?.startsWith("Bearer ") &&
    req.headers.authorization.split(" ")[1];
  console.log(token);
  await userService.logout(token);
  res.status(204).send();
});

export const getCurrentUser = async (req, res) => {
  try {
    const user = req.user;
    res.status(200).json({
      name: user.name,
      email: user.email,
    });
  } catch (er) {
    console.error(er);
  }
};
