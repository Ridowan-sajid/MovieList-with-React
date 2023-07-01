import React, { useEffect, useState } from "react";
import useFetch from "./useFetch";
import MovieList from "./MovieList";
import SearchMovie from "./SearchMovie";
import Favourite from "./Favourite";

export default function Home() {
  const [search, setSearch] = useState("marvel");
  const [favorite, setFavorite] = useState(() => {
    const storedFavorites = localStorage.getItem("fav");
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  const { movies, error, loading } = useFetch(
    `http://www.omdbapi.com/?s=${search}&apikey=d3706cd8`
  );
  if (!search) {
    setSearch("marvel");
  }
  const addToFav = (m) => {
    setFavorite([...favorite, m]);
  };
  const removeToFav = (m) => {
    const newFav = favorite.filter((f) => f !== m);
    setFavorite(newFav);
    localStorage.setItem("fav", JSON.stringify(newFav));
  };

  useEffect(() => {
    localStorage.setItem("fav", JSON.stringify(favorite));
  }, [favorite]);
  return (
    <div>
      {<SearchMovie setSearch={setSearch} />}
      {loading && <h4 style={{ textAlign: "center" }}>Loading...</h4>}
      {movies && <MovieList movies={movies} addToFav={addToFav} />}
      {error && <h1 style={{ textAlign: "center" }}>{error}</h1>}
      <hr />
      <Favourite favorite={favorite} removeToFav={removeToFav} />
    </div>
  );
}
