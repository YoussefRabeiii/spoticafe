import styles from "./page.module.css";
import { Preview, Playlist } from "@components";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.panel}>
        <Preview />
      </div>
      <div className={styles.panel}>
        <h1>Search</h1>
        <Playlist />
      </div>
    </main>
  );
}
