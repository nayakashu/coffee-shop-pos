import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import orderDetailsStyles from './styles/OrderDetailsStyles';

export const OrderDetails = ({
  cardImage,
  title,
  productName,
  price,
  addOns,
}) => {
  const {
    root,
    details,
    product,
    media,
    productDetails,
  } = orderDetailsStyles();

  return (
    <Card className={root}>
      <CardMedia className={media} image={cardImage} title={title} />
      <div className={details}>
        <CardContent className={product}>
          <Typography component="h4" variant="h4">
            {productName}
          </Typography>
        </CardContent>
        <div className={productDetails}>
          <Typography component="h6" variant="h6">
            {`CDN$ ${price}`}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {addOns.length ? `Add-Ons: ${addOns.join(', ')}` : null}
          </Typography>
        </div>
      </div>
    </Card>
  );
};
