// models/Wishlist.js
import mongoose from "mongoose";

const { Schema } = mongoose;

const wishlistSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  productIds: {
    required: true,
    type: Array,
  },
});

export const wishListModel =
  mongoose.models.Wishlist ?? mongoose.model("Wishlist", wishlistSchema);
