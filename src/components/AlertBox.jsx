import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import ErrorIcon from '@mui/icons-material/Error';
import { useDispatch, useSelector } from 'react-redux';
import { setAlert } from '../redux/slices/alertSlice';
import { selectAlert } from '../redux/selectors';

const AlertBox = () => {
  const dispatch = useDispatch();
  const alertState = useSelector(selectAlert);
  return (
    <Dialog open={alertState}>
      <DialogTitle
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          color: 'error.main',
        }}>
        <ErrorIcon sx={{ color: 'error.main' }} />
        Failure
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          This name is already in contact list. Please try something else.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => dispatch(setAlert(false))}
          sx={{ color: 'black' }}>
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AlertBox;
