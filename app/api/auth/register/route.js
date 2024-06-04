import connectToDatabase from "@/lib/dbConnect";
import { userModel } from "@/models/userModel";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    const { name, email, password } = await request.json();

    const hashedPassword = await bcrypt.hash(password, 5);
    const newUser = {
      name,
      email,
      password: hashedPassword,
    };

    // Connect to the database
    await connectToDatabase();

    // Check if the user already exists with the provided email
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return new NextResponse("Email already exists", { status: 400 });
    }

    // Create the new user
    await userModel.create(newUser);
    return new NextResponse("User has been created", { status: 201 });
  } catch (err) {
    // Handle specific connection error
    if (err.message.includes("ECONNREFUSED")) {
      return new NextResponse("Database connection refused", { status: 503 });
    }

    return new NextResponse(err.message || "Internal Server Error", {
      status: 500,
    });
  }
};
