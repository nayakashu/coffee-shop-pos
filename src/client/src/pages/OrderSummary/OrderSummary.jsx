import React, { useState } from 'react';
import { OrderConfirmation } from '../../components/OrderConfirmation/OrderConfirmation';
import { OrderDetails } from '../../components/OrderDetails/OrderDetails';
import { PaymentSummary } from '../../components/PaymentSummary/PaymentSummary';
import useGlobal from '../../store/store';
import './OrderSummary.scss';

export const OrderSummary = ({ history }) => {
  const [storeState] = useGlobal();
  const { cart } = storeState;

  const [isPaid, setIsPaid] = useState(false);

  return (
    <div className="order-summary-container">
      <div className="order-details-container">
        {cart.map(({ addons, title, price, imageUrl }, index) => {
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
        })}
      </div>
      <div className="payment-summary-container">
        {!isPaid ? (
          <PaymentSummary onClickHandler={() => setIsPaid(true)} />
        ) : (
          <OrderConfirmation onClickHandler={() => history.push('/')} />
        )}
      </div>
    </div>
  );
};
