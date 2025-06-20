import mongoose, { model, models, Schema } from "mongoose";

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      validate: (pass) => {
        if (!pass || pass.length < 5) {
          new Error("Invalid password");
        }
      },
    },
  },
  { Timestamp: true }
);

const User = models?.User || model("User", UserSchema);

export default User;
