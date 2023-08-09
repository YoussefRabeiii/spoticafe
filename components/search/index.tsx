"use client";

import { FC, FormEvent, useState } from "react";
import { Playlist } from "@components";
import styles from "./styles.module.css";

const Search: FC = () => {
  const [results, setResults] = useState([""]);

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className={styles.search}>
      <h1 className={styles.title}>Search</h1>

      <div className={styles.searchBar}>
        <input
          type="text"
          placeholder="Search for a song"
          className={styles.input}
          // onChange={}
        />

        <span
          className={styles.searchIcon}
          //  onClick={}
        >
          {/* TODO: Icon */}
          🔍
        </span>
      </div>

      <div className={styles.results}>
        {/* <Playlist tracks={results} /> */}

        {results.map((track: any) => (
          <p>{track}</p>
        ))}
      </div>
    </div>
  );
};

export default Search;
