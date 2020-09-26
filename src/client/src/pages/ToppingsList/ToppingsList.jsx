import FormControlLabel from '@material-ui/core/FormControlLabel';
import React, { useEffect, useState } from 'react';
import PageLoader from '../../components/common/PageLoader/PageLoader';
import { getToppings } from '../../services/get-toppings';
import useGlobal from '../../store/store';
import { GreenCheckbox } from './styles/ToppingsListStyles';
import './ToppingsList.scss';

export const ToppingsList = () => {
  const [loading, setLoading] = useState(true);
  const [toppingsList, setToppingsList] = useState([]);
  const [checkedState, setcheckedState] = useState({});

  const [storeState, storeActions] = useGlobal();
  const { activeItemCartIndex } = storeState;
  const { addExtras, removeExtras } = storeActions;

  useEffect(() => {
    (async () => {
      let checkedState = {};

      const response = await getToppings('toppings');

      if (!response) {
        return;
      }

      const {
        data: { list },
        status,
      } = response;

      if (status === 200) {
        setToppingsList(list);
      }

      list.forEach((topping) => {
        checkedState = { ...checkedState, [topping.title]: false };
      });

      setcheckedState(checkedState);
      setLoading(false);
    })();
  }, []);

  const handleChange = ({ target: { name, checked } }, price, toppingId) => {
    let payload = {
      cartIndex: activeItemCartIndex,
      extras: {
        id: toppingId,
        name: name,
        price,
      },
    };

    if (checked) {
      addExtras(payload);
    } else {
      removeExtras(payload);
    }

    setcheckedState({
      ...checkedState,
      [name]: checked,
    });
  };

  return (
    <div className="topping-container">
      {loading && <PageLoader />}
      {Object.values(checkedState).length > 0 &&
        toppingsList.map((topping, index) => (
          <FormControlLabel
            key={index}
            control={
              <GreenCheckbox
                checked={checkedState[topping.title]}
                onChange={(e) => handleChange(e, topping.price, topping.id)}
                name={topping.title}
              />
            }
            label={`${topping.title} - CAD ${topping.price}`}
          />
        ))}
    </div>
  );
};
