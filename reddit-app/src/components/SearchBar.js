import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '../reducers/searchSlice';
import './SearchBar.css';

export const SearchBar = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  function handleChange(event) {
    setQuery(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(setSearchQuery(query));
    // Perform search action using query
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search"
      />
    </form>
  );
}

