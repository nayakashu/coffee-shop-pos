import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React, { useState } from 'react';
import customAccordionStyles from './styles/CustomAccordionStyles';

export const CustomAccordion = ({ cartIndex, cartValue, deleteHandler }) => {
  const {
    root,
    heading,
    detailsWrapper,
    detailsHeader,
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
            cartValue.title
          }`}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className={detailsWrapper}>
            <div className={detailsHeader}>
              <p style={{ marginLeft: '2%' }}>Delete item</p>
              <IconButton
                aria-label="cart-delete"
                onClick={() => deleteHandler(cartIndex)}
              >
                <DeleteForeverIcon />
              </IconButton>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
