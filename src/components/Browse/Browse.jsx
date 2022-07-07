import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

// mui imports
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

//mui toggle
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
// mui icons 
import ListIcon from '@mui/icons-material/List';
import GridViewIcon from '@mui/icons-material/GridView';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Browse(){
    const results = useSelector(store => store.browseBasic.results);
    const pagination = useSelector(store => store.browseBasic.pagination);

    const [search, setSearch]= useState('');
    const dispatch = useDispatch();
    const history = useHistory();
    const  {id}  = useParams();

    const sendSearch = (evt) => {
        evt.preventDefault();
        dispatch({
            type: "FETCH_BASIC_RESULTS",
            payload: search
        });
    }

    // to toggle the view
    const [display, setDisplay] = useState(true);
    const toggleDisplay = () => {
        setDisplay(!display);
    }
 
    // push to detailed page on cover click
    const detailedView = event => {
        const id = event.currentTarget.id;
        history.push(`/details/${id}`);
    }

    const addWishlist = event => {
        const id = event.target.id;
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
                title,
                cover_image,
                country,
                year,
                genre,
                owned
            }
        });
    }

    const addCollection = event => {
        const id = event.target.id;
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
                title,
                cover_image,
                country,
                year,
                genre,
                owned
            }
        });
    }

    return (
        <div>
            <div className='browse-form'>
                <div>
                { !results &&
                    <Typography 
                        component="div" 
                        variant="h3"
                    >
                        What are you looking for?
                    </Typography>
                }
                <br/>
                <Paper
                    component="form"
                    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 500 }}
                >
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search artists, albums and more..."
                    value= {search} 
                    onChange={(evt) => setSearch(evt.target.value)}
                />
                <IconButton type="submit" sx={{ p: '10px' }} aria-label="search" onClick={sendSearch}>
                    <SearchIcon />
                </IconButton>
                </Paper>
            { results &&
                <p> {pagination.items} results </p>
            }
            </div>
            { results && 
            (<div>
                <Box
                    m={1}
                    //margin
                    display="flex"
                    justifyContent="flex-end"
                    alignItems="flex-end"
                    >
                    <ToggleButtonGroup className='toggle-buttons'>
                        <ToggleButton value={display} onClick={toggleDisplay}>
                            <GridViewIcon />
                        </ToggleButton>
                        
                        <ToggleButton value={!display} onClick={toggleDisplay}>
                            <ListIcon />
                        </ToggleButton>                
                    </ToggleButtonGroup>
                </Box>

                { display ?
                <section className="flex-container-grid-browse">
                    {results.map(record => {
                        return (
                            <div className='cards'key={record.id}>
                            <Card sx={{ 
                                maxWidth: 150, 
                                minWidth: 150,  
                                maxHeight: 150, 
                                minHeight: 150 
                            }}>
                                <CardActionArea>
                                <CardMedia
                                    onClick={detailedView}
                                    component="img"
                                    id= {record.id}
                                    image= {record.cover_image}
                                    alt= {record.title}
                                    sx={{ 
                                        maxWidth: 150, 
                                        minWidth: 150,  
                                        maxHeight: 150, 
                                        minHeight:150 
                                    }}
                                /> 
                                </CardActionArea>
                            </Card>
                            <div className='record-title' >{record.title}</div>
                            </div>
                        ) 
                    })}
                </section>
            :
                <section className="flex-container-list-browse">
                    {results.map(record => {
                        return (
                            <div className='cards' key={record.id}>
                                <Card sx={{ 
                                    display: 'flex' ,
                                    maxHeight: 150, 
                                    minHeight:150 
                                }}>
                                <CardMedia
                                    component="img"
                                    sx={{ 
                                        maxWidth: 150, 
                                        minWidth: 150,  
                                        maxHeight: 150, 
                                        minHeight:150 
                                    }}
                                    image={record.cover_image}
                                    alt={record.title}
                                />
                                <CardActionArea id={record.id} onClick={detailedView}>
                                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                        <CardContent sx={{ flex: '1 0 auto' }}>
                                            <Typography component="div" variant="h6">
                                                {record.title}
                                            </Typography>
                                            <Typography variant="text" color="text.secondary" component="div">
                                                {record.year} {record.country}
                                            </Typography>
                                            <Typography variant="text" color="text.secondary" component="div">
                                                {record.genre}
                                            </Typography>
                                        </CardContent>
                                    </Box>
                                </CardActionArea>
                                <Box
                                    m={1}
                                    margin
                                    display="flex"
                                    justifyContent="flex-end"
                                    alignItems="flex-end"
                                >
                                    <Button 
                                        size="small" 
                                        id= {record.id}
                                        title= {record.title}
                                        cover_image= {record.cover_image}
                                        country= {record.country} 
                                        year= {record.year} 
                                        genre= {record.genre} 
                                        owned= "false"
                                        onClick= {addWishlist}
                                    >
                                        +wishlist
                                    </Button>

                                    <Button 
                                        size="small" 
                                        id= {record.id}
                                        title= {record.title}
                                        cover_image= {record.cover_image}
                                        country= {record.country} 
                                        year= {record.year} 
                                        genre= {record.genre} 
                                        owned= "true"
                                        onClick= {addCollection}
                                    >
                                        +collection
                                    </Button>
                                </Box>   
                                </Card>
                            </div>
                        ) 
                    })}
                </section>
                }
                <center>
                    <IconButton >
                        <ArrowBackIosNewIcon />
                    </IconButton>
                    <IconButton >
                        <ArrowForwardIosIcon />
                    </IconButton>
                    <p>Page {pagination.page} out of {pagination.pages}</p>
                </center>
             </div>)
        } 
            </div> 
        </div>
    )
}

export default Browse;
