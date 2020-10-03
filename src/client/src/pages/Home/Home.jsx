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

  const handleDrippedCoffeeCardClick = () => {
    history.push('/dripped-coffees');
  };

  const handleLattesCardClick = () => {
    history.push('/lattes');
  };

  const handleSmoothiesCardClick = () => {
    history.push('/smoothies');
  };
  return (
    <div className="home-container">
      <ButtonBase
        focusRipple
        key={'Dripped Coffees'}
        className={image}
        focusVisibleClassName={focusVisible}
        onClick={handleDrippedCoffeeCardClick}
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
            Dripped Coffees
            <span className={imageMarked} />
          </Typography>
        </span>
      </ButtonBase>
      <ButtonBase
        focusRipple
        key={'Lattes'}
        className={image}
        focusVisibleClassName={focusVisible}
        onClick={handleLattesCardClick}
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
            Lattes
            <span className={imageMarked} />
          </Typography>
        </span>
      </ButtonBase>
      <ButtonBase
        focusRipple
        key={'Smoothies'}
        className={image}
        focusVisibleClassName={focusVisible}
        onClick={handleSmoothiesCardClick}
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
            Smoothies
            <span className={imageMarked} />
          </Typography>
        </span>
      </ButtonBase>
    </div>
  );
};
