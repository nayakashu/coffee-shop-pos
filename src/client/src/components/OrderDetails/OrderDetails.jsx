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
  addons,
}) => {
  const {
    root,
    details,
    product,
    media,
    productDetails,
    productCost,
  } = orderDetailsStyles();

  return (
    <Card className={root}>
      <CardMedia className={media} image={cardImage} title={title} />
      <div className={details}>
        <CardContent className={product}>
          <Typography variant="h5">{productName}</Typography>
        </CardContent>
        <div className={productDetails}>
          <Typography variant="body1" className={productCost}>{`$ ${Number(
            price
          ).toFixed(2)}`}</Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {addons.length ? `Add-Ons: ${addons.join(', ')}` : null}
          </Typography>
        </div>
      </div>
    </Card>
  );
};
