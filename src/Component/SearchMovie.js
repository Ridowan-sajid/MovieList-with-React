import React from "react";

export default function SearchMovie({ setSearch }) {
  return (
    <div>
      <input
        style={{ margin: 20, padding: 5, borderRadius: 15 }}
        type="text"
        name="search"
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}
