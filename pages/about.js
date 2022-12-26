import styles from "../styles/Main.module.css";

export default function About(props) {
  return (
    <div className={styles.container}>
      <h1>
        About <span style={{ fontWeight: "lighter" }}>Ayan</span>
      </h1>
      <h2>Introduction</h2>
      <p>
        Hi 👋, I&apos;m Ayan from Kolkata. I am a Self-taught programmer with a
        Bachelors degree in Commerce.
      </p>

      <hr />
      <h2>Skills</h2>

      <h3>Web Development</h3>
      <p>
        <b>Frontend :</b> Html, Css (with frameworks), Javascript, React, Redux,
        and NextJs. <br />
        <b>Backend :</b> NodeJs, ExpressJs, and NextJs(backend). <br />
        <b>Database :</b> MongoDB and MySql. <br />
      </p>
      <p></p>

      <h3>Android</h3>
      <p>Java, Kotlin, SQLite, and Xml</p>

      <h3>Others</h3>
      <p>
        Python <i>(Core)</i>, Php <i>(Core)</i>, C++, and TypeScript
      </p>

      <h3>Tools</h3>
      <p>
        Figma, Postman, Vs Code, Git, Android Studio, PhotoShop, Git, and Github
      </p>

      <hr />
      <h2>Certificate</h2>

      <h3>M220JS: MongoDB for JavaScript Developers</h3>
      <p>
        <b>Issue Date:</b> 2022-12-04
      </p>
      <p>
        <b>Credential ID:</b> MDBr6rsjdkpwq
      </p>

      <h3>HackerRank React Basic Certificate</h3>
      <p>
        <b>Issue Date:</b> 2022-12-15
      </p>
      <p>
        <b>Credential ID:</b> 24ef942425b3
      </p>

      <hr />
    </div>
  );
}
