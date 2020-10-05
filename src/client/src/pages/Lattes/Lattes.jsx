import React, { useEffect, useState } from 'react';
import PageLoader from '../../components/common/PageLoader/PageLoader';
import { ProductCard } from '../../components/common/ProductCard/ProductCard';
import { getListing } from '../../services/get-listing';
import useGlobal from '../../store/store';
import './Lattes.scss';

export const Lattes = ({ history }) => {
  const [loading, setLoading] = useState(true);
  const [storeState, storeActions] = useGlobal();

  const { cart, lattes } = storeState;
  const { setList, addToCart } = storeActions;

  useEffect(() => {
    (async () => {
      const response = await getListing('lattes');

      if (!response) {
        return;
      }

      const {
        data: { list },
        status,
      } = response;

      if (status === 200) {
        setList({ listName: 'lattes', list });
      }

      setLoading(false);
    })();
  }, [setList]);

  const addCartData = (cartData, cartIndex) => {
    addToCart({ cartData, cartIndex });
    history.push('/addons/latte');
  };

  return (
    <div className="lattes-container fadeInUp">
      {loading ? (
        <PageLoader />
      ) : (
        lattes.map((latte, index) => (
          <ProductCard
            key={index}
            indexValue={cart.length}
            cardImage={latte.imageUrl}
            title={latte.title}
            description={latte.description}
            data={latte}
            addHandler={addCartData}
          ></ProductCard>
        ))
      )}
    </div>
  );
};
