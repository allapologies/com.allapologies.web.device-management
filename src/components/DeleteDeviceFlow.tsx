import { Button, DialogActions } from '@mui/material';
import { Delete } from '@mui/icons-material';

import { dismiss, useFlowController } from './flows';
import { useManageDevices } from '../service/useManageDevices';
import { Dialog } from './common/Dialog';
import { LineError } from './common/LineError';

export function DeleteDeviceFlow() {
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
      title="Delete device?"
      content={(
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
      )}
    />
  );
}
