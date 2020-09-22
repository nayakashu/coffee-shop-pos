import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import productCardStyles from './styles/product-card-styles';

export const ProductCard = ({ cardImage, title, description }) => {
  const { root, media, addBtnContainer, addBtn } = productCardStyles();

  return (
    <Card className={root}>
      <CardMedia className={media} image={cardImage} title="media-title" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
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
        >
          Add
        </Button>
      </div>
    </Card>
  );
};
