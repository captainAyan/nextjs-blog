import Blog from "../../models/Blog";
import connectDb from "../../middleware/database";

async function handler(req, res) {
  const { type } = req.query;

  let blogs;

  if (type === "latest") {
    blogs = await Blog.find().sort("-created_at").limit(4);
  } else {
    blogs = await Blog.find().sort("-created_at");
  }

  res.status(200).json(blogs);
}

export default connectDb(handler);
