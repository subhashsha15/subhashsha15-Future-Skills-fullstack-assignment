import React, { useEffect } from 'react';
import Card from '../Card/Card';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCards, resetSearchResults } from '../../Redux/cardSlice';

const Features = () => {
    const dispatch = useDispatch();
    const { cards, searchResults, loading, error } = useSelector((state) => state.cards);
    console.log("error", error);
    useEffect(() => {
        dispatch(fetchCards());

        // Reset search results after component unmounts
        return () => {
            dispatch(resetSearchResults());
        };
    }, [dispatch]);

    // Ensuring cards and searchResults are arrays
    const safeCards = Array.isArray(cards) ? cards : [];
    const safeSearchResults = Array.isArray(searchResults) ? searchResults : [];

    const shouldShowSearchResults = safeSearchResults.length > 0;

    return (
        <div
            className="features-container"
            style={{
                width: "80%",
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                margin: "0px auto",
                gap: "50px",
                flexWrap: "wrap",
            }}
        >
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>Error: {error}</p>
            ) : shouldShowSearchResults ? (
                safeSearchResults.map((card) => (
                    <Card key={card.id} title={card.title} description={card.description} />
                ))
            ) : (
                safeCards.map((card) => (
                    <Card key={card.id} title={card.title} description={card.description} />
                ))
            )}
        </div>
    );
};

export default Features;
