import * as React from 'react';
import {useHistory} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

// mui
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SearchIcon from '@mui/icons-material/Search';
import LogoutIcon from '@mui/icons-material/Logout';
import InfoIcon from '@mui/icons-material/Info';
import MenuIcon from '@mui/icons-material/Menu';
import ListItemIcon from '@mui/material/ListItemIcon';


const drawerWidth = 230;
const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1, // add this line to create appBar z-index
    paddingLeft: 15,
    paddingRight: 15,

  },
  title: {
    flexGrow: 1, 
    textAlign: "center", 
    alignItems: "center", 
    display: 'flex', 
    justifyContent: "center" 
  },
  menuButton: {
    padding: 0,
    marginRight: 0,
  },
  logo: {
    maxWidth: 150,
    marginRight: 15,
  },
  welcome: {
    margin: 15,
  }  
}));

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const container = window !== undefined ? () => window().document.body : undefined;
  const classes = useStyles();
  const theme = useTheme();

  const user = useSelector((store) => store.user);
  const history = useHistory()
  const dispatch = useDispatch();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
   };
  function collection(){
      history.push(`/collection`);
      setMobileOpen(!mobileOpen);
  }
  function wishlist(){
    history.push(`/wishlist`);
    setMobileOpen(!mobileOpen);
  }
  function browse(){
    history.push(`/browse`);
    setMobileOpen(!mobileOpen);
  }
  function info(){
    history.push(`/about`);
    setMobileOpen(!mobileOpen);
  }
  function logout(){
    history.push(`/home`);
    setMobileOpen(!mobileOpen);
    dispatch({ type: 'LOGOUT' });
  }

  function home(){
    history.push(`/home`);
  }

  const drawer = (
      <>
        <Toolbar /> 
          <Divider />
          <br/>
          <Typography variant="subtitle1" color="text.primary" className={classes.welcome} style={{ fontSize: 20, }}>
            Howdy, {user.username}!
          </Typography>
        <List >
          <div className='sidebar'>
            <ListItem key='Collection' disablePadding onClick={collection}>
              <ListItemButton>
                <ListItemIcon>
                  <LibraryMusicIcon /> 
                </ListItemIcon>
                <ListItemText primary="Collection" />
              </ListItemButton>
            </ListItem>
  
            <ListItem key='Wishlist' disablePadding onClick={wishlist}>
              <ListItemButton>
                <ListItemIcon>
                  <FavoriteIcon /> 
                </ListItemIcon>
                <ListItemText primary="Wishlist" />
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
        </div>
        </List>
        <List style={{ position: "absolute", bottom: "0" }}>
        <div className="sidebar-bottom">
          <Box minWidth={230}>
            <ListItem key='About' disablePadding onClick={info}>
              <ListItemButton>
                <ListItemIcon>
                  <InfoIcon /> 
                </ListItemIcon>
                <ListItemText primary="About" />
              </ListItemButton>
            </ListItem>
  
            <ListItem key='LogOut' disablePadding onClick={logout}>
              <ListItemButton>
                <ListItemIcon>
                  <LogoutIcon style={{ color: '#d67753' }}/> 
                </ListItemIcon>
                <ListItemText primary="LogOut" />
              </ListItemButton>
            </ListItem>
          </Box>
          </div>
        </List>
      </>
    );

  return (
    <>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="absolute"
        className={classes.appBar}        
        sx={{
          width: { sm: `calc(100%)` },
          ml: { sm: `${drawerWidth}px` },
        }}
        style={{ background: '#d67753' }}
      >
          <Toolbar>
            <IconButton
              color="inherit"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
              sx={{ mr: 2}}
            >
              <MenuIcon />
            </IconButton>
            <div className={classes.title}>
              <img src={require('./logo.png')} className={classes.logo} onClick={home}/>
            </div>
          </Toolbar>
      </AppBar>

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
            <>{drawer}</>
        </Drawer> 
        <Drawer
          variant="temporary"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open={mobileOpen}
        >
          {drawer}
        </Drawer>
        
      </Box>

      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100%)` } }}
      >
        <Toolbar />
      </Box>

    </Box>
    </>
  );
}

export default ResponsiveDrawer;