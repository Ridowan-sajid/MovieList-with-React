import React from "react";

export default function MovieList({ movies, favorite, setFavorite }) {
  const addToFav = (m) => {
    setFavorite([...favorite, m]);
  };

  return (
    <div>
      {movies.map((m) => (
        <div key={m.imdbID}>
          <img src={m.Poster} alt="Ops something wrong" />
          <button onClick={() => addToFav(m)}>Add</button>
        </div>
      ))}
    </div>
  );
}
