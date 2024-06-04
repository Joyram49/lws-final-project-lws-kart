import connectToDatabase from "@/lib/dbConnect";
import { replaceMongoIdInObject } from "@/lib/utils/data-util";
import { userModel } from "@/models/userModel";
import bcrypt from "bcryptjs";
import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    const { userId } = params;
    await connectToDatabase();
    const user = await userModel.findById(userId).lean();
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    if (user && user._id) {
      delete user.password;
    }
    const response = replaceMongoIdInObject(user);
    if (response?.id) {
      return NextResponse.json(response, { status: 200 });
    } else {
      throw new Error("Failed to get user");
    }
  } catch (err) {
    console.error(err); // Logging the error
    return NextResponse.json(
      { error: err.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function PATCH(request) {
  try {
    const { updatedProfile, address } = await request.json();

    await connectToDatabase();
    const user = await userModel.findById(updatedProfile.id);
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    if (!address) {
      user.name = updatedProfile.firstName + " " + updatedProfile.lastName;
      delete updatedProfile.firstName;
      delete updatedProfile.lastName;
    }

    if (!user.password) {
      const hashedPassword = await bcrypt.hash("123456", 5);
      user.password = hashedPassword;
    }

    Object.keys(updatedProfile).forEach((key) => {
      user[key] = updatedProfile[key];
    });

    // Update the updated_at field
    user.updated_at = new Date();

    // Save the updated user
    const response = await user.save();
    if (response?.id) {
      revalidateTag("account");
      return NextResponse.json(response, { status: 200 });
    } else {
      throw new Error("Failed to update user");
    }
  } catch (err) {
    console.error(err); // Logging the error
    return NextResponse.json(
      { error: err.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
