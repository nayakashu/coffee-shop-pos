import React, { useEffect, useState } from 'react';
import CoffeeCardImage from '../../assets/images/coffee-card.jpg';
import PageLoader from '../../components/common/PageLoader/PageLoader';
import { ProductCard } from '../../components/common/ProductCard/ProductCard';
import { getListing } from '../../services/get-listing';
import useGlobal from '../../store/store';
import './DrippedCoffees.scss';

export const DrippedCoffees = ({ history }) => {
  const [loading, setLoading] = useState(true);
  const [storeState, storeActions] = useGlobal();

  const { cart, drippedCoffees } = storeState;
  const { setList, addToCart } = storeActions;

  useEffect(() => {
    (async () => {
      const response = await getListing('dripped-coffees');

      if (!response) {
        return;
      }

      const {
        data: { list },
        status,
      } = response;

      if (status === 200) {
        setList({ listName: 'drippedCoffees', list });
      }

      setLoading(false);
    })();
  }, [setList]);

  const addCartData = (cartData, cartIndex) => {
    addToCart({ cartData, cartIndex });
    history.push('/addons/drippedCoffee');
  };

  return (
    <div className="dripped-coffees-container">
      {loading ? (
        <PageLoader />
      ) : (
        drippedCoffees.map((drippedCoffee, index) => (
          <ProductCard
            key={index}
            indexValue={cart.length}
            cardImage={CoffeeCardImage}
            title={drippedCoffee.title}
            description={drippedCoffee.description}
            data={drippedCoffee}
            addHandler={addCartData}
          ></ProductCard>
        ))
      )}
    </div>
  );
};
