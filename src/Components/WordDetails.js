import React, { useState } from 'react';

const WordDetails = ({ definition, handleSaveToFavourites }) => {
    // const [favourites, setFavourites] = useState([]); // state hook to keep track of the favorites

    // const handleSaveToFavorites = (e) => {
    //     e.preventDefault();
    //     const word = definition["0"].word;
    //     const def1 = definition["0"].meanings["0"].definitions["0"].definition;
    //     const def2 = definition["0"].meanings["0"].definitions["1"].definition;
    //     const def3 = definition["0"].meanings["0"].definitions["2"].definition;
    //     setFavourites([...favourites, { word, def1, def2, def3 }]);
    // };
    return (
        <div>
            {definition &&
                <div>
                    <h3>Word: {definition["0"].word}</h3>
                    <p>Definition 1: {definition["0"].meanings["0"].definitions["0"].definition}</p>
                    <p>Definition 2: {definition["0"].meanings["0"].definitions["1"].definition}</p>
                    <p>Definition 3: {definition["0"].meanings["0"].definitions["2"].definition}</p>
                    <button onClick={handleSaveToFavourites}>Save to Favourites</button>
                </div>
            }
        </div>
    );
}

export default WordDetails;
