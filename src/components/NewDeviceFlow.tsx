import { Button } from '@mui/material';
import { Save } from '@mui/icons-material';
import { Dialog } from './Dialog';
import { DeviceForm, FormValues } from './DeviceForm';
import { dismiss, useFlowControllerDispatch } from './flows';
import { useManageDevices } from '../service/useManageDevices';
import { formValuesToDTO } from './mappers';
import { LineError } from './LineError';

export function NewDeviceFlow() {
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
              <LineError error={error ? error.toString() : ''} />
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
    />
  );
}
