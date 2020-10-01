import { green } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  paymentSummaryTitle: {
    alignSelf: 'center',
    margin: theme.spacing(1),
  },
  paymentSummary: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    padding: theme.spacing(2),
  },
  paymentSummaryRow: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '1.1rem',
  },
  paymentTotalRow: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(7),
  },
  emphasized: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
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
    '@media (min-width: 840px)': {
      position: 'static',
    },
  },
}));
