import { Schema, model, models } from "mongoose";
import bcrypt from "bcryptjs";
import { ValidateEmail } from "@/lib/utils";

const UserSchema = new Schema({
  email: {
    type: String,
    required: [true, "Please provide an email"],
    unique: [
      true,
      "The email already exists, try another one or login if it's yours.",
    ],
    validate: {
      validator: function (email: string) {
        return ValidateEmail(email);
      },
      message: "Please provide a valid email",
    },
  },
  password: {
    type: String,
    trim: true,
    select: false,
  },
});

// // Instance Method
UserSchema.methods.comparePassword = async function (
  candidatePassword: string,
  UserPassword: string
) {
  return await bcrypt.compare(candidatePassword, UserPassword);
};

const User = models.User || model("User", UserSchema);
export default User;
