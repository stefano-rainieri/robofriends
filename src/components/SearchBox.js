import React from 'react';

export const SearchBox = ({ searchChange, searchField }) => (
  <div className="pa2">
    <input
      className="pa3 ba b--black bg-white br3"
      onChange={searchChange}
      placeholder="search robots"
      type="search"
    />
  </div>
)