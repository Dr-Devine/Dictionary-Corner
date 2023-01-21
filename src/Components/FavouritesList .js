import React from 'react';

const FavouritesList = ({ favourites }) => {
    return (
        <div>
            <h3>Favourites List</h3>
            {favourites.map((favourite, index) => (
                <div key={index}>
                    <h4>Word: {favourite.word}</h4>
                    <p>Definition 1: {favourite.def1}</p>
                    <p>Definition 2: {favourite.def2}</p>
                    <p>Definition 3: {favourite.def3}</p>
                </div>
            ))}
        </div>
    );
}

export default FavouritesList;
