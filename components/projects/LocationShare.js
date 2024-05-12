import Image from "next/image";

export default function LocationShare() {
  return (
    <article>
      <h3 style={{ fontWeight: "lighter" }}>
        <b>Location Share</b> — <i>Android App</i>
      </h3>
      <p>
        <a
          href="https://github.com/captainAyan/location-share"
          target="_blank"
          rel="noreferrer"
        >
          https://github.com/captainAyan/location-share
        </a>
        &nbsp;
        <span>(Repo)</span>
      </p>
      <Image
        src="https://raw.githubusercontent.com/captainayan/location-share/main/poster.png"
        alt="Responsive Design"
        width={8}
        height={5}
        layout="responsive"
      />
      <p>
        Location Share is an Android app that lets you share your location with
        your friends anonymously. It does not require login or signup to use the
        app. Friends are added using QR Code and save in the user&apos;s device
        locally.
      </p>
      <p>
        <u>Technologies used:</u> Android Studio with Kotlin, Google Map API map
        view, SocketIO for sending location data.
      </p>
      <hr />
    </article>
  );
}
