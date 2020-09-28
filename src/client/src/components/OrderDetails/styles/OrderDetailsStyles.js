import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
    marginBottom: theme.spacing(3),
    flexDirection: 'column',
    [theme.breakpoints.up('sm')]: {
      marginBottom: theme.spacing(4),
      flexDirection: 'row',
    },
  },
  media: {
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '25%',
    },
    height: 250,
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  product: {
    flex: '1 0 auto',
  },
  productDetails: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(2),
  },
}));