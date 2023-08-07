"use client";

import { time } from "@utils";
import Image from "next/image";
import { FC, useState } from "react";
import styles from "./styles.module.css";

const Track: FC<TrackProps> = ({
  name,
  popularity,
  explicit,
  duration_ms,
  id,
  preview_url,
  album,
  artists,
  plays,
}) => {
  const [liked, setLiked] = useState(false);
  const [disLiked, setDisLiked] = useState(false);
  const [likes, setLikes] = useState(0);
  const [disLikes, setDisLikes] = useState(0);

  // TODO: Sort with netScore
  let netScore = likes - disLikes;

  // FIXME
  // REFACTOR: This is a mess made by AI
  const handleLike = () => {
    if (liked) {
      setLiked(false);
      setLikes(likes - 1);
    } else {
      if (disLiked) {
        setDisLiked(false);
        setDisLikes(disLikes - 1);
      }
      setLiked(true);
      setLikes(likes + 1);
    }
  };

  const handleDislike = () => {
    if (disLiked) {
      setDisLiked(false);
      setDisLikes(disLikes - 1);
    } else {
      if (liked) {
        setLiked(false);
        setLikes(likes - 1);
      }
      setDisLiked(true);
      setDisLikes(disLikes + 1);
    }
  };

  return (
    <div className={styles.track}>
      <div className={styles.imageContainer}>
        {/* TODO: Preview if playable */}

        {/* TODO: make it responsive (use smaller images on mobile etc.) */}
        {/* BUG: Array Wider First - idk if there's a limit */}
        <Image
          alt={`${name}'s cover`}
          src={album.images[2].url}
          width={album.images[2].width}
          height={album.images[2].height}
        />
      </div>

      <h1>{name}</h1>

      {/* FIXME: get the artist or the album artist */}
      <h4>{artists[0].name || album.artists[0].name}</h4>

      {/* duration */}
      <p>{time({ ms: duration_ms, human: true })}</p>

      {/* popularity */}
      {/* <p><popularityScale value={popularity} /></p> */}
      <p>{plays}</p>

      {/* Like / Dislike btns*/}
      <div className={styles.vote}>
        <span onClick={handleLike}>{liked ? "💖💖" : "💖"}</span>
        <span onClick={handleDislike}>{disLiked ? "💔💔" : "💔"}</span>

        {/* <span>likes: {likes}</span> */}
        {/* <span>disLikes: {disLikes}</span> */}
        {/* <span>netScore: {netScore}</span> */}
      </div>
    </div>
  );
};

export default Track;
