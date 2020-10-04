import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import HomeSharpIcon from '@material-ui/icons/HomeSharp';
import React from 'react';
import CoffeeLogo from '../assets/vectors/coffee.svg';
import checkoutStyles from './styles/CheckoutStyles';

function CheckoutLayout({ children, history }) {
  const {
    root,
    appBar,
    title,
    content,
    toolbar,
    appBarHomeIcon,
  } = checkoutStyles();

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
          <IconButton
            className={appBarHomeIcon}
            aria-label="home"
            onClick={() => history.push('/')}
          >
            <HomeSharpIcon />
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
