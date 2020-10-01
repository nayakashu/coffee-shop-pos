import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
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
  },
}));
