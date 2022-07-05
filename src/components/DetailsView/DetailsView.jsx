import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

function DetailsView(){
    const record = useSelector(store => store.details);
    const history = useHistory()


    return (
        <div className='detailed-view'>
            { record.title && <p>{record.title} - {record.artists_sort}</p> }
            <p>{record.country} version released in {record.year}.</p>
            { record.labels.name && <p>Label: {record.labels.name}</p> }
            { record.genres && <p>Genres: {record.genres}</p> }
            { record.styles && <p>Styles: {record.styles}</p> }
            { record.tracklist && <><p>Tracks:</p>
                <ul>
                    {record.tracklist.map(track => {
                        return (
                        <li>{track.position} - {track.title}</li>
                        )
                    })}
                </ul> 
            </>}
            { record.notes && <p>Notes: {record.notes}</p> }
        </div>
    )
}

export default DetailsView 