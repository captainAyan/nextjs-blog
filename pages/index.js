import axios from "axios";
import { useState } from "react";
import Head from "next/head";

import BlogItem from "../components/BlogItem";
import styles from "../styles/Main.module.css";

export default function Home(props) {
  const [blogs, setBlogs] = useState(props.blogs);

  console.log("ENV VAR", process.env.NEXT_PUBLIC_URL);

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
  const blogs = (await axios.get(`/api/blogs?type=latest`)).data;

  return {
    props: { blogs },
  };
}
