import FormControlLabel from '@material-ui/core/FormControlLabel';
import React, { useEffect, useState } from 'react';
import PageLoader from '../../components/common/PageLoader/PageLoader';
import { getAddOns } from '../../services/get-addons';
import useGlobal from '../../store/store';
import { GreenCheckbox } from './styles/AddOnsStyles';
import './AddOns.scss';

export const AddOns = () => {
  const [loading, setLoading] = useState(true);
  const [AddOns, setAddOns] = useState([]);
  const [checkedState, setcheckedState] = useState({});

  const [storeState, storeActions] = useGlobal();
  const { activeItemCartIndex } = storeState;
  const { addExtras, removeExtras } = storeActions;

  useEffect(() => {
    (async () => {
      let checkedState = {};

      const response = await getAddOns('toppings');

      if (!response) {
        return;
      }

      const {
        data: { list },
        status,
      } = response;

      if (status === 200) {
        setAddOns(list);
      }

      list.forEach((addOn) => {
        checkedState = { ...checkedState, [addOn.title]: false };
      });

      setcheckedState(checkedState);
      setLoading(false);
    })();
  }, []);

  const handleChange = ({ target: { name, checked } }, price, addOnId) => {
    let payload = {
      cartIndex: activeItemCartIndex,
      addOns: {
        id: addOnId,
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
    <div className="addon-container">
      {loading && <PageLoader />}
      {Object.values(checkedState).length > 0 &&
        AddOns.map((addon, index) => (
          <FormControlLabel
            key={index}
            control={
              <GreenCheckbox
                checked={checkedState[addon.title]}
                onChange={(e) => handleChange(e, addon.price, addon.id)}
                name={addon.title}
              />
            }
            label={`${addon.title} - CAD ${addon.price}`}
          />
        ))}
    </div>
  );
};
