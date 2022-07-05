import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

function DetailsView(){
    const record = useSelector(store => store.details);
    const history = useHistory()


    return (
        <div className='detailed-view'>
            { record.title && <p>{record.title} - {record.artists_sort}</p> }
            { record.country && <p>{record.country} version released in {record.year}.</p>}
            { record.community.want && <p> Want: {record.community.want} </p> }
            { record.community.have && <p> Have: {record.community.have}</p> }
            { record.community.rating && <p>Rating: {record.community.rating.average} out of {record.community.rating.count} votes</p> }
            { record.labels.name && <p>Label: {record.labels.name}</p> }
            { record.genres && <p>Genres: {record.genres}</p> }
            { record.styles && <p>Styles: {record.styles}</p> }
            { record.identifiers[0] && <p>Barcode: {record.identifiers[0].value}</p> }
            { record.tracklist &&
                <>
                    <p>Tracks:</p>
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