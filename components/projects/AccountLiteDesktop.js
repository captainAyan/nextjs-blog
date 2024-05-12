import Image from "next/image";

export default function AccountLiteDesktop() {
  return (
    <article>
      <h3 style={{ fontWeight: "lighter" }}>
        <b>AccountLite Desktop</b> — <i>Accounting App for Desktop</i> ⭐
      </h3>
      <p>
        <a
          href="https://github.com/captainAyan/accountlite-desktop"
          target="_blank"
          rel="noreferrer"
        >
          https://github.com/captainAyan/accountlite-desktop
        </a>
        &nbsp;
        <span>(repo)</span>
      </p>
      <Image
        src="https://raw.githubusercontent.com/captainAyan/accountlite-desktop/main/screenshots/1.png"
        alt="Responsive Design"
        width={16}
        height={9}
        layout="responsive"
      />
      <p>
        AccountLite Desktop is a lightweight accounting software with recording
        financial transactions (no inventory management available),
        classification(ledgers), and summarization(trial balance). The data is
        stored in a human readable format (which is very similar to CSV).
      </p>
      <p>
        <u>Technologies used:</u> Python, and TKinter
      </p>

      <hr />
    </article>
  );
}
