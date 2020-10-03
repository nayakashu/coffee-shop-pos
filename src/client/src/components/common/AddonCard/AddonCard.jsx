import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import React from 'react';
import './AddonCard.scss';
import AddonCardStyles from './styles/AddonCardStyles';

const AddonCard = (props) => {
  const { root, media, cardActions } = AddonCardStyles();
  return (
    <Card className={root}>
      <CardMedia
        className={media}
        image={props.cardImage}
        title="Contemplative Reptile"
      />
      <CardContent className="addOn-card-content">
        <h2>{`${props.name} - $ ${props.price}`}</h2>
      </CardContent>
      <CardActions className={cardActions}>
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
