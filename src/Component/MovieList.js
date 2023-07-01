import React from "react";

export default function MovieList({ movies, addToFav }) {
  return (
    <div>
      {movies.map((m) => (
        <div class="d-inline" key={m.imdbID}>
          <img src={m.Poster} alt="Ops something wrong" />
          <button className="btn btn-dark" onClick={() => addToFav(m)}>
            Add
          </button>
        </div>
      ))}
    </div>
  );
}
