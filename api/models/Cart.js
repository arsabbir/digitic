import mongoose from "mongoose";

// create Schema
const cartSchema = mongoose.Schema({
  products: [
    {
      product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
      count: Number,
      color: String,
      price: Number,
    },
  ],
  cartTotal: Number,
  totalAfterDiscount: {
    type: Number,
    default: null,
  },
  orderby: {
    type: mongoose.Schema.Types.ObjectId,
  },
});

// export
export default mongoose.model("Cart", cartSchema);
