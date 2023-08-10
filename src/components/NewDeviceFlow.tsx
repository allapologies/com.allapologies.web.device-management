import { Dialog } from './Dialog.tsx';
import { DeviceForm, FormValues } from './DeviceForm.tsx';
import { Button } from '@mui/material';
import { dismiss, useFlowControllerDispatch } from './FlowController.tsx';
import { Save } from '@mui/icons-material';
import { useManageDevices } from '../service/useManageDevices.ts';
import { formValuesToDTO } from './mappers.ts';

export const NewDeviceFlow = () => {
  const dispatch = useFlowControllerDispatch();
  const { createDevice } = useManageDevices();

  const onCreateDevice = async (values: FormValues) => {
      try {
        await createDevice(formValuesToDTO(values));
        dispatch(dismiss());
      } catch (error) {
        console.log('handle error');
      }
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
