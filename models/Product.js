const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true },
    desc: { type: String, required: true },
    img: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    availableQty: { type: Number, required: true },
    size: { type: String },
    color: { type: String },
  },
  { timestamps: true }
);
mongoose.models = {};
export default mongoose.model("Product", ProductSchema);
