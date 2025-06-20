import mongoose from "mongoose";
import User from "../models/User.js";

export async function POST(req) {
  const body = await req.json();
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log("DB Successfully connected!"))
    .catch(() => console.log("DB connection failed!"));
  const createdUser = await User.create(body);
  return Response.json(createdUser);
}
