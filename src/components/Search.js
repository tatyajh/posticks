/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { MdSearch } from 'react-icons/md';

function Search({ handleSearchNote }) {
  return (
    <div className="search">
      <MdSearch className="search-icons" size="1.3em" />
      <input
        onChange={(event) => handleSearchNote(event.target.value)}
        type="text"
        placeholder="What are you looking for...?"
      />
    </div>
  );
}

export default Search;
