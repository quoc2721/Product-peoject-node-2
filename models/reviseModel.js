import mongoose from "mongoose";

const callSchema = mongoose.Schema(
  {
    id: {
      type: Number,
      primaryKey: true,
    },
    email: String,
    password: String,
    address: String,
    status: Boolean,
    //   createdAt: Date,
    //   updatedAt: Date,
  },
  { timestamps: true }
);

export const CallModel = mongoose.model("Call", callSchema);
