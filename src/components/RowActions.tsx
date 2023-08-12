import { CellContext } from '@tanstack/react-table';
import { IconButton } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';

import { Device } from '../domain/Device';
import { deleteDevice, editDevice, useFlowControllerDispatch } from './flows';

export function RowActions(props: CellContext<Device, unknown>) {
  const dispatch = useFlowControllerDispatch();
  const { row: { original: { id } } } = props;
  return (
    <div>
      <IconButton
        title="edit"
        onClick={() => dispatch(editDevice(id))}
      >
        <Edit />
      </IconButton>
      <IconButton
        title="delete"
        onClick={() => dispatch(deleteDevice(id))}
      >
        <Delete />
      </IconButton>
    </div>
  );
}
