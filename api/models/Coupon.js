import mongoose from "mongoose";

const couponSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    uppercase: true,
  },
  expire: {
    type: Date,
    required: true,
  },
  discount: {
    type: Number,
    required: true,
  },
  status: {
    type: Boolean,
    default: true,
  },
  trash: {
    type: Boolean,
    default: false,
  },
},{
  timestamps:true
});

// export
export default mongoose.model("Coupon", couponSchema);
