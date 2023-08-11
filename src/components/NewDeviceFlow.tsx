import { Dialog } from './Dialog.tsx';
import { DeviceForm, FormValues } from './DeviceForm.tsx';
import { Button } from '@mui/material';
import { dismiss, useFlowControllerDispatch } from './FlowController.tsx';
import { Save } from '@mui/icons-material';
import { useManageDevices } from '../service/useManageDevices.ts';
import { formValuesToDTO } from './mappers.ts';

export const NewDeviceFlow = () => {
  const dispatch = useFlowControllerDispatch();
  const { createDevice: { mutateAsync, error, isLoading } } = useManageDevices();

  const onCreateDevice = async (values: FormValues) => {
      await mutateAsync(formValuesToDTO(values));
      dispatch(dismiss());
  };

  return (
    <Dialog
      title="Add new device"
      content={(
        <DeviceForm
          onSubmit={onCreateDevice}
          actions={(
            <>
              <Button
                onClick={() => dispatch(dismiss())}
              >
                dismiss
              </Button>
              <Button
                type="submit"
                variant="contained"
                startIcon={<Save />}
                disabled={isLoading}
              >
                save
              </Button>
            </>
          )}
        />
      )}
      actions={(
        <>
        </>
      )}
    />
  )
};
