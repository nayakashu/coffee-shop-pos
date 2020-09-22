import React, { useEffect, useState } from 'react';
import ShakesCardImage from '../../assets/images/shakes-card.jpg';
import PageLoader from '../../components/common/PageLoader/PageLoader';
import { ProductCard } from '../../components/common/ProductCard/ProductCard';
import { getListing } from '../../services/get-listing';
import useGlobal from '../../store/store';
import './ShakesList.scss';

export const ShakesList = () => {
  const [loading, setLoading] = useState(true);
  const [storeState, storeActions] = useGlobal();

  const { shakesList } = storeState;
  const { setList } = storeActions;

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

  return (
    <>
      {loading && <PageLoader />}
      <div className="shakes-container">
        {shakesList.map((shake, index) => (
          <ProductCard
            key={index}
            cardImage={ShakesCardImage}
            title={shake.title}
            description={shake.description}
          ></ProductCard>
        ))}
      </div>
    </>
  );
};
