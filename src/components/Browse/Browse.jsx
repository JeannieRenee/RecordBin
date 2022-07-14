import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import BarcodeScannerComponent from "react-qr-barcode-scanner";

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
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
// mui icons 
import ListIcon from '@mui/icons-material/List';
import GridViewIcon from '@mui/icons-material/GridView';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CropFreeIcon from '@mui/icons-material/CropFree';

function Browse(){
    // store imports
    const results = useSelector(store => store.browseBasic.results);
    const pagination = useSelector(store => store.browseBasic.pagination);
    // function imports
    const dispatch = useDispatch();
    const history = useHistory();

    //local states
    // to toggle the view
    const [display, setDisplay] = useState(false);
    // to set search term
    const [search, setSearch]= useState('');
    // to toggle the camera mode
    const [scanner, setScanner]= useState(false);

    //send search term to api
    const sendSearch = (evt) => {
        evt.preventDefault();
        dispatch({
            type: "FETCH_BASIC_RESULTS",
            payload: search
        });
    }

    // push to detailed page on cover click
    const detailedView = event => {
        const id = event.currentTarget.id;
        history.push(`/details/${id}`);
    }

    // get next or previous page data on button clicks
    const nextPage = event => {
        const url = event.currentTarget.getAttribute('url');
        dispatch({ 
            type: 'NEXT_PAGE', 
            payload: url
        });
    }

    // close the barcode scanner upon barcode capture 
    if(search !== '' && scanner == true){
        setScanner(false);
    }

    // placeholders 
    const [index, setIndex] = useState(0);
    // const placeholderText = ["Search artist", "Search album", "Scan Barcode"]
    // const placeholderText = ["Search", "Search by", "Search by Artist","Search", "Search by", "Search by Album","Scan","Scan the","Scan the Barcode"]
    const placeholderText = ["Search by Artist", "Search by Album", "Scan Barcode"]


    useEffect(() => {
      const timer = () => {
        setIndex(prevIndex => {
          if(prevIndex === placeholderText.length - 1){
            return 0;
          } 
          return prevIndex + 1;
        })
      };
      setInterval(timer, 1000);
      
      //cleanup function in order clear the interval timer
      //when the component unmounts
      return () => { clearInterval(timer); };

    }, []);

    return (
        <div>
            <div>
                { !results &&
                    <div className='search-primary'>
                        <Typography 
                            component="div" 
                            variant="h4"
                            style={{ fontSize: 30, }}
                        >
                            What are you looking for?
                        </Typography>
                        <br/>
                        <Paper
                            noValidate
                            component="form"
                            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '75%', maxWidth: 600}}
                        >
                        <InputBase
                            sx={{ ml: 1, flex: 1}}
                            placeholder={placeholderText[index]}
                            value= {search} 
                            onChange={(evt) => setSearch(evt.target.value)}
                        />
                        <IconButton sx={{ p: '10px' }} onClick={() => setScanner(!scanner)}>
                            <CropFreeIcon />
                        </IconButton>
                        <IconButton type="submit" sx={{ p: '10px' }} aria-label="search" onClick={sendSearch}>
                            <SearchIcon />
                        </IconButton>
                        </Paper>
                        <br/>
                        { scanner &&
                            <BarcodeScannerComponent
                                width={300}
                                height={300}
                                onUpdate={(err, result) => {
                                    if (result) setSearch(result.text);
                                }}
                            />
                        }
                        <br/>
                    </div>

                }
                { results &&
                <>
                    <div className='search-secondary'>
                        <div className='search-secondary-top'>
                            <Paper
                                component="form"
                                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '70%' }}
                            >
                                <InputBase
                                    sx={{ ml: 1, flex: 1 }}
                                    value= {search} 
                                    onChange={(evt) => setSearch(evt.target.value)}
                                />
                                <IconButton sx={{ p: '10px' }} onClick={() => setScanner(!scanner)}>
                                    <CropFreeIcon />
                                </IconButton>
                                <IconButton type="submit" sx={{ p: '10px' }} aria-label="search" onClick={sendSearch}>
                                    <SearchIcon />
                                </IconButton>
                            </Paper>
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
                        { pagination.items === 1 || results.length === 1 ?
                            <div className='pagination-items'>
                                <p> {pagination.items} result </p>
                            </div>
                        :
                            <div className='pagination-items'>
                                <p> {pagination.items} results </p>
                            </div>
                        }
                        <center>
                            { scanner &&
                                <BarcodeScannerComponent
                                    width={300}
                                    height={300}
                                    onUpdate={(err, result) => {
                                        if (result) setSearch(result.text);
                                    }}
                                />
                            }
                        </center>
                    </div>
                </>
                }
            </div>
            <div className='browse-results'>
                { results && 
                (<div>
                    { display ?
                    <section className="flex-container-grid">
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
                    <section className="flex-container-list">
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
                                                <Typography component="div" variant="subtitle1" color="text.primary" className='results-record-title'>
                                                    {record.title}
                                                </Typography>
                                                <Typography variant="text" color="text.secondary" component="div" className='results-record-year-country'>
                                                    {record.year} {record.country}
                                                </Typography>
                                                <Typography variant="text" color="text.secondary" component="div" className='results-record-genre'>
                                                    {record.genre}
                                                </Typography>
                                            </CardContent>
                                        </Box>
                                    </CardActionArea>  
                                    </Card>
                                </div>
                            ) 
                        })}
                    </section>
                    }
                    { pagination.page  === 1 && pagination.pages ===1 &&
                    <center className='pagination-nav'>
                        <p>Page {pagination.page} of {pagination.pages}</p>
                    </center>
                    }
                    { pagination.page === 1 && pagination.pages > 1 &&
                    <center className='pagination-nav'>
                        <IconButton url={pagination.urls.next} onClick={nextPage}>
                            <ArrowForwardIosIcon style={{ color: '#d67753' }} />
                        </IconButton>
                        <p>Page {pagination.page} of {pagination.pages}</p>
                    </center>
                    }
                    { pagination.page < pagination.pages && pagination.page > 1 &&
                    <center className='pagination-nav'>
                        <IconButton url={pagination.urls.prev} onClick={nextPage}>
                            <ArrowBackIosNewIcon style={{ color: '#d67753' }}/>
                        </IconButton>
                        <IconButton url={pagination.urls.next} onClick={nextPage}>
                            <ArrowForwardIosIcon style={{ color: '#d67753' }} />
                        </IconButton>
                        <p>Page {pagination.page} of {pagination.pages}</p>
                    </center>
                    }
                    { pagination.page === pagination.pages && pagination.page != 1 &&
                    <center className='pagination-nav'>
                        <IconButton url={pagination.urls.prev} onClick={nextPage}>
                            <ArrowBackIosNewIcon style={{ color: '#d67753' }}/>
                        </IconButton>
                        <p>Page {pagination.page} of {pagination.pages}</p>
                    </center>
                    }
                </div>)
                } 
            </div> 
        </div>
    )
}

export default Browse;
