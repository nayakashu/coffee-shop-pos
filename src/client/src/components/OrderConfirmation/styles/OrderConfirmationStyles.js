import { green, grey } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 0,
    transition: 'fadein 0.3s',
  },
  orderConfirmationSummary: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(2),
  },
  orderConfirmationIcon: {
    fontSize: '5rem',
    color: green[500],
  },
  fadeInDown: {
    animation: `$fadeInDown`,
    animationFillMode: 'both',
    animationDuration: '0.5s',
  },
  '@keyframes fadeInDown': {
    '0%': {
      opacity: 0,
      transform: 'translateY(-50px)',
    },
    '50%': {
      transform: 'scale(1.5)',
    },
    '100%': {
      opacity: 1,
      transform: 'translateY(0) scale(1)',
    },
  },
  orderConfirmationTitle: {
    marginBottom: theme.spacing(1),
  },
  orderConfirmationText: {
    color: grey[600],
    marginBottom: theme.spacing(6),
  },
  button: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: '100%',
    height: 50,
    borderRadius: 0,
    color: 'white',
    fontSize: '1.3rem',
    backgroundColor: '#05643C',
    '&:hover': {
      backgroundColor: green[900],
    },
    [theme.breakpoints.up('sm')]: {
      position: 'static',
    },
  },
  homeIcon: {
    transform: 'scale(1.75)',
  },
}));
