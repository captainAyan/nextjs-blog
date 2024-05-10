import Image from "next/image";
import styles from "../styles/Main.module.css";

export default function Projects() {
  return (
    <div className={styles.container}>
      <h1>Projects</h1>

      {/* Lucafy */}
      <article>
        <h3 style={{ fontWeight: "lighter" }}>
          <b>Lucafy</b> — <i>MERN Stack App</i> ⭐
        </h3>
        <p>
          <a
            href="https://github.com/captainAyan/lucafy"
            target="_blank"
            rel="noreferrer"
          >
            https://github.com/captainAyan/lucafy
          </a>
          &nbsp;
          <span>(Repo)</span>
          <br />
          <a
            href="https://lucafy.onrender.com/"
            target="_blank"
            rel="noreferrer"
          >
            https://lucafy.onrender.com/
          </a>
          &nbsp;
          <span>(Demo)</span>
        </p>
        <p>
          Lucafy is an open-source, web based, MERN stack, bookkeeping
          application that uses double entry accounting. It lets you create
          journal entries, ledgers and view trial balance and other statements.
        </p>
        <p>
          <u>Technologies used:</u> MongoDB atlas for database, Render for
          deployment server, Postman for API testing, and Tailwind CSS.
        </p>
        <hr />
      </article>

      {/* Quiz */}
      <article>
        <h3 style={{ fontWeight: "lighter" }}>
          <b>Quiz</b> — <i>MERN Stack App</i> ⭐
        </h3>
        <p>
          <a
            href="https://github.com/captainAyan/quiz"
            target="_blank"
            rel="noreferrer"
          >
            https://github.com/captainAyan/quiz
          </a>
          &nbsp;
          <span>(Repo)</span>
          <br />
          <a
            href="https://quiz-1zft.onrender.com/"
            target="_blank"
            rel="noreferrer"
          >
            https://quiz-1zft.onrender.com/
          </a>
          &nbsp;
          <span>(Demo)</span>
          <br />
          <a
            href="https://youtu.be/s8QYnxlmc84"
            target="_blank"
            rel="noreferrer"
          >
            https://youtu.be/s8QYnxlmc84
          </a>
          &nbsp;
          <span>(Video Demo)</span>
        </p>
        <p>
          A web based quiz application for creating, sharing, and taking
          quizzes.
        </p>
        <p>
          <u>Technologies used:</u> MongoDB atlas for database, Render for
          deployment server, Postman for API testing.
        </p>
        <hr />
      </article>

      {/* AccountLite */}
      <article>
        <h3 style={{ fontWeight: "lighter" }}>
          <b>AccountLite</b> — <i>Accounting App Suite</i>
        </h3>
        <p>
          <a
            href="https://github.com/captainAyan/accountlite"
            target="_blank"
            rel="noreferrer"
          >
            https://github.com/captainAyan/accountlite
          </a>
          &nbsp;
          <span>(master repo)</span>
          <br />
          <a
            href="https://captainayan.github.io/accountlite/"
            target="_blank"
            rel="noreferrer"
          >
            https://captainayan.github.io/accountlite/
          </a>
          &nbsp;
          <span>(master website)</span>
        </p>

        <div>
          <h4>Android</h4>
          <Image
            src="https://raw.githubusercontent.com/captainAyan/accountlite-android/main/screenshots/1.png"
            alt="Responsive Design"
            width={16}
            height={9}
            layout="responsive"
          />
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
          <p>
            AccountLite Android is a lightweight accounting app with recording
            financial transactions (no inventory management available),
            classification (ledgers), and summarization (trial balance). The
            data is stored in SQLite Database.
          </p>
          <p>
            <u>Technologies used:</u> Android Studio, Java, and SQLite
          </p>
        </div>

        <div>
          <h4>Desktop</h4>
          <Image
            src="https://raw.githubusercontent.com/captainAyan/accountlite-desktop/main/screenshots/1.png"
            alt="Responsive Design"
            width={16}
            height={9}
            layout="responsive"
          />
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
          <p>
            AccountLite Desktop is a lightweight accounting software with
            recording financial transactions (no inventory management
            available), classification(ledgers), and summarization(trial
            balance). The data is stored in a human readable format (which is
            very similar to CSV).
          </p>
          <p>
            <u>Technologies used:</u> Python, and TKinter
          </p>
        </div>

        <div>
          <h4>CLI</h4>
          <Image
            src="https://raw.githubusercontent.com/captainAyan/accountlite-cli/main/screenshots/1.png"
            alt="Responsive Design"
            width={16}
            height={9}
            layout="responsive"
          />
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
          <p>
            AccountLite CLI is a lightweight accounting software with recording
            financial transactions (no inventory management available),
            classification(ledgers), and summarization(trial balance). The data
            is stored in a human readable format (which is very similar to CSV).
          </p>
          <p>
            <u>Technologies used:</u> C++
          </p>
        </div>

        <hr />
      </article>

      {/* Anon Msgs */}
      <article>
        <h3 style={{ fontWeight: "lighter" }}>
          <b>Anon Msgs</b> — <i>MERN Stack App</i>
        </h3>
        <p>
          <a
            href="https://github.com/captainAyan/anon-msgs"
            target="_blank"
            rel="noreferrer"
          >
            https://github.com/captainAyan/anon-msgs
          </a>
          &nbsp;
          <span>(Repo)</span>
          <br />
          <a
            href="https://anon-msgs.onrender.com/"
            target="_blank"
            rel="noreferrer"
          >
            https://anon-msgs.onrender.com/
          </a>
          &nbsp;
          <span>(Demo)</span>
        </p>
        <p>
          Anon Msgs is a fun and open-source, secret message and confession app.
          It lets you create an account and share a message link on your social
          media accounts, which your friends can use to send you messages
          anonymously.
        </p>
        <p>
          <u>Technologies used:</u> MongoDB atlas for database, Render for
          deployment server, Postman and Newman for API testing, and MUI CSS.
        </p>
        <hr />
      </article>

      {/* Chat Meeting */}
      <article>
        <h3 style={{ fontWeight: "lighter" }}>
          <b>Chat Meeting</b> — <i>Web Socket App</i>
        </h3>
        <p>
          <a
            href="https://github.com/captainAyan/chat_meeting"
            target="_blank"
            rel="noreferrer"
          >
            https://github.com/captainAyan/chat_meeting
          </a>
          &nbsp;
          <span>(Repo)</span>
          <br />
          <a
            href="https://chat-meeting.onrender.com/"
            target="_blank"
            rel="noreferrer"
          >
            https://chat-meeting.onrender.com/
          </a>
          &nbsp;
          <span>(Demo)</span>
        </p>
        <Image
          src="https://raw.githubusercontent.com/captainAyan/chat_meeting/master/assets/screenshot1.png"
          alt="Responsive Design"
          width={4}
          height={3}
          layout="responsive"
        />
        <p>
          Web based, anonymous, ephemeral, chat room application build using the
          MERN Stack
        </p>
        <p>
          <u>Technologies used:</u> SocketIO for web sockets, Render for
          deployment server, and Vite for frontend.
        </p>
        <hr />
      </article>

      {/* Location Share */}
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
          Location Share is an Android app that lets you share your location
          with your friends anonymously. It does not require login or signup to
          use the app. Friends are added using QR Code and save in the
          user&apos;s device locally.
        </p>
        <p>
          <u>Technologies used:</u> Android Studio for android app, Google Map
          API map view, SocketIO for sending location data.
        </p>
        <hr />
      </article>

      {/* Pixel Profile Pic */}
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

      {/* Pixel Art */}
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

      {/* Minecraft */}
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
        <div style={{ padding: "0px 160px" }}>
          <Image
            src="https://raw.githubusercontent.com/captainAyan/minesweeper/main/image.png"
            alt="Responsive Design"
            width={2}
            height={3}
            layout="responsive"
          />
        </div>
        <p>Minesweeper made using python.</p>
        <p>
          <u>Technologies used:</u> TKinter, Python
        </p>
        <hr />
      </article>
    </div>
  );
}
