import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

// mui imports
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
//mui toggle
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
// mui icons 
import ListIcon from '@mui/icons-material/List';
import GridViewIcon from '@mui/icons-material/GridView';

function Browse(){
    const results = useSelector(store => store.browseBasic.results);
    const [search, setSearch]= useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const sendSearch = (evt) => {
        evt.preventDefault();
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
        console.log(display)
    }
 
    // push to detailed page on cover click
    function detailedView(){
        history.push(`/details`);
    }

    return (
        <div>
            <div>
                <Typography 
                    component="div" 
                    variant="h4"
                >
                    What are you looking for?
                </Typography>

                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '50ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField 
                        id="outlined-basic" 
                        label="Artist, Album, Genres, Year, Barcode..." 
                        variant="outlined" 
                        value= {search} 
                        onChange={(evt) => setSearch(evt.target.value)}
                    />
                    <Button onClick={sendSearch} variant="contained">search</Button>
                </Box>

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
    
                { results ?
                <section className="flex-container-grid">
                {results.map(record => {
                    return (
                        <div className='cards'>
                        <Card sx={{ 
                            maxWidth: 200, 
                            minWidth: 200,  
                            maxHeight: 200, 
                            minHeight: 200 
                        }}>
                            <CardActionArea>
                            <CardMedia
                                onClick={detailedView}
                                component="img"
                                image= {record.cover_image}
                                alt= {record.title}
                                sx={{ 
                                    maxWidth: 200, 
                                    minWidth: 200,  
                                    maxHeight: 200, 
                                    minHeight:200 
                                }}
                            /> 
                            </CardActionArea>
                        </Card>
                        </div>
                    ) 
                })}
                </section>
                :
                <p>searh something loser</p>
            }
            </div> 
        </div>
    )
}

export default Browse;
