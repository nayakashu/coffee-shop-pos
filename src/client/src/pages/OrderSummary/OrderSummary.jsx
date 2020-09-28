import React from 'react';
import CoffeeCardImage from '../../assets/images/coffee-card.jpg';
import ShakesCardImage from '../../assets/images/shakes-card.jpg';
import { OrderDetails } from '../../components/OrderDetails/OrderDetails';
import useGlobal from '../../store/store';

export const OrderSummary = () => {
  const [storeState] = useGlobal();
  const { cart } = storeState;

  return (
    <div className="order-summary-container">
      {cart.map(({ addOns, type, title, price }, index) => {
        const addOnNames = [];
        let addOnTotalPrice = 0;

        if (Array.isArray(addOns) && addOns.length) {
          addOns.map((addOn) => {
            addOnNames.push(addOn.name);
            addOnTotalPrice += Number(addOn.price);

            return addOn;
          });
        }

        return (
          <OrderDetails
            key={index}
            cardImage={
              (type === 'coffee' && CoffeeCardImage) ||
              (type === 'shake' && ShakesCardImage)
            }
            title={title}
            productName={title}
            price={Number(price) + Number(addOnTotalPrice)}
            addOns={addOnNames}
          />
        );
      })}
    </div>
  );
};
