import Image from "next/image";
import styles from "./styles.module.css";

const track = {
	id: "4e64oQwdgwUUADrC26DCdI",
	title: "Driver Saved My Night",
	album: "How To Let Go",
	image: {
		src: "https://upload.wikimedia.org/wikipedia/en/d/d4/Sigrid_-_How_to_Let_Go.png",
		width: 300,
		height: 300,
		alt: "How To Let Go Album Cover",
	},
	duration: 200,
	plays: 5795010,

	artist: {
		name: "Sigrid",
		image: {
			src: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/03/07/14/fa004321-r1-13-14a.jpg-sigrid.jpg?&auto=webp",
			width: 300,
			height: 300,
			alt: "Sigrid's Photo",
		},
		bio: "Norwegian singer-songwriter. She has released two studio albums, Sucker Punch and How to Let Go, both of which charted in Norway and the United Kingdom. She has also released two EPs",
		monthlyListeners: 2451064,
	},
};

const Preview = ({ id = "4e64oQwdgwUUADrC26DCdI" }) => {
	// TODO: 👽 const track = useTrack(id);

	const { title, album, image, duration, plays, artist } = track;

	return (
		<div className={styles.preview}>
			<Image
				src={image.src}
				alt={`The Track Cover of ${title}`}
				width={image.width}
				height={image.height}
			/>
			<div className={styles.info}>
				<h2>{title}</h2>
				<h3>{artist.name}</h3>
				<h4>{album}</h4>

				<div className={styles.stats}>
					<span>{plays} plays</span>
					<span>{duration} seconds</span>
				</div>

				<div className={styles.artist}>
					<Image
						src={artist.image.src}
						alt={`${artist.name}'s Photo`}
						width={image.width}
						height={image.height}
					/>
					<p className={styles.artistBio}>{artist.bio}</p>
					<h4 className={styles.listeners}>{artist.monthlyListeners}</h4>
				</div>
			</div>
		</div>
	);
};

export default Preview;
