import styles from "../styles/Main.module.css";

export default function About(props) {
  return (
    <div className={styles.container}>
      <h1>
        About <span style={{ fontWeight: "lighter" }}>Ayan</span>
      </h1>
      <h2>Introduction</h2>
      <p>
        Hi 👋, I&apos;m Ayan from Kolkata. I am a Self-taught programmer and a
        Game Developer with a Bachelors degree in Commerce.
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
        Python <i>(Core)</i>, Php <i>(Core)</i>, C++, TypeScript, and GDScript
      </p>

      <h3>Tools</h3>
      <p>
        Figma, Postman, Vs Code, Git, Android Studio, PhotoShop, Github, and
        Godot Engine
      </p>

      <hr />

      <h2>Education</h2>

      <h3>University of Calcutta - B.Com</h3>
      <p>July 2017 - August 2020</p>
      <p>Bachelor&apos;s degree in Commerce (Finance) </p>

      <h3>WBCHSE - Higher Secondary</h3>
      <p>2015 - 2017</p>
      <p>Commerce Stream</p>

      <hr />

      <h2>Certificates</h2>

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

      <h2>Links</h2>
      <h3>Social</h3>
      <ul>
        <li>
          <span>Instagram </span>
          <a
            href="https://instagram.com/garden_with_ayan"
            target="_blank"
            rel="noreferrer"
          >
            @garden_with_ayan
          </a>
        </li>

        <li>
          <span>LinkedIn </span>
          <a
            href="https://linkedin.com/in/ayan-chakraborty-486269207"
            target="_blank"
            rel="noreferrer"
          >
            @ayan-chakraborty-486269207
          </a>
        </li>
      </ul>

      <h3>Programming</h3>
      <ul>
        <li>
          <span>Github </span>
          <a
            href="https://github.com/captainayan"
            target="_blank"
            rel="noreferrer"
          >
            @captainayan
          </a>
        </li>

        <li>
          <span>Replit </span>
          <a
            href="https://replit.com/@captainAyan"
            target="_blank"
            rel="noreferrer"
          >
            @captainayan
          </a>
        </li>
      </ul>

      <h3>Others</h3>

      <ul>
        <li>
          <span>Soundcloud </span>
          <a
            href="https://soundcloud.com/captainayan"
            target="_blank"
            rel="noreferrer"
          >
            @captainayan
          </a>
        </li>
        <li>
          <span>Itch Io </span>
          <a
            href="https://captainayan.itch.io/"
            target="_blank"
            rel="noreferrer"
          >
            @captainayan
          </a>
        </li>
        <li>
          <span>E-mail </span>
          <a
            href="mailto:ayanchakraborty105@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            ayanchakraborty105@gmail.com
          </a>
        </li>
      </ul>
    </div>
  );
}
