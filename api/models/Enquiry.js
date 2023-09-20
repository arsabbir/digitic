import mongoose, { model } from "mongoose";

// create schema
const enquirySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      required: true,
    },
    comment: { type: String, required: true },
  },
  { timestamps: true }
);

// export
export default mongoose.model("Enquiry", enquirySchema);
