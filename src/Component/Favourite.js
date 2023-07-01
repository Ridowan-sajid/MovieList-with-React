import React from "react";

export default function Favourite({ favorite, removeToFav }) {
  console.log(favorite);
  return (
    <div>
      <h2>Favorite List</h2>
      {favorite &&
        favorite.map((m) => (
          <div class="d-inline" key={m.imdbID}>
            <img src={m.Poster} alt="Ops something wrong" />
            <button className="btn btn-danger" onClick={() => removeToFav(m)}>
              Remove
            </button>
          </div>
        ))}
    </div>
  );
}
