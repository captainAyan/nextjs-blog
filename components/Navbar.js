import Link from "next/link";
import React from "react";
import styles from "../styles/Navbar.module.css";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <ul>
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="/blogs">
          <li>Blogs</li>
        </Link>
        <Link href="/about">
          <li>Me</li>
        </Link>
        <Link href="/projects">
          <li>Projects</li>
        </Link>
        <Link href="/games">
          <li>Games</li>
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;
