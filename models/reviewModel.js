// models/Review.js
import mongoose from "mongoose";

const { Schema } = mongoose;

const reviewSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  productId: {
    type: Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  comment: String,
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: Date,
});

export const reviewModel =
  mongoose.models.Review ?? mongoose.model("Review", reviewSchema);
