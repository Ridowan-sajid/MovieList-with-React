import React, { useEffect, useState } from "react";
import useFetch from "./useFetch";
import MovieList from "./MovieList";
import SearchMovie from "./SearchMovie";

export default function Home() {
  const [search, setSearch] = useState("marvel");
  const [favorite, setFavorite] = useState([]);

  const { movies, error, loading } = useFetch(
    `http://www.omdbapi.com/?s=${search}&apikey=d3706cd8`
  );
  if (!search) {
    setSearch("marvel");
  }
  return (
    <div>
      {<SearchMovie setSearch={setSearch} />}
      {loading && <h4 style={{ textAlign: "center" }}>Loading...</h4>}
      {movies && (
        <MovieList
          movies={movies}
          favorite={favorite}
          setFavorite={setFavorite}
        />
      )}
      {error && <h1 style={{ textAlign: "center" }}>{error}</h1>}
    </div>
  );
}
