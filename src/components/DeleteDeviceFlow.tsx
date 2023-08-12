import { dismiss, useFlowController } from './FlowController.tsx';
import { useManageDevices } from '../service/useManageDevices.ts';

import { Dialog } from './Dialog.tsx';
import { Button, DialogActions, DialogContent, DialogContentText } from '@mui/material';
import { Delete } from '@mui/icons-material';
import { LineError } from './LineError.tsx';

export const DeleteDeviceFlow = () => {
  const [{ selectedDeviceId }, dispatch] = useFlowController();
  const { deleteDevice: { mutateAsync, error, isLoading } } = useManageDevices();

  if (!selectedDeviceId) {
    throw new Error('Selected device id not found');
  }

  const onDeleteConfirm = async () => {
    await mutateAsync(selectedDeviceId);
    dispatch(dismiss());
  };

  return (
    <Dialog
      title="Delete device"
      content={
        <>
          <DialogContent>
            <DialogContentText>
              Delete device?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <LineError error={error ? error.toString() : ''} />
            <Button onClick={() => dispatch(dismiss())}>
              dismiss
            </Button>
            <Button
              type="button"
              variant="contained"
              startIcon={<Delete />}
              onClick={onDeleteConfirm}
              disabled={isLoading}
            >
              delete
            </Button>
          </DialogActions>
        </>
      }
    />
  )
};
