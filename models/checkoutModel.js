// models/Checkout.js
import mongoose from "mongoose";

const { Schema } = mongoose;

const addressSchema = new Schema({
  name: String,
  street_address: String,
  city: String,
  postal_code: String,
  contact: String,
});

const checkoutSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  company: String,
  region: {
    type: String,
    required: true,
  },
  street_address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },

  products: [
    {
      product_title: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      size: String,
      quantity: {
        type: Number,
        required: true,
      },
    },
  ],
  sub_total: {
    type: Number,
    required: true,
  },
  shipping_fee: {
    type: Number,
    default: 0,
  },
  total_amount: {
    type: Number,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

export const checkoutModel =
  mongoose.models.Checkout ?? mongoose.model("Checkout", checkoutSchema);
