import Blog from "../../models/Blog";
import connectDb from "../../middleware/database";

async function handler(req, res) {
  const { type } = req.query;
  const page =
    parseInt(req.query.page, 10) > 0 ? parseInt(req.query.page, 10) : 0;
  const limit = 5;

  let blogs;

  if (type === "latest") {
    blogs = await Blog.find().sort("-created_at").select(["-content"]).limit(4);
  } else {
    blogs = {
      skip: page * limit,
      limit: limit,
      total: await Blog.find().count(),
      blogs: await Blog.find()
        .sort("-created_at")
        .select(["-content"])
        .skip(page * limit)
        .limit(limit),
    };
  }

  res.status(200).json(blogs);
}

export default connectDb(handler);
