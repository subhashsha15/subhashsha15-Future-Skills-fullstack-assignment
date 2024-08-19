import React, { useState } from 'react';
import './Search.css';
import { FaArrowRightLong } from "react-icons/fa6";
import { useDispatch } from 'react-redux';
import { searchCards } from '../../Redux/cardSlice';

const Search = () => {
    const [query, setQuery] = useState('');
    const dispatch = useDispatch();

    const handleSearch = () => {
        if (query) {
            dispatch(searchCards(query));
        }
    };

    return (
        <>
            <div className="search-container">
                <h1>How can we help?</h1>
                <div className='search-box'>
                    <input
                        type="text"
                        placeholder="Search"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <span className='search-right-arrow-icon' onClick={handleSearch}>
                        <FaArrowRightLong />
                    </span>
                </div>
            </div>
        </>
    );
};

export default Search;
