import connectToDatabase from "@/lib/dbConnect";
import { replaceMongoIdInArray } from "@/lib/utils/data-util";
import { reviewModel } from "@/models/reviewModel";

export async function getReviewByProductId(productId) {
  try {
    await connectToDatabase();
    const reviews = await reviewModel.find({ productId: productId }).lean();
    return replaceMongoIdInArray(reviews);
  } catch (error) {
    throw new Error(error.message || "internal server error");
  }
}
