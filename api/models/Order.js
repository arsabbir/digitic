import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
  products: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
      count: Number,
      color: String,
    },
  ],

  paymentIntent: {},
  orderStatus: {
    type: String,
    default: "Not Processed",
    enum: [
      "Not Processed",
      "Cash On Delivery",
      "Processing",
      "Dispatched",
      "Cancelled",
      "Delivered",
    ],
  },
  orderBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

// export
export default mongoose.model("Order", orderSchema);
