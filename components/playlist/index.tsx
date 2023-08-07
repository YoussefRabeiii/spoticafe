import { FC } from "react";
import styles from "./styles.module.css";
import { Track } from "@components";

const fakeTracks = [
  {
    name: "Angel",
    popularity: 56,
    explicit: false,
    duration_ms: 146666,
    id: "1T8YUlqrG15Tjetxhos6eJ",
    plays: 895512365,
    preview_url:
      "https://p.scdn.co/mp3-preview/349498344b7ac5062ced4f56931ed7e7a1ba3515?cid=9ef7a66ef84e4573b2bc1234948b2c27",
    artists: [
      {
        name: "Kid Cudi",
      },
    ],
    album: {
      album_type: "album",
      artists: [
        {
          name: "Kid Cudi",
        },
      ],
      id: "4aW4iDepQUl5ZCHd1Gli68",
      images: [
        {
          height: 640,
          url: "https://upload.wikimedia.org/wikipedia/en/d/d4/Sigrid_-_How_to_Let_Go.png",
          width: 640,
        },
        {
          height: 300,
          url: "https://upload.wikimedia.org/wikipedia/en/d/d4/Sigrid_-_How_to_Let_Go.png",
          width: 300,
        },
        {
          height: 64,
          url: "https://upload.wikimedia.org/wikipedia/en/d/d4/Sigrid_-_How_to_Let_Go.png",
          width: 64,
        },
      ],
      name: "Entergalactic",
    },
  },
];

const Playlist: FC<PlaylistProps> = ({
  tracks = fakeTracks,
  playable = false,
}) => {
  return (
    <div className={styles.playlist}>
      {tracks.map((track) => (
        <Track {...track} id={track.id} />
      ))}
    </div>
  );
};

export default Playlist;
