import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CoffeeCardImage from '../../assets/images/coffee-card.jpg';
import AddonCard from '../../components/common/AddonCard/AddonCard';
import PageLoader from '../../components/common/PageLoader/PageLoader';
import { getAddons } from '../../services/get-addons';
import useGlobal from '../../store/store';
import './Addons.scss';

export const Addons = () => {
  let { type } = useParams();
  const [loading, setLoading] = useState(true);
  const [addons, setAddons] = useState([]);
  const [checkedState, setcheckedState] = useState({});

  const [storeState, storeActions] = useGlobal();
  const { cart, activeItemCartIndex } = storeState;
  const { addExtras, removeExtras } = storeActions;

  useEffect(() => {
    (async () => {
      let checkedState = {};

      const response = await getAddons('addons', { type });

      if (!response) {
        return;
      }

      const {
        data: { list },
        status,
      } = response;

      if (status === 200) {
        setAddons(list);
      }

      list.forEach((addOn) => {
        checkedState = {
          ...checkedState,
          [addOn.title]: false,
        };
      });

      cart[activeItemCartIndex] &&
        cart[activeItemCartIndex].addons &&
        cart[activeItemCartIndex].addons.forEach((addOn) => {
          checkedState[addOn.name] = true;
        });

      setcheckedState(checkedState);
      setLoading(false);
    })();
  }, [cart, activeItemCartIndex, type]);

  const handleChange = ({ target: { name, checked } }, price, addOnId) => {
    let payload = {
      cartIndex: activeItemCartIndex,
      addons: {
        id: addOnId,
        name: name,
        price,
      },
      type,
    };

    if (checked) {
      addExtras(payload);
    } else {
      removeExtras(payload);
    }

    if (type === 'drippedCoffee') {
      let newCheckedState = { ...checkedState };
      Object.keys(newCheckedState).forEach((value) => {
        if (value !== name) newCheckedState[value] = false;
      });
      setcheckedState({ ...newCheckedState, [name]: checked });
    } else {
      setcheckedState({
        ...checkedState,
        [name]: checked,
      });
    }
  };

  return (
    <div className="addons-container">
      {loading && <PageLoader />}
      {Object.values(checkedState).length > 0 &&
        addons.map((addon, index) => (
          <AddonCard
            key={index}
            cardImage={CoffeeCardImage}
            checked={checkedState[addon.title]}
            price={addon.price}
            onChange={(e) => handleChange(e, addon.price, addon.id)}
            name={addon.title}
          />
        ))}
    </div>
  );
};
