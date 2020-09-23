import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  dialogPaper: {
    width: '50%',
    [theme.breakpoints.down('md')]: {
      width: '75%',
    },
    '@media (max-width:768px)': {
      width: '100%',
    },
  },
}));
