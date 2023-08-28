import React, { useContext } from 'react';
import noteContext from "../context/notes/noteContext";

const Search = () => {
  const context = useContext(noteContext);
  const { getFilteredAlbums, filteredAlbums } = context;

  return (
        <input
          type="search"
          placeholder="Search..."
          onChange={(e) => getFilteredAlbums(e.target.value)}
        />
  );
};

export default Search;