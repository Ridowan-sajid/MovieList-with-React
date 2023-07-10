import React from "react";

export default function Favourite({ favorite, removeToFav }) {
  console.log(favorite);
  return (
    <>
      <h2>Favorite List</h2>
      <div class="d-flex flex-wrap justify-content-center">
        {favorite &&
          favorite.map((m) => (
            <div key={m.imdbID} className="m-1 m-2 card">
              <img
                className="card-img-top"
                src={m.Poster}
                alt="Ops something wrong"
              />
              <button className="btn btn-danger" onClick={() => removeToFav(m)}>
                Remove
              </button>
            </div>
          ))}
      </div>
    </>
  );
}
