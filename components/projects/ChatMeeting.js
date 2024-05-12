import Image from "next/image";

export default function ChatMeeting() {
  return (
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
  );
}
