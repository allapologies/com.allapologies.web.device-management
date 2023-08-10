import { dismiss, useFlowController } from './FlowController.tsx';
import { useManageDevices } from '../service/useManageDevices.ts';

import { Dialog } from './Dialog.tsx';
import { Button, DialogContentText } from '@mui/material';
import { Delete } from '@mui/icons-material';

export const DeleteDeviceFlow = () => {
  const [{ selectedDeviceId }, dispatch] = useFlowController();
  const { deleteDevice } = useManageDevices();

  if (!selectedDeviceId) {
    throw new Error('Selected device id not found');
  }

  const onDeleteConfirm = async () => {
    try {
      await deleteDevice(selectedDeviceId);
      dispatch(dismiss());
    } catch (error) {
      console.log('handle error');
    }
  };

  return (
    <Dialog
      title="Delete device"
      content={<DialogContentText>Delete device?</DialogContentText>}
      actions={(
        <>
          <Button
            onClick={() => dispatch(dismiss())}
          >
            dismiss
          </Button>
          <Button
            type="button"
            variant="contained"
            startIcon={<Delete />}
            onClick={onDeleteConfirm}
          >
            delete
          </Button>
        </>
      )}
    />
  )
};
