import Image from "next/image";

export default function Minesweeper() {
  return (
    <article>
      <h3 style={{ fontWeight: "lighter" }}>
        <b>MineSweeper 🚩</b> — <i>Python Desktop Game</i>
      </h3>
      <p>
        <a
          href="https://github.com/captainAyan/minesweeper"
          target="_blank"
          rel="noreferrer"
        >
          https://github.com/captainAyan/minesweeper
        </a>
        &nbsp;
        <span>(Repo)</span>
      </p>
      <Image
        src="https://raw.githubusercontent.com/captainAyan/minesweeper/main/image.png"
        alt="Responsive Design"
        width={5}
        height={3}
        layout="responsive"
      />
      <p>Minesweeper made using python.</p>
      <p>
        <u>Technologies used:</u> TKinter, Python
      </p>
      <hr />
    </article>
  );
}
