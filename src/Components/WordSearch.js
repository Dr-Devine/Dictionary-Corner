import React, {useState} from 'react';

const WordSearch = ({ handleSearch, setWord }) => {
    return (
        <form onSubmit={handleSearch}>
            <input type="text" onChange={e => setWord(e.target.value)} placeholder="Search for a word" />
            <button type="submit">Search</button>
        </form>
    );
}

export default WordSearch;
