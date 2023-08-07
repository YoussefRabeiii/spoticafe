import Image from "next/image";
import styles from "./styles.module.css";
import { readMore, time } from "@utils";

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
  duration: 330085,
  plays: 5795010,

  artist: {
    name: "Sigrid",
    image: {
      src: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/03/07/14/fa004321-r1-13-14a.jpg-sigrid.jpg?&auto=webp",
      width: 300,
      height: 300,
      alt: "Sigrid's Photo",
    },
    bio: "Norwegian singer-songwriter. She has released two studio albums, Sucker Punch and How to Let Go, both ",
    monthlyListeners: 2451064,
  },
};

const Preview = ({ id = "4e64oQwdgwUUADrC26DCdI" }) => {
  // TODO: 👽 const track = useTrack(id);

  const { title, album, image, duration, plays, artist } = track;

  const imageSize = 320;
  image.width = imageSize;
  image.height = imageSize;

  return (
    <div className={styles.preview}>
      <div className={styles.imageContainer}>
        <Image
          src={image.src}
          width={image.width}
          height={image.height}
          className={styles.songCover}
          alt={`The Track Cover of ${title}`}
        />
        <div className={styles.info}>
          <div className={styles.infoTxt}>
            <h3 className={styles.title}>{title}</h3>
            <h4 className={styles.tagline}>{album || artist.name}</h4>
          </div>

          <div className={styles.infoStats}>
            {/* People icon */}
            {/* counter ascending */}
            <div className={styles.plays}>
              <span>👥</span>
              {plays}
            </div>
            <div className={styles.duration}>{time({ ms: duration })}</div>
          </div>
        </div>
      </div>

      <div className={styles.artist}>
        <Image
          width={image.width}
          height={image.width / 2}
          src={artist.image.src}
          alt={`${artist.name}'s Photo`}
          className={styles.artistImage}
        />
        <div className={styles.artistInfo}>
          <h5 className={styles.listeners}>
            {artist.monthlyListeners} Monthly Listeners
          </h5>

          {/* get the maximum number of characters and then remove everything after the last fullstop (so we have maximum number of full sentences) */}
          <p className={styles.artistBio}>{readMore(artist.bio)}</p>
        </div>
      </div>
    </div>
  );
};

export default Preview;
