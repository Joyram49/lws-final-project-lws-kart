import connectToDatabase from "@/lib/dbConnect";
import { replaceMongoIdInArray } from "@/lib/utils/data-util";
import { decryptToken } from "@/lib/utils/decryptToken";
import { getNewTokens } from "@/lib/utils/getNewToken";
import { userModel } from "@/models/userModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const secretKey = new TextEncoder().encode(process.env.AUTH_SECRET);
  const { refreshToken } = await request.json();

  if (!refreshToken) {
    return new NextResponse.json("Please provide a valid refreshToken", {
      status: 400,
    });
  }
  await connectToDatabase();

  try {
    const decoded = await decryptToken(token);

    if (!decoded) {
      throw new Error("invalid refresh token");
    }
    const id = new mongoose.Types.ObjectId(decoded?.id);
    const user = await userModel.find({ _id: id }).lean();
    if (user.length === 0) {
      throw new Error("User not found");
    }
    const leanedUser = replaceMongoIdInArray(user);
    const token = getNewTokens(leanedUser[0]);

    return NextResponse.json(token, { status: 200 });
  } catch (error) {
    return NextResponse.json(error.message, { status: 500 });
  }
};
