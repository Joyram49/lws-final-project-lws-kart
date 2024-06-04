import connectToDatabase from "@/lib/dbConnect";
import { userModel } from "@/models/userModel";
import { replaceMongoIdInObject } from "../../utils/data-util";

export async function getUserById(userId) {
  try {
    await connectToDatabase();
    const user = await userModel.findById(userId).lean();

    if (user && user._id) {
      delete user.password;
    }

    return replaceMongoIdInObject(user);
  } catch (error) {
    throw new Error(error.message || "internal server error");
  }
}
