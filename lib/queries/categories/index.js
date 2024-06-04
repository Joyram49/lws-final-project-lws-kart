import connectToDatabase from "@/lib/dbConnect";
import {
  replaceMongoIdInArray,
  replaceMongoIdInObject,
} from "@/lib/utils/data-util";
import { categoryModel } from "@/models/categoryModel";

export async function getAllCategories() {
  try {
    await connectToDatabase();
    const categories = await categoryModel.find().lean();

    return replaceMongoIdInArray(categories);
  } catch (error) {
    throw new Error(error.message || "internal server error");
  }
}

export async function getCategoryById(categoryId) {
  try {
    await connectToDatabase();
    const category = await categoryModel.findById(categoryId).lean();
    return replaceMongoIdInObject(category);
  } catch (error) {
    throw new Error(error.message || "internal server error");
  }
}
