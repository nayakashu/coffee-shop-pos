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
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import CloseIcon from '@material-ui/icons/Close';
import HomeSharpIcon from '@material-ui/icons/HomeSharp';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import React, { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import CoffeeLogo from '../assets/vectors/coffee.svg';
import Cart from '../components/Cart/Cart';
import useGlobal from '../store/store';
import defaultStyles, { StyledBadge } from './styles/DefaultStyles';

function DefaultLayout({ children, history }) {
  let { id } = useParams();
  const location = useLocation();
  const categories = [
    { value: 'Toppings', href: 'toppings' },
    { value: 'Combos', href: 'combos' },
  ];
  const {
    listRoot,
    active,
    arrowForwardIcon,
    root,
    appBar,
    menuButton,
    title,
    drawer: drawerClass,
    drawerPaper,
    closeMenuButton,
    toolbar,
    content,
    rightDrawer,
    rightDrawerPaper,
  } = defaultStyles();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileCheckoutOpen, setMobileCheckoutOpen] = useState(false);

  const [storeState] = useGlobal();
  const { cart } = storeState;

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }

  function handleRightDrawerToggle() {
    if (document?.documentElement?.clientWidth < 840)
      setMobileCheckoutOpen(!mobileCheckoutOpen);
  }

  function handleCategoryClick(category) {
    history.push(`/customization/${category}/${id}`);
  }

  const drawer = (
    <List className={listRoot}>
      {categories.map((text, index) => (
        <ListItem
          className={location.pathname.includes(text.href) ? active : null}
          button
          onClick={() => handleCategoryClick(text.href)}
          key={index}
        >
          <ListItemText primary={text.value} />
          <IconButton
            className={arrowForwardIcon}
            edge="end"
            aria-label="arrow"
            onClick={() => handleCategoryClick(text.href)}
            disableRipple
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </ListItem>
      ))}
    </List>
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
            onClick={handleDrawerToggle}
            className={menuButton}
          >
            <MenuIcon />
          </IconButton>
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
              alt="Coffee Shop"
            ></img>
          </IconButton>
          <Typography variant="h6" noWrap className={title}>
            Coffee Shop
          </Typography>
          <IconButton aria-label="home" onClick={() => history.push('/')}>
            <HomeSharpIcon />
          </IconButton>
          <IconButton aria-label="cart" onClick={handleRightDrawerToggle}>
            <StyledBadge badgeContent={cart.length} color="secondary">
              <ShoppingCartIcon />
            </StyledBadge>
          </IconButton>
        </Toolbar>
      </AppBar>

      <nav className={drawerClass}>
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            <IconButton
              onClick={handleDrawerToggle}
              className={closeMenuButton}
            >
              <CloseIcon />
            </IconButton>
            {location?.pathname?.includes('/customization') && drawer}
          </Drawer>
        </Hidden>
        <Drawer
          className={drawerClass}
          variant="permanent"
          classes={{
            paper: drawerPaper,
          }}
        >
          <div className={toolbar} />
          {location?.pathname?.includes('/customization') && drawer}
        </Drawer>
      </nav>
      <div className={content}>
        <div className={toolbar} />
        {children}
      </div>
      <nav className={rightDrawer}>
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            open={mobileCheckoutOpen}
            onClose={handleRightDrawerToggle}
            classes={{
              paper: rightDrawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
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
        </Hidden>
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
