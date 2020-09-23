import { green } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  button: {
    width: '100%',
    height: 50,
    color: 'white',
    backgroundColor: green[700],
    '&:hover': {
      backgroundColor: green[900],
    },
  },
}));
