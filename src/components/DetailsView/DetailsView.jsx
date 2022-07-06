import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

function DetailsView(){
    const record = useSelector(store => store.details);
    const history = useHistory()
    const dispatch = useDispatch();
    // grab id from params
    let  {id}  = useParams();

    // page load get the record data
    useEffect(() => {
        dispatch({
            type: "FETCH_DETAILED_RESULTS",
            payload: id
        });
    }, []);

    return (
        <div className='detailed-view'>
            <IconButton onClick={history.goBack}>
                <ArrowBackIosIcon />
                <ArrowBackIosIcon />
                <ArrowBackIosIcon />
                Back
            </IconButton>
            { record.title && <p>{record.title} - {record.artists_sort}</p> }
            { record.country && <p>{record.country} version released in {record.year} </p>}
            { record.community && 
                <>
                    <p> Want: {record.community.want} Have: {record.community.have} </p>  
                    <p> 
                        Rating: {record.community.rating.average} 
                        out of {record.community.rating.count} votes 
                    </p>
                </>
            }
            { record.labels && <p>Label: {record.labels[0].name}</p> }
            { record.genres && <p>Genres: {record.genres}</p> }
            { record.styles && <p>Styles: {record.styles}</p> }
            { record.identifiers && 
                <>
                    <p>Identifiers:</p>
                    <ul>
                        {record.identifiers.map(item => {
                            return (
                            <li>{item.value}</li>
                            )
                        })}
                    </ul> 
                </>
            }
                
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