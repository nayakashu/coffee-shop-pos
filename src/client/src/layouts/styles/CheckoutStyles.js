import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    backgroundColor: '#05643C',
    zIndex: theme.zIndex.drawer + 1,
  },
  toolbar: theme.mixins.toolbar,
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  content: {
    flexGrow: 1,
    marginTop: theme.spacing(2),
    padding: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(1),
      padding: theme.spacing(6),
    },
  },
  title: {
    flexGrow: 1,
  },
}));
