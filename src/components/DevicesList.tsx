import { DevicesTable } from './DevicesTable.tsx';
import { Button } from '@mui/material';
import { Add } from '@mui/icons-material';

import { createDevice, useFlowControllerDispatch } from './flows';

export const DevicesList = () => {
  const dispatch = useFlowControllerDispatch();
  return (
    <div>
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
