import mongoose from "mongoose";

const foodSchema = mongoose.Schema(
  {
    id: {
      type: Number,
      primaryKey: true,
    },
    name: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    price: {
      type: Number,
      required: true,
    },
    amount: {
      type: Number,
      default: 1,
    },
    status: {
      type: Boolean,
      default: true,
    },
    ingredient: {
      type: String,
    },
  },
  { timestamps: true }
);

export const FoodModel = mongoose.model("Food", foodSchema);
