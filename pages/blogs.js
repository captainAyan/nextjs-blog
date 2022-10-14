import axios from "axios";
import { useState } from "react";

import BlogItem from "../components/BlogItem";
import styles from "../styles/Main.module.css";

export default function Blogs(props) {
  const [blogs, setBlogs] = useState(props.blogs);

  return (
    <div className={styles.container}>
      <div className={styles.blog_container}>
        <h1>Blogs</h1>
        <div>
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
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const blogs = (await axios.get("http://localhost:3000/api/blogs")).data;

  return {
    props: { blogs },
  };
}
