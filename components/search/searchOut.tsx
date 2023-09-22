"use client";
import { FC, useCallback, useRef, useState } from "react";

const SearchOut: FC = () => {
  const searchRef = useRef(
    null
  ) as React.MutableRefObject<HTMLInputElement | null>;
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(false);
  const [results, setResults] = useState([]);

  const searchEndpoint = (query: string) => `/api/search?q=${query}`;

  const onChange = useCallback((event: any) => {
    const query = event.target.value;
    setQuery(query);
    if (query.length) {
      fetch(searchEndpoint(query))
        .then((res) => res.json())
        .then((res) => {
          setResults(res.results);
        });
    } else {
      setResults([]);
    }
  }, []);

  const onFocus = () => {
    setActive(true);
    window.addEventListener("click", onClick);
  };

  const onClick = useCallback((event: any) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setActive(false);
      setQuery("");
      setResults([]);
      window.removeEventListener("click", onClick);
    }
  }, []);

  return (
    <div className="relative" ref={searchRef}>
      <input
        className=""
        onChange={onChange}
        onFocus={onFocus}
        placeholder="Search"
        type="text"
        value={query}
      />
      {active && results.length > 0 && <ul>{results}</ul>}
    </div>
  );
};

export default SearchOut;
