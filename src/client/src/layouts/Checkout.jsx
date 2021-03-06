import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import HomeIcon from '@material-ui/icons/Home';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import React from 'react';
import useGlobal from '../store/store';
import CoffeeLogo from '../assets/vectors/coffee.svg';
import checkoutStyles from './styles/CheckoutStyles';

function CheckoutLayout({ children, history }) {
  const {
    root,
    appBar,
    title,
    content,
    toolbar,
    appBarIcon,
  } = checkoutStyles();

  const [storeState] = useGlobal();
  const { cart } = storeState;

  return (
    <div className={root}>
      <CssBaseline />
      <AppBar position="fixed" className={appBar}>
        <Toolbar>
          <IconButton
            aria-label="Coffee Shop Logo"
            color="inherit"
            onClick={() => history.push('/')}
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
          {cart.length ? (
            <IconButton
              className={appBarIcon}
              aria-label="back"
              onClick={() => history.goBack()}
            >
              <KeyboardBackspaceIcon />
            </IconButton>
          ) : (
            ''
          )}
          <IconButton
            className={appBarIcon}
            aria-label="home"
            onClick={() => history.push('/')}
          >
            <HomeIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <div className={content}>
        <div className={toolbar} />
        {children}
      </div>
    </div>
  );
}

export default CheckoutLayout;
