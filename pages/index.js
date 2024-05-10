import axios from "axios";
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";

import styles from "../styles/Main.module.css";

import responsiveDesignImage from "../public/images/responsive_design.png";
import serversImage from "../public/images/servers.png";

import firstTestimonialImage from "../public/images/testimonial 1.png";
import secondTestimonialImage from "../public/images/testimonial 2.png";
import thirdTestimonialImage from "../public/images/testimonial 3.png";

export default function Home(props) {
  const [blogs, setBlogs] = useState(props.blogs);

  const testimonies = [
    {
      image: firstTestimonialImage,
      author: "Fat Eyebrows",
      text: "Ayan is the most valuable web developer we have EVER hired. ",
    },
    {
      image: secondTestimonialImage,
      author: "Big Head",
      text: "We have no regrets! Ayan did a fantastic job at developing our web application.",
    },
    {
      image: thirdTestimonialImage,
      author: "Beard Guy",
      text: "Dude, Ayan is a great programmer! He develops MERN apps like nobody's business.",
    },
  ];

  const [currentTestimony, setCurrentTestimony] = useState(0);

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

      <div className={styles.section} style={{ minHeight: "90vh" }}>
        <h1 className={styles.title}>
          <b>Ayan</b>
          <br />
          Chakraborty
        </h1>

        <h1 className={styles.description}>
          I&apos;m a Full-Stack Developer (MERN), an Android Developer (Java &
          Kotlin), and a Game Developer (Godot)
        </h1>

        <a href="#skills" style={{ textDecoration: "none" }}>
          <span style={{ fontSize: "50px" }}>👇</span>
        </a>
        <span>.</span>
        <span>.</span>
        <span>.</span>
      </div>

      <div className={styles.section} style={{ height: "100vh" }} id="skills">
        <div className={styles.row} style={{ marginBottom: "96px" }}>
          <div className={styles.col_1_2}>
            <Image src={responsiveDesignImage} alt="Responsive Design" />
          </div>
          <div className={styles.col_2_2}>
            <h1 className={styles.description}>
              I can design responsive web apps using modern web technologies.
            </h1>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.col_2_2}>
            <Image src={serversImage} alt="Servers" />
          </div>
          <div className={styles.col_1_2}>
            <h1 className={styles.description}>
              And, develop scalable web servers using NodeJs, and MongoDB
              Database.
            </h1>
          </div>
        </div>
      </div>

      <div
        className={styles.section}
        style={{ height: "100vh" }}
        id="testimonial"
      >
        <Image
          src={testimonies[currentTestimony].image}
          alt="Testimony author"
          onClick={() => {
            setCurrentTestimony(
              currentTestimony === 2 ? 0 : currentTestimony + 1
            );
          }}
        />
        <h1 className={styles.description}>
          {testimonies[currentTestimony].text}
        </h1>
        <b>- {testimonies[currentTestimony].author}</b>

        <div>
          <span
            className={styles.testimonial_btn}
            style={{ borderWidth: currentTestimony === 0 ? "6px" : "1px" }}
            onClick={() => {
              setCurrentTestimony(0);
            }}
          ></span>
          <span
            className={styles.testimonial_btn}
            style={{ borderWidth: currentTestimony === 1 ? "6px" : "1px" }}
            onClick={() => {
              setCurrentTestimony(1);
            }}
          ></span>
          <span
            className={styles.testimonial_btn}
            style={{ borderWidth: currentTestimony === 2 ? "6px" : "1px" }}
            onClick={() => {
              setCurrentTestimony(2);
            }}
          ></span>
        </div>
      </div>

      <div className={styles.section} style={{ height: "100vh" }} id="contact">
        <h1 className={styles.title}>Contact me</h1>
        <h1 className={styles.description}>
          <a href="mailto:ayanchakraborty105@gmail.com">
            ayanchakraborty105@gmail.com
          </a>
        </h1>
      </div>
    </div>
  );
}
