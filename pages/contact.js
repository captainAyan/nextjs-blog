import styles from "../styles/Main.module.css";

export default function Contact() {
  return (
    <div className={styles.container}>
      <h1>
        Contact <span style={{ fontWeight: "lighter" }}>Ayan</span>
      </h1>
      <h2>Social</h2>
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
      </ul>

      <h2>Others</h2>

      <ul>
        <li>
          <span>Mail </span>
          <a
            href="mailto:ayanchakraborty105@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            @ayanchakraborty105
          </a>
        </li>
      </ul>
    </div>
  );
}
