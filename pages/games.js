import { useState, useEffect } from "react";
import styles from "../styles/Main.module.css";
import { games } from "../data";

export default function Games() {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  if (!isClient) return null;

  return (
    <div className={styles.container}>
      <h1>Game</h1>

      {games.map((game, i) => (
        <iframe
          key={i}
          style={{ border: "none" }}
          src={game.embedUrl}
          width="100%"
          height="167"
        >
          <a href={game.linkUrl}>{game.linkText}</a>
        </iframe>
      ))}
    </div>
  );
}
