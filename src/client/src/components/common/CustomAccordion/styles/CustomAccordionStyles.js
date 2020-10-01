import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    width: '100%',
    marginBottom: theme.spacing(1),
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  detailsWrapper: {
    width: '100%',
    backgroundColor: '#F5F5F5',
  },
  detailsHeader: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  extraItemWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: theme.spacing(1),
  },
  detailsRoot: {
    paddingTop: 0,
  },
}));
