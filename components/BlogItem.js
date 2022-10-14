import Link from "next/link";
import React from "react";
import styles from "../styles/BlogItem.module.css";

function BlogItem(props) {
  const { title, date, description, slug } = props;

  return (
    <Link href={`/blog/${slug}`}>
      <div className={styles.container}>
        <h2 className={styles.title}>{title}</h2>
        <span className={styles.date}>{date}</span>
        <p className={styles.description}>{description}</p>
      </div>
    </Link>
  );
}

export default BlogItem;
