import Image from "next/image";

export default function SpaceShooter() {
  return (
    <article>
      <h3 style={{ fontWeight: "lighter" }}>
        <b>Space Shooter</b> — <i>HTML5 Canvas Game</i>
      </h3>
      <p>
        <a
          href="https://github.com/captainAyan/spaceShooter"
          target="_blank"
          rel="noreferrer"
        >
          https://github.com/captainAyan/spaceShooter
        </a>
        &nbsp;
        <span>(Repo)</span>
        <br />
        <a
          href="https://captainayan.github.io/spaceShooter/src/"
          target="_blank"
          rel="noreferrer"
        >
          https://captainayan.github.io/spaceShooter/src/
        </a>
        &nbsp;
        <span>(Demo)</span>
      </p>
      <Image
        src="https://raw.githubusercontent.com/captainAyan/spaceShooter/master/poster.png"
        alt="Responsive Design"
        width={5}
        height={3}
        layout="responsive"
      />
      <p>
        Asteroid shooting game made with Javascript and HTML5. (Use phone for
        best experience)
      </p>
      <p>
        <u>Technologies used:</u> HTML5 Canvas.
      </p>
      <hr />
    </article>
  );
}
