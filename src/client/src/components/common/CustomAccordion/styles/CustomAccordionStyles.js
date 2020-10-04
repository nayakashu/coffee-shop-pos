import { grey } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  cartItemAccordion: {
    borderRadius: 0,
    boxShadow: 'none',
    backgroundColor: 'transparent',
  },
  root: {
    width: '100%',
    marginBottom: theme.spacing(1),
  },
  detailsWrapper: {
    width: '100%',
  },
  detailsHeader: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  detailsHeaderBorderBottom: {
    borderBottom: `1px solid ${grey[400]}`,
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
