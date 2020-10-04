import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import useGlobal from '../../store/store';
import { CustomAccordion } from '../common/CustomAccordion/CustomAccordion';
import './Cart.scss';
import cartStyles from './styles/CartStyles';

const Cart = ({ history }) => {
  const { emptyCartMessage, button } = cartStyles();

  const [amount, setAmount] = useState(0);

  const [storeState, storeActions] = useGlobal();
  const { cart, activeItemCartIndex } = storeState;
  const { removeFromCart, changeActiveItemIndex } = storeActions;

  useEffect(() => {
    let cost = 0;

    cart.forEach(({ price: itemPrice, addons }) => {
      cost += Number(itemPrice);
      if (Array.isArray(addons) && addons.length) {
        addons.forEach(({ price: addonPrice }) => {
          cost += Number(addonPrice);
        });
      }
    });

    setAmount(Number(cost).toFixed(2));
  }, [cart]);

  const handleDeleteItem = (cartItem, cartIndex) => {
    removeFromCart({ cartIndex });

    if (
      cartIndex === activeItemCartIndex &&
      cartItem.type === 'drippedCoffee'
    ) {
      history.push('/dripped-coffees');
    } else if (cartIndex === activeItemCartIndex && cartItem.type === 'latte') {
      history.push('/lattes');
    } else if (
      cartIndex === activeItemCartIndex &&
      cartItem.type === 'smoothie'
    ) {
      history.push('/smoothies');
    }
  };

  const handleCustomizeItem = (cartItem, cartIndex) => {
    changeActiveItemIndex({ cartIndex });
    history.push(`/addons/${cartItem.type}`);
  };

  return (
    <div className="cart-container">
      <div className="toolbar"></div>
      <div className="cart-content-wrapper">
        {cart.length === 0 && (
          <Typography variant="h6" className={emptyCartMessage}>
            Nothing in cart yet!
          </Typography>
        )}
        {cart.map((cartItem, index) => (
          <CustomAccordion
            key={index}
            cartIndex={index}
            cartItem={cartItem}
            deleteHandler={handleDeleteItem}
            customizeHandler={handleCustomizeItem}
          />
        ))}
      </div>
      <div className="checkout-btn-container">
        <div className="amount-wrapper">{`$ ${amount}`}</div>
        <Button
          variant="contained"
          size="large"
          className={button}
          endIcon={<ShoppingCartIcon />}
          onClick={() => history.push('/order-summary')}
        >
          <Typography variant="body1">Checkout</Typography>
        </Button>
      </div>
    </div>
  );
};

export default withRouter(Cart);
