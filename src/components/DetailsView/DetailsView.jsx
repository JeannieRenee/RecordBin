import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

//mui icons
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Typography from '@mui/material/Typography';

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
            <IconButton onClick={history.goBack} style={{ color: '#d67753' }}>
                <ArrowBackIosIcon />
                <ArrowBackIosIcon />
                <ArrowBackIosIcon />
                Back
            </IconButton>
            <Typography variant="h6">
                {record.title && <p>{record.title} - {record.artists_sort}</p>}
            </Typography>
            <Typography variant="text" color="text.secondary" >
                {record.country && <p>{record.country} version released in {record.year} </p>}
            </Typography>
            <Typography variant="text" color="text.secondary" >
                {record.community && 
                    <>
                        <p> Want: {record.community.want} Have: {record.community.have} </p>  
                        <p> Rating: {record.community.rating.average} out of {record.community.rating.count} votes </p>
                    </>
                }
            </Typography>
            <Typography variant="text" color="text.secondary" >
                { record.labels && 
                    <>
                        <p>Labels:</p>
                        <ul>
                            {record.labels.map(label => {
                                return (
                                <li>{label.name}</li>
                                )
                            })}
                        </ul> 
                    </>
                }
            </Typography>
            <Typography variant="text" color="text.secondary" >
                { record.genres && 
                    <>
                        <p>Genres:</p>
                        <ul>
                            {record.genres.map(genre => {
                                return (
                                <li>{genre}</li>
                                )
                            })}
                        </ul> 
                    </>
                }
            </Typography>
            <Typography variant="text" color="text.secondary" >
                { record.styles && 
                    <>
                        <p>Styles:</p>
                        <ul>
                            {record.styles.map(style => {
                                return (
                                <li>{style}</li>
                                )
                            })}
                        </ul> 
                    </>
                }
            </Typography>
            <Typography variant="text" color="text.secondary" >
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
            </Typography>
            <Typography variant="text" color="text.secondary" >    
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
                    </>
                }
            </Typography>
            <Typography variant="text" color="text.secondary">
                { record.notes && <p>Notes: {record.notes}</p> }
            </Typography>
        </div>
    )
}

export default DetailsView 