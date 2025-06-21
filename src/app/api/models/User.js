import mongoose, { model, models, Schema } from "mongoose";
import bcrypt from "bcrypt";

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
      validate: {
        validator: (pass) => pass && pass.length >= 5,
        message: "Password must be at least 5 characters long",
      },
    },
  },
  { timestamps: true }
);

UserSchema.post("validate", async function () {
  const hotHashedPassword = this.password;
  const saltRounds = 10;
  this.password = await bcrypt.hash(hotHashedPassword, saltRounds);
});

const User = models?.User || model("User", UserSchema);

export default User;
