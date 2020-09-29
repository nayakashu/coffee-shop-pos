import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '32%',
    marginBottom: theme.spacing(2),
    justifyContent: 'space-between',
    [theme.breakpoints.down('md')]: {
      width: '48%',
    },
    '@media (max-width:1000px)': {
      width: '100%',
    },
    '@media (max-width:840px)': {
      width: '48%',
    },
    '@media (max-width:550px)': {
      width: '100%',
    },
  },
  media: {
    width: '100%',
    height: 180,
  },
}));
