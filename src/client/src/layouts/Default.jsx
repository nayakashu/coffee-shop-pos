import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import MenuIcon from '@material-ui/icons/Menu';
import HomeSharpIcon from '@material-ui/icons/HomeSharp';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import CoffeeLogo from '../assets/vectors/coffee.svg';
import Cart from '../components/Cart/Cart';
import useGlobal from '../store/store';
import defaultStyles, { StyledBadge } from './styles/DefaultStyles';

function DefaultLayout({ children, history }) {
  const location = useLocation();
  const {
    root,
    appBar,
    title,
    closeMenuButton,
    toolbar,
    content,
    rightDrawer,
    rightDrawerPaper,
    rightTemporaryDrawerPaper,
    appBarHomeIcon,
    appBarCheckoutIcon,
    appBarLabel,
    menuButton,
    leftDrawer,
    leftDrawerPaper,
    listItemHover,
    activeItem,
    activeLabel,
  } = defaultStyles();

  const [mobileCheckoutOpen, setMobileCheckoutOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuCategories = [
    { value: 'Dripped Coffees', href: '/dripped-coffees' },
    { value: 'Lattes', href: '/lattes' },
    { value: 'Smoothies', href: '/smoothies' },
    { value: 'Home', href: '/' },
  ];

  const [storeState] = useGlobal();
  const { cart } = storeState;

  function handleRightDrawerToggle() {
    if (document?.documentElement?.clientWidth < 840)
      setMobileCheckoutOpen(!mobileCheckoutOpen);
  }

  function handleLeftDrawerToggle() {
    setMobileMenuOpen(!mobileMenuOpen);
  }

  const activeItemClass = (pathValue) => {
    const currentPath = location.pathname;
    if (currentPath.includes(pathValue) && pathValue !== '/') return activeItem;
  };

  const leftDrawerItems = (
    <div>
      <List>
        {menuCategories.map((text, index) => (
          <ListItem
            className={`${listItemHover} ${activeItemClass(text.href)}`}
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
    <div className={root}>
      <CssBaseline />
      <AppBar position="fixed" className={appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            edge="start"
            onClick={handleLeftDrawerToggle}
            className={menuButton}
          >
            <MenuIcon />
          </IconButton>
          <IconButton
            aria-label="Coffee Shop Logo"
            onClick={() => history.push('/')}
            color="inherit"
          >
            <img
              src={CoffeeLogo}
              style={{ height: '50px', width: '50px' }}
              alt="Coffee Shop"
            ></img>
          </IconButton>
          <Typography variant="h6" noWrap className={title}>
            Coffee Shop
          </Typography>
          <div
            className={`${appBarLabel} ${
              location.pathname.includes('dripped') ? activeLabel : ''
            }`}
            onClick={() => history.push('/dripped-coffees')}
          >
            Dripped Coffees
          </div>
          <div
            className={`${appBarLabel} ${
              location.pathname.includes('latte') ? activeLabel : ''
            }`}
            onClick={() => history.push('/lattes')}
          >
            Lattes
          </div>
          <div
            className={`${appBarLabel} ${
              location.pathname.includes('smoothie') ? activeLabel : ''
            }`}
            onClick={() => history.push('/smoothies')}
          >
            Smoothies
          </div>
          <IconButton
            aria-label="home"
            className={appBarHomeIcon}
            onClick={() => history.push('/')}
          >
            <HomeSharpIcon />
          </IconButton>
          <IconButton
            aria-label="cart"
            className={appBarCheckoutIcon}
            onClick={handleRightDrawerToggle}
          >
            <StyledBadge badgeContent={cart.length} color="secondary">
              <ShoppingCartIcon />
            </StyledBadge>
          </IconButton>
        </Toolbar>
      </AppBar>

      <div className={content}>
        <div className={toolbar} />
        {children}
      </div>

      <nav className={leftDrawer}>
        <Drawer
          variant="temporary"
          anchor={'left'}
          open={mobileMenuOpen}
          onClose={handleLeftDrawerToggle}
          classes={{
            paper: leftDrawerPaper,
          }}
          ModalProps={{
            keepMounted: true,
          }}
        >
          <IconButton
            onClick={handleLeftDrawerToggle}
            className={closeMenuButton}
          >
            <CloseIcon />
          </IconButton>
          {leftDrawerItems}
        </Drawer>
      </nav>

      <nav className={rightDrawer}>
        <Drawer
          variant="temporary"
          open={mobileCheckoutOpen}
          className={rightTemporaryDrawerPaper}
          classes={{
            paper: rightDrawerPaper,
          }}
          onClose={handleRightDrawerToggle}
          anchor={'right'}
        >
          <IconButton
            onClick={handleRightDrawerToggle}
            className={closeMenuButton}
          >
            <CloseIcon />
          </IconButton>
          <Cart />
        </Drawer>
        <Drawer
          className={rightDrawer}
          variant="permanent"
          classes={{
            paper: rightDrawerPaper,
          }}
          anchor={'right'}
        >
          <Cart />
        </Drawer>
      </nav>
    </div>
  );
}

export default DefaultLayout;
