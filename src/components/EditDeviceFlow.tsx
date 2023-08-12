import { dismiss, useFlowController } from './FlowController.tsx';
import { useManageDevices } from '../service/useManageDevices.ts';
import { DeviceForm, FormValues } from './DeviceForm.tsx';
import { dtoToFormValues, formValuesToDTO } from './mappers.ts';
import { Dialog } from './Dialog.tsx';
import { Button } from '@mui/material';
import { Save } from '@mui/icons-material';
import { useDevices } from '../service/useDevices.ts';
import { DeviceDTO } from '../service/dto/DeviceDTO.ts';
import { LineError } from './LineError.tsx';

export const EditDeviceFlow = () => {
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
  )
};
