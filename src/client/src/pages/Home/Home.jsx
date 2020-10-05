import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import './Home.scss';
import homeStyles from './styles/HomeStyles';

export const Home = ({ history }) => {
  const location = useLocation();
  const {
    image,
    focusVisible,
    imageSrc,
    imageBackdrop,
    imageButton,
    imageTitle,
    imageMarked,
  } = homeStyles();

  useEffect(() => {
    function disableBackButton() {
      history.push(location.pathname);
    }
    disableBackButton();
    window.addEventListener('popstate', disableBackButton);

    return () => window.removeEventListener('popstate', disableBackButton);
  }, [history, location.pathname]);

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
            backgroundImage: `url('https://res.cloudinary.com/nayakashu/image/upload/v1601896427/coffee-shop-pos/dripped-coffees/decaf-pike-place-roast_erm9bp.jpg')`,
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
            backgroundImage: `url('https://res.cloudinary.com/nayakashu/image/upload/v1601896440/coffee-shop-pos/lattes/caffee-latte_ymnwz6.jpg')`,
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
            backgroundImage: `url('https://res.cloudinary.com/nayakashu/image/upload/v1601896455/coffee-shop-pos/smoothies/java-chip_ziva0k.jpg')`,
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
