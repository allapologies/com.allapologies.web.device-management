import { IconButton } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';

import { deleteDevice, editDevice, useFlowControllerDispatch } from './flows';

type Props = {
  deviceId: string;
};

export function RowActions(props: Props) {
  const dispatch = useFlowControllerDispatch();
  const { deviceId } = props;
  return (
    <div>
      <IconButton
        title="edit"
        onClick={() => dispatch(editDevice(deviceId))}
      >
        <Edit />
      </IconButton>
      <IconButton
        title="delete"
        onClick={() => dispatch(deleteDevice(deviceId))}
      >
        <Delete />
      </IconButton>
    </div>
  );
}
