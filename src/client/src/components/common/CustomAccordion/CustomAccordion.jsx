import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React, { useState } from 'react';
import customAccordionStyles from './styles/CustomAccordionStyles';

export const CustomAccordion = ({ cartIndex, cartItem, deleteHandler }) => {
  const {
    root,
    heading,
    detailsWrapper,
    detailsHeader,
    extraItemWrapper,
  } = customAccordionStyles();
  const [expanded, setExpanded] = useState(false);

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
        <AccordionDetails>
          <div className={detailsWrapper}>
            <div className={detailsHeader}>
              <p style={{ marginLeft: '2%' }}>Delete item</p>
              <IconButton
                aria-label="cart-delete"
                onClick={(cartItem, cartIndex) =>
                  deleteHandler(cartItem, cartIndex)
                }
              >
                <DeleteForeverIcon />
              </IconButton>
            </div>
            {cartItem?.extras?.map((extraItem, index) => (
              <div key={index} className={extraItemWrapper}>
                <Typography
                  className={heading}
                >{`${extraItem.name}`}</Typography>
                <Typography
                  className={heading}
                >{`CAD ${extraItem.price}`}</Typography>
              </div>
            ))}
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
