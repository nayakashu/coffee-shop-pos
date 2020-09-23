import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    cursor: 'pointer',
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
  title: {
    fontSize: '1.5rem',
    '@media (max-width:1000px)': {
      fontSize: '1rem',
    },
  },
  media: {
    width: '100%',
    height: 180,
  },
  addBtnContainer: {
    padding: theme.spacing(1),
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  addBtn: {
    padding: theme.spacing(1),
    width: '40%',
  },
}));
