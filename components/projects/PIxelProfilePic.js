import Image from "next/image";

export default function PixelProfilePic() {
  return (
    <article>
      <h3 style={{ fontWeight: "lighter" }}>
        <b>Pixel Profile Pic</b> — <i>Web API</i>
      </h3>
      <p>
        <a
          href="https://github.com/captainAyan/pixel-profile-pic"
          target="_blank"
          rel="noreferrer"
        >
          https://github.com/captainAyan/pixel-profile-pic
        </a>
        &nbsp;
        <span>(Repo)</span>
      </p>
      <Image
        src="https://raw.githubusercontent.com/captainayan/pixel-profile-pic/main/poster.png"
        alt="Responsive Design"
        width={4}
        height={3}
        layout="responsive"
      />
      <p>Generate a random pixel art profile picture using an API.</p>
      <hr />
    </article>
  );
}
