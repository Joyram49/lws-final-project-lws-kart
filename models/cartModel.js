// models/Cart.js
import mongoose from "mongoose";

const { Schema } = mongoose;

const cartSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  products: [
    {
      productId: {
        type: Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
    },
  ],
});

export const cartModel =
  mongoose.models.Cart ?? mongoose.model("Cart", cartSchema);
