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
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

function Browse(){
    const results = useSelector(store => store.browseBasic.results);
    const pagination = useSelector(store => store.browseBasic.pagination);

    const [search, setSearch]= useState('');
    const [searchTerm, setSearchTerm]= useState('');
    const dispatch = useDispatch();
    const history = useHistory();
    const  {id}  = useParams();


    const sendSearch = (evt) => {
        evt.preventDefault();
        setSearchTerm(search);
        dispatch({
            type: "FETCH_BASIC_RESULTS",
            payload: search
        });
        setSearch('');
    }

    // to toggle the view
    const [display, setDisplay] = useState(true);
    const toggleDisplay = () => {
        setDisplay(!display);
    }
 
    // push to detailed page on cover click
    const detailedView = event => {
        const id = event.currentTarget.id;
        console.log('The id is', id);
        dispatch({
            type: "FETCH_DETAILED_RESULTS",
            payload: id
        });
        history.push(`/details/${id}`);
    }

    const addCollection = event => {
        const id = event.target.id;
        const title = event.target.title;
        const cover_image = event.target.cover_image;
        const country = event.target.country;
        const year = event.target.year;
        const genre = event.target.genre;

        console.log('id:', id)
        console.log('title:', title)
        console.log('cover_image:', cover_image)
        console.log('country:', country)
        console.log('year:', year)
        console.log('genre:', genre)
        // dispatch({ 
        //     type: 'UPDATE_RECORDS', 
        //     payload: id 
        // });
    }

    const addWishlist = event => {
        const id = event.target.id;
        const title = event.target.title;
        const cover_image = event.target.cover_image;
        const country = event.target.country;
        const year = event.target.year;
        const genre = event.target.genre;

        console.log('id:', id)
        console.log('title:', title)
        console.log('cover_image:', cover_image)
        console.log('country:', country)
        console.log('year:', year)
        console.log('genre:', genre)
        // dispatch({ 
        //     type: 'UPDATE_RECORDS', 
        //     payload: id 
        // });
    }

    return (
        <div>
            <div className='browse-form'>
                <Typography 
                    component="div" 
                    variant="h4"
                >
                    What are you looking for?
                </Typography>
                    <Paper
                    component="form"
                    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
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
                    { pagination &&
                        <p>
                            {pagination.items} results for {searchTerm}
                        </p>
                    }
            { results && 
            (<div>
                <Box
                    m={1}
                    //margin
                    display="flex"
                    justifyContent="flex-end"
                    alignItems="flex-end"
                    >
                    <ToggleButtonGroup >
                        <ToggleButton value={!display} onClick={toggleDisplay}>
                            <ListIcon />
                        </ToggleButton>

                        <ToggleButton value={display} onClick={toggleDisplay}>
                            <GridViewIcon />
                        </ToggleButton>

                    </ToggleButtonGroup>
                </Box>

                {/* { pagination &&
                <center>
                    <div className='page-nav-buttons'>
                        <IconButton ><ArrowBackIosIcon/>Previous</IconButton>
                        <IconButton onClick={nextPage}>Next<ArrowForwardIosIcon/></IconButton>
                    </div>
                    <p>
                        Page {pagination.page} of {pagination.pages}
                    </p>
                </center>
                } */}

                { !display ?
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
                            <div className='record-title'>{record.title}</div>
                            </div>
                        ) 
                    })}
                </section>
            :
                <section className="flex-container-list-browse">
                    {results.map(record => {
                        return (
                            <div className='cards' key={record.id}>
                                <Card sx={{ display: 'flex' }}>
                                <CardMedia
                                    component="img"
                                    sx={{ width: 150 }}
                                    image={record.cover_image}
                                    alt={record.title}
                                />
                                <CardActionArea id={record.id} onClick={detailedView}>
                                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                        <CardContent sx={{ flex: '1 0 auto' }}>
                                            <Typography component="div" variant="h6">
                                                {record.title}
                                            </Typography>
                                            <Typography variant="subtitle1" color="text.secondary" component="div">
                                                {record.year} {record.country}
                                            </Typography>
                                            <Typography variant="subtitle1" color="text.secondary" component="div">
                                                {record.genre}
                                            </Typography>
                                            <Typography variant="subtitle1" color="text.secondary" component="div">
                                                {record.style}
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
                                        onClick= {addWishlist}
                                    >
                                        +wishlist
                                    </Button>

                                    <Button 
                                        size="small" 
                                        id= {record.id} 
                                        title= {record.title} 
                                        image={record.cover_image}
                                        country= {record.country}
                                        year= {record.year} 
                                        genre= {record.genre} 
                                        onClick={addCollection}
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
             </div>)
        } 
            </div> 
        </div>
    )
}

export default Browse;
