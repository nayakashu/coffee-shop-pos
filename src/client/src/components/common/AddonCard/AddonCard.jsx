import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import React from 'react';
import './AddonCard.scss';
import AddonCardStyles from './styles/AddonCardStyles';

const AddonCard = (props) => {
  const {
    root,
    media,
    cardActions,
    disabled,
    title: titleClass,
  } = AddonCardStyles();
  return (
    <Card className={`${root} ${props.disabled && disabled}`}>
      <CardMedia
        className={media}
        image={props.cardImage}
        title="Contemplative Reptile"
      />
      <CardContent className="addOn-card-content">
        <Typography
          gutterBottom
          variant="h5"
          component="h2"
          className={titleClass}
        >
          {props.name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {`$ ${props.price}`}
        </Typography>
      </CardContent>
      <CardActions className={cardActions}>
        <div className={`inputGroup ${props.disabled && disabled}`}>
          <input
            id={props.name}
            name={props.name}
            type="checkbox"
            checked={props.checked || false}
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
