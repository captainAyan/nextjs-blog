import slugify from "slugify";

import Blog from "../../models/Blog";
import connectDb from "../../middleware/database";

async function handler(req, res) {
  if (req.method === "POST") {
    if (req.body.password === process.env.PASSWORD) {
      const slug = slugify(
        `${req.body.title} ${Math.floor(100000 + Math.random() * 900000)}`
      );

      let blog = await Blog.create({
        slug,
        ...req.body,
      });

      res.status(201).json({ message: "message saved", blog });
    }
  }
}

export default connectDb(handler);
