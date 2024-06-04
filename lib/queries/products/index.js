import connectToDatabase from "@/lib/dbConnect";
import { productModel } from "@/models/productModel";
import mongoose from "mongoose";
import {
  replaceMongoIdInArray,
  replaceMongoIdInObject,
} from "../../utils/data-util";

export async function getSearchedProducts(searchTerm) {
  console.log(searchTerm);
  let regex = "";
  if (searchTerm !== "all") {
    regex = new RegExp(searchTerm, "i");
  }
  try {
    await connectToDatabase();
    let products = await productModel
      .find({ title: { $regex: regex } })
      .populate({
        path: "categoryId",
        select: "-_id",
      })
      .lean();
    return replaceMongoIdInArray(products);
  } catch (error) {
    throw new Error(error.message || "internal server error");
  }
}

export async function getProductById(productId) {
  try {
    await connectToDatabase();
    const product = await productModel.findById(productId).lean();
    const updatedCategory = product.categoryId.toString();
    product.categoryId = updatedCategory;
    return replaceMongoIdInObject(product);
  } catch (error) {
    throw new Error(error.message || "internal server error");
  }
}

export async function getNewestProducts() {
  try {
    await connectToDatabase();
    const products = await productModel
      .find()
      .sort({ created_at: -1 })
      .limit(4)
      .lean();

    return replaceMongoIdInArray(products);
  } catch (error) {
    throw new Error(error.message || "internal server error");
  }
}

export async function getTrendingProducts() {
  try {
    await connectToDatabase();
    const trendingProducts = await productModel.aggregate([
      {
        $lookup: {
          from: "reviews",
          localField: "_id",
          foreignField: "productId",
          as: "reviews",
        },
      },
      {
        $addFields: {
          averageRating: { $avg: "$reviews.rating" },
          commentCount: { $size: "$reviews" },
        },
      },
      {
        $project: {
          title: 1,
          description: 1,
          price: 1,
          discountPercentage: 1,
          stock: 1,
          brand: 1,
          thumbnail: 1,
          images: 1,
          created_at: 1,
          updated_at: 1,
          categoryId: 1,
          averageRating: 1,
          commentCount: 1,
          trendingScore: {
            $add: [
              { $multiply: ["$averageRating", 2] }, // Weight for rating
              "$commentCount", // Weight for comment count
              { $divide: ["$discountPercentage", 2] }, // Weight for discount percentage
              { $divide: [100, "$price"] }, // Weight for price (inverse)
            ],
          },
        },
      },
      {
        $sort: { trendingScore: -1 },
      },
      {
        $limit: 8,
      },
    ]);

    return replaceMongoIdInArray(trendingProducts);
  } catch (error) {
    throw new Error(error.message || "internal server error");
  }
}

export async function getRelatedProducts(productId) {
  try {
    await connectToDatabase();
    const product = await productModel.findById(productId).exec();
    if (!product) {
      throw new Error("Product not found");
    }

    const originalTags = product.tags;

    const relatedProducts = await productModel
      .aggregate([
        {
          $match: {
            tags: { $in: originalTags },
            _id: { $ne: new mongoose.Types.ObjectId(productId) },
          },
        },
        {
          $addFields: {
            matchCount: {
              $size: {
                $filter: {
                  input: "$tags",
                  as: "tag",
                  cond: { $in: ["$$tag", originalTags] },
                },
              },
            },
          },
        },
        {
          $sort: { matchCount: -1 },
        },
      ])
      .limit(4)
      .exec();

    return replaceMongoIdInArray(relatedProducts);
  } catch (error) {
    console.error(error);
    throw new Error("Error fetching related products");
  }
}
