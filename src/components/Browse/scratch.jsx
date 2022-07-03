function scratch () {

    return (
        <>
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
                { display ?
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
                <section className="flex-container-list">
                    {records.map(record => {
                        if (record.owned === false)
                        return (
                            <div className='cards'>
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
                                    <Typography component="div" variant="h5">
                                        {record.title}
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary" component="div">
                                    {record.year}
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

                                </Card>
                            </div>
                        ) 
                    })}
                </section>
                }
             </div>)
        }      
        </>    
    )
}