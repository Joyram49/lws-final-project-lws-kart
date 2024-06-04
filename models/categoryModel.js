import mongoose from "mongoose";

const { Schema } = mongoose;

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: Date,
});

export const categoryModel =
  mongoose.models.Category ?? mongoose.model("Category", categorySchema);
