import styles from "./page.module.css";
import { Preview } from "@components";

export default function Home() {
	return (
		<main className={styles.main}>
			<Preview />
			<div className={styles.panel}>search</div>
		</main>
	);
}
