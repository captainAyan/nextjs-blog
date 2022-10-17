import axios from "axios";
import { useState } from "react";
import Head from "next/head";

import BlogSchema from "../models/Blog";
import connectDb from "../middleware/database";

import BlogItem from "../components/BlogItem";
import styles from "../styles/Main.module.css";

export default function Home(props) {
  const [blogs, setBlogs] = useState(props.blogs);

  return (
    <div className={styles.container}>
      <Head>
        <title>{"Ayan's Blog"}</title>
        <meta
          name="description"
          content="I'm a Full-stack Developer (MERN), and an Android Developer"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <b>Ayan</b>
          <br />
          Chakraborty
        </h1>

        <h1 className={styles.description}>
          I&apos;m a Full-Stack Developer (MERN), and an Android Developer (Java
          & Kotlin)
        </h1>

        <span style={{ fontSize: "50px" }}>👇</span>
        {/* <span>.</span>
        <span>.</span>
        <span>.</span> */}
      </main>

      <div className={styles.blog_container}>
        <h1>Latest Blogs</h1>
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
  );
}

export async function getServerSideProps() {
  const db = await connectDb();
  const blogs = await BlogSchema.find()
    .sort("-created_at")
    .select(["-content"])
    .limit(4);

  db.disconnect();

  return {
    props: { blogs: JSON.parse(JSON.stringify(blogs)) },
  };
}
