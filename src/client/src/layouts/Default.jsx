import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import MenuIcon from '@material-ui/icons/Menu';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CoffeeLogo from '../assets/vectors/coffee.svg';
import defaultStyles from './styles/default-styles';

function DefaultLayout({ children }) {
  const categories = [
    { value: 'Coffee', href: '/coffee' },
    { value: 'Shakes', href: '/shakes' },
  ];
  const classes = defaultStyles();
  const [mobileOpen, setMobileOpen] = useState(false);

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }

  const drawer = (
    <div>
      <List>
        {categories.map((text, index) => (
          <ListItem
            className={classes.listItemHover}
            style={{ color: 'black' }}
            component={Link}
            to={text.href}
            key={index}
          >
            <ListItemText primary={text.value} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap className={classes.title}>
            Coffee Shop
          </Typography>
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={() => {}}
            color="inherit"
          >
            <img
              src={CoffeeLogo}
              style={{ height: '50px', width: '50px' }}
              alt="Starbucks"
            ></img>
          </IconButton>
        </Toolbar>
      </AppBar>

      <nav className={classes.drawer}>
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            <IconButton
              onClick={handleDrawerToggle}
              className={classes.closeMenuButton}
            >
              <CloseIcon />
            </IconButton>
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.toolbar} />
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <div className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </div>
    </div>
  );
}

export default DefaultLayout;