import React from "react";

export default function SearchMovie({ setSearch }) {
  return (
    <div>
      <input
        type="text"
        name="search"
        placeholder="Search..."
        className="px-4 py-2 m-3 rounded"
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}
