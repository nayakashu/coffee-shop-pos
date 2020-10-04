import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import useGlobal from '../../../store/store';
import customAccordionStyles from './styles/CustomAccordionStyles';

export const CustomAccordion = ({
  cartIndex,
  cartItem,
  deleteHandler,
  customizeHandler,
}) => {
  const location = useLocation();
  const {
    root,
    heading,
    detailsWrapper,
    detailsHeader,
    extraItemWrapper,
    detailsRoot,
  } = customAccordionStyles();
  const [expanded, setExpanded] = useState(false);

  const [storeState] = useGlobal();
  const { activeItemCartIndex } = storeState;

  useEffect(() => {
    if (
      location.pathname.includes('addons') &&
      cartIndex === activeItemCartIndex
    )
      setExpanded(true);
  }, [activeItemCartIndex, cartIndex, location.pathname]);

  return (
    <div className={root}>
      <Accordion expanded={expanded}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-label="Expand"
          aria-controls="additional-actions1-content"
          id="additional-actions1-header"
          onClick={() => setExpanded(!expanded)}
        >
          <Typography className={heading}>{`${cartIndex + 1}.  ${' '}${
            cartItem.title
          }`}</Typography>
        </AccordionSummary>
        <AccordionDetails className={detailsRoot}>
          <div className={detailsWrapper}>
            <div className={detailsHeader}>
              <IconButton
                aria-label="cart-customise"
                onClick={() => customizeHandler(cartItem, cartIndex)}
              >
                <EditIcon />
              </IconButton>
              <IconButton
                aria-label="cart-delete"
                onClick={() => deleteHandler(cartItem, cartIndex)}
              >
                <DeleteForeverIcon />
              </IconButton>
            </div>
            {cartItem?.addons?.map((extraItem, index) => (
              <div key={index} className={extraItemWrapper}>
                <Typography
                  className={heading}
                >{`${extraItem.name}`}</Typography>
                <Typography
                  className={heading}
                >{`$ ${extraItem.price}`}</Typography>
              </div>
            ))}
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
