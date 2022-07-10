import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

//mui icons
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Typography from '@mui/material/Typography';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';

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
        <>
            <div className='detailed-view-back-button'>
                <IconButton onClick={history.goBack} >
                    <ArrowBackIosIcon style={{ color: '#d67753' }}/>
                    Back
                </IconButton>
            </div>
                <br/>
                <br/>        
            <div className='detailed-view'>
                <div className='detailed-view-image'>
                    <img src={require('./placeholder.png')} width="300" height="300"/>
                </div>
                <br/>
                <div className='detailed-view-text'>
                <Typography variant="h5"> 
                    {record.title && <>{record.title}</>}
                </Typography>
                <Typography variant="h6"> 
                    {record.artists_sort && <>{record.artists_sort}</>}
                </Typography>
                <br/>
                <Typography variant="subtitle1" color="text.secondary" >
                    {record.community && 
                        <>
                            {/* .5 star */}
                            { record.community.rating.average < .75 &&
                                <>
                                    <StarBorderIcon style={{ color: '#d67753' }}/>
                                    <StarBorderIcon style={{ color: '#d67753' }}/>
                                    <StarBorderIcon style={{ color: '#d67753' }}/>
                                    <StarBorderIcon style={{ color: '#d67753' }}/>
                                    <StarBorderIcon style={{ color: '#d67753' }}/>
                                </>
                            }
                            {/* 1 star */}
                            { record.community.rating.average < 1.25 && record.community.rating.average >= .75 &&
                                <>
                                    <StarIcon style={{ color: '#d67753' }}/>
                                    <StarBorderIcon style={{ color: '#d67753' }}/>
                                    <StarBorderIcon style={{ color: '#d67753' }}/>
                                    <StarBorderIcon style={{ color: '#d67753' }}/>
                                    <StarBorderIcon style={{ color: '#d67753' }}/>
                                </>
                            }
                            {/* 1.5 star */}
                            { record.community.rating.average < 1.75 && record.community.rating.average >= 1.25 &&
                                <>
                                    <StarIcon style={{ color: '#d67753' }}/>
                                    <StarHalfIcon style={{ color: '#d67753' }}/>
                                    <StarBorderIcon style={{ color: '#d67753' }}/>
                                    <StarBorderIcon style={{ color: '#d67753' }}/>
                                    <StarBorderIcon style={{ color: '#d67753' }}/>
                                </>
                            }
                            {/* 2 star */}
                            { record.community.rating.average < 2.25 && record.community.rating.average >= 1.75 &&
                                <>
                                    <StarIcon style={{ color: '#d67753' }}/>
                                    <StarIcon style={{ color: '#d67753' }}/>
                                    <StarBorderIcon style={{ color: '#d67753' }}/>
                                    <StarBorderIcon style={{ color: '#d67753' }}/>
                                    <StarBorderIcon style={{ color: '#d67753' }}/>
                                </>
                            }
                            {/* 2.5 star */}
                            { record.community.rating.average < 2.75 && record.community.rating.average >= 2.25 &&
                                <>
                                    <StarIcon style={{ color: '#d67753' }}/>
                                    <StarIcon style={{ color: '#d67753' }}/>
                                    <StarHalfIcon style={{ color: '#d67753' }}/>
                                    <StarBorderIcon style={{ color: '#d67753' }}/>
                                    <StarBorderIcon style={{ color: '#d67753' }}/>
                                </>
                            }
                            {/* 3 star */}
                            { record.community.rating.average < 3.25 && record.community.rating.average >= 2.75 &&
                                <>
                                    <StarIcon style={{ color: '#d67753' }}/>
                                    <StarIcon style={{ color: '#d67753' }}/>
                                    <StarIcon style={{ color: '#d67753' }}/>
                                    <StarBorderIcon style={{ color: '#d67753' }}/>
                                    <StarBorderIcon style={{ color: '#d67753' }}/>
                                </>
                            }
                            {/* 3.5 star */}
                            { record.community.rating.average < 3.75 && record.community.rating.average >= 3.25 &&
                                <>
                                    <StarIcon style={{ color: '#d67753' }}/>
                                    <StarIcon style={{ color: '#d67753' }}/>
                                    <StarIcon style={{ color: '#d67753' }}/>
                                    <StarHalfIcon style={{ color: '#d67753' }}/>
                                    <StarBorderIcon style={{ color: '#d67753' }}/>
                                </>
                            }
                            {/* 4 star */}
                            { record.community.rating.average < 4.25 && record.community.rating.average >= 3.75 &&
                                <>
                                    <StarIcon style={{ color: '#d67753' }}/>
                                    <StarIcon style={{ color: '#d67753' }}/>
                                    <StarIcon style={{ color: '#d67753' }}/>
                                    <StarIcon style={{ color: '#d67753' }}/>
                                    <StarBorderIcon style={{ color: '#d67753' }}/>
                                </>
                            }
                            {/* 4.5 star */}
                            { record.community.rating.average < 4.75 && record.community.rating.average >= 4.25 &&
                                <>
                                    <StarIcon style={{ color: '#d67753' }}/>
                                    <StarIcon style={{ color: '#d67753' }}/>
                                    <StarIcon style={{ color: '#d67753' }}/>
                                    <StarIcon style={{ color: '#d67753' }}/>
                                    <StarHalfIcon style={{ color: '#d67753' }}/>
                                </>
                            }
                            {/* 5 star */}
                            { record.community.rating.average <= 5 && record.community.rating.average >= 4.75 &&
                                <>
                                    <StarIcon style={{ color: '#d67753' }}/>
                                    <StarIcon style={{ color: '#d67753' }}/>
                                    <StarIcon style={{ color: '#d67753' }}/>
                                    <StarIcon style={{ color: '#d67753' }}/>
                                    <StarIcon style={{ color: '#d67753' }}/>
                                </>
                            }
                            <br/>
                                <> Rating: {record.community.rating.average} out of {record.community.rating.count} votes </>
                            <br/>
                        </>
                    }
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" >
                    { record.genres && 
                        <>
                            Genres:
                                {record.genres.map(genre => {
                                    return (
                                    <> {genre} </>
                                    )
                                })}
                        
                        </>
                    }
                    <br/>
                    { record.styles && 
                        <>
                            SubGenres:
                                {record.styles.map(style => {
                                    return (
                                    <> {style} </>
                                    )
                                })}
                        </>
                    }
                </Typography>
                <br/>
                
                <Typography variant="text" color="text.secondary" >    
                    { record.tracklist &&
                        <>
                            <b>Tracks:</b>
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
                    { record.notes && <><b>Notes:</b> {record.notes}</> }
                </Typography>


                <Typography variant="text" color="text.secondary" >
                    <br/>
                    {record.country && <>{record.country} version released in {record.year} </>}
                    <br/>
                    { record.labels && 
                        <>
                            <>Labels:</>
                                {record.labels.map(label => {
                                    return (
                                    <> {label.name} </>
                                    )
                                })} 
                        </>
                    }
                </Typography>
                </div>
            </div>
        </>
    )
}

export default DetailsView 

