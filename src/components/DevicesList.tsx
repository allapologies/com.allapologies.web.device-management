import { DevicesTable } from './DevicesTable.tsx';
import { Button, Typography } from '@mui/material';
import { Add } from '@mui/icons-material';

import { createDevice, useFlowControllerDispatch } from './FlowController.tsx';

export const DevicesList = () => {
  const dispatch = useFlowControllerDispatch();
  return (
    <div>
      <Typography>Devices list</Typography>
      <DevicesTable />
      <Button
        startIcon={<Add />}
        onClick={() => dispatch(createDevice())}
      >
        add device
      </Button>
    </div>
  );
};
