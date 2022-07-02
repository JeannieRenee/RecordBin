import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

function Browse(){
    // const results = useSelector(store => store.browseBasic);
    const [search, setSearch]= useState('');
    const dispatch = useDispatch();

    const sendSearch = () => {
        dispatch({
            type: "FETCH_BASIC_RESULTS",
            payload: search,
        });
        // setSearch('');
    }

    return (
        <div>
            <div>
                <h1>Browse</h1>
                <h3>What are you looking for?</h3>

                <form>
                    <input 
                    type="text"
                    placeholder= "Artist, Album, Genres, Year, Barcode..."
                    value= {search}
                    onChange={(evt) => setSearch(evt.target.value)}
                    />
                    <button onClick={sendSearch}>search</button>
                </form>
            </div> 
            <div>
            </div>
        </div>
    )
}

export default Browse;
