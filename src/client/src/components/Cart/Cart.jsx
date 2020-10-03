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

  const handleCustomizeItem = (cartIndex) => {
    changeActiveItemIndex({ cartIndex });
    history.push('/addons');
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
            deleteHandler={handleDeleteItem}
            customizeHandler={handleCustomizeItem}
          />
        ))}
      </div>
      <div className="checkout-button">
        <div className="price-wrapper">{`Amount: $ ${amount}`}</div>
        <Button
          variant="contained"
          size="large"
          className={button}
          endIcon={<ShoppingCartIcon />}
          onClick={() => history.push('/order-summary')}
        >
          Checkout
        </Button>
      </div>
    </div>
  );
};

export default withRouter(Cart);
