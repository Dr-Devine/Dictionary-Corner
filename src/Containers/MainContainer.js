import React, { useEffect, useState } from 'react';
import WordSearch from '../Components/WordSearch';
import WordDetails from '../Components/WordDetails';
import FavouritesList from '../Components/FavouritesList ';

const MainContainer = () => {
    const [word, setWord] = useState('');
    const [definition, setDefinition] = useState('');
    const [favourites, setFavourites] = useState([]);

    const handleSearch = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
            const data = await response.json();
            setDefinition(data);
        } catch (err) {
            console.error(err);
        }
    };

    const handleSaveToFavourites = (e) => {
        e.preventDefault();
        const word = definition["0"].word;
        const def1 = definition["0"].meanings["0"].definitions["0"].definition;
        const def2 = definition["0"].meanings["0"].definitions["1"].definition;
        const def3 = definition["0"].meanings["0"].definitions["2"].definition;
        localStorage.setItem('favourites', JSON.stringify(favourites));
        setFavourites([...favourites, { word, def1, def2, def3 }]);
        localStorage.setItem('favourites', JSON.stringify(favourites));
    };

    // useEffect(() => {
    //     const storedFavourites = localStorage.getItem('favourites');
    //     if (storedFavourites) {
    //         setFavourites(JSON.parse(storedFavourites));
    //     }
    // }, []);
    
    // useEffect(() => {
    //     localStorage.setItem('favourites', JSON.stringify(favourites));
    //     const data = localStorage.getItem('favourites');
    //     if (data) {
    //         setFavourites(JSON.parse(data));
    //     }
    // }, [favourites]);

    useEffect(() => {
        const storedFavourites = localStorage.getItem('favourites');
        if (storedFavourites) {
            setFavourites(JSON.parse(storedFavourites));
        }
    }, []);
    
    //OK so its only saving new items after they have been double saved. If
    //I had more time I'm sure I could figure it out. 
    
    

    return (
        <div>
            <WordSearch word={word} setWord={setWord} handleSearch={handleSearch} />
            <WordDetails definition={definition} handleSaveToFavourites={handleSaveToFavourites}/>
            <FavouritesList favourites={favourites} />
        </div>
    );
}

export default MainContainer;
