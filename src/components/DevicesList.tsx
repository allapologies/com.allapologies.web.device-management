import { Button, Paper } from '@mui/material';
import { Add } from '@mui/icons-material';
import { DevicesTable } from './DevicesTable';

import { createDevice, useFlowControllerDispatch } from './flows';

export function DevicesList() {
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
}
