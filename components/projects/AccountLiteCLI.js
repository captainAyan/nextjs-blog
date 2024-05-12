import Image from "next/image";

export default function AccountLiteCLI() {
  return (
    <article>
      <h3 style={{ fontWeight: "lighter" }}>
        <b>AccountLite CLI</b> — <i>CLI Accounting App</i> ⭐
      </h3>
      <p>
        <a
          href="https://github.com/captainAyan/accountlite-cli"
          target="_blank"
          rel="noreferrer"
        >
          https://github.com/captainAyan/accountlite-cli
        </a>
        &nbsp;
        <span>(repo)</span>
      </p>
      <Image
        src="https://raw.githubusercontent.com/captainAyan/accountlite-cli/main/screenshots/1.png"
        alt="Responsive Design"
        width={16}
        height={9}
        layout="responsive"
      />
      <p>
        AccountLite CLI is a lightweight accounting software with recording
        financial transactions (no inventory management available),
        classification(ledgers), and summarization(trial balance). The data is
        stored in a human readable format (which is very similar to CSV).
      </p>
      <p>
        <u>Technologies used:</u> C++
      </p>

      <hr />
    </article>
  );
}
