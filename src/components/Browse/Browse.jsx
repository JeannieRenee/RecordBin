import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


// mui imports
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function Browse(){
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
        history.push(`/results`);
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
            </div> 
        </div>
    )
}

export default Browse;
