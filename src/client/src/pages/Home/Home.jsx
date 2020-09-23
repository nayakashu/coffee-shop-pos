import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import CoffeeCardImage from '../../assets/images/coffee-card.jpg';
import ShakesCardImage from '../../assets/images/shakes-card.jpg';
import './Home.scss';
import homeStyles from './styles/HomeStyles';

export const Home = ({ history }) => {
  const {
    image,
    focusVisible,
    imageSrc,
    imageBackdrop,
    imageButton,
    imageTitle,
    imageMarked,
  } = homeStyles();

  const handleCoffeeCardClick = () => {
    history.push('/coffee');
  };

  const handleShakeCardClick = () => {
    history.push('/shakes');
  };
  return (
    <div className="home-container">
      <ButtonBase
        focusRipple
        key={'Coffee'}
        className={image}
        focusVisibleClassName={focusVisible}
        onClick={handleCoffeeCardClick}
      >
        <span
          className={imageSrc}
          style={{
            backgroundImage: `url(${CoffeeCardImage})`,
          }}
        />
        <span className={imageBackdrop} />
        <span className={imageButton}>
          <Typography
            component="span"
            variant="subtitle1"
            color="inherit"
            className={imageTitle}
          >
            Coffee
            <span className={imageMarked} />
          </Typography>
        </span>
      </ButtonBase>
      <ButtonBase
        focusRipple
        key={'Shake'}
        className={image}
        focusVisibleClassName={focusVisible}
        onClick={handleShakeCardClick}
      >
        <span
          className={imageSrc}
          style={{
            backgroundImage: `url(${ShakesCardImage})`,
          }}
        />
        <span className={imageBackdrop} />
        <span className={imageButton}>
          <Typography
            component="span"
            variant="subtitle1"
            color="inherit"
            className={imageTitle}
          >
            Shakes
            <span className={imageMarked} />
          </Typography>
        </span>
      </ButtonBase>
    </div>
  );
};
