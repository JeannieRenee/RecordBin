import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom';

// mui imports
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
//mui toggle
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
// mui icons 
import ListIcon from '@mui/icons-material/List';
import GridViewIcon from '@mui/icons-material/GridView';

function Collection (){
    const dispatch = useDispatch();
    const history = useHistory()
    const records = useSelector(store => store.records);
    const user = useSelector((store) => store.user);


    // on page load, run this
    useEffect(() => {
        dispatch({ type: 'FETCH_RECORDS' });
    }, []);

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
        <>
            <ToggleButtonGroup>
                
                <ToggleButton value={!display} onClick={toggleDisplay}>
                    <ListIcon />
                </ToggleButton>
            
                <ToggleButton value={display} onClick={toggleDisplay}>
                    <GridViewIcon />
                </ToggleButton>
            
            </ToggleButtonGroup>

            <h2>Hey, {user.username}!</h2>
            <h1>Collection</h1>

            { display ?
                <section className="flex-container">
                {records.map(record => {
                    if (record.owned)
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
                                image= {record.cover}
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
            <section className="flex-container">
            {records.map(record => {
                if (record.owned)
                return (
                    <div className='cards'>
                    <Card sx={{ 
                        maxWidth: 600, 
                        minWidth: 600,  
                    }}>
                        <CardActionArea>
                        <CardMedia
                            onClick={detailedView}
                            component="img"
                            image= {record.cover}
                            alt= {record.title}
                            sx={{ 
                                maxWidth: 100, 
                                minWidth: 100,  
                                maxHeight: 100, 
                                minHeight:100 
                            }}
                        /> 
                        </CardActionArea>
                        <p>{record.title}</p>
                        <p>{record.year}</p>
                        <p>{record.genre}</p>
                        <p>{record.style}</p>
                    </Card>
                    </div>
                ) 
            })}
            </section>  
            }
        </>
    )
}
export default Collection;


