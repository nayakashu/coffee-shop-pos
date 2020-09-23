import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import React, { useEffect, useState } from 'react';
import useGlobal from '../../store/store';
import { CustomAccordion } from '../common/CustomAccordion/CustomAccordion';
import './Cart.scss';
import cartStyles from './styles/CartStyles';

export const Cart = () => {
  const { button } = cartStyles();

  const [totalPrice, settotalPrice] = useState(0);

  const [storeState, storeActions] = useGlobal();
  const { cart } = storeState;
  const { removeFromCart } = storeActions;

  useEffect(() => {
    let price = 0;
    cart.forEach((value) => {
      price = price + value.price;
    });
    settotalPrice(price);
  }, [cart]);

  const deleteHandler = (cartIndex) => {
    removeFromCart({ cartIndex });
  };

  return (
    <div className="cart-container">
      <div className="toolbar"></div>
      <div className="cart-title">Checkout Items: </div>
      <div className="cart-content-wrapper">
        {cart.length === 0 && (
          <h4 style={{ textAlign: 'center' }}>No items in cart</h4>
        )}
        {cart.map((cartValue, index) => (
          <CustomAccordion
            key={index}
            cartIndex={index}
            cartValue={cartValue}
            deleteHandler={(index) => deleteHandler(index)}
          />
        ))}
      </div>
      <div className="checkout-button">
        <div className="price-wrapper">{`Total Cost = CAD ${totalPrice}`}</div>
        <Button
          variant="contained"
          size="large"
          className={button}
          endIcon={<ShoppingCartIcon />}
        >
          Checkout
        </Button>
      </div>
    </div>
  );
};
