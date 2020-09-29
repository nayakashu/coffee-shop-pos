import React from 'react';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import AddonCardStyles from './styles/AddonCardStyles';
import './AddonCard.scss';

const AddonCard = (props) => {
  const { root, media } = AddonCardStyles();
  return (
    <Card className={root}>
      <CardMedia
        className={media}
        image={props.cardImage}
        title="Contemplative Reptile"
      />
      <CardContent className="addOn-card-content">
        <h2>{`${props.name} - CAD ${props.price}`}</h2>
      </CardContent>
      <CardActions>
        <div className="inputGroup">
          <input
            id={props.name}
            name={props.name}
            type="checkbox"
            checked={props.checked}
            onChange={props.onChange}
          />
          <label htmlFor={props.name}>
            {props.checked ? 'SELECTED' : 'SELECT'}
          </label>
        </div>
      </CardActions>
    </Card>
  );
};

export default AddonCard;
