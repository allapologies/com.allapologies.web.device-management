import { dismiss, useFlowController } from './FlowController.tsx';
import { useManageDevices } from '../service/useManageDevices.ts';
import { DeviceForm, FormValues } from './DeviceForm.tsx';
import { dtoToFormValues, formValuesToDTO } from './mappers.ts';
import { Dialog } from './Dialog.tsx';
import { Button } from '@mui/material';
import { Save } from '@mui/icons-material';
import { useDevices } from '../service/useDevices.ts';
import { DeviceDTO } from '../service/dto/DeviceDTO.ts';

export const EditDeviceFlow = () => {
  const [{ selectedDeviceId }, dispatch] = useFlowController();
  const { devices } = useDevices();
  const { updateDevice } = useManageDevices();

  if (!selectedDeviceId) {
    throw new Error('Selected device id not found');
  }

  const selectedDevice = devices.find((device) => device.id === selectedDeviceId);

  if (!selectedDevice) {
    throw new Error('Device not found');
  }

  const initialValues: FormValues = dtoToFormValues(selectedDevice);

  const onSubmitForm = async (values: FormValues) => {
    try {
      const dto: DeviceDTO = {
        ...formValuesToDTO(values),
        id: selectedDevice.id,
      };
      await updateDevice(dto);
      dispatch(dismiss());
    } catch (error) {
      console.log('handle error');
    }
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
              <Button
                onClick={() => dispatch(dismiss())}
              >
                dismiss
              </Button>
              <Button
                type="submit"
                variant="contained"
                startIcon={<Save />}
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
