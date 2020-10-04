import { Button, Card, Typography } from '@material-ui/core';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import HomeIcon from '@material-ui/icons/Home';
import React from 'react';
import orderConfirmationStyles from './styles/OrderConfirmationStyles';

export const OrderConfirmation = ({ onClickHandler }) => {
  const {
    root,
    orderConfirmationSummary,
    orderConfirmationIcon,
    fadeInDown,
    orderConfirmationTitle,
    orderConfirmationText,
    button,
    homeIcon,
  } = orderConfirmationStyles();

  return (
    <Card className={root}>
      <DoneAllIcon className={`${orderConfirmationIcon} ${fadeInDown}`} />
      <div className={orderConfirmationSummary}>
        <Typography variant="h5" className={orderConfirmationTitle}>
          Woohoo!
        </Typography>
        <Typography variant="h6" className={orderConfirmationTitle}>
          Your order is confirmed.
        </Typography>
        <Typography variant="body1" className={orderConfirmationText}>
          The order number will be displayed in the delivery counter when ready.
        </Typography>
      </div>
      <Button
        variant="contained"
        size="large"
        className={button}
        endIcon={<HomeIcon className={homeIcon} />}
        onClick={onClickHandler}
      />
    </Card>
  );
};
