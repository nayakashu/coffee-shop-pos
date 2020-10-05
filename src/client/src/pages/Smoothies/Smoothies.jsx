import React, { useEffect, useState } from 'react';
import PageLoader from '../../components/common/PageLoader/PageLoader';
import { ProductCard } from '../../components/common/ProductCard/ProductCard';
import { getListing } from '../../services/get-listing';
import useGlobal from '../../store/store';
import './Smoothies.scss';

export const Smoothies = ({ history }) => {
  const [loading, setLoading] = useState(true);
  const [storeState, storeActions] = useGlobal();

  const { cart, smoothies } = storeState;
  const { setList, addToCart } = storeActions;

  useEffect(() => {
    (async () => {
      const response = await getListing('smoothies');

      if (!response) {
        return;
      }

      const {
        data: { list },
        status,
      } = response;

      if (status === 200) {
        setList({ listName: 'smoothies', list });
      }

      setLoading(false);
    })();
  }, [setList]);

  const addCartData = (cartData, cartIndex) => {
    addToCart({ cartData, cartIndex });
    history.push('/addons/smoothie');
  };

  return (
    <div className="smoothies-container fadeInUp">
      {loading ? (
        <PageLoader />
      ) : (
        smoothies.map((smoothie, index) => (
          <ProductCard
            key={index}
            indexValue={cart.length}
            cardImage={smoothie.imageUrl}
            title={smoothie.title}
            description={smoothie.description}
            data={smoothie}
            addHandler={addCartData}
          ></ProductCard>
        ))
      )}
    </div>
  );
};
