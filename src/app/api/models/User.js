import mongoose, { model, models, Schema } from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true, // Normalize email
      trim: true,
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

// Add a unique index explicitly to ensure it's created
UserSchema.index({ email: 1 }, { unique: true });

// Hash password before saving
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const saltRounds = 10;
  this.password = await bcrypt.hash(this.password, saltRounds);
  next();
});

const User = models?.User || model("User", UserSchema);

export default User;
