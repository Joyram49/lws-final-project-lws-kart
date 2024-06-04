// models/Cart.js
import mongoose from "mongoose";

const { Schema } = mongoose;

const addressSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  name: String,
  contact: String,
  street_address: String,
  city: String,
  postal_code: String,
  country: String,
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: Date,
});

export const addressModel =
  mongoose.models.Address ?? mongoose.model("Address", addressSchema);
