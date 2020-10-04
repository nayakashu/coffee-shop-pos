import Badge from '@material-ui/core/Badge';
import { makeStyles, withStyles } from '@material-ui/core/styles';

const leftDrawerWidth = 250;
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
  rightDrawer: {
    [theme.breakpoints.up('sm')]: {
      width: rightDrawerWidth,
      flexShrink: 0,
    },
    '@media (max-width:840px)': {
      display: 'none',
    },
  },
  rightTemporaryDrawerPaper: {
    [theme.breakpoints.up('sm')]: {
      width: rightDrawerWidth,
      flexShrink: 0,
    },
    '@media (min-width:840px)': {
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
  appBarLabel: {
    fontSize: '1rem',
    color: 'white',
    cursor: 'pointer',
    marginRight: '20px',
    '&:hover': {
      borderBottom: '2px solid #ffcb5b',
    },
    '@media (max-width:840px)': {
      display: 'none',
    },
  },
  appBarHomeIcon: {
    color: '#ffcb5b',
    transform: 'scale(1.3)',
    '@media (max-width:840px)': {
      display: 'none',
    },
  },
  appBarCheckoutIcon: {
    transform: 'scale(1.3)',
    color: '#ffcb5b',
  },
  menuButton: {
    '@media (min-width:840px)': {
      display: 'none',
    },
  },
  leftDrawer: {
    '@media (min-width:840px)': {
      display: 'none',
    },
  },
  leftDrawerPaper: {
    width: leftDrawerWidth,
  },
  listItemHover: {
    '&:hover': {
      backgroundColor: '#F5F5F5',
    },
  },
  activeItem: {
    backgroundColor: theme.palette.action.selected,
  },
}));
