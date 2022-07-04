import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

// mui imports
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
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
    const  {id}  = useParams();

    // on page load, run this
    useEffect(() => {
        dispatch({ type: 'FETCH_RECORDS' });
    }, []);

    // to toggle the view
    const [display, setDisplay] = useState(true);
    const toggleDisplay = () => {
        setDisplay(!display);
    }

    // push to detailed page on cover click
    const detailedView = (evt) => {
        evt.preventDefault();
        dispatch({
            type: "FETCH_DETAILED_RESULTS",
            payload: id
        });
        history.push(`/details/${id}`);
    }
    

    return (
        <>
        <div className='collection-container'>
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
            { !display ?
                <section className="flex-container-grid">
                {records.map(record => {
                    if (record.owned)
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
                        <div className='record-title'>{record.title}</div>
                        </div>
                    ) 
                })}
                </section>
            :
            <section className="flex-container-list">
            {records.map(record => {
                if (record.owned)
                return (
                    <div className='cards' key={record.id}>
                        <Card sx={{ display: 'flex' }}>
                        <CardMedia
                            component="img"
                            sx={{ width: 150 }}
                            image={record.cover}
                            alt={record.title}
                        />
                        <CardActionArea onClick={detailedView}>
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
                        </CardActionArea >
                        </Card>
                    </div>
                ) 
            })}
            </section>  
            }
        </div>
        </>
    )
}
export default Collection;


