import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

import IconButton from '@mui/material/IconButton';
import Snackbar from '@mui/material/Snackbar';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';

//mui icons
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Typography from '@mui/material/Typography';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import FavoriteIcon from '@mui/icons-material/Favorite';

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

    // add to wishlist dispatch 
    const addWishlist = event => {
        const id = event.target.id;
        const artist = event.target.getAttribute('artist');
        const title = event.target.title;
        const cover_image = event.target.getAttribute('cover_image');
        const country = event.target.getAttribute('country');
        const year = event.target.getAttribute('year');
        const genre = event.target.getAttribute('genre');
        const owned = event.target.getAttribute('owned');

        dispatch({ 
            type: 'SAVE_RECORD', 
            payload: {   
                id,
                artist,
                title,
                cover_image,
                country,
                year,
                genre,
                owned
            }
        });
        setOpenWishlist(true);
    }

    // add to collection dispatch
    const addCollection = event => {
        const id = event.target.id;
        const artist = event.target.getAttribute('artist');
        const title = event.target.title;
        const cover_image = event.target.getAttribute('cover_image');
        const country = event.target.getAttribute('country');
        const year = event.target.getAttribute('year');
        const genre = event.target.getAttribute('genre');
        const owned = event.target.getAttribute('owned');

        dispatch({ 
            type: 'SAVE_RECORD', 
            payload: {   
                id,
                artist,
                title,
                cover_image,
                country,
                year,
                genre,
                owned
            }
        });
        setOpenCollection(true);
    }

    // snackbar stuff :) 
    const [openWishlist, setOpenWishlist] = React.useState(false );
    const [openCollection, setOpenCollection] = React.useState(false);
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      setOpenWishlist(false);
      setOpenCollection(false);
    };
    const action = (
        <React.Fragment>
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </React.Fragment>
    );
    
    return (
        <>
            <div className='detailed-view-back-button'>
                <IconButton onClick={history.goBack} >
                    <ArrowBackIosIcon style={{ color: '#d67753' }}/>
                    <u>Back</u>
                </IconButton>
            </div>
            <br/>
            <br/>        
            <div className='detailed-view-image'>
                {record.images ? 
                    <img src={record.images[0].uri} width="300" height="300"/>
                :
                    <img src={require('./placeholder.png')} width="300" height="300"/>
                }
            </div>
            <br/>
            <div className='detailed-view'>
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
                    <br/>
                {record.images ?
                <div className="add-buttons">
                    <IconButton 
                        id= {record.id}
                        artist= {record.artists_sort}
                        title= {record.title}
                        cover_image= {record.images[0].uri}
                        country= {record.country} 
                        year= {record.year} 
                        genre= {record.genres} 
                        owned= "false"
                        onClick= {addWishlist}
                    >
                        <FavoriteIcon style={{ color: '#d67753' }}/>
                        + wishlist
                    </IconButton>

                    <IconButton 
                        id= {record.id}
                        artist= {record.artists_sort}
                        title= {record.title}
                        cover_image= {record.images[0].uri}
                        country= {record.country} 
                        year= {record.year} 
                        genre= {record.genres} 
                        owned= "true"
                        onClick= {addCollection}
                    >
                        <LibraryMusicIcon style={{ color: '#d67753' }}/>
                        + collection
                    </IconButton>
                </div>
                :
                <div className="add-buttons">
                    <IconButton 
                    id= {record.id}
                    artist= {record.artists_sort}
                    title= {record.title}
                    cover_image= 'https://www.nomadfoods.com/wp-content/uploads/2018/08/placeholder-1-e1533569576673-960x960.png'
                    country= {record.country} 
                    year= {record.year} 
                    genre= {record.genres} 
                    owned= "false"
                    onClick= {addWishlist}
                    >
                        <FavoriteIcon style={{ color: '#d67753' }}/>
                        + wishlist
                    </IconButton>

                    <IconButton 
                        id= {record.id}
                        artist= {record.artists_sort}
                        title= {record.title}
                        cover_image= 'https://www.nomadfoods.com/wp-content/uploads/2018/08/placeholder-1-e1533569576673-960x960.png'
                        country= {record.country} 
                        year= {record.year} 
                        genre= {record.genres} 
                        owned= "true"
                        onClick= {addCollection}
                    >
                        <LibraryMusicIcon style={{ color: '#d67753' }}/>
                        + collection
                    </IconButton>
                </div>
                }
                </div>
            </div>
            <Snackbar
                open={openWishlist}
                autoHideDuration={3000}
                onClose={handleClose}
                message="record added to wishlist"
                action={action}
            />
            <Snackbar
                open={openCollection}
                autoHideDuration={3000}
                onClose={handleClose}
                message="record added to collection"
                action={action}
            />
        </>
    )
}

export default DetailsView 

// These kill the app. we dont knowwhy 

{/* <div className="add-buttons">
<Box sx={{ '& > :not(style)': { m: 1 } }}>
<Fab color="primary" style={{ backgroundColor: '#d67753' }} sx={{ mr: 1 }}>
    <FavoriteIcon />
</Fab>
<Fab variant="extended" color="secondary" style={{ backgroundColor: '#d67753' }}>
    <LibraryMusicIcon sx={{ mr: 1 }}/>
    collection
</Fab>
</Box>
</div> */}