import mongoose from "mongoose";
import User from "../models/User.js";

export async function POST(req) {
  const body = await req.json();

  await mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log("DB success"))
    .catch(() => console.log("DB failed"));

  try {
    const updatedData = await User.create(body);
    console.log(updatedData);
    return Response.json({ message: "User successfully added!" });
  } catch (err) {
    if (err.code == 11000) {
      return Response.json({ message: "Email is already exist!" });
    }
    return Response.json({ message: "Something went wrong, try again!" });
  }
}
