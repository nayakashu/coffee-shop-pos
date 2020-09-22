import React, { useEffect, useState } from 'react';
import ShakesCardImage from '../../assets/images/shakes-card.jpg';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import { getListing } from '../../services/get-listing';
import './shakes-listing.css';

export const ShakesListing = () => {
  const [shakesListing, setShakesListing] = useState([]);

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
        setShakesListing(list);
      }
    })();
  }, []);

  return (
    <div className="shakes-container">
      {shakesListing.map((shake, index) => (
        <ProductCard
          key={index}
          cardImage={ShakesCardImage}
          title={shake.title}
          description={shake.description}
        ></ProductCard>
      ))}
    </div>
  );
};
