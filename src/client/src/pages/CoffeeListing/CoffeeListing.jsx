import React, { useEffect, useState } from 'react';
import CoffeeCardImage from '../../assets/images/coffee-card.jpg';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import { getListing } from '../../services/get-listing';
import './coffee-listing.css';

export const CoffeeListing = () => {
  const [coffeeListing, setCoffeeListing] = useState([]);

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
        setCoffeeListing(list);
      }
    })();
  }, []);

  return (
    <div className="coffee-container">
      {coffeeListing.map((coffee, index) => (
        <ProductCard
          key={index}
          cardImage={CoffeeCardImage}
          title={coffee.title}
          description={coffee.description}
        ></ProductCard>
      ))}
    </div>
  );
};
