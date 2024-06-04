import connectToDatabase from "@/lib/dbConnect";
import { replaceMongoIdInObject } from "@/lib/utils/data-util";
import { wishListModel } from "@/models/wishListModel";
import mongoose from "mongoose";

export async function getwishListForUser(userId) {
  try {
    await connectToDatabase();
    const wishList = await wishListModel
      .findOne({ userId })
      .populate({
        path: "productIds",
        model: "Product",
        select: "title thumbnail price discountPercentage",
      })
      .lean();

    let userWishList = {};
    if (wishList?.userId) {
      wishList.userId = wishList.userId.toString();
      let temp = wishList.productIds.map((product) => {
        if (product && product._id) {
          return {
            id: product._id.toString(),
            title: product.title,
            thumbnail: product.thumbnail,
            price: product.price,
            discountPercentage: product.discountPercentage,
          };
        } else {
          return {
            id: product.toString(),
            title: "",
            thumbnail: "",
            price: 0,
            discountPercentage: undefined,
          };
        }
      });
      wishList.productIds = temp;
      userWishList = replaceMongoIdInObject(wishList);
    }
    return userWishList;
  } catch (error) {
    throw error;
  }
}

export async function addOrRemoveFromWishList(userId, productId) {
  try {
    await connectToDatabase();
    const wishList = await wishListModel.findOne({ userId });
    if (wishList?.userId) {
      const foundProduct = wishList.productIds?.find(
        (id) => productId === id.toString()
      );
      if (foundProduct) {
        wishList.productIds.pull(new mongoose.Types.ObjectId(productId));
      } else {
        wishList.productIds.push(new mongoose.Types.ObjectId(productId));
      }
      wishList.save();
    } else {
      let products = [];
      products.push(new mongoose.Types.ObjectId(productId));
      const newWishList = new wishListModel({
        userId: userId,
        productIds: products,
      });
      newWishList.save();
    }
  } catch (error) {
    throw error;
  }
}
