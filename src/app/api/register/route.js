import mongoose from "mongoose";
import User from "../models/User.js";

export async function POST(req) {
  try {
    const body = await req.json();

    await mongoose.connect(process.env.MONGODB_URL);

    await User.create(body);

    return new Response(
      JSON.stringify({ message: "User created successfully" }),
      {
        status: 201,
      }
    );
  } catch (error) {
    if (error.code === 11000) {
      return new Response(JSON.stringify({ message: "Email already exists" }), {
        status: 400,
      });
    }

    return new Response(JSON.stringify({ message: "Something went wrong" }), {
      status: 500,
    });
  }
}
