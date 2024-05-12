import Image from "next/image";

export default function CrappyBirdie() {
  return (
    <article>
      <h3 style={{ fontWeight: "lighter" }}>
        <b>Crappy Birdie</b> — <i>Android Game</i> ⭐
      </h3>
      <p>
        <a
          href="https://github.com/captainAyan/crappybirdie"
          target="_blank"
          rel="noreferrer"
        >
          https://github.com/captainAyan/crappybirdie
        </a>
        &nbsp;
        <span>(Repo)</span>
        <br />
        <a
          href="https://captainayan.github.io/crappybirdie/"
          target="_blank"
          rel="noreferrer"
        >
          https://captainayan.github.io/crappybirdie/
        </a>
        &nbsp;
        <span>(Website)</span>
      </p>
      <Image
        src="https://raw.githubusercontent.com/captainAyan/crappybirdie/main/docs/poster.png"
        alt="Responsive Design"
        width={5}
        height={3}
        layout="responsive"
      />
      <p>A flappy bird like mobile game, developed using Godot Engine.</p>
      <p>
        <u>Technologies used:</u> Godot Engine with GDSCript.
      </p>
      <hr />
    </article>
  );
}
