import axios from "axios";
import { useState } from "react";

import BlogSchema from "../models/Blog";
import connectDb from "../middleware/database";

import BlogItem from "../components/BlogItem";
import styles from "../styles/Main.module.css";

export default function Blogs(props) {
  const [blogs, setBlogs] = useState(props.blogs);

  const [page, setPage] = useState(
    parseInt(props.page, 10) ? parseInt(props.page, 10) : 0
  );
  const [limit, setLimit] = useState(parseInt(props.limit, 10));
  const [total, setTotal] = useState(parseInt(props.total, 10));

  return (
    <div className={styles.container}>
      <div className={styles.blog_container}>
        <h1>Blogs</h1>
        <p>
          Page <span>{page + 1}</span> of{" "}
          <span>{Math.ceil(total / limit)}</span>
        </p>
        <div>
          {blogs.length === 0 ? (
            <center>
              <h1
                className={styles.description}
                style={{ margin: "48px auto 72px auto" }}
              >
                No more Blogs
              </h1>
            </center>
          ) : null}
          {blogs.map((blog, i) => {
            return (
              <BlogItem
                key={i}
                title={blog.title}
                date={blog.date}
                description={blog.description}
                slug={blog.slug}
              />
            );
          })}
        </div>
        <div>
          <center>
            <a
              href={`?page=${page - 1}`}
              style={{ fontStyle: "none" }}
              className={styles.btn}
            >
              Prev
            </a>
            <span style={{ fontSize: "24px", margin: "auto 24px" }}>
              {page + 1}
            </span>
            <a href={`?page=${page + 1}`} className={styles.btn}>
              Next
            </a>
          </center>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const db = await connectDb();

  const page =
    parseInt(context.query.page, 10) > 0 ? parseInt(context.query.page, 10) : 0;
  const limit = 5;

  const skip = page * limit;

  const total = await BlogSchema.find().count();

  const blogs = await BlogSchema.find()
    .sort("-created_at")
    .select(["-content"])
    .skip(page * limit)
    .limit(limit);

  db.disconnect();

  return {
    props: {
      blogs: JSON.parse(JSON.stringify(blogs)),
      page,
      skip,
      limit,
      total,
    },
  };
}
