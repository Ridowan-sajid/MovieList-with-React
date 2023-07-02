import React from "react";

export default function MovieList({ movies, addToFav }) {
  return (
    <div class="d-flex flex-wrap">
      {movies.map((m) => (
        <div key={m.imdbID} className="m-1">
          <img src={m.Poster} alt="Ops something wrong" />
          <button className="btn btn-success w-100" onClick={() => addToFav(m)}>
            Add
          </button>
        </div>
      ))}
    </div>
  );
}
