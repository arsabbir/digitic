import mongoose from "mongoose";

// create Color Schema
const colorSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    slug: String,
  },
  { timestamps: true }
);

// export
export default mongoose.model("Color", colorSchema);
