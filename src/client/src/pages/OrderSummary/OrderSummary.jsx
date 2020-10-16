import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import { useLocation } from 'react-router-dom';
import { OrderConfirmation } from '../../components/OrderConfirmation/OrderConfirmation';
import { OrderDetails } from '../../components/OrderDetails/OrderDetails';
import { PaymentSummary } from '../../components/PaymentSummary/PaymentSummary';
import useGlobal from '../../store/store';
import './OrderSummary.scss';

export const OrderSummary = ({ history }) => {
  const location = useLocation();
  const [storeState, storeActions] = useGlobal();
  const { cart } = storeState;
  const { emptyCart } = storeActions;

  const [isPaid, setIsPaid] = useState(false);
  const [orderDetails, setOrderDetails] = useState([]);

  useEffect(() => {
    if (cart.length) setOrderDetails(cart);
  }, [cart]);

  useEffect(() => {
    if (!isPaid) return;
    function disableBackButton() {
      history.push(location.pathname);
    }
    disableBackButton();
    window.addEventListener('popstate', disableBackButton);

    return () => window.removeEventListener('popstate', disableBackButton);
  }, [isPaid, history, location.pathname]);

  const handlePaymentClick = () => {
    setIsPaid(true);
    emptyCart();
  };

  return (
    <div className="order-summary-container">
      <div className="order-details-container">
        {orderDetails.length > 0 ? (
          orderDetails.map(({ addons, title, price, imageUrl }, index) => {
            const addOnNames = [];
            let addOnTotalPrice = 0;

            if (Array.isArray(addons) && addons.length) {
              addons.map((addOn) => {
                addOnNames.push(addOn.name);
                addOnTotalPrice += Number(addOn.price);

                return addOn;
              });
            }

            return (
              <OrderDetails
                key={index}
                cardImage={imageUrl}
                title={title}
                productName={title}
                price={Number(price) + Number(addOnTotalPrice)}
                addons={addOnNames}
              />
            );
          })
        ) : (
          <Typography variant="h6" className="empty-cart-message">
            Nothing in cart yet!
          </Typography>
        )}
      </div>
      <div className="payment-summary-container">
        {!isPaid ? (
          <PaymentSummary onClickHandler={handlePaymentClick} />
        ) : (
          <OrderConfirmation onClickHandler={() => history.push('/')} />
        )}
      </div>
    </div>
  );
};
