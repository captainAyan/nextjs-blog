import axios from "axios";
import Head from "next/head";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

import styles from "../../styles/Main.module.css";

export default function Blog(props) {
  const [blog, setBlog] = useState(props.blog);

  return (
    <div className={styles.container}>
      <Head>
        <title>{blog.title}</title>
        <meta name="description" content={blog.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.blog_container}>
        <h1 className={styles.title}>{blog.title}</h1>
        <hr />
        <h1 className={styles.description}>{blog.description}</h1>
        <p>
          <i>{blog.date}</i>
        </p>

        <div className={styles.content}>
          <ReactMarkdown
            rehypePlugins={[rehypeRaw]}
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || "");
                return !inline && match ? (
                  <SyntaxHighlighter
                    language={match[1]}
                    PreTag="div"
                    {...props}
                  >
                    {String(children).replace(/\n$/, "")}
                  </SyntaxHighlighter>
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              },
            }}
          >
            {blog.content}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const blog = (
    await axios.get(`http://localhost:3000/api/blog?slug=${context.query.slug}`)
  ).data;

  return {
    props: { blog },
  };
}
