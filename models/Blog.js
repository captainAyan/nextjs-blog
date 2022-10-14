import { Schema, model, models } from "mongoose";

const blogSchema = new Schema(
  {
    slug: { type: String, require: true },
    title: { type: String, require: true },
    description: { type: String, require: true },
    date: { type: String, require: true },
    content: { type: String },
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

const Blog = models.Blog || model("Blog", blogSchema);

export default Blog;
