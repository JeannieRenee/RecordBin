import * as React from 'react';
import {useHistory} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';

import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SearchIcon from '@mui/icons-material/Search';

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const user = useSelector((store) => store.user);
  const history = useHistory()
  const dispatch = useDispatch();


  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
   };

  function collection(){
        history.push(`/collection`);
    }

    function wishlist(){
        history.push(`/wishlist`);
    }

    function browse(){
        history.push(`/browse`);
    }

    function about(){
        history.push(`/about`);
    }

    function logout(){
        dispatch({ type: 'LOGOUT' })
    }

    const drawerLoggedIn = (
        <div>
          <Toolbar />
          <img src={require('./logo.png')}/>
          <Divider />
          <List>
              <ListItem key='Collection' disablePadding onClick={collection}>
                <ListItemButton>
                  <ListItemIcon>
                    <LibraryMusicIcon /> 
                  </ListItemIcon>
                  <ListItemText primary="Collection" />
                </ListItemButton>
              </ListItem>
    
              <ListItem key='WantList' disablePadding onClick={wishlist}>
                <ListItemButton>
                  <ListItemIcon>
                    <FavoriteIcon /> 
                  </ListItemIcon>
                  <ListItemText primary="WantList" />
                </ListItemButton>
              </ListItem>
    
              <ListItem key='Browse' disablePadding onClick={browse}>
                <ListItemButton>
                  <ListItemIcon>
                    <SearchIcon /> 
                  </ListItemIcon>
                  <ListItemText primary="Browse" />
                </ListItemButton>
              </ListItem>

          </List>
          <Divider />
          <List>
              <ListItem key='About' disablePadding onClick={about}>
                <ListItemButton>
                  <ListItemIcon>
                    <FavoriteIcon /> 
                  </ListItemIcon>
                  <ListItemText primary="About" />
                </ListItemButton>
              </ListItem>
    
              <ListItem key='LogOut' disablePadding onClick={logout}>
                <ListItemButton>
                  <ListItemIcon>
                    <SearchIcon /> 
                  </ListItemIcon>
                  <ListItemText primary="LogOut" />
                </ListItemButton>
              </ListItem>
          </List>
        </div>
      );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
            <>{drawerLoggedIn}</>
        </Drawer>

        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
            <>{drawerLoggedIn}</>
        </Drawer>
        
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        
      </Box>
    </Box>
    </>
  );
}

export default ResponsiveDrawer;
