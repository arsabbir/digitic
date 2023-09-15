import mongoose from "mongoose";
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
    },
    mobile: {
      type: String,
      trim: true,
      default: null,
    },
    gender: {
      type: String,
      enum: ["Female", "Male", "Undefined"],
      default: "Undefined",
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "user",
    },
    isBlocked: {
      type: Boolean,
      default: false,
    },
    token: {
      type: String,
      default: null,
    },
    cart: {
      type: Array,
      dafault: [],
    },

    address: [{ type: mongoose.Schema.Types.ObjectId, ref: "Address" }],
    wishlist: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
    
  },
  {
    timestamps: true,
  }
);

// export section
export default mongoose.model("User", userSchema);
