import { model, Schema } from "mongoose";
import { compare } from "bcrypt";
import bcrypt from "bcryptjs";
import crypto from "crypto";
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "admin",
    },
    token: {
      type: String,
      default: null,
    },
  },
  { versionKey: false }
);
userSchema.methods.hashPassword = async function () {
  this.password = await bcrypt.hash(this.password, 10);
};
userSchema.methods.checkPassword = (candidate, passwordHash) =>
  compare(candidate, passwordHash);
userSchema.methods.hashEmail = async function () {
  const hashEmail = crypto.createHash("md5").update(this.email).digest("hex");
};
const User = model("user", userSchema, "users");

export { User };
