import Blog from "../../models/Blog";
import connectDb from "../../middleware/database";

async function handler(req, res) {
  const slug = req.query.slug;

  const blog = await Blog.findOne({ slug });

  res.status(200).json(blog);
}

export default connectDb(handler);
