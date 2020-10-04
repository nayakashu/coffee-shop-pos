import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    cursor: 'pointer',
    width: '32%',
    marginTop: '12px',
    marginBottom: theme.spacing(2),
    justifyContent: 'space-between',
    borderRadius: 0,
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
    height: 220,
  },
  addBtnContainer: {
    width: '100%',
    display: 'flex',
  },
  addBtn: {
    width: '100%',
    height: '50px',
    borderRadius: 0,
    fontSize: '1.2rem',
    backgroundColor: '#05643C',
    color: 'white',
    padding: theme.spacing(1),
    '&:hover': {
      backgroundColor: '#ffcb5b',
      color: '#40290F',
      borderColor: 'transparent',
    },
  },
}));
