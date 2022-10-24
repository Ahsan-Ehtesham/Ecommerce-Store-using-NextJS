import Product from "../../models/Product";
import connectDb from "../../middleware/mongoose";

const handler = async (req, res) => {
  const products = await Product.find();
  res.status(200).json({ products });
};

export default connectDb(handler);
