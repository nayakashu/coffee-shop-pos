import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import React from 'react';
import modalStyles from './styles/ModalStyles';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const Modal = ({
  modalOpen,
  handleModalClose,
  dialogTitle,
  dialogContent,
}) => {
  const { dialogPaper } = modalStyles();

  return (
    <Dialog
      classes={{ paper: dialogPaper }}
      open={modalOpen}
      TransitionComponent={Transition}
      keepMounted
      onClose={() => handleModalClose()}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle id="alert-dialog-slide-title">{dialogTitle()}</DialogTitle>
      <DialogContent>{dialogContent()}</DialogContent>
      <DialogActions>
        <Button onClick={() => handleModalClose('add')} color="primary">
          Add to Cart
        </Button>
      </DialogActions>
    </Dialog>
  );
};
