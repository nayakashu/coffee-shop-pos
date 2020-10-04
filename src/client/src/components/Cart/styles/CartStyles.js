import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  emptyCartMessage: {
    textAlign: 'center',
    padding: theme.spacing(2),
  },
  button: {
    width: '100%',
    fontSize: '1.2rem',
    height: 50,
    color: 'white',
    borderRadius: 0,
    backgroundColor: '#05643C',
    '&:hover': {
      backgroundColor: '#ffcb5b',
      color: '#40290F',
    },
    display: 'flex',
    justifyContent: 'space-between',
  },
}));
