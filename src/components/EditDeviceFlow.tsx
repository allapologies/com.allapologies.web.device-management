import { Button } from '@mui/material';
import { Save } from '@mui/icons-material';
import { dismiss, useFlowController } from './flows';
import { useManageDevices } from '../service/useManageDevices';
import { DeviceForm, FormValues } from './DeviceForm';
import { dtoToFormValues, formValuesToDTO } from './mappers';
import { Dialog } from './Dialog';
import { useDevices } from '../service/useDevices';
import { DeviceDTO } from '../service/dto/DeviceDTO';
import { LineError } from './LineError';

export function EditDeviceFlow() {
  const [{ selectedDeviceId }, dispatch] = useFlowController();
  const { devices } = useDevices();
  const { updateDevice: { mutateAsync, error, isLoading } } = useManageDevices();

  if (!selectedDeviceId) {
    throw new Error('Selected device id not found');
  }

  const selectedDevice = devices.find((device) => device.id === selectedDeviceId);

  if (!selectedDevice) {
    throw new Error('Device not found');
  }

  const initialValues: FormValues = dtoToFormValues(selectedDevice);

  const onSubmitForm = async (values: FormValues) => {
    const dto: DeviceDTO = {
      ...formValuesToDTO(values),
      id: selectedDevice.id,
    };
    await mutateAsync(dto);
    dispatch(dismiss());
  };

  return (
    <Dialog
      title="Edit device"
      content={(
        <DeviceForm
          onSubmit={onSubmitForm}
          initialValues={initialValues}
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
