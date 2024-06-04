import mongoose, { Schema } from "mongoose";

const addressSchema = new Schema(
  {
    name: { type: String, default: "" },
    contact: { type: String, default: "" },
    street_address: { type: String, default: "" },
    city: { type: String, default: "" },
    postal_code: { type: String, default: "" },
    country: { type: String, default: "" },
  },
  { _id: false }
);

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    default: "",
  },
  profileUrl: {
    type: String,
    default: "",
  },
  shipping_address: {
    type: addressSchema,
    default: () => ({}),
  },
  billing_address: {
    type: addressSchema,
    default: () => ({}),
  },
  wishList: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
  cartList: [
    {
      type: Schema.Types.ObjectId,
      ref: "Cart",
    },
  ],
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: Date,
});

export const userModel =
  mongoose.models.User ?? mongoose.model("User", userSchema);
