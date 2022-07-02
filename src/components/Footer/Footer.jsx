import * as React from 'react';
import {useHistory} from 'react-router-dom';
import { useSelector } from 'react-redux';


import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';

import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SearchIcon from '@mui/icons-material/Search';

export default function Footer() {
  const [value, setValue] = React.useState(0);
  const user = useSelector((store) => store.user);

  const history = useHistory()

  function collection(){
      history.push(`/collection`);
  }

  function wishlist(){
    history.push(`/wishlist`);
  }

  function browse(){
    history.push(`/browse`);
  }
  return (
    <>
    {user.id && (
      <Box sx={{ width: 500 }}>
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            <BottomNavigationAction label="Collection" icon={<LibraryMusicIcon />} onClick={collection}/>
            <BottomNavigationAction label="Wishlist" icon={<FavoriteIcon />} onClick={wishlist}/>
            <BottomNavigationAction label="Browse" icon={<SearchIcon />} onClick={browse}/>
          </BottomNavigation>
        </Paper>
      </Box>
    )}
    </>
  );
}