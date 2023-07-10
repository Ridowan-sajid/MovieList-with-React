import React from "react";

export default function MovieList({ movies, addToFav }) {
  console.log(movies);
  return (
    <div className="d-flex flex-wrap justify-content-center">
      {movies.map((m) => (
        <div key={m.imdbID} className="p-2 m-2 card ">
          <img
            className="card-img-top"
            src={m.Poster}
            alt="Ops something wrong"
          />
          {/* <h5 className="card-text text-muted">{m.Title}</h5> */}
          <button className="btn btn-success" onClick={() => addToFav(m)}>
            Add
          </button>
        </div>
      ))}
    </div>
  );
}
