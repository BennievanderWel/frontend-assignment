import React, { useState, KeyboardEvent } from 'react';
import './Search.scss';

export interface ISearch {
  onSubmit: (args: string) => void;
}

const Search = ({ onSubmit }: ISearch) => {
  const [value, setValue] = useState('');

  const submitHandler = (inputValue?: string) => onSubmit(inputValue || value);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    setValue(inputValue);

    // Auto submit if input chars count > 2
    // Pass inputValue due to autobatching updates
    if (inputValue.length > 2) submitHandler(inputValue);
  };

  const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') submitHandler();
  };

  return (
    <div className="search">
      <input
        className="rw-input-text search__input"
        placeholder="Destination.."
        value={value}
        onChange={onChangeHandler}
        onKeyDown={onKeyDownHandler}
      />
      <button className="rw-button" onClick={() => submitHandler()}>
        Search
      </button>
    </div>
  );
};

export default Search;
