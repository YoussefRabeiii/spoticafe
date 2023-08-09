import SearchOut from "components/search/searchOut";
import styles from "./page.module.css";
import { Preview, Search, Playlist } from "@components";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.panel}>
        <Preview />
      </div>
      <div className={styles.panel}>
        {/* <Search /> */}
        <SearchOut />
        <Playlist />
      </div>
    </main>
  );
}
