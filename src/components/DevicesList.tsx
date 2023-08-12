import { DevicesTable } from './DevicesTable.tsx';
import { Button, Paper } from '@mui/material';
import { Add } from '@mui/icons-material';

import { createDevice, useFlowControllerDispatch } from './flows';

export const DevicesList = () => {
  const dispatch = useFlowControllerDispatch();
  return (
    <div>
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <DevicesTable />
      </Paper>
      <Button
        startIcon={<Add />}
        onClick={() => dispatch(createDevice())}
        variant="contained"
        sx={{
          mt: 1,
        }}
      >
        add device
      </Button>
    </div>
  );
};
