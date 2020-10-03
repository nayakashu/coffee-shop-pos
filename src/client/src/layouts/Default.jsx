import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import HomeSharpIcon from '@material-ui/icons/HomeSharp';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import React, { useState } from 'react';
import CoffeeLogo from '../assets/vectors/coffee.svg';
import Cart from '../components/Cart/Cart';
import useGlobal from '../store/store';
import defaultStyles, { StyledBadge } from './styles/DefaultStyles';

function DefaultLayout({ children, history }) {
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
    appBarIcon,
    appBarLabel,
  } = defaultStyles();

  const [mobileCheckoutOpen, setMobileCheckoutOpen] = useState(false);

  const [storeState] = useGlobal();
  const { cart } = storeState;

  function handleRightDrawerToggle() {
    if (document?.documentElement?.clientWidth < 840)
      setMobileCheckoutOpen(!mobileCheckoutOpen);
  }

  return (
    <div className={root}>
      <CssBaseline />
      <AppBar position="fixed" className={appBar}>
        <Toolbar>
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
            className={appBarLabel}
            onClick={() => history.push('/dripped-coffees')}
          >
            Dripped Coffees
          </div>
          <div className={appBarLabel} onClick={() => history.push('/lattes')}>
            Lattes
          </div>
          <div
            className={appBarLabel}
            onClick={() => history.push('/smoothies')}
          >
            Smoothies
          </div>
          <IconButton
            aria-label="home"
            className={appBarIcon}
            onClick={() => history.push('/')}
          >
            <HomeSharpIcon />
          </IconButton>
          <IconButton
            aria-label="cart"
            className={appBarIcon}
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
