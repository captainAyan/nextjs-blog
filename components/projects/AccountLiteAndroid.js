import Image from "next/image";

export default function AccountLiteAndroid() {
  return (
    <article>
      <h3 style={{ fontWeight: "lighter" }}>
        <b>AccountLite Android</b> — <i>Accounting App for Android</i> ⭐
      </h3>
      <p>
        <a
          href="https://github.com/captainAyan/accountlite-android"
          target="_blank"
          rel="noreferrer"
        >
          https://github.com/captainAyan/accountlite-android
        </a>
        &nbsp;
        <span>(repo)</span>
      </p>
      <Image
        src="https://raw.githubusercontent.com/captainAyan/accountlite-android/main/screenshots/1.png"
        alt="Responsive Design"
        width={16}
        height={9}
        layout="responsive"
      />
      <p>
        AccountLite Android is a lightweight accounting app with recording
        financial transactions (no inventory management available),
        classification (ledgers), and summarization (trial balance). The data is
        stored in SQLite Database.
      </p>
      <p>
        <u>Technologies used:</u> Android Studio, Java, and SQLite
      </p>

      <hr />
    </article>
  );
}
