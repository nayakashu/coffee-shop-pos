import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import productCardStyles from './styles/ProductCardStyles';

export const ProductCard = ({
  cardImage,
  title,
  description,
  data,
  addHandler,
}) => {
  const {
    root,
    media,
    addBtnContainer,
    addBtn,
    title: titleClass,
  } = productCardStyles();

  return (
    <Card className={root}>
      <CardMedia className={media} image={cardImage} title="media-title" />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="h2"
          className={titleClass}
        >
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>

      <div className={addBtnContainer}>
        <Button
          className={addBtn}
          variant="outlined"
          size="small"
          color="primary"
          onClick={() => addHandler(data)}
        >
          Add
        </Button>
      </div>
    </Card>
  );
};
