import slugify from "slugify";

import Blog from "../../models/Blog";
import connectDb from "../../middleware/database";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const db = await connectDb();
    if (req.body.password === process.env.PASSWORD) {
      const slug = slugify(
        `${req.body.title} ${Math.floor(100000 + Math.random() * 900000)}`
      );

      // TODO check if the request body is valid
      let blog = await Blog.create({
        slug,
        ...req.body,
      });
      db.disconnect();

      res.status(201).json({ message: "message saved", blog });
    }
  }
}
