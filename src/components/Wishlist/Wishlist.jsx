import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

// mui imports
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

//mui toggle
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
// mui icons 
import ListIcon from '@mui/icons-material/List';
import GridViewIcon from '@mui/icons-material/GridView';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import IconButton from '@mui/material/IconButton';
import Snackbar from '@mui/material/Snackbar';
import CloseIcon from '@mui/icons-material/Close';


function Wishlist (){
    const dispatch = useDispatch();
    const history = useHistory()
    const records = useSelector(store => store.records);

    // on page load, run this
    useEffect(() => {
        dispatch({ type: 'FETCH_RECORDS' });
    }, []);

    // to toggle the view
    const [display, setDisplay] = useState(false);

    // push to detailed page on cover click
    const detailedView = event => {
        const id = event.currentTarget.id;
        console.log('The id is',id);
        dispatch({
            type: "FETCH_DETAILED_RESULTS",
            payload: id
        });
        history.push(`/details/${id}`);
    }

    const addCollection = event => {
        const id = event.currentTarget.id;
        console.log('id', id)
        dispatch({ 
            type: 'UPDATE_RECORDS', 
            payload: id 
        });
        setOpenCollection(true);
    }

        // snackbar stuff :) 
        const [openCollection, setOpenCollection] = React.useState(false);
    
        const handleClose = (event, reason) => {
          if (reason === 'clickaway') {
            return;
          }
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
        <div className='wishlist-container'>
            <Typography component="div" variant="h4" color="text.secondary" style={{ fontWeight: 600 }}>
                Wishlist
            </Typography>
            { display ? 
                <ToggleButtonGroup className='toggle-buttons'>
                    <ToggleButton value={display} onClick={() => setDisplay(true)} 
                        style={{
                            backgroundColor: "#f5f5f5",
                        }}
                    >
                        <GridViewIcon style={{ color: '#d67753' }}/>
                    </ToggleButton>
                    
                    <ToggleButton value={!display} onClick={() => setDisplay(false)}>
                        <ListIcon />
                    </ToggleButton>                
                </ToggleButtonGroup>                        
            :
                <ToggleButtonGroup className='toggle-buttons'>
                    <ToggleButton value={display} onClick={() => setDisplay(true)}>
                        <GridViewIcon />
                    </ToggleButton>
                    
                    <ToggleButton value={!display} onClick={() => setDisplay(false)}
                        style={{
                            backgroundColor: "#f5f5f5",
                        }}
                    >
                        <ListIcon style={{ color: '#d67753' }}/>
                    </ToggleButton>                
                </ToggleButtonGroup>
            }
        </div>
            { display ?
                <section className="flex-container-grid">
                {records.map(record => {
                    if (record.owned === false)
                    return (
                        <div className='cards' key={record.id}>
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
                                    id= {record.record_id}
                                    image= {record.cover}
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
                            <div className='record-title'>{record.artist} - {record.title}</div>
                            </div>
                    ) 
                })}
                </section>
            :
            <section className="flex-container-list">
            {records.map(record => {
                if (record.owned === false)
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
                            image={record.cover}
                            alt={record.title}
                        />
                        <CardActionArea id={record.record_id} onClick={detailedView}>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                                <Typography component="div" variant="subtitle1" color="text.primary" className='artist'>
                                    {record.artist}
                                </Typography>
                                <Typography component="div" variant="subtitle1" color="text.primary" className='artist'>
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
                        </Card>
                        <Box sx={{ '& > :not(style)': { m: 1 } }}>
                        <Button 
                            onClick={addCollection} 
                            id= {record.id}
                            variant="contained" 
                            style={{ backgroundColor: '#d67753' }}
                            startIcon={<LibraryMusicIcon />}
                        
                        >
                            move to collection
                        </Button>
                        </Box>

                        <Snackbar
                            open={openCollection}
                            autoHideDuration={3000}
                            onClose={handleClose}
                            message="Record moved to Collection"
                            action={action}
                        />
                    </div>
                ) 
            })}
            </section>   
            }
        </>
    )
}

export default Wishlist;


