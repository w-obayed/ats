import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    googleId: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.users || mongoose.model("users", userSchema);
export default User;
