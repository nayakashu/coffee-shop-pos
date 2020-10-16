import { Button } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import PaymentIcon from '@material-ui/icons/Payment';
import React from 'react';
import useGlobal from '../../store/store';
import paymentSummaryStyles from './styles/PaymentSummaryStyles';

export const PaymentSummary = ({ onClickHandler }) => {
  const {
    root,
    paymentSummaryTitle,
    paymentSummary,
    paymentSummaryRow,
    paymentTotalRow,
    emphasized,
    button,
    paymentIcon,
  } = paymentSummaryStyles();

  const [storeState] = useGlobal();
  const { cart } = storeState;

  const totalPrice = cart.reduce((cost, { price, addons }) => {
    if (Array.isArray(addons) && addons.length) {
      return (
        Number(cost) +
        Number(price) +
        Number(
          addons.reduce(
            (addonsCost, { price }) => Number(addonsCost) + Number(price),
            0
          )
        )
      );
    } else {
      return Number(cost) + Number(price);
    }
  }, 0);

  const subTotal = Number(totalPrice).toFixed(2);
  const serviceFee = Number(totalPrice * 0.1).toFixed(2);
  const taxes = Number(totalPrice * 0.25).toFixed(2);
  const total = Number(
    Number(subTotal) + Number(serviceFee) + Number(taxes)
  ).toFixed(2);

  return (
    <Card className={root}>
      <Typography className={paymentSummaryTitle} variant="h5">
        Payment Summary
      </Typography>
      <div className={paymentSummary}>
        <div className={paymentSummaryRow}>
          <Typography variant="body1">Subtotal</Typography>
          <Typography variant="body1">{`$ ${subTotal}`}</Typography>
        </div>
        <div className={paymentSummaryRow}>
          <Typography variant="body1">Service Fee</Typography>
          <Typography variant="body1">{`$ ${serviceFee}`}</Typography>
        </div>
        <div className={paymentSummaryRow}>
          <Typography variant="body1">Taxes</Typography>
          <Typography variant="body1">{`$ ${taxes}`}</Typography>
        </div>
        <div className={paymentTotalRow}>
          <Typography className={emphasized} variant="h6">
            Total
          </Typography>
          <Typography
            className={emphasized}
            variant="h6"
          >{`$ ${total}`}</Typography>
        </div>
      </div>
      <Button
        variant="contained"
        size="large"
        className={button}
        disabled={cart.length === 0}
        endIcon={<PaymentIcon className={paymentIcon} />}
        onClick={onClickHandler}
      />
    </Card>
  );
};
