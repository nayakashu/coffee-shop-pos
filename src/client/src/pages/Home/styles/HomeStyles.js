import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  image: {
    position: 'relative',
    height: '450px',
    width: '450px',
    '@media (max-width:1550px)': {
      height: '400px',
      width: '400px',
    },
    '@media (max-width:1350px)': {
      height: '350px',
      width: '350px',
    },
    '@media (max-width:1250px)': {
      height: '300px',
      width: '300px',
    },
    '@media (max-width:1000px)': {
      height: '250px',
      width: '250px',
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    borderRadius: '50%',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: 'transparent',
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
    borderRadius: '5px',
  },
  imageTitle: {
    position: 'relative',
    fontSize: '2rem',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${
      theme.spacing(1) + 6
    }px`,
    '@media (max-width:1000px)': {
      fontSize: '1.2rem',
    },
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));
