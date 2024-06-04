import connectToDatabase from "@/lib/dbConnect";
import { replaceMongoIdInObject } from "@/lib/utils/data-util";
import { cartModel } from "@/models/cartModel";
import mongoose from "mongoose";

export async function getCartItemForUser(userId) {
  try {
    await connectToDatabase();
    const userCart = await cartModel
      .findOne({ userId })
      .populate({
        path: "products.productId",
        select: "title thumbnail price discountPercentage",
      })
      .lean();

    let userCartList = {};
    if (userCart?.userId) {
      userCart.userId = userCart.userId.toString();
      let temp = userCart.products.map((product) => {
        const populatedProduct = product.productId || {};
        const price = populatedProduct.price || 0;
        const discountPercentage = populatedProduct.discountPercentage || 0;
        const priceAfterDiscount = price - price * (discountPercentage / 100);

        return {
          quantity: product.quantity,
          product: {
            id: populatedProduct._id
              ? populatedProduct._id.toString()
              : product.productId,
            title: populatedProduct.title || "",
            thumbnail: populatedProduct.thumbnail || "",
            price: price,
            discountPercentage: discountPercentage,
            priceAfterDiscount: priceAfterDiscount.toFixed(2),
          },
        };
      });
      userCart.products = temp;
      userCartList = replaceMongoIdInObject(userCart);
    }

    return userCartList;
  } catch (error) {
    throw new Error(error.message || "internal server error");
  }
}

export async function addProductToCart(userId, productId, quantity) {
  try {
    await connectToDatabase();
    const cartList = await cartModel.findOne({ userId });

    if (cartList?.userId) {
      const found = cartList.products?.findIndex(
        (product) => product?.productId.toString() === productId
      );

      if (found === -1) {
        cartList.products.push({
          productId: new mongoose.Types.ObjectId(productId),
          quantity,
        });
      } else {
        cartList.products[found].quantity += quantity;
      }
      cartList.save();
    } else {
      let productIds = [];
      productIds.push({
        productId: new mongoose.Types.ObjectId(productId),
        quantity,
      });
      const newCartList = new cartModel({
        userId: userId,
        products: productIds,
      });
      newCartList.save();
    }
  } catch (error) {
    throw new Error(error.message || "internal server error");
  }
}
