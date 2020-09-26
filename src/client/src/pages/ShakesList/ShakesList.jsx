import React, { useEffect, useState } from 'react';
import ShakesCardImage from '../../assets/images/shakes-card.jpg';
import PageLoader from '../../components/common/PageLoader/PageLoader';
import { ProductCard } from '../../components/common/ProductCard/ProductCard';
import { getListing } from '../../services/get-listing';
import useGlobal from '../../store/store';
import './ShakesList.scss';

export const ShakesList = ({ history }) => {
  const [loading, setLoading] = useState(true);
  const [storeState, storeActions] = useGlobal();

  const { cart, shakesList } = storeState;
  const { setList, addToCart } = storeActions;

  useEffect(() => {
    (async () => {
      const response = await getListing('shakes');

      if (!response) {
        return;
      }

      const {
        data: { list },
        status,
      } = response;

      if (status === 200) {
        setList({ listName: 'shakesList', list });
      }

      setLoading(false);
    })();
  }, [setList]);

  const addCartData = (cartData, cartIndex) => {
    addToCart({ cartData, cartIndex });
    history.push('/customization');
  };

  return (
    <div className="shakes-container">
      {loading ? (
        <PageLoader />
      ) : (
        shakesList.map((shake, index) => (
          <ProductCard
            key={index}
            indexValue={cart.length}
            cardImage={ShakesCardImage}
            title={shake.title}
            description={shake.description}
            data={shake}
            addHandler={addCartData}
          ></ProductCard>
        ))
      )}
    </div>
  );
};
