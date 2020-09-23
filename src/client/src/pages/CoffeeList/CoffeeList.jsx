import React, { useEffect, useState } from 'react';
import CoffeeCardImage from '../../assets/images/coffee-card.jpg';
import PageLoader from '../../components/common/PageLoader/PageLoader';
import { ProductCard } from '../../components/common/ProductCard/ProductCard';
import { getListing } from '../../services/get-listing';
import useGlobal from '../../store/store';
import './CoffeeList.scss';

export const CoffeeList = () => {
  const [loading, setLoading] = useState(true);
  const [storeState, storeActions] = useGlobal();

  const { coffeeList } = storeState;
  const { setList, addToCart } = storeActions;

  useEffect(() => {
    (async () => {
      const response = await getListing('coffee');

      if (!response) {
        return;
      }

      const {
        data: { list },
        status,
      } = response;

      if (status === 200) {
        setList({ listName: 'coffeeList', list });
      }

      setLoading(false);
    })();
  }, [setList]);

  const addCartData = (cartData) => {
    addToCart({ cartData });
  };

  return (
    <>
      {loading && <PageLoader />}
      <div className="coffee-container">
        {coffeeList.map((coffee, index) => (
          <ProductCard
            key={index}
            cardImage={CoffeeCardImage}
            title={coffee.title}
            description={coffee.description}
            data={coffee}
            addHandler={addCartData}
          ></ProductCard>
        ))}
      </div>
    </>
  );
};
