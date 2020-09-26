import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import useGlobal from '../../store/store';
import { CustomAccordion } from '../common/CustomAccordion/CustomAccordion';
import './Cart.scss';
import cartStyles from './styles/CartStyles';

const Cart = ({ history }) => {
  const { button } = cartStyles();
  const [totalPrice, settotalPrice] = useState(0);

  const [storeState, storeActions] = useGlobal();
  const { cart, activeItemCartIndex } = storeState;
  const { removeFromCart } = storeActions;

  useEffect(() => {
    let price = 0;
    cart.forEach((item) => {
      price = price + item.price;
      if (item.extras) {
        item.extras.forEach((extraItem) => {
          price = price + extraItem.price;
        });
      }
    });
    settotalPrice(price);
  }, [cart]);

  const deleteHandler = (cartItem, cartIndex) => {
    removeFromCart({ cartIndex });
    if (cartIndex === activeItemCartIndex && cartItem.type === 'coffee')
      history.push('/coffee');
    else if (cartIndex === activeItemCartIndex && cartItem.type === 'shake')
      history.push('/shakes');
  };

  return (
    <div className="cart-container">
      <div className="toolbar"></div>
      <div className="cart-title">Checkout Items: </div>
      <div className="cart-content-wrapper">
        {cart.length === 0 && (
          <h4 style={{ textAlign: 'center' }}>No items in cart</h4>
        )}
        {cart.map((cartItem, index) => (
          <CustomAccordion
            key={index}
            cartIndex={index}
            cartItem={cartItem}
            deleteHandler={(cartItem, cartIndex) =>
              deleteHandler(cartItem, cartIndex)
            }
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

export default withRouter(Cart);
