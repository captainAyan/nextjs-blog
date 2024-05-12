import Image from "next/image";

export default function PixelArt() {
  return (
    <article>
      <h3 style={{ fontWeight: "lighter" }}>
        <b>Pixel Art 🎨</b> — <i>Canvas Web App</i>
      </h3>
      <p>
        <a
          href="https://github.com/captainAyan/pixelart"
          target="_blank"
          rel="noreferrer"
        >
          https://github.com/captainAyan/pixelart
        </a>
        &nbsp;
        <span>(Repo)</span>
      </p>
      <Image
        src="https://raw.githubusercontent.com/captainAyan/pixelart/main/screenshots/1.png"
        alt="Responsive Design"
        width={8}
        height={5}
        layout="responsive"
      />
      <p>
        Simple implementation of Pixel art editor using html, css and
        javascript.
      </p>
      <p>
        <u>Technologies used:</u> HTML5 Canvas
      </p>
      <hr />
    </article>
  );
}
