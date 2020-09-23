import Badge from '@material-ui/core/Badge';
import { makeStyles, withStyles } from '@material-ui/core/styles';

const drawerWidth = 240;
const rightDrawerWidth = 350;

export const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))(Badge);

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
    '@media (max-width:840px)': {
      display: 'none',
    },
  },
  listItemHover: {
    '&:hover': {
      backgroundColor: '#F5F5F5',
    },
  },
  rightDrawer: {
    [theme.breakpoints.up('sm')]: {
      width: rightDrawerWidth,
      flexShrink: 0,
    },
    '@media (max-width:840px)': {
      display: 'none',
    },
  },
  rightDrawerPaper: {
    width: rightDrawerWidth,
  },
  appBar: {
    backgroundColor: '#05643C',
    zIndex: theme.zIndex.drawer + 1,
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    '@media (min-width:840px)': {
      display: 'none',
    },
  },
  content: {
    width: '100%',
    padding: theme.spacing(3),
  },
  closeMenuButton: {
    marginRight: 'auto',
    marginLeft: 0,
  },
  title: {
    flexGrow: 1,
  },
  arrowForwardIcon: {
    '&:hover': {
      backgroundColor: 'inherit !important',
    },
  },
}));
