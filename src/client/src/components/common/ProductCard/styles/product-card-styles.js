import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    cursor: 'pointer',
    width: '32%',
    marginBottom: theme.spacing(2),
    height: 350,
    [theme.breakpoints.down('md')]: {
      width: '48%',
    },
    '@media (max-width:768px)': {
      width: '100%',
    },
  },
  media: {
    width: '100%',
    height: 180,
  },
  addBtnContainer: {
    marginTop: theme.spacing(2),
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
